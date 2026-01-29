import { db } from '@/lib/db'
import Link from 'next/link'
import { ArrowLeft, Phone, MapPin, Calendar, Wrench, AlertCircle } from 'lucide-react'
import ClientLink from '@/components/admin/ClientLink'

export default async function CustomerDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const customer = await db.customer.findUnique({
        where: { id },
        include: {
            tickets: {
                orderBy: { createdAt: 'desc' },
                include: { brand: true, category: true }
            }
        }
    })

    if (!customer) {
        return <div className="p-8 text-center">Cliente no encontrado</div>
    }

    return (
        <div>
            <Link href="/admin/customers" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6">
                <ArrowLeft size={18} /> Volver a Clientes
            </Link>

            {/* Profile Header */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 p-6 mb-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                            {customer.name.charAt(0)}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">{customer.name}</h1>
                            <div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                <span className="flex items-center gap-1"><Phone size={14} /> {customer.phone}</span>
                                <span className="flex items-center gap-1"><MapPin size={14} /> {customer.address}</span>
                                <span className="flex items-center gap-1"><Calendar size={14} /> Cliente desde {new Date(customer.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="block text-4xl font-bold text-gray-900 dark:text-white">{customer.tickets.length}</span>
                        <span className="text-gray-500 text-sm">Servicios Totales</span>
                    </div>
                </div>
            </div>

            {/* Ticket History */}
            <h2 className="text-lg font-bold mb-4">Historial de Servicios</h2>
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 dark:bg-zinc-800 text-gray-500">
                        <tr>
                            <th className="p-4">Ticket</th>
                            <th className="p-4">Fecha</th>
                            <th className="p-4">Equipo</th>
                            <th className="p-4">Problema</th>
                            <th className="p-4">Estado</th>
                            <th className="p-4">Costo Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customer.tickets.map(t => (
                            <tr key={t.id} className="border-b dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800/50">
                                <td className="p-4 font-mono text-gray-500">
                                    <ClientLink id={t.id} />
                                </td>
                                <td className="p-4 text-gray-500">
                                    {new Date(t.createdAt).toLocaleDateString()}
                                </td>
                                <td className="p-4">
                                    <span className="flex items-center gap-2 font-medium">
                                        <Wrench size={14} className="text-gray-400" />
                                        {t.category.name} {t.brand.name}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-start gap-2 max-w-xs">
                                        <AlertCircle size={14} className="text-orange-500 mt-1 shrink-0" />
                                        <span className="truncate">{t.issueDescription}</span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs lowercase ${t.status === 'PENDING' ? 'bg-gray-100 text-gray-600' :
                                        t.status === 'IN_PROGRESS' ? 'bg-blue-50 text-blue-600' :
                                            'bg-green-50 text-green-600'
                                        }`}>
                                        {t.status.replace('_', ' ')}
                                    </span>
                                </td>
                                <td className="p-4 font-mono font-bold text-gray-700 dark:text-gray-300">
                                    ${t.totalCost.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                        {customer.tickets.length === 0 && (
                            <tr>
                                <td colSpan={6} className="p-8 text-center text-gray-400">
                                    No hay historial de servicios.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
