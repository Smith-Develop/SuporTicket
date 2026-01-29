'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

// --- BRANDS ---

export async function getBrands() {
    return await db.brand.findMany({ orderBy: { name: 'asc' } })
}

export async function createBrand(formData: FormData) {
    const name = formData.get('name') as string
    const logoUrl = formData.get('logoUrl') as string
    try {
        await db.brand.create({ data: { name, logoUrl } })
        revalidatePath('/', 'layout')
        return { success: true, message: 'Marca creada' }
    } catch (e) {
        return { success: false, message: 'Error al crear marca' }
    }
}

export async function updateBrand(id: number, formData: FormData) {
    const name = formData.get('name') as string
    const logoUrl = formData.get('logoUrl') as string
    try {
        await db.brand.update({ where: { id }, data: { name, logoUrl } })
        revalidatePath('/', 'layout')
        return { success: true, message: 'Marca actualizada' }
    } catch (e) {
        return { success: false, message: 'Error al actualizar marca' }
    }
}

export async function deleteBrand(id: number) {
    try {
        await db.brand.delete({ where: { id } })
        revalidatePath('/', 'layout')
        return { success: true, message: 'Marca eliminada' }
    } catch (e) {
        return { success: false, message: 'Error al eliminar marca' }
    }
}

// --- CATEGORIES ---

export async function getCategories() {
    return await db.category.findMany({ orderBy: { name: 'asc' } })
}

export async function createCategory(formData: FormData) {
    const name = formData.get('name') as string
    const slug = name.toLowerCase().replace(/ /g, '-')
    const prefix = formData.get('prefix') as string || name.substring(0, 3).toUpperCase()
    const imageUrl = formData.get('imageUrl') as string
    const heroImageUrl = formData.get('heroImageUrl') as string

    try {
        await db.category.create({ data: { name, slug, prefix, imageUrl, heroImageUrl } })
        revalidatePath('/', 'layout')
        return { success: true, message: 'Categoría creada' }
    } catch (e) {
        return { success: false, message: 'Error al crear categoría' }
    }
}

export async function updateCategory(id: number, formData: FormData) {
    const name = formData.get('name') as string
    const prefix = formData.get('prefix') as string
    const imageUrl = formData.get('imageUrl') as string
    const heroImageUrl = formData.get('heroImageUrl') as string

    try {
        await db.category.update({ where: { id }, data: { name, prefix, imageUrl, heroImageUrl } })
        revalidatePath('/', 'layout')
        return { success: true, message: 'Categoría actualizada' }
    } catch (e) {
        return { success: false, message: 'Error al actualizar categoría' }
    }
}

export async function deleteCategory(id: number) {
    try {
        await db.category.delete({ where: { id } })
        revalidatePath('/', 'layout')
        return { success: true, message: 'Categoría eliminada' }
    } catch (e) {
        return { success: false, message: 'Error al eliminar categoría' }
    }
}


// --- TRIAGE QUESTIONS ---

export async function getTriageQuestions() {
    return await db.triageQuestion.findMany({
        orderBy: { id: 'asc' },
        include: { category: true }
    })
}

export async function createTriageQuestion(formData: FormData) {
    const text = formData.get('text') as string
    const triggerPriority = formData.get('triggerPriority') as string
    const categoryIdStr = formData.get('categoryId') as string
    const categoryId = categoryIdStr ? parseInt(categoryIdStr) : null

    try {
        await db.triageQuestion.create({
            data: { text, triggerPriority, categoryId }
        })
        revalidatePath('/', 'layout')
        return { success: true, message: 'Pregunta creada' }
    } catch (e) {
        return { success: false, message: 'Error al crear pregunta' }
    }
}

export async function deleteTriageQuestion(id: number) {
    try {
        await db.triageQuestion.delete({ where: { id } })
        revalidatePath('/', 'layout')
        return { success: true, message: 'Pregunta eliminada' }
    } catch (e) {
        return { success: false, message: 'Error al eliminar pregunta' }
    }
}

// --- SPARE PARTS (PRODUCTS) ---

export async function getSpareParts() {
    return await db.sparePart.findMany({ orderBy: { name: 'asc' } })
}

export async function createSparePart(formData: FormData) {
    const name = formData.get('name') as string
    const sku = formData.get('sku') as string
    const price = parseFloat(formData.get('price') as string) || 0
    const stock = parseInt(formData.get('stock') as string) || 0

    try {
        await db.sparePart.create({ data: { name, sku, price, stock } })
        revalidatePath('/admin/catalogs')
        return { success: true, message: 'Producto creado' }
    } catch (e) {
        return { success: false, message: 'Error al crear producto' }
    }
}

export async function updateSparePart(id: number, formData: FormData) {
    const name = formData.get('name') as string
    const sku = formData.get('sku') as string
    const price = parseFloat(formData.get('price') as string) || 0
    const stock = parseInt(formData.get('stock') as string) || 0

    try {
        await db.sparePart.update({ where: { id }, data: { name, sku, price, stock } })
        revalidatePath('/admin/catalogs')
        return { success: true, message: 'Producto actualizado' }
    } catch (e) {
        return { success: false, message: 'Error al actualizar producto' }
    }
}

export async function deleteSparePart(id: number) {
    try {
        await db.sparePart.delete({ where: { id } })
        revalidatePath('/admin/catalogs')
        return { success: true, message: 'Producto eliminado' }
    } catch (e) {
        return { success: false, message: 'Error al eliminar producto' }
    }
}
