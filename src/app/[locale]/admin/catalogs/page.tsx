import {
    getBrands, getCategories, getSpareParts,
    createBrand, updateBrand, deleteBrand,
    createCategory, updateCategory, deleteCategory,
    createSparePart, updateSparePart, deleteSparePart,
    getTriageQuestions, createTriageQuestion, deleteTriageQuestion
} from '@/app/catalogs-actions'
import GenericCatalogList from '@/components/catalogs/GenericCatalogList'
import ProductList from '@/components/catalogs/ProductList'
import TriageQuestionList from '@/components/catalogs/TriageQuestionList'
import { Server } from 'lucide-react'

import Link from 'next/link'

export default async function CatalogsPage({ searchParams, params }: { searchParams: { tab?: string }, params: Promise<{ locale: string }> }) {
    const tab = (await searchParams)?.tab || 'products'
    const { locale } = await params

    const brands = await getBrands()
    const categories = await getCategories()
    const spareParts = await getSpareParts()
    const questions = await getTriageQuestions()

    return (
        <div className="p-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <Server className="text-blue-600" />
                    Catálogos
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Gestión de datos maestros del sistema</p>
            </header>

            {/* Tabs Navigation */}
            <div className="flex gap-4 border-b border-gray-200 dark:border-zinc-800 mb-6 overflow-x-auto">
                <Link
                    href={`/${locale}/admin/catalogs?tab=products`}
                    className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${tab === 'products'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                >
                    Repuestos y Productos
                </Link>
                <Link
                    href={`/${locale}/admin/catalogs?tab=brands`}
                    className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${tab === 'brands'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                >
                    Marcas
                </Link>
                <Link
                    href={`/${locale}/admin/catalogs?tab=categories`}
                    className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${tab === 'categories'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                >
                    Categorías de Dispositivos
                </Link>
                <Link
                    href={`/${locale}/admin/catalogs?tab=questions`}
                    className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${tab === 'questions'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                >
                    Preguntas Filtro
                </Link>
            </div>

            {/* Content Area */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {tab === 'products' && (
                    <ProductList
                        items={spareParts}
                        onCreate={createSparePart}
                        onUpdate={updateSparePart}
                        onDelete={deleteSparePart}
                    />
                )}

                {tab === 'brands' && (
                    <GenericCatalogList
                        title="Gestión de Marcas"
                        items={brands}
                        onCreate={createBrand}
                        onUpdate={updateBrand}
                        onDelete={deleteBrand}
                        imageFieldName="logoUrl"
                    />
                )}

                {tab === 'categories' && (
                    <GenericCatalogList
                        title="Categorías de Dispositivos"
                        items={categories}
                        onCreate={createCategory}
                        onUpdate={updateCategory}
                        onDelete={deleteCategory}
                        hasPrefix={true}
                        imageFieldName="imageUrl"
                        heroImageFieldName="heroImageUrl"
                    />
                )}

                {tab === 'questions' && (
                    <TriageQuestionList
                        questions={questions}
                        categories={categories}
                        onCreate={createTriageQuestion}
                        onDelete={deleteTriageQuestion}
                    />
                )}
            </div>
        </div>
    )
}
