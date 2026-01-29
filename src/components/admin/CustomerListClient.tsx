'use client'

import { useState } from 'react'
import { Phone, Search, Edit } from 'lucide-react'
import Link from 'next/link'
import CustomerModal from './CustomerModal'

type Customer = {
    id: string
    name: string
    phone: string
    email: string | null
    address: string | null
    _count: { tickets: number }
}

export default function CustomerListClient({ customers }: { customers: Customer[] }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null)

    const filtered = customers.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.phone.includes(searchTerm) ||
        (c.email?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
    )

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Clientes</h1>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar cliente..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border rounded-lg dark:bg-zinc-900 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500 w-64"
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-zinc-800 text-gray-500">
                        <tr>
                            <th className="p-4">Nombre</th>
                            <th className="p-4">Contacto</th>
                            <th className="p-4">Ubicación</th>
                            <th className="p-4 text-center">Tickets</th>
                            <th className="p-4">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map(c => (
                            <tr key={c.id} className="border-b dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800/50 group">
                                <td className="p-4 font-medium">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                            {c.name.charAt(0)}
                                        </div>
                                        {c.name}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex flex-col text-sm text-gray-600 dark:text-gray-400">
                                        <span className="flex items-center gap-1"><Phone size={14} /> {c.phone}</span>
                                        {c.email && <span>{c.email}</span>}
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-gray-500 max-w-[200px] truncate">
                                    {c.address || '-'}
                                </td>
                                <td className="p-4 text-center">
                                    <span className="bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm font-bold">
                                        {c._count.tickets}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setEditingCustomer(c)}
                                            className="text-gray-400 hover:text-blue-600 transition"
                                            title="Editar Datos"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <Link href={`/admin/customers/${c.id}`} className="text-blue-600 hover:underline text-sm font-medium">
                                            Historial
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-gray-400">
                                    {customers.length === 0 ? 'No hay clientes registrados.' : 'No se encontraron resultados.'}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {editingCustomer && (
                <CustomerModal
                    customer={editingCustomer}
                    onClose={() => setEditingCustomer(null)}
                />
            )}
        </div>
    )
}
