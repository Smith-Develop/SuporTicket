
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('--- Checking Database Connection ---')
    try {
        const settings = await prisma.siteSettings.findFirst()
        console.log('SiteSettings:', settings)

        const brands = await prisma.brand.findMany()
        console.log('Brands Count:', brands.length)

        const categories = await prisma.category.findMany()
        console.log('Categories Count:', categories.length)

        const users = await prisma.user.findMany({ select: { email: true, role: true } })
        console.log('Users Count:', users.length)
        console.log('User Emails:', users)

    } catch (e) {
        console.error('Error connecting to DB:', e)
    } finally {
        await prisma.$disconnect()
    }
}

main()
