import AdminTicketList from '@/components/admin/AdminTicketList'
import { db } from '@/lib/db'
import { CheckCircle, AlertTriangle, Clock, XCircle } from 'lucide-react'
import AdminDashboardClient from '@/components/admin/AdminDashboardClient'

export default async function AdminDashboard() {
    const stats = {
        total: await db.ticket.count(),
        pending: await db.ticket.count({ where: { status: 'PENDING' } }),
        process: await db.ticket.count({ where: { status: 'IN_PROGRESS' } }),
        finished: await db.ticket.count({ where: { status: 'FINISHED' } }),
        cancelled: await db.ticket.count({ where: { status: 'CANCELLED' } }),
    }

    // Fetch recent tickets (Increased limit for filtering)
    const recentTickets = await db.ticket.findMany({
        take: 50,
        orderBy: { createdAt: 'desc' },
        include: { brand: true, category: true }
    })

    // Fetch catalogs for the form
    const brands = await db.brand.findMany()
    const categories = await db.category.findMany()

    // Fetch technicians for assignment
    const technicians = await db.user.findMany({
        where: { role: 'TECHNICIAN' },
        include: { tickets: true }
    })

    return (
        <div>
            <AdminDashboardClient brands={brands} categories={categories} technicians={technicians} />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 mb-8">
                {/* ... existing stats ... */}
                <div className="bg-white dark:bg-zinc-900 p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 col-span-2 md:col-span-1">
                    <h3 className="text-gray-500 text-xs md:text-sm font-medium">Total Tickets</h3>
                    <p className="text-2xl md:text-3xl font-bold mt-1 md:mt-2">{stats.total}</p>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-4 md:p-6 rounded-xl shadow-sm border-l-4 border-yellow-500 relative overflow-hidden">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-gray-500 text-xs md:text-sm font-medium">Pendientes</h3>
                            <p className="text-2xl md:text-3xl font-bold mt-1 md:mt-2">{stats.pending}</p>
                        </div>
                        <Clock className="text-yellow-500 opacity-20 absolute -right-2 -bottom-2 w-12 h-12 md:relative md:opacity-50 md:right-auto md:bottom-auto md:w-6 md:h-6" />
                    </div>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-4 md:p-6 rounded-xl shadow-sm border-l-4 border-blue-500 relative overflow-hidden">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-gray-500 text-xs md:text-sm font-medium">En Proceso</h3>
                            <p className="text-2xl md:text-3xl font-bold mt-1 md:mt-2">{stats.process}</p>
                        </div>
                        <AlertTriangle className="text-blue-500 opacity-20 absolute -right-2 -bottom-2 w-12 h-12 md:relative md:opacity-50 md:right-auto md:bottom-auto md:w-6 md:h-6" />
                    </div>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-4 md:p-6 rounded-xl shadow-sm border-l-4 border-green-500 relative overflow-hidden">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-gray-500 text-xs md:text-sm font-medium">Finalizados</h3>
                            <p className="text-2xl md:text-3xl font-bold mt-1 md:mt-2">{stats.finished}</p>
                        </div>
                        <CheckCircle className="text-green-500 opacity-20 absolute -right-2 -bottom-2 w-12 h-12 md:relative md:opacity-50 md:right-auto md:bottom-auto md:w-6 md:h-6" />
                    </div>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-4 md:p-6 rounded-xl shadow-sm border-l-4 border-red-500 relative overflow-hidden">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-gray-500 text-xs md:text-sm font-medium">Cancelados</h3>
                            <p className="text-2xl md:text-3xl font-bold mt-1 md:mt-2">{stats.cancelled}</p>
                        </div>
                        <XCircle className="text-red-500 opacity-20 absolute -right-2 -bottom-2 w-12 h-12 md:relative md:opacity-50 md:right-auto md:bottom-auto md:w-6 md:h-6" />
                    </div>
                </div>
            </div>

            {/* Recent Tickets List - Enhanced */}
            <AdminTicketList tickets={recentTickets} />
        </div>
    )
}


