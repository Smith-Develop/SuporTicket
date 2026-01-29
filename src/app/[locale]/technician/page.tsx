import { db } from '@/lib/db'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import TechnicianDashboardClient from '@/components/technician/TechnicianDashboardClient'

export default async function TechnicianDashboard() {
    const session = await getSession()
    if (!session) redirect('/login')

    const tickets = await db.ticket.findMany({
        where: { technicianId: session.id },
        orderBy: [
            { priority: 'desc' }, // HIGH first
            { createdAt: 'desc' }
        ],
        include: {
            brand: true,
            category: true
        }
    })

    return <TechnicianDashboardClient tickets={tickets} userName={session.name || 'Técnico'} />
}
