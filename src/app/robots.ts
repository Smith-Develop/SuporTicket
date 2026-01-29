import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://suporticket.com' // Fallback or env

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/admin/',
                '/technician/',
                '/api/',
                '/private/',
            ],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
