import { MetadataRoute } from 'next'
import { db } from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://suporticket.com'

    // Static routes
    const routes = [
        '',
        '/nosotros',
        '/garantia',
        '/politica-privacidad',
        '/terminos',
    ]

    // Get categories for dynamic service pages
    const categories = await db.category.findMany()
    const serviceUrls = categories.map((cat) => ({
        url: `${baseUrl}/es/servicios/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const staticUrls = routes.map((route) => ({
        url: `${baseUrl}/es${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.5,
    }))

    return [...staticUrls, ...serviceUrls]
}
