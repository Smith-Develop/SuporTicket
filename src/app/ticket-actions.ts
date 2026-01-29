'use server'

import { getServicesDb } from '@/lib/services-db'
import { revalidatePath } from 'next/cache'

export async function updateTicket(id: string, prevState: any, formData: FormData) {
    const db = await getServicesDb()
    const priority = formData.get('priority') as string
    const status = formData.get('status') as string
    const technicianId = formData.get('technicianId') as string
    // const issueDescription = formData.get('issueDescription') as string // Removed as it is not in the form

    try {
        await db.ticket.update({
            where: { id },
            data: {
                priority,
                status,
                technicianId: technicianId === 'UNASSIGNED' ? null : technicianId,
                // issueDescription
            }
        })

        revalidatePath(`/admin/tickets/${id}`)
        revalidatePath('/admin')
        return { message: 'Ticket updated successfully!' }
    } catch (e) {
        console.error('Failed to update ticket:', e)
        return { message: 'Failed to update ticket' }
    }
}

export async function deleteTicket(id: string) {
    const db = await getServicesDb()
    try {
        await db.ticket.delete({ where: { id } })
        revalidatePath('/admin')
        return { message: 'Ticket deleted' }
    } catch (e) {
        return { message: 'Failed to delete ticket' }
    }
}
