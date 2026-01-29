'use server'

import { localDb } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { PrismaClient } from '@prisma/client'

export async function getCompanySettings() {
    let settings = await localDb.companySettings.findFirst()
    if (!settings) {
        settings = await localDb.companySettings.create({
            data: { name: 'My Company' }
        })
    }
    return settings
}

export async function updateCompanySettings(prevState: any, formData: FormData) {
    const name = formData.get('name') as string
    const taxId = formData.get('taxId') as string
    const address = formData.get('address') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const logoUrl = formData.get('logoUrl') as string
    const ivaPercentage = parseFloat(formData.get('ivaPercentage') as string) || 0
    const currencySymbol = formData.get('currencySymbol') as string
    const currencyCode = formData.get('currencyCode') as string
    const countryCode = formData.get('countryCode') as string

    // Cloudinary
    const cloudinaryCloudName = formData.get('cloudinaryCloudName') as string
    const cloudinaryApiKey = formData.get('cloudinaryApiKey') as string
    const cloudinaryApiSecret = formData.get('cloudinaryApiSecret') as string

    await localDb.companySettings.updateMany({
        data: {
            name,
            taxId,
            address,
            phone,
            email,
            logoUrl,
            ivaPercentage,
            currencySymbol,
            currencyCode,
            countryCode,
            // @ts-ignore
            cloudinaryCloudName,
            // @ts-ignore
            cloudinaryApiKey,
            // @ts-ignore
            cloudinaryApiSecret
        }
    })

    revalidatePath('/admin/settings')
    return { success: true, message: 'Settings saved' }
}

