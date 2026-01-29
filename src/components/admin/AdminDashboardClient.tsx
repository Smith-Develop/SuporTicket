'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import TriageForm from '@/components/triage/TriageForm'
import { useRouter } from 'next/navigation'

type Props = {
    brands: any[]
    categories: any[]
    technicians?: any[] // Optional to not break other usages if any
    triageQuestions: any[]
}

export default function AdminDashboardClient({ brands, categories, technicians = [], triageQuestions }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const router = useRouter()

    const handleSuccess = () => {
        setIsModalOpen(false)
        router.refresh() // Refresh server components to show new ticket
    }

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold">Resumen General</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium w-full sm:w-auto justify-center"
                >
                    <Plus size={20} /> Nuevo Ticket
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white dark:bg-zinc-900 w-full max-w-3xl rounded-xl max-h-[90vh] overflow-y-auto">
                        <TriageForm
                            brands={brands}
                            categories={categories}
                            technicians={technicians}
                            triageQuestions={triageQuestions}
                            onSuccess={() => {
                                setIsModalOpen(false)
                                // Trigger refresh if needed
                            }}
                            onCancel={() => setIsModalOpen(false)}
                            isModal={true}
                        />
                    </div>
                </div>
            )}
        </>
    )
}
