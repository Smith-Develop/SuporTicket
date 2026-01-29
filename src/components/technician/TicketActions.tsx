'use client'


import { formatTicketId } from '@/lib/utils'

import { useState } from 'react'
import { updateTicketStatus, updateTicketCosts, uploadPhoto, updateTicketClosingData, updateTicketCancellation } from '@/app/technician-actions'
import { Camera, Save, DollarSign, FileText, User, MapPin, AlertCircle, Phone, Info, CheckCircle, Clock, PlayCircle, Euro, XCircle } from 'lucide-react'
import Image from 'next/image'
import InvoiceModal from './InvoiceModal'
import { useRouter } from 'next/navigation'

export default function TicketActions({ ticket, settings }: { ticket: any, settings: any }) {
    const router = useRouter()
    const [status, setStatus] = useState(ticket.status)
    const [labor, setLabor] = useState(ticket.laborCost)
    const [parts, setParts] = useState(ticket.partsCost)
    // Closing State
    const [notes, setNotes] = useState(ticket.technicianNotes || '')
    const [isRepaired, setIsRepaired] = useState(ticket.isRepaired || false)
    const [includeIva, setIncludeIva] = useState(ticket.includeIva ?? true) // Default true or per db

    // Calculate total with or without IVA
    const subtotal = labor + parts
    const ivaRate = settings?.ivaPercentage ? (settings.ivaPercentage / 100) : 0.21
    const ivaAmount = includeIva ? (subtotal * ivaRate) : 0
    const total = subtotal + ivaAmount

    const [loading, setLoading] = useState(false)
    const [showInvoice, setShowInvoice] = useState(false)
    const [showCancelModal, setShowCancelModal] = useState(false)
    const [cancellationReason, setCancellationReason] = useState('')
    const [uploading, setUploading] = useState<string | null>(null)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const handleOpenInvoice = async () => {
        // Save closing data first
        await updateTicketClosingData(ticket.id, notes, isRepaired)
        setShowInvoice(true)
    }

    const handleStatusChange = async (newStatus: string) => {
        setLoading(true)
        await updateTicketStatus(ticket.id, newStatus)
        setStatus(newStatus)
        setLoading(false)
    }

    const handleCancelTicket = async () => {
        if (!cancellationReason.trim()) return alert('Debes justificar la cancelación')
        setLoading(true)
        await updateTicketCancellation(ticket.id, cancellationReason)
        setStatus('CANCELLED')
        setShowCancelModal(false)
        setLoading(false)
    }

    const handleSaveCosts = async () => {
        setLoading(true)
        await updateTicketCosts(ticket.id, Number(labor), Number(parts))
        setLoading(false)
        // Feedback
        alert('Costos actualizados correctamente')
    }

    const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        if (!e.target.files?.[0]) return
        setUploading(type)
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        formData.append('type', type)
        await uploadPhoto(ticket.id, formData)
        setUploading(null)
        router.refresh()
    }

    const formatCurrency = (amount: number) => {
        const currency = settings?.currencyCode || 'EUR'
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency }).format(amount)
    }

    return (
        <div className="p-4 md:p-6 bg-gray-50 dark:bg-zinc-950 min-h-screen pb-32 max-w-5xl mx-auto" suppressHydrationWarning>
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <button
                        onClick={() => router.back()}
                        className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 mb-2 flex items-center gap-1 text-sm font-medium transition"
                    >
                        &larr; Volver
                    </button>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                        Ticket #{formatTicketId(ticket)}
                    </h1>
                    <div className="flex items-center gap-2 text-gray-500 mt-1 text-sm">
                        <Clock size={16} />
                        <span>creado el {new Date(ticket.createdAt).toLocaleDateString('es-ES', { timeZone: 'UTC' })}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold border ${ticket.priority === 'HIGH' ? 'bg-red-100 text-red-700 border-red-200' :
                        ticket.priority === 'MEDIUM' ? 'bg-orange-100 text-orange-700 border-orange-200' :
                            'bg-blue-100 text-blue-700 border-blue-200'
                        }`}>
                        {ticket.priority === 'HIGH' ? '🔥 Alta Prioridad' : ticket.priority === 'MEDIUM' ? '⚡ Prioridad Media' : 'ℹ️ Normal'}
                    </span>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column: Details */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Status Card */}
                    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 p-6">
                        <h3 className="font-bold text-gray-500 text-xs uppercase mb-4 tracking-wider">Estado del Servicio</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {['PENDING', 'IN_PROGRESS', 'FINISHED', 'CANCELLED'].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => handleStatusChange(s)}
                                    disabled={loading || status === 'FINISHED' || status === 'CANCELLED'}
                                    className={`p-3 rounded-lg border-2 font-bold text-xs md:text-sm transition flex flex-col items-center justify-center gap-2 ${status === s
                                        ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                                        : 'border-transparent bg-gray-50 text-gray-500 hover:bg-gray-100 dark:bg-zinc-800 dark:text-gray-400'
                                        } ${s === 'CANCELLED' && status === s ? 'border-red-600 bg-red-50 text-red-700' : ''}`}
                                >
                                    {s === 'PENDING' && <Clock size={20} />}
                                    {s === 'IN_PROGRESS' && <PlayCircle size={20} />}
                                    {s === 'FINISHED' && <CheckCircle size={20} />}
                                    {s === 'CANCELLED' && <XCircle size={20} />}
                                    <span>{s === 'PENDING' ? 'Pendiente' : s === 'IN_PROGRESS' ? 'En Proceso' : s === 'FINISHED' ? 'Finalizado' : 'Cancelado'}</span>
                                </button>
                            ))}
                        </div>
                        {status === 'CANCELLED' && ticket.cancellationReason && (
                            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-lg text-sm text-red-700 dark:text-red-400">
                                <span className="font-bold">Motivo:</span> {ticket.cancellationReason}
                            </div>
                        )}
                        {(status !== 'CANCELLED' && status !== 'FINISHED') && (
                            <button
                                onClick={() => setShowCancelModal(true)}
                                className="mt-4 text-xs text-red-500 hover:underline flex items-center gap-1"
                            >
                                <XCircle size={12} /> Cancelar este servicio
                            </button>
                        )}
                    </div>

                    {/* Report Card */}
                    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <AlertCircle className="text-orange-500" />
                            <h3 className="font-bold text-lg">Reporte Inicial</h3>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-lg border border-orange-100 dark:border-orange-900/30 mb-6">
                            <h4 className="font-bold text-orange-800 dark:text-orange-400 mb-1 text-sm">Problema Reportado</h4>
                            <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
                                {ticket.issueDescription}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                                <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Equipo</span>
                                <span className="font-medium">{ticket.brand?.name || 'Genérico'} - {ticket.model || 'Sin Modelo'}</span>
                            </div>
                            <div className="p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                                <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Serie / SN</span>
                                <span className="font-medium font-mono">{ticket.serialNumber || 'N/A'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Evidence */}
                    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <Camera className="text-blue-600" />
                            <h3 className="font-bold text-lg">Evidencias Fotográficas</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Before */}
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-bold text-gray-500 uppercase">Diagnóstico (Antes)</span>
                                    {uploading === 'INITIAL' && <span className="text-xs text-blue-500 animate-pulse">Subiendo...</span>}
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {ticket.photos.filter((p: any) => p.type === 'INITIAL').map((p: any) => (
                                        <div
                                            key={p.id}
                                            onClick={() => setSelectedImage(p.url)}
                                            className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200 cursor-pointer hover:opacity-90 transition"
                                        >
                                            <Image src={p.url} alt="Evidencia" fill className="object-cover" />
                                        </div>
                                    ))}
                                    {(ticket.status !== 'FINISHED' && ticket.status !== 'CANCELLED') && (
                                        <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 hover:border-blue-400 transition text-gray-400 hover:text-blue-500">
                                            <input type="file" className="hidden" onChange={(e) => handlePhotoUpload(e, 'INITIAL')} accept="image/*" />
                                            <Camera size={24} />
                                            <span className="text-xs font-medium mt-1">Agregar</span>
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* After */}
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-bold text-gray-500 uppercase">Reparación (Después)</span>
                                    {uploading === 'FINAL' && <span className="text-xs text-blue-500 animate-pulse">Subiendo...</span>}
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {ticket.photos.filter((p: any) => p.type === 'FINAL').map((p: any) => (
                                        <div
                                            key={p.id}
                                            onClick={() => setSelectedImage(p.url)}
                                            className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200 cursor-pointer hover:opacity-90 transition"
                                        >
                                            <Image src={p.url} alt="Evidencia" fill className="object-cover" />
                                        </div>
                                    ))}
                                    {(ticket.status !== 'FINISHED' && ticket.status !== 'CANCELLED') && (
                                        <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 hover:border-blue-400 transition text-gray-400 hover:text-blue-500">
                                            <input type="file" className="hidden" onChange={(e) => handlePhotoUpload(e, 'FINAL')} accept="image/*" />
                                            <Camera size={24} />
                                            <span className="text-xs font-medium mt-1">Agregar</span>
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Customer & Costs ... */}
                {/* ... (Existing Customer & Costs UI) ... */}
                <div className="space-y-6">
                    {/* Customer Card */}
                    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <User className="text-gray-400" />
                            <h3 className="font-bold text-lg">Cliente</h3>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="font-bold text-lg text-gray-800 dark:text-gray-200">{ticket.customerName}</p>
                                <a href={`tel:${ticket.customerPhone}`} className="flex items-center gap-2 text-blue-600 hover:underline mt-1">
                                    <Phone size={14} /> {ticket.customerPhone}
                                </a>
                            </div>
                            <div className="bg-gray-50 dark:bg-zinc-800 p-3 rounded-lg flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <MapPin size={16} className="shrink-0 mt-0.5" />
                                <span>{ticket.addressStreet}, {ticket.addressColony}, {ticket.addressZip}</span>
                            </div>
                        </div>
                    </div>

                    {/* Costs Card */}
                    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Euro className="text-green-600" />
                            <h3 className="font-bold text-lg">Costos</h3>
                        </div>

                        <div className="space-y-4">
                            {Number(ticket.laborCost) + Number(ticket.partsCost) > 0 ? (
                                <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg border border-gray-200 dark:border-zinc-700 text-center">
                                    <div className="flex flex-col items-center gap-2 mb-3">
                                        <div className="bg-gray-200 dark:bg-zinc-700 p-3 rounded-full">
                                            <DollarSign size={24} className="text-gray-500" />
                                        </div>
                                        <h4 className="font-bold text-gray-700 dark:text-gray-300">Costos Registrados</h4>
                                    </div>

                                    <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-zinc-700 text-sm">
                                        <span className="text-gray-500">Mano de Obra:</span>
                                        <span className="font-mono font-medium">{formatCurrency(ticket.laborCost)}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-zinc-700 text-sm">
                                        <span className="text-gray-500">Repuestos:</span>
                                        <span className="font-mono font-medium">{formatCurrency(ticket.partsCost)}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-3 text-lg font-bold">
                                        <span>Total:</span>
                                        <span className="text-green-600 dark:text-green-400">{formatCurrency(ticket.totalCost)}</span>
                                    </div>

                                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-orange-600 bg-orange-50 dark:bg-orange-900/10 p-2 rounded">
                                        <Info size={14} />
                                        <span>Solo el Administrador puede modificar estos costos.</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Mano de Obra</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">€</span>
                                            <input
                                                type="number"
                                                value={labor}
                                                onChange={e => setLabor(Number(e.target.value))}
                                                className="w-full pl-8 pr-4 py-2 bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Repuestos / Materiales</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">€</span>
                                            <input
                                                type="number"
                                                value={parts}
                                                onChange={e => setParts(Number(e.target.value))}
                                                className="w-full pl-8 pr-4 py-2 bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>

                                    {/* IVA Toggle */}
                                    <div className="flex items-center justify-between py-2">
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={includeIva}
                                                onChange={(e) => setIncludeIva(e.target.checked)}
                                                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                            />
                                            Incluir IVA ({settings?.ivaPercentage || 21}%)
                                        </label>
                                    </div>

                                    <div className="pt-4 border-t dark:border-zinc-700 flex justify-between items-center">
                                        <span className="font-bold text-gray-600 dark:text-gray-400">Total Estimado</span>
                                        <div className="text-right">
                                            <span className="font-bold text-2xl text-gray-800 dark:text-white">
                                                {formatCurrency(total)}
                                            </span>
                                            {includeIva && <span className="block text-xs text-gray-400">(Incl. IVA)</span>}
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleSaveCosts}
                                        disabled={loading || (Number(labor) === 0 && Number(parts) === 0)}
                                        className="w-full py-3 bg-gray-900 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg flex items-center justify-center gap-2 font-medium transition shadow-lg shadow-gray-200 dark:shadow-none"
                                    >
                                        <Save size={18} />
                                        {loading ? 'Guardando...' : 'Guardar Costos Finales'}
                                    </button>
                                    <p className="text-xs text-center text-red-500 mt-2">
                                        ⚠️ Una vez guardados, no podrás modificarlos.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Closing Info */}
                    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <FileText className="text-purple-600" />
                            <h3 className="font-bold text-lg">Cierre del Servicio</h3>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Observaciones del Técnico</label>
                                <textarea
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    disabled={ticket.status === 'FINISHED' || ticket.status === 'CANCELLED'}
                                    className="w-full p-3 bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-24 text-sm disabled:opacity-70"
                                    placeholder="Detalles sobre la reparación, recomendaciones, o razones por las que no se pudo reparar..."
                                />
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">¿Equipo Reparado?</span>
                                {ticket.status === 'FINISHED' || ticket.status === 'CANCELLED' ? (
                                    <span className={`px-4 py-2 rounded-lg text-sm font-bold ${isRepaired ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {isRepaired ? 'SI' : 'NO'}
                                    </span>
                                ) : (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setIsRepaired(true)}
                                            className={`px-4 py-2 rounded-lg text-sm font-bold transition ${isRepaired
                                                ? 'bg-green-100 text-green-700 border-2 border-green-500'
                                                : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100'
                                                }`}
                                        >
                                            SI
                                        </button>
                                        <button
                                            onClick={() => setIsRepaired(false)}
                                            className={`px-4 py-2 rounded-lg text-sm font-bold transition ${isRepaired === false
                                                ? 'bg-red-100 text-red-700 border-2 border-red-500'
                                                : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100'
                                                }`}
                                        >
                                            NO
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Floating Action */}
            {status === 'FINISHED' && (
                <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 md:w-auto z-50">
                    <button
                        onClick={handleOpenInvoice}
                        className="w-full md:w-auto px-8 bg-black hover:bg-gray-800 text-white shadow-xl shadow-black/20 py-4 rounded-full flex items-center justify-center gap-2 font-bold text-lg transition transform hover:-translate-y-1"
                    >
                        <FileText />
                        {ticket.signatureUrl ? 'Descargar Reporte Firmado' : 'Finalizar y Generar Reporte'}
                    </button>
                </div>
            )}

            {showInvoice && (
                <InvoiceModal
                    ticket={{ ...ticket, technicianNotes: notes, isRepaired, laborCost: labor, partsCost: parts, includeIva, ivaRate }}
                    settings={settings}
                    onClose={() => setShowInvoice(false)}
                />
            )}

            {/* Cancel Modal */}
            {showCancelModal && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl w-full max-w-md p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cancelar Servicio</h3>
                            <button onClick={() => setShowCancelModal(false)}><XCircle className="text-gray-400" /></button>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                            Para cancelar este ticket, es obligatorio indicar el motivo. Esta acción es irreversible.
                        </p>
                        <textarea
                            value={cancellationReason}
                            onChange={(e) => setCancellationReason(e.target.value)}
                            className="w-full h-32 p-3 bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-red-500 mb-4 text-sm"
                            placeholder="Ej: Cliente rechazó el presupuesto, no se consiguen repuestos..."
                        />
                        <button
                            onClick={handleCancelTicket}
                            disabled={loading || !cancellationReason.trim()}
                            className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2"
                        >
                            {loading ? 'Cancelando...' : 'Confirmar Cancelación'}
                        </button>
                    </div>
                </div>
            )}

            {/* Image Viewer Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full max-w-4xl max-h-[90vh] aspect-auto">
                        <button
                            className="absolute -top-10 right-0 text-white hover:text-gray-300 p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <XCircle size={32} />
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Evidencia Full Screen"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
