import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import TicketDetailClient from '@/components/admin/TicketDetailClient'

export default async function TicketDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    console.log('Fetching ticket with ID:', id)
    const ticket = await db.ticket.findUnique({
        where: { id },
        include: {
            brand: true,
            category: true,
            technician: true,
            photos: true
        }
    })

    if (!ticket) {
        console.error('Ticket not found for ID:', id)
        notFound()
    }

    const technicians = await db.user.findMany({
        where: { role: 'TECHNICIAN' }
    })

    // @ts-ignore
    const settings = await db.companySettings.findFirst()

    return <TicketDetailClient ticket={ticket} technicians={technicians} settings={settings} />
}
