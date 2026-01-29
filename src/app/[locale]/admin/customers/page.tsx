import { db } from '@/lib/db'

import { getTranslations } from 'next-intl/server'
import CustomerListClient from '@/components/admin/CustomerListClient'

export default async function CustomersPage() {
    const t = await getTranslations('Admin')

    const customers = await db.customer.findMany({
        orderBy: { updatedAt: 'desc' },
        include: {
            _count: {
                select: { tickets: true }
            }
        }
    })

    return (
        <CustomerListClient customers={customers} />
    )
}
