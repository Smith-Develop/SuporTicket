import { db } from '@/lib/db'
import { InvoicePdfDocument } from '@/components/invoice/InvoicePdfDocument'
import { renderToStream } from '@react-pdf/renderer'
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: Promise<{ ticketId: string }> }
) {
    try {
        const { ticketId } = await params

        const ticket = await db.ticket.findUnique({
            where: { id: ticketId },
            include: {
                brand: true,
                category: true,
                technician: true,
                customer: true
            }
        })

        if (!ticket) {
            return new NextResponse('Ticket not found', { status: 404 })
        }

        const settings = await db.companySettings.findFirst()

        const stream = await renderToStream(<InvoicePdfDocument ticket={ticket} settings={settings} />)

        // Convert stream to standard Web Response
        return new NextResponse(stream as unknown as BodyInit, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `inline; filename="factura-${ticketId.slice(-6)}.pdf"`
            }
        })

    } catch (error) {
        console.error('PDF Generation Error:', error)
        return new NextResponse('Error generating PDF', { status: 500 })
    }
}
