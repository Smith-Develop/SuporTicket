import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const brands = ['Samsung', 'LG', 'Whirlpool', 'Mabe', 'Bosch', 'Electrolux', 'Frigidaire', 'KitchenAid', 'General Electric (GE)', 'Maytag']
    for (const b of brands) {
        await prisma.brand.upsert({ where: { name: b }, update: {}, create: { name: b } })
    }

    const categories = ['Neveras', 'Lavadoras', 'Aires Acondicionados', 'Estufas Eléctricas', 'Calentadores de Agua', 'Hornos']
    for (const c of categories) {
        const slug = c.toLowerCase().replace(/ /g, '-').replace(/[áéíóú]/g, (match) => {
            const replacements: Record<string, string> = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };
            return replacements[match];
        });
        await prisma.category.upsert({ where: { slug }, update: {}, create: { name: c, slug } })
    }

    // Create Admin User
    // Note: In a real app, use strict types for bcrypt. Using 'require' or dynamic import if module issues arise in seed
    // But since we have esModuleInterop usually:
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash('Admin123', 10);

    await prisma.user.upsert({
        where: { email: 'admin@admin.com' },
        update: {},
        create: {
            email: 'admin@admin.com',
            name: 'Administrador',
            password: hashedPassword,
            role: 'ADMIN', // Or TECHNICIAN if schema strictly enforces enum, but schema has String default "TECHNICIAN"
            phone: '555-ADMIN'
        }
    })

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
