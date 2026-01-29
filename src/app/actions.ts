'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createTicket(prevState: any, formData: FormData) {
    // const db = await getServicesDb() // No longer needed

    const brandId = parseInt(formData.get('brandId') as string)
    const categoryId = parseInt(formData.get('categoryId') as string)
    const customerName = formData.get('customerName') as string
    const customerPhone = formData.get('customerPhone') as string

    // New Address Fields
    const addressStreet = formData.get('addressStreet') as string
    const addressColony = formData.get('addressColony') as string
    const addressZip = formData.get('addressZip') as string
    const addressCity = formData.get('addressCity') as string
    const propertyType = formData.get('propertyType') as string
    const technicianId = formData.get('technicianId') as string

    const issueDescription = formData.get('issueDescription') as string

    // Triage Data (Questions)
    const triageDataRaw: Record<string, boolean> = {}
    const triageAnswers: string[] = [] // Array to store text of answered questions for context
    let priority = 'LOW'

    // Parse formData for triage questions (format: question_ID)
    const questionIds: number[] = []

    for (const [key, value] of formData.entries()) {
        if (key.startsWith('question_')) {
            const qId = parseInt(key.replace('question_', ''))
            if (!isNaN(qId) && value) {
                questionIds.push(qId)
                // We also store the text value sent from client for immediate display, 
                // though fetching from DB is safer for priority logic.
                triageAnswers.push(value as string)
            }
        }
    }

    // specific hardcoded triage for backward compatibility if any left
    for (const [key, value] of formData.entries()) {
        if (key.startsWith('triage_') && value === 'on') {
            triageDataRaw[key] = true
        }
    }

    // Verify priorities against DB
    if (questionIds.length > 0) {
        // @ts-ignore: Prisma client type generation might be lagging
        const questions = await db.triageQuestion.findMany({
            where: { id: { in: questionIds } }
        })

        // Determine max priority
        for (const q of questions) {
            // @ts-ignore
            if (q.triggerPriority === 'HIGH') priority = 'HIGH'
            // @ts-ignore
            else if (q.triggerPriority === 'MEDIUM' && priority !== 'HIGH') priority = 'MEDIUM'
        }
    } else {
        // Fallback to legacy hardcoded logic if no dynamic questions used
        if (triageDataRaw['gas_leak'] || triageDataRaw['water_leak'] || triageDataRaw['short_circuit'] || triageDataRaw['sparks']) {
            priority = 'HIGH'
        } else if (triageDataRaw['partial_failure'] || triageDataRaw['loud_noise']) {
            priority = 'MEDIUM'
        }
    }

    try {
        // Customer Logic (CRM)
        const customerIdInput = formData.get('customerId') as string
        const documentNumber = formData.get('documentNumber') as string
        const model = formData.get('model') as string
        const serialNumber = formData.get('serialNumber') as string
        // ... (rest of customer logic same as before)

        let customerIdMatch = null

        if (customerIdInput) {
            customerIdMatch = customerIdInput
        } else {
            // Try find by phone OR document
            const existingCustomer = await db.customer.findFirst({
                where: {
                    OR: [
                        { phone: customerPhone },
                        // @ts-ignore: Prisma type lagging for documentNumber
                        ...(documentNumber ? [{ documentNumber }] : [])
                    ]
                }
            })

            if (existingCustomer) {
                customerIdMatch = existingCustomer.id
            } else {
                const newCustomer = await db.customer.create({
                    data: {
                        name: customerName,
                        phone: customerPhone,
                        address: `${addressStreet}, ${addressColony}, ${addressCity}`,
                        // @ts-ignore
                        documentNumber: documentNumber || null
                    }
                })
                customerIdMatch = newCustomer.id
            }
        }

        // Sequential Number Logic
        // @ts-ignore: Prisma Client lagging
        const lastTicket = await db.ticket.findFirst({
            orderBy: { ticketNumber: 'desc' } as any,
            select: { ticketNumber: true } as any
        })
        const nextNumber = ((lastTicket as any)?.ticketNumber || 0) + 1

        const ticket = await db.ticket.create({
            data: {
                brandId,
                categoryId,
                customerName,
                customerPhone,
                addressStreet,
                addressColony,
                addressZip,
                addressCity,
                propertyType,
                issueDescription,
                priority,
                triageData: JSON.stringify({ ...triageDataRaw, answeredQuestions: triageAnswers }),
                technicianId: technicianId || null,
                customerId: customerIdMatch,
                model: model || '',
                serialNumber: serialNumber || '',
                // @ts-ignore
                ticketNumber: nextNumber
            },
            include: {
                category: true // Fetch for prefix in message
            }
        })

        // Fetch Settings for Global Config
        // @ts-ignore
        const settings = await db.companySettings.findFirst()
        const countryCode = settings?.countryCode || '34'
        const defaultPhone = settings?.phone || '000000000'

        // Incident Summary for WhatsApp
        const legacyIncidents = Object.keys(triageDataRaw).filter(k => triageDataRaw[k]).join(', ')
        const questionsSummary = triageAnswers.join(', ')
        const combinedDetails = [questionsSummary, legacyIncidents].filter(Boolean).join(' | ')

        const typeLabel = propertyType === 'RESIDENTIAL' ? 'Casa' : 'Negocio'

        // Construct WhatsApp Message
        let technicianPhone = defaultPhone

        if (technicianId) {
            const tech = await db.user.findUnique({
                where: { id: technicianId },
                select: { phone: true }
            })
            if (tech?.phone) {
                technicianPhone = tech.phone
            }
        }

        // Format Phone with Country Code if needed
        let cleanPhone = technicianPhone.replace(/\D/g, '')
        if (!cleanPhone.startsWith(countryCode) && cleanPhone.length <= 10) {
            cleanPhone = `${countryCode}${cleanPhone}`
        }

        const friendlyId = `${(ticket.category as any).prefix}${(ticket as any).ticketNumber.toString().padStart(3, '0')}`

        const message = `*Nuevo Ticket ${friendlyId}*
👤 ${customerName}
📞 ${customerPhone}
📍 ${addressStreet}, ${addressColony}, CP ${addressZip} (${typeLabel})
⚠️ *Prioridad ${priority}*
🔧 ${issueDescription}
📋 Checklist: ${combinedDetails || 'Sin detalles extra'}
📱 Equipo: ${model || 'N/A'} (SN: ${serialNumber || 'N/A'})

Link: ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/technician/${ticket.id}`

        const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`

        revalidatePath('/')

        return {
            message: 'Ticket created successfully!',
            whatsappUrl,
            ticketId: ticket.id
        }
    } catch (e) {
        console.error(e)
        return { message: 'Failed to create ticket' }
    }
}

// Helpers
export async function createBrand(name: string) {
    if (!name || name.length < 2) return { error: 'Invalid name' }
    try {
        const brand = await db.brand.create({ data: { name } })
        revalidatePath('/')
        return { brand }
    } catch (e) {
        return { error: 'Failed to create brand' }
    }
}

export async function createCategory(name: string, prefix: string) {
    if (!name || name.length < 2) return { error: 'Invalid name' }
    try {
        const slug = name.toLowerCase().replace(/\s+/g, '-')
        const category = await db.category.create({
            data: {
                name,
                slug,
                // @ts-ignore
                prefix: prefix || name.substring(0, 3).toUpperCase()
            }
        })
        revalidatePath('/')
        return { category }
    } catch (e) {
        return { error: 'Failed to create category' }
    }
}
