'use client'

import { useState } from 'react'
import { X, Phone, Mail, Clock, CheckCircle, AlertTriangle, PlayCircle, Calendar, MapPin, Wrench, AlertCircle as AlertIcon, Filter, DollarSign, User } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

type Ticket = {
    id: string
    createdAt: Date
    status: string
    priority: string
    customerName: string
    addressStreet: string
    addressColony: string
    issueDescription: string
    brand: { name: string }
    category: { name: string }
    totalCost: number
}

type Technician = {
    id: string
    name: string | null
    email: string
    phone: string | null
    tickets: Ticket[]
}

export default function TechnicianDetailModal({ technician, onClose }: { technician: Technician, onClose: () => void }) {
    const locale = useLocale()
    const [activeTab, setActiveTab] = useState<'PENDING' | 'IN_PROGRESS' | 'FINISHED'>('PENDING')

    // Filter State for History
    type TimeFilter = 'WEEK' | 'MONTH' | '3MONTHS' | 'ALL'
    const [timeFilter, setTimeFilter] = useState<TimeFilter>('ALL')

    // --- Stats ---
    const counts = {
        PENDING: technician.tickets.filter(t => t.status === 'PENDING').length,
        IN_PROGRESS: technician.tickets.filter(t => t.status === 'IN_PROGRESS').length,
        FINISHED: technician.tickets.filter(t => t.status === 'FINISHED').length
    }

    // --- Logic ---
    const now = new Date()
    const getDaysDiff = (date: Date) => {
        const diffTime = Math.abs(now.getTime() - new Date(date).getTime())
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }

    const filteredTickets = technician.tickets.filter(t => {
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


    // Card Renderer
    const renderTicketCard = (ticket: Ticket) => (
        <Link
            href={`/${locale}/admin/tickets/${ticket.id}`}
            key={ticket.id}
            className="block group"
            onClick={onClose}
        >
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
                        </div>
                        <div className="flex items-start gap-2">
                            <MapPin size={15} className="text-gray-400 mt-0.5" />
                            <span className="truncate">{ticket.addressStreet}, {ticket.addressColony}</span>
                        </div>
                        <div className="flex items-start gap-2 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/10 p-2 rounded-lg mt-2">
                            <AlertIcon size={15} className="mt-0.5" />
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
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white dark:bg-zinc-900 w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">

                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white shrink-0">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold border-2 border-white/30">
                                {technician.name?.charAt(0) || 'T'}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">{technician.name}</h2>
                                <div className="flex flex-col text-blue-100 text-sm mt-1">
                                    <span className="flex items-center gap-2"><Mail size={14} /> {technician.email}</span>
                                    {technician.phone && <span className="flex items-center gap-2"><Phone size={14} /> {technician.phone}</span>}
                                </div>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition">
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Tabs & Filters Container */}
                <div className="bg-gray-50 dark:bg-zinc-950 p-4 pb-0 border-b dark:border-zinc-800">
                    {/* Tabs */}
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {(['PENDING', 'IN_PROGRESS', 'FINISHED'] as const).map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 min-w-[100px] pb-3 text-sm font-bold border-b-2 transition relative ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {tab === 'PENDING' ? 'Pendientes' : tab === 'IN_PROGRESS' ? 'En Proceso' : 'Historial'}
                                <span className="ml-2 bg-gray-200 dark:bg-zinc-800 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                                    {counts[tab]}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Filters (Only for Finished) */}
                    {activeTab === 'FINISHED' && (
                        <div className="mt-4 flex gap-2 overflow-x-auto pb-4 animate-in slide-in-from-top-2">
                            <div className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 p-1 rounded-lg">
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

                {/* Ticket List Area */}
                <div className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-zinc-950">
                    {filteredTickets.length === 0 ? (
                        <div className="text-center py-12 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
                            <p>No hay tickets en esta sección.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {/* RENDER LOGIC */}
                            {activeTab === 'FINISHED' ? (
                                // GROUPED VIEW
                                Object.entries(groupedTickets).map(([month, groupTickets]) => (
                                    <div key={month} className="space-y-4">
                                        <div className="sticky top-0 z-10 flex items-center gap-2 my-4 bg-gray-50 dark:bg-zinc-950 py-2">
                                            <span className="bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 font-bold text-xs uppercase px-3 py-1 rounded-full shadow-sm border border-gray-300 dark:border-zinc-700">
                                                <Calendar size={12} className="inline mr-1 mb-0.5" />
                                                {month}
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
                    )}
                </div>
            </div>
        </div>
    )
}
