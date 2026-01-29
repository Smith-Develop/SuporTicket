'use client'

import { useActionState, useState } from 'react'
import { updateTicket } from '@/app/ticket-actions'
import { Save, ArrowLeft, Loader2, MapPin, Phone, User, Calendar, AlertCircle, Camera, FileText, CheckCircle, XCircle, PlayCircle, Clock } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import InvoiceModal from '@/components/technician/InvoiceModal' // Reusing Modal

type Props = {
    ticket: any
    technicians: any[]
    settings?: any
}

const initialState = { message: '' }

export default function TicketDetailClient({ ticket, technicians, settings }: Props) {
    const [state, formAction, isPending] = useActionState(updateTicket.bind(null, ticket.id), initialState)
    const [showInvoice, setShowInvoice] = useState(false)
    const router = useRouter()

    // Calculate totals for display
    const subtotal = (ticket.laborCost || 0) + (ticket.partsCost || 0)
    const ivaRate = ticket.appliedIvaPercentage ? (ticket.appliedIvaPercentage / 100) : 0.21
    const ivaAmount = ticket.includeIva ? (subtotal * ivaRate) : 0
    const total = subtotal + ivaAmount

    // Reconstruct settings object if needed for InvoiceModal (since it might expect it)
    const effectiveSettings = settings || {
        name: 'SuporTicket Company',
        currencySymbol: '€',
        countryCode: 'ES',
        ivaPercentage: 21,
    }

    return (
        <div className="max-w-6xl mx-auto pb-20">
            <Link href="/admin" className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-6">
                <ArrowLeft size={20} className="mr-2" /> Volver al Dashboard
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left: Main Content */}
                <div className="md:col-span-2 space-y-6">

                    {/* Header Card */}
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">Ticket #{ticket.id.slice(-6)}</h1>
                                <p className="text-gray-500 flex items-center gap-2 text-sm">
                                    <Calendar size={14} /> Creado el {new Date(ticket.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1 ${ticket.status === 'FINISHED' ? 'bg-green-100 text-green-700' :
                                ticket.status === 'CANCELLED' ? 'bg-red-100 text-red-700' :
                                    ticket.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-700' :
                                        'bg-gray-100 text-gray-700'
                                }`}>
                                {ticket.status === 'FINISHED' && <CheckCircle size={14} />}
                                {ticket.status === 'CANCELLED' && <XCircle size={14} />}
                                {ticket.status === 'IN_PROGRESS' && <PlayCircle size={14} />}
                                {ticket.status === 'PENDING' && <Clock size={14} />}
                                {ticket.status}
                            </span>
                        </div>

                        {/* Issue */}
                        <div className="mb-6">
                            <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-2">Descripción del Problema</h3>
                            <div className="w-full p-4 border rounded-lg bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 text-gray-800 dark:text-gray-200">
                                {ticket.issueDescription}
                            </div>
                        </div>

                        {/* Tech Details Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-lg border border-gray-100 dark:border-zinc-800">
                                <span className="block text-gray-500 mb-1 text-xs uppercase">Marca</span>
                                <span className="font-bold block truncate">{ticket.brand.name}</span>
                            </div>
                            <div className="p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-lg border border-gray-100 dark:border-zinc-800">
                                <span className="block text-gray-500 mb-1 text-xs uppercase">Categoría</span>
                                <span className="font-bold block truncate">{ticket.category.name}</span>
                            </div>
                            <div className="p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-lg border border-gray-100 dark:border-zinc-800">
                                <span className="block text-gray-500 mb-1 text-xs uppercase">Modelo</span>
                                <span className="font-bold block truncate">{ticket.model || 'N/A'}</span>
                            </div>
                            <div className="p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-lg border border-gray-100 dark:border-zinc-800">
                                <span className="block text-gray-500 mb-1 text-xs uppercase">Serie</span>
                                <span className="font-bold block truncate">{ticket.serialNumber || 'N/A'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Technician Report Section */}
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
                        <div className="flex items-center gap-2 mb-6">
                            <FileText className="text-purple-600" />
                            <h2 className="font-bold text-lg">Reporte Técnico & Costos</h2>
                        </div>

                        {/* Notes */}
                        <div className="mb-6 space-y-2">
                            <h3 className="text-sm font-bold text-gray-500 uppercase">Observaciones</h3>
                            <div className="p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg min-h-[80px] text-sm">
                                {ticket.technicianNotes || 'Sin observaciones registradas.'}
                            </div>
                        </div>

                        {/* Cancellation Reason if exists */}
                        {ticket.status === 'CANCELLED' && ticket.cancellationReason && (
                            <div className="mb-6 space-y-2">
                                <h3 className="text-sm font-bold text-red-500 uppercase">Motivo de Cancelación</h3>
                                <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-lg text-sm text-red-800 dark:text-red-200">
                                    {ticket.cancellationReason}
                                </div>
                            </div>
                        )}

                        {/* Costs Table */}
                        <div className="border rounded-lg overflow-hidden dark:border-zinc-700">
                            <div className="grid grid-cols-2 p-3 bg-gray-50 dark:bg-zinc-800 border-b dark:border-zinc-700 text-sm font-bold">
                                <span>Concepto</span>
                                <span className="text-right">Importe</span>
                            </div>
                            <div className="p-3 border-b dark:border-zinc-700 text-sm flex justify-between">
                                <span>Mano de Obra</span>
                                <span>€{ticket.laborCost?.toFixed(2)}</span>
                            </div>
                            <div className="p-3 border-b dark:border-zinc-700 text-sm flex justify-between">
                                <span>Repuestos / Materiales</span>
                                <span>€{ticket.partsCost?.toFixed(2)}</span>
                            </div>
                            {ticket.includeIva && (
                                <div className="p-3 border-b dark:border-zinc-700 text-sm flex justify-between text-gray-500">
                                    <span>IVA ({ticket.appliedIvaPercentage}%)</span>
                                    <span>€{ivaAmount.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="p-3 bg-gray-100 dark:bg-zinc-800/50 text-base font-bold flex justify-between">
                                <span>Total</span>
                                <span className="text-green-600">€{total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Photos */}
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
                        <div className="flex items-center gap-2 mb-6">
                            <Camera className="text-blue-600" />
                            <h2 className="font-bold text-lg">Evidencia Fotográfica</h2>
                        </div>
                        {ticket.photos?.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {ticket.photos.map((p: any) => (
                                    <div key={p.id} className="relative group">
                                        <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                                            <Image src={p.url} alt="Evidence" fill className="object-cover" />
                                        </div>
                                        <span className={`absolute bottom-0 left-0 right-0 text-[10px] font-bold text-white text-center py-1 ${p.type === 'INITIAL' ? 'bg-blue-600/80' : 'bg-green-600/80'}`}>
                                            {p.type === 'INITIAL' ? 'ANTES' : 'DESPUÉS'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-400 text-sm italic">No hay fotos adjuntas.</p>
                        )}
                    </div>
                </div>

                {/* Right: Sidebar Actions */}
                <div className="space-y-6">
                    {/* Customer Info Card */}
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
                        <h2 className="font-bold text-lg mb-4">Datos del Cliente</h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                                <User size={16} className="text-gray-400" />
                                <span className="font-medium">{ticket.customerName}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-gray-400" />
                                <a href={`tel:${ticket.customerPhone}`} className="hover:text-blue-600 underline">{ticket.customerPhone}</a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-gray-400 mt-1" />
                                <div>
                                    <p>{ticket.addressStreet}</p>
                                    <p className="text-xs text-gray-500">{ticket.addressColony}, {ticket.addressZip}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Admin Actions Form */}
                    <form action={formAction} className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 space-y-4">
                        <h2 className="font-bold text-lg mb-2">Administración</h2>

                        {/* Status Change - Disabled if Finalized/Cancelled */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-500">Estado</label>
                            {(ticket.status === 'FINISHED' || ticket.status === 'CANCELLED') ? (
                                <div className="p-2 border rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-500 text-sm font-bold flex items-center gap-2">
                                    {ticket.status === 'FINISHED' ? <CheckCircle size={16} /> : <XCircle size={16} />}
                                    {ticket.status} (Bloqueado)
                                </div>
                            ) : (
                                <select name="status" defaultValue={ticket.status} className="w-full p-2 border rounded-lg bg-white dark:bg-zinc-800 dark:border-zinc-700">
                                    <option value="PENDING">Pendiente</option>
                                    <option value="IN_PROGRESS">En Progreso</option>
                                    {/* Admins can manually set to FINISHED but usually technicians do it */}
                                </select>
                            )}
                            {(ticket.status === 'FINISHED' || ticket.status === 'CANCELLED') && (
                                <p className="text-xs text-red-500 mt-1">El estado finalizado no se puede modificar.</p>
                            )}
                        </div>

                        {/* Priority - Always editable unless closed */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-500">Prioridad</label>
                            <select
                                name="priority"
                                defaultValue={ticket.priority}
                                disabled={ticket.status === 'FINISHED' || ticket.status === 'CANCELLED'}
                                className="w-full p-2 border rounded-lg bg-white dark:bg-zinc-800 dark:border-zinc-700 disabled:opacity-50"
                            >
                                <option value="LOW">Baja</option>
                                <option value="MEDIUM">Media</option>
                                <option value="HIGH">Alta</option>
                            </select>
                        </div>

                        {/* Technician Assignment */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-500">Técnico Asignado</label>
                            <select
                                name="technicianId"
                                defaultValue={ticket.technicianId || 'UNASSIGNED'}
                                disabled={ticket.status === 'FINISHED' || ticket.status === 'CANCELLED'}
                                className="w-full p-2 border rounded-lg bg-white dark:bg-zinc-800 dark:border-zinc-700 disabled:opacity-50"
                            >
                                <option value="UNASSIGNED">-- Sin Asignar --</option>
                                {technicians.map(t => (
                                    <option key={t.id} value={t.id}>{t.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Save Button - Only active if not closed */}
                        {!(ticket.status === 'FINISHED' || ticket.status === 'CANCELLED') && (
                            <button disabled={isPending} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition shadow-lg shadow-blue-600/20">
                                {isPending ? <Loader2 className="animate-spin" /> : <Save size={18} />}
                                Guardar Cambios
                            </button>
                        )}

                        {state.message && <p className="text-green-600 text-center text-sm">{state.message}</p>}
                    </form>

                    {/* Invoice/Report Generation Button (Admin Override) */}
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
                        <button
                            onClick={() => setShowInvoice(true)}
                            className="w-full border border-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-800 dark:text-gray-200 font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition"
                        >
                            <FileText size={18} />
                            {ticket.signatureUrl ? 'Descargar Factura / Reporte' : 'Generar Factura / Reporte'}
                        </button>
                        <p className="text-xs text-gray-400 text-center mt-2">
                            {ticket.signatureUrl ? 'El documento ya está firmado.' : 'Permite descargar el PDF o compartirlo manualmente.'}
                        </p>
                    </div>

                </div>
            </div>

            {/* Invoice Modal for Admin */}
            {showInvoice && (
                <InvoiceModal
                    ticket={{
                        ...ticket,
                        isRepaired: ticket.isRepaired || false,
                        laborCost: ticket.laborCost || 0,
                        partsCost: ticket.partsCost || 0,
                        includeIva: ticket.includeIva ?? true,
                        ivaRate
                    }}
                    settings={effectiveSettings}
                    onClose={() => setShowInvoice(false)}
                />
            )}
        </div>
    )
}
