import { db } from '@/lib/db'
import { getTranslations } from 'next-intl/server'
import TicketActions from '@/components/technician/TicketActions'
import { notFound } from 'next/navigation'

export default async function TicketDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const t = await getTranslations('Technician')

    const ticket = await db.ticket.findUnique({
        where: { id },
        include: {
            brand: true,
            category: true,
            photos: true
        }
    })

    if (!ticket) notFound()

    const settings = await db.companySettings.findFirst()

    return (
        <div className="min-h-screen bg-white dark:bg-black pb-24">
            <TicketActions ticket={ticket} settings={settings || { name: 'SuporTicket' }} />
        </div>
    )
}
