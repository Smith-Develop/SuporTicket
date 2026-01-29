
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function GET() {
    try {
        const existingAdmin = await db.user.findFirst({
            where: { role: 'ADMIN' }
        })

        if (existingAdmin) {
            return NextResponse.json({ message: 'Admin user already exists', user: existingAdmin.email })
        }

        const hashedPassword = await bcrypt.hash('admin123', 10)

        const admin = await db.user.create({
            data: {
                name: 'Admin User',
                email: 'admin@suporticket.com',
                password: hashedPassword,
                role: 'ADMIN',
                phone: '000000000'
            }
        })

        return NextResponse.json({
            message: 'Admin user created successfully',
            credentials: {
                email: 'admin@suporticket.com',
                password: 'admin123'
            }
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
