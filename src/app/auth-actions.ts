'use server'

import { db } from '@/lib/db'
import { createSession, logout } from '@/lib/auth'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'

export async function loginAction(prevState: any, formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
        return { error: 'Por favor complete todos los campos.' }
    }

    try {
        const user = await db.user.findUnique({
            where: { email }
        })

        if (!user) {
            return { error: 'Credenciales inválidas.' }
        }

        // Check password (if user has one)
        // For security, strictly we should require password.
        if (user.password) {
            const isValid = await bcrypt.compare(password, user.password)
            if (!isValid) {
                return { error: 'Credenciales inválidas.' }
            }
        } else {
            // Optional: Allow login without password if not set (legacy or initial setup)
            // Or force generic error. For now, let's block if no password set to be safe, 
            // but user requested simple technician login.
            // If we want to allow "easy" login for setup:
            // if (password !== '123456') ... 
            // Ideally we force password check.
            return { error: 'Este usuario no tiene contraseña configurada.' }
        }

        // Create Session
        // Create Session
        await createSession({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        })

        if (user.role === 'ADMIN') {
            redirect('/admin')
        } else {
            redirect('/technician')
        }

    } catch (error) {
        // Redirect throws an error, so we need to catch it and re-throw if it's a redirect
        if ((error as any).digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        console.error('Login error:', error)
        return { error: 'Ocurrió un error inesperado.' }
    }
}

export async function logoutAction() {
    await logout()
    redirect('/login')
}
