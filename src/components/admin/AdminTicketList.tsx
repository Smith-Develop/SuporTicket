'use client'

import { useState } from 'react'
import { Clock, Filter, Calendar, DollarSign, User, MapPin, AlertCircle, PlayCircle, Send } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { formatTicketId } from '@/lib/utils'

// Types (Adjusted to match what page.tsx fetches)
type Ticket = {
    id: string
    ticketNumber: number
    createdAt: Date
    priority: string
    status: string
    customerName: string
    customerPhone: string
    addressStreet: string
    addressColony: string
    issueDescription: string
    totalCost: number
    model: string
    brand: { name: string }
    category: { name: string, prefix: string }
}

export default function AdminTicketList({ tickets }: { tickets: any[] }) {
    const locale = useLocale()

    // Unified Filters instead of Tabs
    type StatusFilter = 'ALL' | 'PENDING' | 'IN_PROGRESS' | 'FINISHED' | 'CANCELLED'
    type TimeFilter = 'WEEK' | 'MONTH' | '3MONTHS' | 'ALL'

    const [statusFilter, setStatusFilter] = useState<StatusFilter>('ALL')
    const [timeFilter, setTimeFilter] = useState<TimeFilter>('ALL')

    // --- Logic ---
    const now = new Date()
    const getDaysDiff = (date: Date) => {
        const diffTime = Math.abs(now.getTime() - new Date(date).getTime())
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }

    const filteredTickets = tickets.filter(t => {
        // Status Filter
        if (statusFilter !== 'ALL' && t.status !== statusFilter) return false

        // Time Filter (Applies to all linked to timeline)
        if (timeFilter !== 'ALL') {
            const days = getDaysDiff(t.createdAt)
            if (timeFilter === 'WEEK' && days > 7) return false
            if (timeFilter === 'MONTH' && days > 30) return false
            if (timeFilter === '3MONTHS' && days > 90) return false
        }

        return true
    })

    const priorityColor = (p: string) => {
        if (p === 'HIGH') return 'bg-red-100 text-red-800 border-red-200'
        if (p === 'MEDIUM') return 'bg-yellow-100 text-yellow-800 border-yellow-200'
        return 'bg-blue-100 text-blue-800 border-blue-200'
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(amount)
    }

    // Grouping Logic (Always group by month for timeline view)
    const groupedTickets = filteredTickets.reduce((groups, ticket) => {
        const date = new Date(ticket.createdAt)
        const key = date.toLocaleString('es-ES', { month: 'long', year: 'numeric' })
        if (!groups[key]) groups[key] = []
        groups[key].push(ticket)
        return groups
    }, {} as Record<string, Ticket[]>)


    const renderTicketCard = (ticket: Ticket) => (
        <Link
            href={`/${locale}/admin/tickets/${ticket.id}`}
            key={ticket.id}
            className="block group"
        >
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-800 p-5 transition hover:shadow-md hover:border-blue-300 relative overflow-hidden">

                {/* Status Stripe */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${ticket.status === 'PENDING' ? 'bg-gray-300' :
                    ticket.status === 'IN_PROGRESS' ? 'bg-blue-500' :
                        ticket.status === 'FINISHED' ? 'bg-green-500' :
                            'bg-red-500' // Cancelled
                    }`} />

                {/* Header: Priority & Date */}
                <div className="flex justify-between items-start mb-3 pl-3">
                    <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${priorityColor(ticket.priority)}`}>
                            {ticket.priority}
                        </span>
                        <span className="text-xs font-mono text-gray-500 font-bold">
                            {formatTicketId(ticket)}
                        </span>
                        {/* Cancelled Badge */}
                        {ticket.status === 'CANCELLED' && (
                            <span className="bg-red-100 text-red-700 border border-red-200 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                                Cancelado
                            </span>
                        )}
                    </div>

                    <span className="text-xs text-gray-400 flex items-center gap-1 bg-gray-50 dark:bg-zinc-800 px-2 py-1 rounded">
                        <Clock size={12} />
                        {new Date(ticket.createdAt).toLocaleDateString()}
                    </span>
                </div>

                <div className="pl-3">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-800 dark:text-gray-100 text-lg group-hover:text-blue-600 transition">
                            {ticket.category.name} - {ticket.brand.name}
                        </h4>
                        {/* Price only for Finished */}
                        {ticket.status === 'FINISHED' && (
                            <span className="text-green-600 font-bold text-lg flex items-center gap-1 shrink-0 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">
                                <DollarSign size={16} strokeWidth={3} />
                                {formatCurrency(ticket.totalCost || 0)}
                            </span>
                        )}
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <User size={15} className="text-gray-400" />
                            <span className="font-medium text-gray-900 dark:text-gray-300">{ticket.customerName}</span>
                            <span className="text-xs text-gray-400">({ticket.customerPhone})</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <MapPin size={15} className="text-gray-400 mt-0.5" />
                            <span className="truncate">{ticket.addressStreet}, {ticket.addressColony}</span>
                        </div>
                        <div className="flex items-start gap-2 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/10 p-2 rounded-lg mt-2">
                            <AlertCircle size={15} className="mt-0.5" />
                            <span className="italic line-clamp-2">{ticket.issueDescription}</span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 pt-3 border-t border-gray-50 dark:border-zinc-800 flex justify-between items-center">
                        <button
                            onClick={async (e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                // Dynamic import or pass via props? 
                                // Actually better to define this handler outside or here.
                                // We need to import the action at top level.
                                const { getResendTicketUrl } = await import('@/app/admin-actions')
                                const res = await getResendTicketUrl(ticket.id)
                                if (res.success && res.url) {
                                    window.open(res.url, '_blank')
                                } else {
                                    alert('Error al generar enlace')
                                }
                            }}
                            className="text-green-600 hover:text-green-700 font-semibold text-xs flex items-center gap-1 bg-green-50 hover:bg-green-100 px-2 py-1 rounded transition"
                        >
                            <Send size={12} /> Reenviar
                        </button>

                        <span className="text-blue-600 font-semibold text-xs group-hover:translate-x-1 transition flex items-center gap-1">
                            Ver Detalles <PlayCircle size={12} />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden">

            {/* Header Section */}
            <div className="p-6 border-b dark:border-zinc-800 space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">Gestión de Tickets</h3>
                </div>

                {/* FILTERS BAR */}
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Status Filter */}
                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-zinc-800 p-1 rounded-lg overflow-x-auto">
                        <span className="text-xs font-bold text-gray-400 px-2 flex gap-1"><Filter size={12} /> Estado:</span>
                        {[
                            { k: 'ALL', l: 'Todos' },
                            { k: 'PENDING', l: 'Pendiente' },
                            { k: 'IN_PROGRESS', l: 'Proceso' },
                            { k: 'FINISHED', l: 'Finalizado' },
                            { k: 'CANCELLED', l: 'Cancelado' }
                        ].map((f) => (
                            <button
                                key={f.k}
                                onClick={() => setStatusFilter(f.k as StatusFilter)}
                                className={`px-3 py-1.5 rounded-md text-xs font-bold whitespace-nowrap transition ${statusFilter === f.k
                                    ? 'bg-white shadow text-blue-600 dark:bg-zinc-700 dark:text-blue-400'
                                    : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-zinc-700'
                                    }`}
                            >
                                {f.l}
                            </button>
                        ))}
                    </div>

                    {/* Time Filter */}
                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-zinc-800 p-1 rounded-lg overflow-x-auto">
                        <span className="text-xs font-bold text-gray-400 px-2 flex gap-1"><Calendar size={12} /> Tiempo:</span>
                        {[
                            { k: 'ALL', l: 'Todos' },
                            { k: 'WEEK', l: '7 Días' },
                            { k: 'MONTH', l: 'Mes' },
                            { k: '3MONTHS', l: '3 Meses' }
                        ].map((f) => (
                            <button
                                key={f.k}
                                onClick={() => setTimeFilter(f.k as TimeFilter)}
                                className={`px-3 py-1.5 rounded-md text-xs font-bold whitespace-nowrap transition ${timeFilter === f.k
                                    ? 'bg-white shadow text-blue-600 dark:bg-zinc-700 dark:text-blue-400'
                                    : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-zinc-700'
                                    }`}
                            >
                                {f.l}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* List Content */}
            <div className="p-6 bg-gray-50 dark:bg-zinc-950/50 min-h-[400px]">
                {filteredTickets.length === 0 ? (
                    <div className="text-center py-20 text-gray-400 bg-white dark:bg-zinc-900 rounded-xl border border-dashed border-gray-200">
                        <p>No se encontraron tickets con estos filtros.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {/* Always Grouped by Month */}
                        {Object.entries(groupedTickets).map(([month, groupTickets]) => (
                            <div key={month} className="space-y-4">
                                <div className="sticky top-0 z-10 flex items-center gap-2 my-4 bg-gray-50 dark:bg-zinc-950/50 py-2 backdrop-blur-sm">
                                    <span className="bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 font-bold text-xs uppercase px-3 py-1 rounded-full shadow-sm border border-gray-300 dark:border-zinc-700">
                                        <Calendar size={12} className="inline mr-1 mb-0.5" />
                                        {month}
                                    </span>
                                    <div className="h-px flex-1 bg-gray-200 dark:bg-zinc-800"></div>
                                </div>
                                {groupTickets.map(renderTicketCard)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
