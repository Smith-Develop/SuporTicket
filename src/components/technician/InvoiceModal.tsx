'use client'

import { useRef, useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import jsPDF from 'jspdf'
import { X, Download, Loader2, Share2 } from 'lucide-react'
// Import the server action proxy
import { saveSignature, getBase64Logo } from '@/app/technician-actions'

// Basic Type
type Ticket = {
    id: string;
    ticketNumber?: number; // Added
    customerName: string;
    customerPhone: string;
    addressStreet: string;
    addressColony: string;
    addressZip: string;
    laborCost: number;
    partsCost: number;
    issueDescription: string;
    brand: { name: string };
    category: { name: string, prefix?: string }; // Added prefix
    technicianNotes?: string;
    isRepaired?: boolean;
    customerEmail?: string;
    signatureUrl?: string;
}

export default function InvoiceModal({ ticket, settings, onClose }: { ticket: Ticket & { ivaRate: number, includeIva: boolean }, settings: any, onClose: () => void }) {
    const sigCanvas = useRef<any>(null)
    const [step, setStep] = useState(ticket.signatureUrl ? 2 : 1) // 1: Data, 2: Sign, 3: Success/Share
    const [generating, setGenerating] = useState(false)
    const [signed, setSigned] = useState(!!ticket.signatureUrl)
    const [pdfUrl, setPdfUrl] = useState<string | null>(null)

    // Form Data
    const [invoiceName, setInvoiceName] = useState(ticket.customerName)
    const [invoiceTaxId, setInvoiceTaxId] = useState('')
    const [invoiceEmail, setInvoiceEmail] = useState(ticket.customerEmail || '')
    const [invoiceAddress, setInvoiceAddress] = useState(`${ticket.addressStreet}, ${ticket.addressColony}`)

    const clearSignature = () => {
        sigCanvas.current?.clear()
    }

    const handleNextToSign = () => {
        setStep(2)
        // In real app, we might save the invoice data here via Server Action
    }

    const generatePDF = async () => {
        if (!signed && sigCanvas.current?.isEmpty()) {
            alert('Por favor, firme primero.')
            return
        }
        setGenerating(true)

        try {
            const doc = new jsPDF()
            const pageWidth = doc.internal.pageSize.getWidth()
            const margin = 20

            // --- Colors ---
            const PRIMARY_COLOR = [0, 102, 255] as [number, number, number] // Bright Blue
            const TEXT_COLOR = [30, 30, 30] as [number, number, number]
            const LIGHT_GRAY = [245, 245, 245] as [number, number, number]

            // --- Variables ---
            const subtotal = ticket.laborCost + ticket.partsCost
            const ivaAmount = ticket.includeIva ? (subtotal * ticket.ivaRate) : 0
            const total = subtotal + ivaAmount
            const displayId = ticket.ticketNumber && ticket.category.prefix
                ? `${ticket.category.prefix}${ticket.ticketNumber.toString().padStart(3, '0')}`
                : ticket.id.slice(-6).toUpperCase()
            const dateStr = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })

            let y = 20

            // --- 1. HEADER (Logo Left, Title Right) ---

            // Logo Logic (Server Proxy)
            if (settings.logoUrl) {
                try {
                    const result = await getBase64Logo(settings.logoUrl)
                    if (result.success && result.data && result.format) {
                        // Logo at Top Left
                        doc.addImage(result.data, result.format, margin, 15, 30, 30)
                    } else {
                        console.warn('Proxy returned no data for logo')
                    }
                } catch (e) {
                    console.warn('Logo load error', e)
                }
            }

            // Title Block (Right Aligned)
            doc.setFont("helvetica", "bold")
            doc.setFontSize(22)
            doc.setTextColor(0, 0, 0)
            // Title split in two lines if needed or one big line
            doc.text('FACTURA DE REPARACIÓN', pageWidth - margin, 25, { align: 'right' })

            doc.setFontSize(10)
            doc.setFont("helvetica", "normal")
            doc.setTextColor(100, 100, 100)
            doc.text(`Orden de servicio número:    ${displayId}`, pageWidth - margin, 35, { align: 'right' })
            doc.text(`Fecha de orden:    ${dateStr}`, pageWidth - margin, 40, { align: 'right' })

            y = 60

            // --- 2. ADDRESS COLUMNS (De / Cobrar a) ---
            // Left Column: "De" (Company)
            const col1X = margin
            doc.setFont("helvetica", "bold")
            doc.setFontSize(11)
            doc.setTextColor(...TEXT_COLOR)
            doc.text('De', col1X, y)
            y += 6
            doc.setFontSize(14)
            doc.text(settings.name || 'SuporTicket', col1X, y)
            y += 6
            doc.setFontSize(10)
            doc.setFont("helvetica", "normal")
            doc.setTextColor(80, 80, 80)
            // Split address lines
            const companyAddr = doc.splitTextToSize(`${settings.address || ''}\n${settings.email || ''}\n${settings.phone || ''}\n${settings.taxId ? 'NIF: ' + settings.taxId : ''}`, 80)
            doc.text(companyAddr, col1X, y)

            // Right Column: "Cobrar a" (Customer)
            // Reset Y for right column or take max?
            // Actually let's assume fixed height for address block or dynamic
            let yRight = 60
            const col2X = pageWidth - margin

            doc.setFont("helvetica", "bold")
            doc.setFontSize(11)
            doc.setTextColor(...TEXT_COLOR)
            doc.text('Cobrar a', col2X, yRight, { align: 'right' })
            yRight += 6
            doc.setFontSize(14)
            doc.text(invoiceName, col2X, yRight, { align: 'right' })
            yRight += 6
            doc.setFontSize(10)
            doc.setFont("helvetica", "normal")
            doc.setTextColor(80, 80, 80)

            const customerDetails = [
                invoiceEmail,
                invoiceAddress,
                invoiceTaxId ? `NIF: ${invoiceTaxId}` : ''
            ].filter(Boolean)

            customerDetails.forEach((line) => {
                doc.text(line, col2X, yRight, { align: 'right' })
                yRight += 5
            })

            // Move Y down to below the lowest address block
            y = Math.max(y + (companyAddr.length * 5), yRight) + 15

            // --- 3. ITEMS TABLE ---

            // Header Strip
            doc.setFillColor(...PRIMARY_COLOR)
            doc.rect(margin, y, pageWidth - (margin * 2), 10, 'F')

            doc.setTextColor(255, 255, 255)
            doc.setFont("helvetica", "bold")
            doc.setFontSize(9)

            // Columns: DESCRIPCIÓN (Left), TOTAL (Right)
            // We can add "CANTIDAD" / "PRECIO" if we had them per item, but we only have totals.
            // Let's fake it nicely.
            const tableY = y + 6.5
            doc.text('DESCRIPCIÓN', margin + 5, tableY)
            doc.text('IMPORTE', pageWidth - margin - 5, tableY, { align: 'right' })

            y += 10 // Row height

            // Content Rows
            doc.setTextColor(...TEXT_COLOR)
            doc.setFont("helvetica", "normal")

            // Helper for Row
            const drawRow = (desc: string, amount: number, isLast = false) => {
                // Background for striping? Optional.
                doc.text(desc, margin + 5, y + 6)
                doc.text(`€${amount.toFixed(2)}`, pageWidth - margin - 5, y + 6, { align: 'right' })

                // Bottom border
                if (!isLast) {
                    doc.setDrawColor(230, 230, 230)
                    doc.line(margin, y + 10, pageWidth - margin, y + 10)
                }
                y += 10
            }

            drawRow('Mano de Obra (Servicio Técnico)', ticket.laborCost)
            drawRow(`Repuestos / Materiales (${ticket.isRepaired ? 'Utilizados' : 'Cotizados'})`, ticket.partsCost, true)

            // --- 4. TOTALS SECTION (Right Aligned) ---
            y += 10
            const totalsX = pageWidth - margin

            // Subtotal
            doc.setFontSize(10)
            doc.text('Subtotal:', totalsX - 40, y, { align: 'right' })
            doc.text(`€${subtotal.toFixed(2)}`, totalsX, y, { align: 'right' })
            y += 6

            // Tax
            if (ticket.includeIva) {
                doc.text(`IVA (${(ticket.ivaRate * 100).toFixed(0)}%):`, totalsX - 40, y, { align: 'right' })
                doc.text(`€${ivaAmount.toFixed(2)}`, totalsX, y, { align: 'right' })
                y += 6
            }

            // Total Bar
            y += 4
            doc.setFillColor(...LIGHT_GRAY) // Light Gray bg for total
            doc.rect(totalsX - 60, y - 6, 60, 10, 'F')

            doc.setFont("helvetica", "bold")
            doc.setTextColor(...TEXT_COLOR)
            doc.setFontSize(12)
            doc.text('Saldo adeudado:', totalsX - 58, y)
            doc.text(`€${total.toFixed(2)}`, totalsX, y, { align: 'right' })

            // --- 5. NOTES & SIGNATURE ---
            y += 20

            // Left Side: Notes
            doc.setFont("helvetica", "bold")
            doc.setFontSize(11)
            doc.text('Notas / Observaciones', margin, y)
            y += 6
            doc.setFont("helvetica", "normal")
            doc.setFontSize(9)
            doc.setTextColor(80, 80, 80)

            const notes = ticket.technicianNotes || 'Sin observaciones adicionales.'
            const splitNotes = doc.splitTextToSize(notes, 100)
            doc.text(splitNotes, margin, y)

            // Right Side: Signature (Bottom Right)
            // We place it slightly differently than the image (which has it randomly),
            // but aligned with Total is good.

            const sigY = y - 5 // Start parallel to notes
            const sigX = pageWidth - margin - 40

            if (ticket.signatureUrl) {
                try {
                    // Try fetch proxy for signature too just in case? 
                    // Usually signature is dataURI from canvas so it works fine directly.
                    // But if it was saved as URL... `ticket.signatureUrl` is likely base64 from `saveSignature`.
                    // Wait, `saveSignature` saves base64 string. 
                    // So we can use it directly!
                    const imgProps = {
                        imageData: ticket.signatureUrl,
                        x: pageWidth - margin - 50,
                        y: sigY,
                        w: 50,
                        h: 25
                    }
                    doc.addImage(imgProps.imageData, 'PNG', imgProps.x, imgProps.y, imgProps.w, imgProps.h)

                    // Line under signature
                    doc.setDrawColor(0, 102, 255)
                    doc.line(imgProps.x, imgProps.y + 25, imgProps.x + 50, imgProps.y + 25)

                } catch (e) { console.warn('Signature add error', e) }
            } else if (sigCanvas.current && !sigCanvas.current.isEmpty()) {
                const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png')
                doc.addImage(signatureData, 'PNG', pageWidth - margin - 50, sigY, 50, 25)

                doc.setDrawColor(0, 102, 255)
                doc.line(pageWidth - margin - 50, sigY + 25, pageWidth - margin, sigY + 25)

                // Save signature to server
                await saveSignature(ticket.id, signatureData)
            }

            // Footer
            doc.setFontSize(8)
            doc.setTextColor(150, 150, 150)
            doc.text('Gracias por su preferencia.', pageWidth / 2, 280, { align: 'center' })

            // --- Output ---
            const pdfBlob = doc.output('blob')
            const url = URL.createObjectURL(pdfBlob)
            setPdfUrl(url)

            // Move to Step 3 (Share)
            setSigned(true) // Lock signature locally
            setStep(3)

        } catch (e) {
            console.error(e)
            alert('Error generando PDF')
        } finally {
            setGenerating(false)
        }
    }

    const sendWhatsApp = () => {
        const subtotal = ticket.laborCost + ticket.partsCost
        const ivaAmount = ticket.includeIva ? (subtotal * ticket.ivaRate) : 0
        const total = subtotal + ivaAmount

        const message = `Hola ${invoiceName}, adjunto su reporte (${ticket.brand.name}). Total: €${total.toFixed(2)} (IVA incluido).`
        const url = `https://wa.me/${ticket.customerPhone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
        window.open(url, '_blank')
    }

    const sendEmail = () => {
        const subject = `Reporte de Servicio #${ticket.id}`
        const body = `Hola ${invoiceName}, adjunto el reporte de servicio.`
        window.open(`mailto:${invoiceEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-zinc-900 rounded-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[95vh] shadow-2xl">

                {/* Header Steps */}
                <div className="flex border-b dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 items-center">
                    <div className={`flex-1 p-3 text-center text-xs font-bold border-b-2 ${step >= 1 ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400'}`}>1. Datos</div>
                    <div className={`flex-1 p-3 text-center text-xs font-bold border-b-2 ${step >= 2 ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400'}`}>2. Firma</div>
                    <div className={`flex-1 p-3 text-center text-xs font-bold border-b-2 ${step >= 3 ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400'}`}>3. Enviar</div>
                </div>

                <div className="p-1 flex justify-end">
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X size={20} className="text-gray-500" /></button>
                </div>

                <div className="p-6 flex-1 overflow-y-auto">

                    {/* STEP 1: DATA */}
                    {step === 1 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                            <h3 className="font-bold text-lg dark:text-white">Datos de Facturación</h3>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1">Nombre / Razón Social</label>
                                <input value={invoiceName} onChange={e => setInvoiceName(e.target.value)} className="w-full p-3 bg-gray-50 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1">NIF / CIF / DNI</label>
                                <input value={invoiceTaxId} onChange={e => setInvoiceTaxId(e.target.value)} placeholder="Ej: B12345678" className="w-full p-3 bg-gray-50 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1">Dirección Completa</label>
                                <input value={invoiceAddress} onChange={e => setInvoiceAddress(e.target.value)} className="w-full p-3 bg-gray-50 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1">Email del Cliente</label>
                                <input value={invoiceEmail} onChange={e => setInvoiceEmail(e.target.value)} type="email" placeholder="cliente@email.com" className="w-full p-3 bg-gray-50 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700" />
                            </div>
                            <button onClick={handleNextToSign} className="w-full mt-4 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition">
                                Siguiente: Firmar y Generar
                            </button>
                        </div>
                    )}

                    {/* STEP 2: SIGN */}
                    {step === 2 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                            <h3 className="font-bold text-lg dark:text-white text-center">
                                {ticket.signatureUrl ? 'Documento Firmado' : 'Firma del Cliente'}
                            </h3>

                            {!ticket.signatureUrl && (
                                <div className="border-2 border-dashed border-gray-300 dark:border-zinc-700 rounded-xl bg-white h-48 relative overflow-hidden shadow-inner">
                                    <SignatureCanvas
                                        ref={sigCanvas}
                                        penColor="black"
                                        canvasProps={{ className: 'w-full h-full' }}
                                        backgroundColor="rgba(0,0,0,0)"
                                    />
                                    <button onClick={clearSignature} className="absolute top-2 right-2 text-xs text-gray-500 bg-white shadow-sm border px-2 py-1 rounded hover:bg-gray-50">Borrar</button>
                                </div>
                            )}

                            {ticket.signatureUrl && (
                                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-center">
                                    <p className="text-green-700 font-medium">El cliente ya ha firmado este documento.</p>
                                    <p className="text-sm text-green-600 mt-1">Puede descargar la copia firmada a continuación.</p>
                                </div>
                            )}
                            <p className="text-xs text-gray-400 text-center">
                                Al firmar, el cliente acepta el servicio y el monto total de
                                <span className="font-bold text-black dark:text-white"> €{((ticket.laborCost + ticket.partsCost) * (ticket.includeIva ? (1 + ticket.ivaRate) : 1)).toFixed(2)}</span>
                            </p>

                            <div className="flex gap-3">
                                <button onClick={() => setStep(1)} className="flex-1 py-3 border rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-zinc-800">Atrás</button>
                                <button
                                    onClick={generatePDF}
                                    disabled={generating}
                                    className="flex-[2] bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 flex justify-center items-center gap-2"
                                >
                                    {generating && <Loader2 className="animate-spin" size={18} />}
                                    {generating && <Loader2 className="animate-spin" size={18} />}
                                    {ticket.signatureUrl ? 'Generar PDF' : 'Firmar y Finalizar'}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: SHARE */}
                    {step === 3 && (
                        <div className="space-y-6 text-center animate-in zoom-in-95 duration-300">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Share2 size={32} />
                            </div>
                            <h3 className="font-bold text-xl dark:text-white">¡Reporte Generado!</h3>
                            <p className="text-gray-500 text-sm px-8">El ticket ha sido cerrado y el PDF generado. Selecciona cómo enviarlo al cliente.</p>

                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => {
                                            const link = document.createElement('a');
                                            link.href = pdfUrl!;
                                            link.download = `Factura_${invoiceName.replace(/\s+/g, '_')}.pdf`;
                                            link.click();
                                        }}
                                        className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition"
                                    >
                                        <Download size={18} /> Descargar
                                    </button>
                                    <button
                                        onClick={() => window.open(pdfUrl!, '_blank')}
                                        className="flex-1 border-2 border-gray-800 text-gray-800 dark:text-white dark:border-white hover:bg-gray-50 dark:hover:bg-zinc-800 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition"
                                    >
                                        Visualizar
                                    </button>
                                </div>
                                <button onClick={sendWhatsApp} className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-3 transition shadow-lg">
                                    Enviar por WhatsApp
                                </button>
                                <button onClick={sendEmail} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-3 transition shadow-lg">
                                    Enviar por Email
                                </button>
                            </div>

                            <p className="text-xs text-red-400 mt-4">
                                * La firma ha sido guardada. No es posible volver a firmar.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
