'use server'

import { db as prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function createPublicTicket(formData: FormData) {
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const issueDescription = formData.get('issueDescription') as string
    const categoryId = parseInt(formData.get('categoryId') as string)

    if (!name || !phone || !issueDescription) {
        return { success: false, message: 'Faltan datos obligatorios' }
    }

    try {
        // 1. Find or Create Customer
        let customer = await prisma.customer.findUnique({
            where: { phone }
        })

        if (!customer) {
            customer = await prisma.customer.create({
                data: {
                    name,
                    phone,
                    // documentNumber could be optional here
                }
            })
        }

        // 2. Create Ticket
        // We need a Brand. If not provided, maybe use a "Generic" brand or find first.
        // Ideally the form sends brandId or we default. 
        // For now, let's look for a brand named "Generico" or just ID 1.
        // Safe lookup:
        let brandId = parseInt(formData.get('brandId') as string)
        if (isNaN(brandId)) {
            const firstBrand = await prisma.brand.findFirst()
            brandId = firstBrand?.id || 1
        }

        const ticket = await prisma.ticket.create({
            data: {
                customerId: customer.id,
                customerName: customer.name,
                customerPhone: customer.phone,
                issueDescription: issueDescription,
                categoryId: isNaN(categoryId) ? 1 : categoryId, // Fallback if missing
                brandId: brandId,
                status: "PENDING",
                triageData: "{}", // Empty JSON
                priority: "MEDIUM"
            }
        })

        revalidatePath('/admin') // Update Dashboard
        return { success: true, message: 'Ticket created successfully', ticketId: ticket.id }
    } catch (error) {
        console.error('Error creating public ticket:', error)
        return { success: false, message: 'Error interno del servidor' }
    }
}
