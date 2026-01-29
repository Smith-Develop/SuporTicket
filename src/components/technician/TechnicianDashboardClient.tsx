'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, User, AlertCircle, Clock, LogOut, PlayCircle, DollarSign, Calendar, Filter } from 'lucide-react'
import { logoutAction } from '@/app/auth-actions'
import { useTranslations } from 'next-intl'

type Ticket = {
    id: string
    createdAt: Date
    priority: string
    status: string
    customerName: string
    addressStreet: string
    addressColony: string
    issueDescription: string
    totalCost: number
    brand: { name: string }
    category: { name: string }
}

export default function TechnicianDashboardClient({ tickets, userName, userRole }: { tickets: Ticket[], userName: string, userRole: string }) {
    const t = useTranslations('Technician')
    const [activeTab, setActiveTab] = useState<'PENDING' | 'IN_PROGRESS' | 'FINISHED'>('PENDING')

    // Filter State for History
    type TimeFilter = 'WEEK' | 'MONTH' | '3MONTHS' | 'ALL'
    const [timeFilter, setTimeFilter] = useState<TimeFilter>('ALL')

    // --- Logic ---

    const now = new Date()
    const getDaysDiff = (date: Date) => {
        const diffTime = Math.abs(now.getTime() - new Date(date).getTime())
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }

    const filteredTickets = tickets.filter(t => {
        // Status Filter
        if (activeTab === 'PENDING' && t.status !== 'PENDING') return false
        if (activeTab === 'IN_PROGRESS' && t.status !== 'IN_PROGRESS') return false
        if (activeTab === 'FINISHED' && t.status !== 'FINISHED') return false

        // Time Filter (Only for Finished/History)
        if (activeTab === 'FINISHED') {
            const days = getDaysDiff(t.createdAt)
            if (timeFilter === 'WEEK' && days > 7) return false
            if (timeFilter === 'MONTH' && days > 30) return false
            if (timeFilter === '3MONTHS' && days > 90) return false
        }

        return true
    })

    const counts = {
        PENDING: tickets.filter(t => t.status === 'PENDING').length,
        IN_PROGRESS: tickets.filter(t => t.status === 'IN_PROGRESS').length,
        FINISHED: tickets.filter(t => t.status === 'FINISHED').length
    }

    // --- Stats Calculation for Grid ---
    const stats = {
        total: tickets.length,
        pending: tickets.filter(t => t.status === 'PENDING').length,
        process: tickets.filter(t => t.status === 'IN_PROGRESS').length,
        finished: tickets.filter(t => t.status === 'FINISHED').length,
        cancelled: tickets.filter(t => t.status === 'CANCELLED').length,
    }

    const priorityColor = (p: string) => {
        if (p === 'HIGH') return 'bg-red-100 text-red-800 border-red-200'
        if (p === 'MEDIUM') return 'bg-yellow-100 text-yellow-800 border-yellow-200'
        return 'bg-blue-100 text-blue-800 border-blue-200'
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(amount)
    }

    // Grouping Logic for Finished
    const groupedTickets = filteredTickets.reduce((groups, ticket) => {
        const date = new Date(ticket.createdAt)
        const key = date.toLocaleString('es-ES', { month: 'long', year: 'numeric' }) // e.g., "enero 2025"
        if (!groups[key]) groups[key] = []
        groups[key].push(ticket)
        return groups
    }, {} as Record<string, Ticket[]>)

    // Sort Month keys (current first) - rough implementation
    // Ideally we sort by date descending.
    // Since the original list `tickets` is already sorted by DESC createdAt, the keys should appear in order of first appearance if we iterate correctly.
    // Or we keep array of groups.

    const renderTicketCard = (ticket: Ticket) => (
        <Link href={`/technician/${ticket.id}`} key={ticket.id} className="block group">
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-800 p-5 transition hover:shadow-md hover:border-blue-300 relative overflow-hidden">

                {/* Status Stripe */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${ticket.status === 'PENDING' ? 'bg-gray-300' :
                    ticket.status === 'IN_PROGRESS' ? 'bg-blue-500' :
                        'bg-green-500'
                    }`} />

                {/* Header: Priority & Date */}
                <div className="flex justify-between items-start mb-3 pl-3">
                    <div className="flex flex-col gap-1">
                        <span className={`self-start px-2.5 py-1 rounded-full text-xs font-bold border ${priorityColor(ticket.priority)}`}>
                            {ticket.priority}
                        </span>
                        {/* New Requirement: Price below Label for Finished - REMOVED */}
                    </div>

                    <span className="text-xs text-gray-400 flex items-center gap-1 bg-gray-50 dark:bg-zinc-800 px-2 py-1 rounded">
                        <Clock size={12} />
                        {new Date(ticket.createdAt).toLocaleDateString()}
                    </span>
                </div>

                <div className="pl-3">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg group-hover:text-blue-600 transition">
                            {ticket.category.name} - {ticket.brand.name}
                        </h3>
                        {ticket.status === 'FINISHED' && (
                            <span className="text-green-600 font-bold text-lg flex items-center gap-1 shrink-0 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">
                                <DollarSign size={16} strokeWidth={3} />
                                {formatCurrency(ticket.totalCost)}
                            </span>
                        )}
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <User size={15} className="text-gray-400" />
                            <span className="font-medium text-gray-900 dark:text-gray-300">{ticket.customerName}</span>
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
                    <div className="mt-4 pt-3 border-t border-gray-50 dark:border-zinc-800 flex justify-end items-center">
                        <span className="text-blue-600 font-semibold text-xs group-hover:translate-x-1 transition flex items-center gap-1">
                            Ver Detalles <PlayCircle size={12} />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )

    return (
        <div className="bg-gray-100 dark:bg-zinc-950 min-h-screen">
            {/* Header */}
            <div className="bg-white dark:bg-zinc-900 border-b dark:border-zinc-800 p-6 shadow-sm sticky top-0 z-10">
                <div className="max-w-4xl mx-auto flex justify-between items-center gap-4">
                    <div>
                        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">SuporTicket Tech</h1>
                        <p className="text-gray-500 text-xs mt-1">Hola, {userName}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        {userRole === 'ADMIN' && (
                            <Link
                                href="/admin"
                                className="hidden sm:flex items-center gap-2 px-3 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-bold border border-indigo-100 dark:border-indigo-800 hover:bg-indigo-100 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
                                Admin Panel
                            </Link>
                        )}
                        <form action={logoutAction}>
                            <button className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-lg hover:bg-gray-200 transition text-gray-600">
                                <LogOut size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Mobile Admin Button (visible only on small screens) */}
                {userRole === 'ADMIN' && (
                    <div className="sm:hidden mt-4">
                        <Link
                            href="/admin"
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-bold border border-indigo-100 dark:border-indigo-800"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
                            Ir a Dashboard Admin
                        </Link>
                    </div>
                )}

                {/* Stats Grid */}
                <div className="max-w-4xl mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm border-l-4 border-yellow-500 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider">Pendientes</h3>
                            <p className="text-2xl font-black mt-1">{stats.pending}</p>
                        </div>
                        <Clock className="absolute right-2 bottom-2 text-yellow-500 opacity-10 w-10 h-10" />
                    </div>
                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm border-l-4 border-blue-500 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider">En Proceso</h3>
                            <p className="text-2xl font-black mt-1">{stats.process}</p>
                        </div>
                        <PlayCircle className="absolute right-2 bottom-2 text-blue-500 opacity-10 w-10 h-10" />
                    </div>
                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm border-l-4 border-green-500 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider">Finalizados</h3>
                            <p className="text-2xl font-black mt-1">{stats.finished}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-2 bottom-2 text-green-500 opacity-10 w-10 h-10 lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                    </div>
                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm border-l-4 border-gray-400 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider">Total</h3>
                            <p className="text-2xl font-black mt-1">{stats.total}</p>
                        </div>
                        <Filter className="absolute right-2 bottom-2 text-gray-500 opacity-10 w-10 h-10" />
                    </div>
                </div>

                {/* Tabs */}
                <div className="max-w-4xl mx-auto mt-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                    {(['PENDING', 'IN_PROGRESS', 'FINISHED'] as const).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 min-w-[100px] pb-3 text-sm font-bold border-b-2 transition relative ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            {tab === 'PENDING' ? 'Pendientes' : tab === 'IN_PROGRESS' ? 'En Proceso' : 'Historial'}
                            <span className="ml-2 bg-gray-100 dark:bg-zinc-800 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                                {counts[tab]}
                            </span>
                        </button>
                    ))}
                </div>

                {/* FILTERS (Only for Finished) */}
                {activeTab === 'FINISHED' && (
                    <div className="max-w-4xl mx-auto mt-4 flex gap-2 overflow-x-auto pb-1 animate-in slide-in-from-top-2">
                        <div className="flex items-center gap-2 bg-gray-50 dark:bg-zinc-800 p-1 rounded-lg">
                            <span className="text-xs font-bold text-gray-400 px-2 flex gap-1"><Filter size={12} /> Filtro:</span>

                            {[
                                { k: 'ALL', l: 'Todos' },
                                { k: 'WEEK', l: '7 Días' },
                                { k: 'MONTH', l: 'Mes' },
                                { k: '3MONTHS', l: '3 Meses' }
                            ].map((f) => (
                                <button
                                    key={f.k}
                                    onClick={() => setTimeFilter(f.k as TimeFilter)}
                                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition ${timeFilter === f.k
                                        ? 'bg-white shadow text-blue-600 dark:bg-zinc-700 dark:text-blue-400'
                                        : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-zinc-700'
                                        }`}
                                >
                                    {f.l}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* List */}
            <div className="max-w-4xl mx-auto p-4 space-y-4 pb-20">
                {filteredTickets.length === 0 && (
                    <div className="text-center py-20 text-gray-400 bg-white dark:bg-zinc-900 rounded-xl border border-dashed border-gray-200">
                        <p>No hay tickets en esta sección.</p>
                    </div>
                )}

                {/* RENDER LOGIC */}
                {activeTab === 'FINISHED' ? (
                    // GROUPED VIEW
                    Object.entries(groupedTickets).map(([month, groupTickets]) => (
                        <div key={month} className="space-y-4">
                            <div className="sticky top-40 z-0 flex items-center gap-2 my-6">
                                <span className="bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 font-bold text-xs uppercase px-3 py-1 rounded-full">
                                    <Calendar size={12} className="inline mr-1 mb-0.5" />
                                    {month} // e.g. "enero 2025"
                                </span>
                                <div className="h-px flex-1 bg-gray-200 dark:bg-zinc-800"></div>
                            </div>
                            {groupTickets.map(renderTicketCard)}
                        </div>
                    ))
                ) : (
                    // NORMAL VIEW (No groups)
                    filteredTickets.map(renderTicketCard)
                )}
            </div>
        </div>
    )
}
