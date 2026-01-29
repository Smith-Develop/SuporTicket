import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import { InvoicePrintButton } from '@/components/invoice/InvoicePrintButton'

// Disable caching for invoice to ensure latest status/signature
export const dynamic = 'force-dynamic'

export default async function InvoicePage(props: { params: Promise<{ ticketId: string, locale: string }> }) {
    const params = await props.params
    const ticket = await db.ticket.findUnique({
        where: { id: params.ticketId },
        include: {
            brand: true,
            category: true,
            technician: true,
            customer: true
        }
    })

    if (!ticket) return notFound()

    const settings = await db.companySettings.findFirst()

    // PDF Colors
    const primaryColor = 'text-[#0066FF]'
    const bgPrimary = 'bg-[#0066FF]'

    // Calculations
    const subtotal = (ticket.laborCost || 0) + (ticket.partsCost || 0)
    const ivaRate = (settings?.ivaPercentage || 21) / 100
    const ivaAmount = ticket.includeIva ? (subtotal * ivaRate) : 0
    const total = subtotal + ivaAmount

    // Date formatting
    const dateStr = ticket.createdAt.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
    const friendlyId = ticket.category?.prefix
        ? `${ticket.category.prefix}${ticket.ticketNumber.toString().padStart(3, '0')}`
        : ticket.id.slice(-6).toUpperCase()

    // Invoice Specific Data or Fallback to Ticket
    const invoiceName = ticket.invoiceName || ticket.customerName
    const invoiceAddress = ticket.invoiceAddress || `${ticket.addressStreet}, ${ticket.addressColony}`
    const invoiceEmail = ticket.invoiceEmail || ticket.customer?.email || ''
    const invoiceTaxId = ticket.invoiceTaxId || ''

    return (
        <main className="min-h-screen bg-gray-100 dark:bg-zinc-950 p-4 md:p-8 flex justify-center items-start">
            <div className="bg-white dark:bg-zinc-900 w-full max-w-[210mm] shadow-2xl rounded-sm overflow-hidden min-h-[297mm] relative print:shadow-none print:w-full print:m-0 print:rounded-none">

                {/* Print Button (Hidden in Print) */}
                <div className="bg-gray-800 text-white p-2 flex justify-end print:hidden absolute top-0 right-0 left-0 z-50 opacity-90 hover:opacity-100 border-b border-gray-700">
                    <InvoicePrintButton className="flex items-center gap-2 font-bold text-sm px-4 py-2 hover:bg-gray-700 rounded-lg transition" />
                </div>

                <div className="p-12 md:p-16 space-y-8 text-slate-800 dark:text-slate-200 mt-8 print:mt-0">

                    {/* 1. Header */}
                    <div className="flex justify-between items-start">
                        {/* Logo */}
                        <div className="w-1/3">
                            {settings?.logoUrl ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={settings.logoUrl} alt="Logo" className="w-24 h-24 object-contain" />
                            ) : (
                                <h1 className={`text-2xl font-bold ${primaryColor}`}>{settings?.name || 'SuporTicket'}</h1>
                            )}
                        </div>

                        {/* Title Block */}
                        <div className="text-right">
                            <h2 className="text-3xl font-bold text-black dark:text-white uppercase tracking-wider">Factura de Reparación</h2>
                            <div className="mt-4 text-sm text-gray-500">
                                <p>Orden de servicio número: <span className="font-bold text-gray-800 dark:text-gray-300">{friendlyId}</span></p>
                                <p>Fecha de orden: <span className="font-bold text-gray-800 dark:text-gray-300">{dateStr}</span></p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Address Columns */}
                    <div className="flex justify-between mt-12 gap-12">
                        {/* De (Company) */}
                        <div className="flex-1">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">De</h3>
                            <p className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-2">{settings?.name || 'SuporTicket'}</p>
                            <div className="text-sm text-gray-500 space-y-1">
                                <p className="whitespace-pre-line">{settings?.address}</p>
                                <p>{settings?.email}</p>
                                <p>{settings?.phone}</p>
                                {settings?.taxId && <p>NIF: {settings.taxId}</p>}
                            </div>
                        </div>

                        {/* Cobrar a (Customer) */}
                        <div className="flex-1 text-right">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Cobrar a</h3>
                            <p className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-2">{invoiceName}</p>
                            <div className="text-sm text-gray-500 space-y-1">
                                {invoiceEmail && <p>{invoiceEmail}</p>}
                                <p className="whitespace-pre-line">{invoiceAddress}</p>
                                {invoiceTaxId && <p>NIF: {invoiceTaxId}</p>}
                            </div>
                        </div>
                    </div>

                    {/* 3. Items Table */}
                    <div className="mt-12">
                        {/* Header Strip */}
                        <div className={`${bgPrimary} text-white font-bold text-sm uppercase flex px-4 py-2 rounded-sm`}>
                            <div className="flex-1">Descripción</div>
                            <div className="w-32 text-right">Importe</div>
                        </div>

                        {/* Rows */}
                        <div className="divide-y divide-gray-200 dark:divide-zinc-800">
                            <div className="flex px-4 py-4 items-center">
                                <div className="flex-1">
                                    <p className="font-medium text-slate-800 dark:text-slate-200">Mano de Obra (Servicio Técnico)</p>
                                    <p className="text-sm text-gray-500 mt-0.5">{ticket.issueDescription}</p>
                                </div>
                                <div className="w-32 text-right font-medium">€{(ticket.laborCost || 0).toFixed(2)}</div>
                            </div>
                            <div className="flex px-4 py-4 items-center">
                                <div className="flex-1">
                                    <p className="font-medium text-slate-800 dark:text-slate-200">Repuestos / Materiales</p>
                                    <p className="text-sm text-gray-500 mt-0.5">
                                        {ticket.isRepaired ? 'Utilizados' : 'Cotizados'}
                                    </p>
                                </div>
                                <div className="w-32 text-right font-medium">€{(ticket.partsCost || 0).toFixed(2)}</div>
                            </div>
                        </div>
                        {/* Bottom line */}
                        <div className="h-px bg-gray-200 dark:bg-zinc-800"></div>
                    </div>

                    {/* 4. Totals */}
                    <div className="flex justify-end mt-8">
                        <div className="w-64">
                            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                                <span>Subtotal:</span>
                                <span>€{subtotal.toFixed(2)}</span>
                            </div>
                            {ticket.includeIva && (
                                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    <span>IVA ({(ivaRate * 100).toFixed(0)}%):</span>
                                    <span>€{ivaAmount.toFixed(2)}</span>
                                </div>
                            )}

                            <div className="bg-gray-100 dark:bg-zinc-800 p-3 flex justify-between items-center rounded-sm mt-2">
                                <span className="font-bold text-slate-800 dark:text-white">Saldo adeudado:</span>
                                <span className="font-bold text-xl text-slate-900 dark:text-white">€{total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {/* 5. Notes & Signature */}
                    <div className="mt-16 flex flex-col md:flex-row justify-between gap-12 items-end">

                        {/* Notes */}
                        <div className="flex-1">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Notas / Observaciones</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {ticket.technicianNotes || 'Sin observaciones adicionales.'}
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="w-64 text-center">
                            {ticket.signatureUrl ? (
                                <div className="mb-2 flex flex-col items-center">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={ticket.signatureUrl} alt="Firma" className="max-h-24 object-contain mb-2" />
                                    <div className={`h-0.5 w-full ${bgPrimary}`}></div>
                                </div>
                            ) : (
                                <div className="h-24 border-b-2 border-dashed border-gray-300 mb-2"></div>
                            )}
                            <p className="text-xs uppercase font-bold text-gray-400">Firma del Cliente</p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-20 text-center">
                        <p className="text-xs text-gray-400">Gracias por su preferencia.</p>
                    </div>

                </div>
            </div>
        </main>
    )
}
