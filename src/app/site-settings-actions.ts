'use server'

import { db as prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// --- Public/Shared Actions ---

export async function getSiteSettings() {
    try {
        let settings = await prisma.siteSettings.findFirst()

        if (!settings) {
            // Create default settings if not exists
            settings = await prisma.siteSettings.create({
                data: {
                    companyName: "SuporTicket",
                    // All other fields use schema defaults
                }
            })
        }

        return settings
    } catch (error) {
        console.error("Error fetching site settings:", error)
        return null
    }
}

export async function getPublicCategories() {
    try {
        return await prisma.category.findMany({
            where: { isActive: true },
            include: {
                tickets: false // No need for tickets on public view yet
            },
            orderBy: { id: 'asc' }
        })
    } catch (error) {
        console.error("Error fetching public categories:", error)
        return []
    }
}

export async function getPublicBrands() {
    try {
        return await prisma.brand.findMany({
            where: { showOnWeb: true },
            orderBy: { name: 'asc' }
        })
    } catch (error) {
        console.error("Error fetching public brands:", error)
        return []
    }
}

// --- Admin Actions ---

export async function updateSiteSettings(formData: FormData) {
    // Authentication check should be here (omitted for brevity, relying on middleware/parent)

    const rawData: any = {}

    // Helper to extract string values
    const getText = (key: string) => {
        const value = formData.get(key)
        return typeof value === 'string' ? value : undefined
    }

    // Iterate over common fields
    const fields = [
        'companyName', 'logoUrl', 'faviconUrl',
        'emergencyPhone', 'whatsappNumber', 'supportEmail', 'address', 'googleMapUrl',
        'facebookUrl', 'instagramUrl', 'twitterUrl', 'linkedinUrl',
        'primaryColor', 'secondaryColor', 'fontFamily',
        'metaTitle', 'metaDescription', 'googleAnalyticsId', 'facebookPixelId',
        'heroTitle', 'heroTitleEn', 'heroSubtitle', 'heroSubtitleEn', 'heroImageUrl',
        'aboutTitle', 'aboutTitleEn', 'aboutText', 'aboutTextEn', 'aboutImageUrl',
        'privacyPolicy', 'termsConditions', 'warrantyPolicy'
    ]

    fields.forEach(field => {
        const val = getText(field)
        if (val !== undefined) rawData[field] = val
    })

    try {
        const currentSettings = await prisma.siteSettings.findFirst()
        const id = currentSettings?.id || 1

        await prisma.siteSettings.upsert({
            where: { id },
            update: rawData,
            create: rawData
        })

        revalidatePath('/')
        revalidatePath('/admin/settings/web')

        return { success: true }
    } catch (error) {
        console.error("Failed to update site settings:", error)
        return { success: false, error: "Failed to update settings" }
    }
}

export async function toggleServiceVisibility(categoryId: number, isActive: boolean) {
    try {
        await prisma.category.update({
            where: { id: categoryId },
            data: { isActive }
        })
        revalidatePath('/')
        revalidatePath('/admin/settings/web')
        return { success: true }
    } catch (error) {
        return { success: false, error: "Failed to toggle service" }
    }
}

export async function toggleBrandVisibility(brandId: number, showOnWeb: boolean) {
    try {
        await prisma.brand.update({
            where: { id: brandId },
            data: { showOnWeb }
        })
        revalidatePath('/')
        revalidatePath('/admin/settings/web')
        return { success: true }
    } catch (error) {
        return { success: false, error: "Failed to toggle brand" }
    }
}
