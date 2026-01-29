'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'

export async function createTechnician(prevState: any, formData: FormData) {
    const db = await getServicesDb()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const password = formData.get('password') as string

    if (!name || !email || !password) {
        return { message: 'Missing required fields' }
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        await db.user.create({
            data: {
                name,
                email,
                phone,
                password: hashedPassword,
                role: 'TECHNICIAN'
            }
        })

        revalidatePath('/admin/technicians')
        return { message: 'Technician created successfully!' }
    } catch (e) {
        console.error(e)
        return { message: 'Failed to create technician (Email might be in use)' }
    }
}

export async function deleteTechnician(id: string) {
    try {
        await db.user.delete({ where: { id } })
        revalidatePath('/admin/technicians')
        return { message: 'Technician deleted' }
    } catch (e) {
        console.error(e)
        return { message: 'Failed to delete' }
    }
}

export async function updateTechnician(id: string, prevState: any, formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string

    if (!id || !name || !email) {
        return { message: 'Missing required fields', success: false }
    }

    try {
        await db.user.update({
            where: { id },
            data: { name, email, phone }
        })
        revalidatePath('/admin/technicians')
        return { message: 'Technician updated successfully!', success: true }
    } catch (e) {
        console.error(e)
        return { message: 'Failed to update technician', success: false }
    }
}

export async function resetTechnicianPassword(id: string, prevState: any, formData: FormData) {
    const password = formData.get('password') as string

    if (!id || !password) {
        return { message: 'Missing password', success: false }
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        await db.user.update({
            where: { id },
            data: { password: hashedPassword }
        })
        revalidatePath('/admin/technicians')
        return { message: 'Password reset successfully!', success: true }
    } catch (e) {
        console.error(e)
        return { message: 'Failed to reset password', success: false }
    }
}

export async function getResendTicketUrl(ticketId: string) {
    try {
        const ticket = await db.ticket.findUnique({
            where: { id: ticketId },
            include: {
                brand: true,
                category: true,
                technician: true
            }
        })

        if (!ticket) return { error: 'Ticket not found' }

        const settings = await db.companySettings.findFirst()
        const countryCode = settings?.countryCode || '34'
        const defaultPhone = settings?.phone || '000000000'

        let technicianPhone = defaultPhone
        if (ticket.technician?.phone) {
            technicianPhone = ticket.technician.phone
        }

        let cleanPhone = technicianPhone.replace(/\D/g, '')
        if (!cleanPhone.startsWith(countryCode) && cleanPhone.length <= 10) {
            cleanPhone = `${countryCode}${cleanPhone}`
        }

        const friendlyId = `${ticket.category.prefix}${ticket.ticketNumber.toString().padStart(3, '0')}`
        const triageData = ticket.triageData ? JSON.parse(ticket.triageData as string) : {}
        const answeredQuestions = triageData.answeredQuestions || []
        const legacyIncidents = Object.keys(triageData).filter(k => k !== 'answeredQuestions' && triageData[k]).join(', ')
        const combinedDetails = [...answeredQuestions, legacyIncidents].filter(Boolean).join(' | ')

        const typeLabel = ticket.propertyType === 'RESIDENTIAL' ? 'Casa' : 'Negocio'

        const message = `*REENVÍO: Ticket ${friendlyId}*
👤 ${ticket.customerName}
📞 ${ticket.customerPhone}
📍 ${ticket.addressStreet}, ${ticket.addressColony}, CP ${ticket.addressZip} (${typeLabel})
⚠️ *Prioridad ${ticket.priority}*
🔧 ${ticket.issueDescription}
📋 Checklist: ${combinedDetails || 'Sin detalles extra'}
📱 Equipo: ${ticket.model || 'N/A'} (SN: ${ticket.serialNumber || 'N/A'})

Link: ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/technician/${ticket.id}`

        const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`

        return { success: true, url: whatsappUrl }

    } catch (e) {
        console.error(e)
        return { error: 'Failed to generate URL' }
    }
}
