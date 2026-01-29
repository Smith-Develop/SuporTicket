// Imports
import { db as prisma } from "@/lib/db"
import { notFound } from "next/navigation"
import { getSiteSettings, getPublicBrands } from "@/app/site-settings-actions"
import { Metadata } from "next"
import { CheckCircle, Wrench, Phone, ArrowRight } from "lucide-react"
import {
    LandingHeader,
    HeroSection,
    TrustBar,
    FeaturesSection,
    ProcessSteps,
    CoverageSection,
    FAQSection,
    SocialProofFooter,
    FloatingUrgencyBar
} from "@/components/landing/LandingComponents"

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const category = await prisma.category.findUnique({ where: { slug } })
    const settings = await getSiteSettings()

    if (!category) return {}

    return {
        title: `Reparación de ${category.name} en Madrid | ${settings?.companyName}`,
        description: category.description || `Servicio técnico oficial de ${category.name} en Madrid. Urgencias 24h.`,
    }
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params
    const category = await prisma.category.findUnique({ where: { slug } })
    const settings = await getSiteSettings()
    const brands = await getPublicBrands()

    if (!category || !category.isActive) {
        notFound()
    }

    // Custom copy for this service
    const heroTitle = `Reparación de ${category.name} en Madrid`
    const heroSubtitle = `Servicio técnico experto en ${category.name}. Solucionamos averías en el acto con piezas originales. Garantía de 12 meses.`

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
            <LandingHeader settings={settings} />

            {/* Reusing Hero with Custom Title */}
            <HeroSection
                settings={settings}
                customTitle={heroTitle}
                customSubtitle={heroSubtitle}
                customBgImage={category.heroImageUrl}
            />

            <TrustBar brands={brands} />

            {/* Custom Service Details Section - Matching Style */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-blue-600 font-bold uppercase text-sm tracking-widest mb-2 block">Servicio Especializado</span>
                        <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900">Expertos en {category.name}</h2>
                        <div className="prose prose-lg text-slate-600 mb-8">
                            <p>
                                Nuestro equipo de técnicos está altamente cualificado para diagnosticar y reparar cualquier avería en su <strong>{category.name}</strong>.
                                No importa la marca o el modelo, contamos con las herramientas y el stock de repuestos necesarios para devolverle la vida a su electrodoméstico en la primera visita.
                            </p>
                        </div>

                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                <Wrench className="w-5 h-5 text-blue-600" />
                                Fallas comunes que resolvemos
                            </h3>
                            <ul className="grid grid-cols-1 gap-3">
                                {['El equipo no enciende', 'Ruidos extraños o vibraciones', 'Fugas de agua o gas', 'Códigos de error en display', 'Limpieza y mantenimiento'].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href={`https://wa.me/${settings?.whatsappNumber?.replace(/\+/g, '').replace(/\s/g, '') || ''}`}
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                            >
                                <Phone className="w-5 h-5" />
                                Solicitar Técnico Ahora
                            </a>
                        </div>
                    </div>

                    {/* Visual / Image Side */}
                    <div className="relative h-[300px] lg:h-[500px] rounded-3xl overflow-hidden bg-slate-100 shadow-xl">
                        <img
                            src={category.imageUrl || "https://images.unsplash.com/photo-1621905476059-5f69547c6d7f?q=80&w=2069&auto=format&fit=crop"}
                            alt={`Reparación de ${category.name}`}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-blue-900/10"></div>
                    </div>
                </div>
            </section>

            <CoverageSection />

            <FeaturesSection />

            <ProcessSteps />

            <FAQSection />

            <SocialProofFooter settings={settings} />

            <FloatingUrgencyBar phoneNumber={settings?.whatsappNumber} />
        </main>
    )
}
