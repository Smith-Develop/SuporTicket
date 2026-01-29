'use server'

import { getServicesDb } from '@/lib/services-db'

export async function searchCustomers(query: string) {
    const db = await getServicesDb()
    if (!query || query.length < 2) return []

    const customers = await db.customer.findMany({
        where: {
            OR: [
                { name: { contains: query } }, // Case insensitive usually depends on DB collation, SQLite is default insensitive for ASCII
                { phone: { contains: query } },
                { email: { contains: query } },
                { documentNumber: { contains: query } }
            ]
        },
        take: 5
    })

    return customers
}

export async function updateCustomer(id: string, prevState: any, formData: FormData) {
    const db = await getServicesDb()
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const address = formData.get('address') as string

    if (!id || !name) {
        return { message: 'Missing required fields' }
    }

    try {
        await db.customer.update({
            where: { id },
            data: {
                name,
                phone,
                email,
                address
            }
        })

        // Revalidate the customers page
        // Note: The path might need to be dynamic for locale, but usually revalidating the generic path works or we can use specific paths
        // For simple admin dashboard revalidation:
        return { message: 'Customer updated successfully!', success: true }
    } catch (e) {
        console.error(e)
        return { message: 'Failed to update customer', success: false }
    }
}
