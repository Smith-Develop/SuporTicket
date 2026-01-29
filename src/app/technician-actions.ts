'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function updateTicketStatus(ticketId: string, status: string) {
    try {
        await db.ticket.update({
            where: { id: ticketId },
            data: { status }
        })
        revalidatePath('/technician')
        revalidatePath(`/technician/${ticketId}`)
        return { success: true }
    } catch (e) {
        return { success: false, error: 'Failed' }
    }
}

import { v2 as cloudinary } from 'cloudinary'

// Cloudinary Upload
export async function uploadPhoto(ticketId: string, formData: FormData) {
    try {
        // 1. Get Settings & Credentials
        // @ts-ignore
        const settings = await db.companySettings.findFirst()

        if (!settings?.cloudinaryCloudName || !settings?.cloudinaryApiKey || !settings?.cloudinaryApiSecret) {
            console.error('Missing Cloudinary Credentials')
            return { success: false, error: 'Cloudinary not configured' }
        }

        // 2. Configure Cloudinary
        cloudinary.config({
            cloud_name: settings.cloudinaryCloudName,
            api_key: settings.cloudinaryApiKey,
            api_secret: settings.cloudinaryApiSecret,
            secure: true
        })

        // 3. Process File
        const file = formData.get('file') as File
        const type = formData.get('type') as string // INITIAL or FINAL

        if (!file || file.size === 0) {
            return { success: false, error: 'No file provided' }
        }

        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        const base64Image = `data:${file.type};base64,${buffer.toString('base64')}`

        // 4. Upload to Cloudinary
        const result = await cloudinary.uploader.upload(base64Image, {
            folder: 'suporticket_photos',
            tags: [ticketId, type]
        })

        // 5. Save to DB
        await db.photo.create({
            data: {
                ticketId,
                url: result.secure_url,
                type
            }
        })

        revalidatePath(`/technician/${ticketId}`)
        return { success: true }

    } catch (e) {
        console.error('Upload Error:', e)
        return { success: false, error: 'Upload failed' }
    }
}

export async function updateTicketCancellation(ticketId: string, reason: string) {
    try {
        await db.ticket.update({
            where: { id: ticketId },
            data: {
                status: 'CANCELLED',
                // @ts-ignore
                cancellationReason: reason
            }
        })
        revalidatePath('/technician')
        revalidatePath(`/technician/${ticketId}`)
        return { success: true }
    } catch (e) {
        return { success: false, error: 'Failed to cancel ticket' }
    }
}

export async function updateTicketCosts(ticketId: string, labor: number, parts: number) {
    try {
        await db.ticket.update({
            where: { id: ticketId },
            data: {
                laborCost: labor,
                partsCost: parts,
                totalCost: labor + parts
            }
        })
        revalidatePath(`/technician/${ticketId}`)
        return { success: true }
    } catch (e) {
        return { success: false, error: 'Failed' }
    }
}

export async function updateTicketClosingData(ticketId: string, notes: string, isRepaired: boolean) {
    try {
        await db.ticket.update({
            where: { id: ticketId },
            data: {
                // @ts-ignore
                technicianNotes: notes,
                isRepaired: isRepaired
            }
        })
        revalidatePath(`/technician/${ticketId}`)
        return { success: true }
    } catch (e) {
        return { success: false, error: 'Failed to update closing data' }
    }
}

export async function saveSignature(ticketId: string, signatureData: string) {
    try {
        await db.ticket.update({
            where: { id: ticketId },
            // @ts-ignore
            data: { signatureUrl: signatureData }
        })
        revalidatePath(`/technician/${ticketId}`)
        revalidatePath('/admin')
        return { success: true }
    } catch (e) {
        console.error('Signature save error', e)
        return { success: false, error: 'Failed' }
    }
}

export async function getBase64Logo(url: string) {
    'use server'
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch image')

        const arrayBuffer = await response.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        const base64 = buffer.toString('base64')
        const mimeType = response.headers.get('content-type') || 'image/png'

        return {
            success: true,
            data: `data:${mimeType};base64,${base64}`,
            format: mimeType.split('/')[1].toUpperCase().replace('JPEG', 'JPG')
        }
    } catch (e) {
        console.error('Proxy Image Error', e)
        return { success: false }
    }
}
