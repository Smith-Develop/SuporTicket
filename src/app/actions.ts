'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function createTicket(prevState: any, formData: FormData) {
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
    for (const [key, value] of formData.entries()) {
        if (key.startsWith('triage_')) {
            triageDataRaw[key.replace('triage_', '')] = value === 'on'
        }
    }

    // Automatic Prioritization Logic
    let priority = 'LOW'
    if (triageDataRaw['gas_leak'] || triageDataRaw['water_leak'] || triageDataRaw['short_circuit']) {
        priority = 'HIGH'
    } else if (triageDataRaw['partial_failure'] || triageDataRaw['loud_noise']) {
        priority = 'MEDIUM'
    }

    try {
        // Customer Logic (CRM)
        const customerIdInput = formData.get('customerId') as string
        const documentNumber = formData.get('documentNumber') as string
        const model = formData.get('model') as string
        const serialNumber = formData.get('serialNumber') as string

        let customerIdMatch = null

        if (customerIdInput) {
            customerIdMatch = customerIdInput
            // Optional: Update existing customer address if needed, skipping for now to preserve history preference
        } else {
            // Try find by phone OR document
            const existingCustomer = await db.customer.findFirst({
                where: {
                    OR: [
                        { phone: customerPhone },
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
                        documentNumber: documentNumber || null
                    }
                })
                customerIdMatch = newCustomer.id
            }
        }

        // Sequential Number Logic
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
                triageData: JSON.stringify(triageDataRaw),
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
        const settings = await db.companySettings.findFirst()
        const countryCode = settings?.countryCode || '34'
        const defaultPhone = settings?.phone || '000000000'

        // Incident Summary for WhatsApp
        const incidents = Object.keys(triageDataRaw).filter(k => triageDataRaw[k]).join(', ')
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
📋 Detalles: ${incidents}
📱 Equipo: ${model || 'N/A'} (SN: ${serialNumber || 'N/A'})

Link: https://suporticket.app/technician/${ticket.id}`

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
