import { db } from '@/lib/db'
import Link from 'next/link'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import AdminLayoutClient from '@/components/admin/AdminLayoutClient'

export default async function AdminLayout({ children, params }: { children: React.ReactNode, params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const session = await getSession()

    // Fetch Settings
    // @ts-ignore
    const settings = await db.companySettings.findFirst()

    if (!session || session.role !== 'ADMIN') {
        redirect('/technician') // Or login
    }

    return (
        <AdminLayoutClient locale={locale} settings={settings}>
            {children}
        </AdminLayoutClient>
    )
}
