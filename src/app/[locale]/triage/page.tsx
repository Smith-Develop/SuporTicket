import { db } from '@/lib/db'
import TriageForm from '@/components/triage/TriageForm'

export default async function TriagePage() {
    const brands = await db.brand.findMany()
    const categories = await db.category.findMany()

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-black py-12 px-4">
            <TriageForm brands={brands} categories={categories} />
        </div>
    )
}
