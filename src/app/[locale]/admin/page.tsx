import AdminTicketList from '@/components/admin/AdminTicketList'
import Link from 'next/link'
import { getServicesDb } from '@/lib/services-db'
import { CheckCircle, AlertTriangle, Clock, XCircle } from 'lucide-react'
import AdminDashboardClient from '@/components/admin/AdminDashboardClient'

export default async function AdminDashboard() {
    let stats = {
        total: 0,
        pending: 0,
        process: 0,
        finished: 0,
        cancelled: 0,
    }
    let recentTickets = []
    let brands = []
    let categories = []
    let technicians = []
    let triageQuestions: any[] = []
    let error = null

    try {
        const db = await getServicesDb()
        stats = {
            total: await db.ticket.count(),
            pending: await db.ticket.count({ where: { status: 'PENDING' } }),
            process: await db.ticket.count({ where: { status: 'IN_PROGRESS' } }),
            finished: await db.ticket.count({ where: { status: 'FINISHED' } }),
            cancelled: await db.ticket.count({ where: { status: 'CANCELLED' } }),
        }

        // Fetch recent tickets (Increased limit for filtering)
        recentTickets = await db.ticket.findMany({
            take: 50,
            orderBy: { createdAt: 'desc' },
            include: { brand: true, category: true }
        })

        // Fetch catalogs for the form
        brands = await db.brand.findMany()
        categories = await db.category.findMany()
        triageQuestions = await db.triageQuestion.findMany({
            orderBy: { id: 'asc' }
        })

        // Fetch technicians for assignment (Include Admins as they can also be assigned)
        technicians = await db.user.findMany({
            where: {
                role: { in: ['TECHNICIAN', 'ADMIN'] }
            },
            include: { tickets: true }
        })
    } catch (e: any) {
        console.error("Dashboard DB Error:", e)
        error = e.message || "Error connecting to database"
    }

    if (error) {
        return (
            <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Error de Conexión</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                    No se pudo conectar a la base de datos externa. Es posible que la URL configurada sea incorrecta o la base de datos no esté accesible.
                </p>
                <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg text-left max-w-2xl mx-auto overflow-auto mb-6">
                    <code className="text-xs text-red-500 font-mono">{error}</code>
                </div>
                <Link
                    href="/admin/settings"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                    Ir a Configuración
                </Link>
            </div>
        )
    }

    return (
        <div>
            <AdminDashboardClient
                brands={brands}
                categories={categories}
                technicians={technicians}
                triageQuestions={triageQuestions}
            />

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


