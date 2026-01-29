'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'

export async function createTechnician(prevState: any, formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const password = formData.get('password') as string

    if (!name || !email || !password) {
        return { message: 'Missing required fields' }
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        await db.user.create({
            data: {
                name,
                email,
                phone,
                password: hashedPassword,
                role: 'TECHNICIAN'
            }
        })

        revalidatePath('/admin/technicians')
        return { message: 'Technician created successfully!' }
    } catch (e) {
        console.error(e)
        return { message: 'Failed to create technician (Email might be in use)' }
    }
}

export async function deleteTechnician(id: string) {
    try {
        await db.user.delete({ where: { id } })
        revalidatePath('/admin/technicians')
        return { message: 'Technician deleted' }
    } catch (e) {
        console.error(e)
        return { message: 'Failed to delete' }
    }
}

export async function updateTechnician(id: string, prevState: any, formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string

    if (!id || !name || !email) {
        return { message: 'Missing required fields', success: false }
    }

    try {
        await db.user.update({
            where: { id },
            data: { name, email, phone }
        })
        revalidatePath('/admin/technicians')
        return { message: 'Technician updated successfully!', success: true }
    } catch (e) {
        console.error(e)
        return { message: 'Failed to update technician', success: false }
    }
}

export async function resetTechnicianPassword(id: string, prevState: any, formData: FormData) {
    const password = formData.get('password') as string

    if (!id || !password) {
        return { message: 'Missing password', success: false }
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        await db.user.update({
            where: { id },
            data: { password: hashedPassword }
        })
        revalidatePath('/admin/technicians')
        return { message: 'Password reset successfully!', success: true }
    } catch (e) {
        console.error(e)
        return { message: 'Failed to reset password', success: false }
    }
}
