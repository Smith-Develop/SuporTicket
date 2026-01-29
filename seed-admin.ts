
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    console.log('--- Seeding Admin User ---')
    const email = 'admin@suporticket.com'
    const password = 'admin'
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const user = await prisma.user.upsert({
            where: { email },
            update: {
                password: hashedPassword,
                role: 'ADMIN',
                name: 'Admin User'
            },
            create: {
                email,
                password: hashedPassword,
                name: 'Admin User',
                role: 'ADMIN' // Ensure your schema supports this enum or string
            }
        })
        console.log(`User created/updated: ${user.email} with password: ${password}`)
    } catch (e) {
        console.error('Error seeding user:', e)
    } finally {
        await prisma.$disconnect()
    }
}

main()
