import { db } from '@/lib/db'
import { Plus, Trash2, Phone, Mail } from 'lucide-react'
import TechnicianPageClient from '@/components/admin/TechnicianPageClient'

// Create a client component for the interactive parts (Modal, Delete)
// But fetching data is better here in Rsc

export default async function TechniciansPage() {
    const technicians = await db.user.findMany({
        where: { role: 'TECHNICIAN' },
        orderBy: { name: 'asc' },
        include: {
            tickets: {
                orderBy: { createdAt: 'desc' },
                include: { brand: true, category: true }
            },
            _count: {
                select: { tickets: true }
            }
        }
    })

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold">Gestión de Técnicos</h1>
                    <p className="text-gray-500 text-sm">Administra el acceso y asignación de personal.</p>
                </div>
            </div>

            <TechnicianPageClient technicians={technicians} />
        </div>
    )
}
