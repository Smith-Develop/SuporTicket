'use client'

import { useState } from 'react'
import { Plus, Trash2, Phone, Mail, User } from 'lucide-react'
import TechnicianModal from './TechnicianModal'
import TechnicianDetailModal from './TechnicianDetailModal'
import TechnicianPasswordModal from './TechnicianPasswordModal'
import { deleteTechnician } from '@/app/admin-actions'

type Technician = {
    id: string
    name: string | null
    email: string
    phone: string | null
    tickets: any[]
    _count: { tickets: number }
}

export default function TechnicianPageClient({ technicians }: { technicians: Technician[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedTech, setSelectedTech] = useState<Technician | null>(null)
    const [selectedTechForEdit, setSelectedTechForEdit] = useState<Technician | undefined>(undefined)
    const [techToResetPassword, setTechToResetPassword] = useState<string | null>(null)
    const [deletingId, setDeletingId] = useState<string | null>(null)

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de eliminar este técnico?')) return

        setDeletingId(id)
        await deleteTechnician(id)
        setDeletingId(null)
    }

    const openDetail = (tech: Technician) => {
        setSelectedTech(tech)
    }

    return (
        <>
            <div className="mb-6 flex justify-end">
                <button
                    onClick={() => {
                        setSelectedTechForEdit(undefined)
                        setIsModalOpen(true)
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition shadow-sm"
                >
                    <Plus size={20} /> Nuevo Técnico
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicians.map(tech => (
                    <div
                        key={tech.id}
                        className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 p-6 flex flex-col hover:border-blue-300 transition cursor-pointer group"
                        onClick={() => openDetail(tech)}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition">
                                <User className="text-blue-600 dark:text-blue-400" size={24} />
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); handleDelete(tech.id); }}
                                disabled={deletingId === tech.id}
                                className="text-gray-400 hover:text-red-500 transition p-1 hover:bg-red-50 rounded-full"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>

                        <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600 transition">{tech.name || 'Sin nombre'}</h3>

                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">
                            <div className="flex items-center gap-2">
                                <Mail size={14} />
                                <span className="truncate">{tech.email}</span>
                            </div>

                            {tech.phone && (
                                <div className="flex items-center gap-2">
                                    <Phone size={14} />
                                    <span>{tech.phone}</span>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex gap-2 mt-4 pt-4 border-t dark:border-zinc-800">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setSelectedTechForEdit(tech)
                                        setIsModalOpen(true)
                                    }}
                                    className="flex-1 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded hover:bg-blue-100 transition text-center"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setTechToResetPassword(tech.id)
                                    }}
                                    className="flex-1 py-1.5 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 text-xs font-bold rounded hover:bg-yellow-100 transition text-center flex items-center justify-center gap-1"
                                >
                                    Password
                                </button>
                            </div>
                        </div>

                        <div className="pt-4 border-t dark:border-zinc-800 flex justify-between items-center">
                            <span className="text-xs font-bold text-gray-500 uppercase">Tickets Asignados</span>
                            <span className="bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-sm font-bold group-hover:bg-blue-100 group-hover:text-blue-800 transition">
                                {tech._count.tickets}
                            </span>
                        </div>
                    </div>
                ))}

                {technicians.length === 0 && (
                    <div className="col-span-full py-20 text-center text-gray-400 bg-gray-50 dark:bg-zinc-800/50 rounded-xl border border-dashed border-gray-200">
                        <p>No hay técnicos registrados.</p>
                    </div>
                )}
            </div >

            {isModalOpen && (
                <TechnicianModal
                    onClose={() => {
                        setIsModalOpen(false)
                        setSelectedTechForEdit(undefined)
                    }}
                    technician={selectedTechForEdit}
                />
            )}
            {selectedTech && <TechnicianDetailModal technician={selectedTech} onClose={() => setSelectedTech(null)} />}
            {techToResetPassword && (
                <TechnicianPasswordModal
                    technicianId={techToResetPassword}
                    onClose={() => setTechToResetPassword(null)}
                />
            )}
        </>
    )
}
