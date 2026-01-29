'use client'

import { useState, useEffect } from 'react'
import { createPublicTicket } from '@/app/public-actions'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from 'next/navigation'
import {
    Phone, CheckCircle, Wrench, Star, ArrowRight, Loader2, MessageCircle,
    ClipboardList, AlertCircle, ShieldCheck, Clock, UserCheck, Banknote, Menu, X, MapPin,
    Snowflake, Waves, Wind, Flame, Tv, Smartphone, Zap, Thermometer, Droplets
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Helper: robust WhatsApp link generation
function getWhatsAppLink(settingsOnly?: string) {
    if (settingsOnly) {
        const clean = settingsOnly.replace('+', '').replace(/\s/g, '')
        return `https://wa.me/${clean}`
    }
    // Fallback default
    return 'https://wa.me/34600123456?text=Hola,%20tengo%20una%20urgencia%20con%20mi%20electrodoméstico'
}

// --- Floating Urgency Bar (Full Width Bottom) ---
export function FloatingUrgencyBar({ phoneNumber }: { phoneNumber?: string }) {
    const link = getWhatsAppLink(phoneNumber)

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-0 left-0 w-full z-50 bg-red-600 hover:bg-red-700 text-white py-4 px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.2)] flex items-center justify-center gap-3 transition-colors md:hidden"
            aria-label="Reportar Urgencia"
        >
            <div className="bg-white/20 p-2 rounded-full animate-pulse">
                <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col items-start leading-tight">
                <span className="font-black uppercase tracking-wider text-sm text-red-100">Servicio de Urgencias</span>
                <span className="font-bold text-lg">Reportar Falla Ahora</span>
            </div>
            <ArrowRight className="w-6 h-6 ml-auto" />
        </a>
    )
}

// --- 1. Sticky Header ---
export function LandingHeader({ settings }: { settings: any }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const params = useParams()
    const locale = params?.locale || 'es'

    const whatsappLink = getWhatsAppLink(settings?.whatsappNumber)
    const displayPhone = settings?.whatsappNumber || "912 345 678"

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href={`/${locale}`} className="flex items-center gap-3 group">
                    {settings?.logoUrl ? (
                        <img src={settings.logoUrl} alt="Logo" className="h-10 w-auto object-contain" />
                    ) : null}
                    <span className={`text-xl font-black tracking-tighter transition-colors ${settings?.logoUrl ? 'text-slate-900' : 'text-blue-900'}`}>
                        {settings?.companyName || "SuporTicket"}
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                    <Link href={`/${locale}#services`} className="hover:text-blue-600 transition-colors">Servicios</Link>
                    <Link href={`/${locale}/nosotros`} className="hover:text-blue-600 transition-colors">Nosotros</Link>
                    <Link href={`/${locale}/garantia`} className="hover:text-blue-600 transition-colors">Garantía</Link>
                </nav>

                {/* Urgent Button (Desktop) */}
                <div className="hidden md:flex items-center">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-red-500/30 transition-all hover:scale-105 flex items-center gap-2 animate-pulse"
                    >
                        <AlertCircle className="w-5 h-5" />
                        URGENCIAS: {displayPhone}
                    </a>
                </div>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-4">
                    {/* Mobile Urgent Icon - Visible on header */}
                    <a href={whatsappLink} className="bg-red-600 text-white p-2 rounded-full shadow-md animate-pulse">
                        <AlertCircle className="w-5 h-5" />
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button className="text-slate-800 p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t absolute top-full left-0 w-full shadow-xl"
                    >
                        <div className="flex flex-col p-6 gap-6 font-medium text-slate-600">
                            <Link href={`/${locale}#services`} className="text-lg" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
                            <Link href={`/${locale}/nosotros`} className="text-lg" onClick={() => setMobileMenuOpen(false)}>Nosotros</Link>
                            <Link href={`/${locale}/garantia`} className="text-lg" onClick={() => setMobileMenuOpen(false)}>Garantía</Link>

                            {/* Big Urgent Button in Menu too */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                className="bg-red-600 text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-2"
                            >
                                <AlertCircle className="w-6 h-6" />
                                REPORTAR URGENCIA
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

// --- 2. Hero Section (Specific Copy) ---
// --- 2. Hero Section (Specific Copy) ---
export function HeroSection({ settings, customTitle, customSubtitle, customBgImage }: { settings: any, customTitle?: string, customSubtitle?: string, customBgImage?: string }) {
    // Specific Madrid SEO Copy
    const defaultTitle = "¿Tu electrodoméstico falló? Lo reparamos hoy mismo en cualquier zona de Madrid."
    const defaultSubtitle = "No esperes días para una solución. Contamos con técnicos certificados en todos los distritos de la capital. Ofrecemos desplazamiento GRATUITO si realizas la reparación con nosotros."

    const title = customTitle || defaultTitle
    const subtitle = customSubtitle || defaultSubtitle

    const bgImage = customBgImage || settings?.heroImageUrl || "https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=2070&auto=format&fit=crop"

    const whatsappLink = getWhatsAppLink(settings?.whatsappNumber)

    return (
        <section className="relative w-full pt-32 pb-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="space-y-6 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Servicio Técnico a Domicilio 24h
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl xl:text-5xl font-extrabold text-slate-900 leading-[1.1]"
                    >
                        {title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                    >
                        {/* H1 SEO Hidden or Sub-header equivalent for SEO structure */}
                        <h2 className="sr-only">Reparación de Electrodomésticos en Madrid</h2>
                    </motion.div>


                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 leading-relaxed max-w-lg"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <a
                            href={`tel:${settings?.whatsappNumber || "912345678"}`} // Assuming phone context
                            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-500/30 transition-all flex items-center justify-center gap-3 hover:-translate-y-1"
                        >
                            <Phone className="w-6 h-6" />
                            Llamar ahora (Urgencias)
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 transition-all flex items-center justify-center gap-3 hover:-translate-y-1"
                        >
                            <MessageCircle className="w-6 h-6" />
                            Pedir presupuesto por WhatsApp
                        </a>
                    </motion.div>
                </div>

                {/* Image / Collage */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative h-[400px] lg:h-[550px] rounded-3xl overflow-hidden bg-slate-100 shadow-2xl"
                >
                    <Image
                        src={bgImage}
                        alt="Reparación de Electrodomésticos en Madrid"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white font-bold p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                        <p>⭐️ 4.9/5 Calificación en Madrid</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// --- 3. Trust Bar (Infinite Slider) ---
export function TrustBar({ brands }: { brands: any[] }) {
    const defaultBrands = [
        { id: 'samsung', name: 'Samsung', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
        { id: 'lg', name: 'LG', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg' },
        { id: 'whirlpool', name: 'Whirlpool', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Whirlpool_Corporation_logo.svg' },
        { id: 'bosch', name: 'Bosch', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Bosch-Logo.svg' },
        { id: 'mabe', name: 'Mabe', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Mabe_logo.svg' },
        { id: 'kitchenaid', name: 'KitchenAid', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/KitchenAid_logo.svg' },
        { id: 'ge', name: 'GE', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo_2004.svg' }
    ]

    const displayBrands = (!brands || brands.length === 0) ? defaultBrands : brands

    return (
        <section className="py-10 bg-slate-50 border-y border-slate-100 overflow-hidden" id="brands">
            <div className="container mx-auto px-4 mb-6">
                <h2 className="text-center text-slate-900 text-xl font-bold mb-2">Expertos en las principales marcas del mercado</h2>
                <p className="text-center text-slate-500 text-sm max-w-2xl mx-auto">Aunque somos un servicio multimarca independiente, estamos especializados en la tecnología de los principales fabricantes.</p>
            </div>
            {/* Infinite Slider Implementation */}
            <div className="relative w-full overflow-hidden mask-gradient">
                <div className="flex w-max animate-marquee hover:pause">
                    {/* Triple the list for smoother infinite loop on wide screens */}
                    {[...displayBrands, ...displayBrands, ...displayBrands].map((brand, index) => (
                        <div key={`${brand.id}-${index}`} className="flex-shrink-0 flex items-center justify-center px-12">
                            {brand.logoUrl ? (
                                <img
                                    src={brand.logoUrl}
                                    alt={brand.name}
                                    className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                />
                            ) : (
                                <span className="text-xl font-bold text-slate-400">{brand.name}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
                .mask-gradient {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </section>
    )
}

// --- 4. Services Grid (Specific Copy) ---
export function ServicesGrid({ categories }: { categories: any[] }) {
    // Map of specific descriptions requested
    // Map of specific descriptions requested for Madrid SEO
    const copyMap: Record<string, string> = {
        'nevera': "Evita que tus alimentos se dañen. Carga de gas, reparación de compresores y placas electrónicas en el acto.",
        'refrigerador': "Evita que tus alimentos se dañen. Carga de gas, reparación de compresores y placas electrónicas en el acto.",
        'lavadora': "Solucionamos ruidos, fugas y errores de panel en carga frontal y superior. Expertos en todas las marcas.",
        'horno': "Especialistas en vitrocerámicas, inducción y hornos eléctricos. Máxima seguridad en tu hogar.",
        'estufa': "Especialistas en vitrocerámicas, inducción y hornos eléctricos. Máxima seguridad en tu hogar.",
        'lavavajillas': "Limpieza de conductos, bombas de drenaje y fallos de encendido.",
        'lavaplatos': "Limpieza de conductos, bombas de drenaje y fallos de encendido."
    }

    const getDescription = (name: string) => {
        const lowerName = name.toLowerCase()
        const key = Object.keys(copyMap).find(k => lowerName.includes(k))
        return key ? copyMap[key] : "Diagnóstico completo y reparación profesional."
    }

    const getCategoryIcon = (name: string) => {
        const lower = name.toLowerCase()
        if (lower.includes('nevera') || lower.includes('refrigerador') || lower.includes('frigo') || lower.includes('congelador')) return <Snowflake className="w-7 h-7" />
        if (lower.includes('lavadora') || lower.includes('lavar') || lower.includes('secadora')) return <Waves className="w-7 h-7" />
        if (lower.includes('aire') || lower.includes('acondicionado') || lower.includes('clima')) return <Wind className="w-7 h-7" />
        if (lower.includes('horno') || lower.includes('estufa') || lower.includes('cocina') || lower.includes('vitro') || lower.includes('calentador') || lower.includes('caldera')) return <Flame className="w-7 h-7" />
        if (lower.includes('tv') || lower.includes('tele') || lower.includes('vision') || lower.includes('monitor')) return <Tv className="w-7 h-7" />
        if (lower.includes('movil') || lower.includes('celular') || lower.includes('iphone') || lower.includes('smartphone')) return <Smartphone className="w-7 h-7" />
        if (lower.includes('lavavajillas') || lower.includes('platos')) return <Droplets className="w-7 h-7" />
        if (lower.includes('electric') || lower.includes('luz')) return <Zap className="w-7 h-7" />

        return <Wrench className="w-7 h-7" />
    }

    return (
        <section className="py-20 bg-white" id="services">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-black text-center mb-16 text-slate-900">Nuestros Servicios Principales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <div key={cat.id} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                {getCategoryIcon(cat.name)}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{cat.name}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                {getDescription(cat.name)}
                            </p>
                            <Link href={`/servicios/${cat.slug}`} className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                Ver más <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- 5. Features Section (Why Choose Us) ---
// --- 5. Features Section (Why Choose Us) ---
export function FeaturesSection() {
    return (
        <section className="py-20 bg-slate-50" id="about">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">Confianza y Conversión</span>
                    <h2 className="text-3xl font-black mt-2 text-slate-900">¿Por qué elegirnos en Madrid?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Benefit 1 */}
                    <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-xl mb-3">Garantía por escrito</h3>
                        <p className="text-slate-600">Todas nuestras reparaciones en Madrid cuentan con 12 meses de garantía.</p>
                    </div>
                    {/* Benefit 2 */}
                    <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                            <SettingsIcon className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-xl mb-3">Repuestos Originales</h3>
                        <p className="text-slate-600">Solo instalamos piezas nuevas y compatibles con tu modelo específico.</p>
                    </div>
                    {/* Benefit 3 */}
                    <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-xl mb-3">Rapidez Madrileña</h3>
                        <p className="text-slate-600">Sabemos que tu tiempo vale. Si llamas antes de las 12:00, tu técnico llega hoy.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Helper icon for Settings since 'Settings' from lucide might conflict or not look right for 'Parts'
function SettingsIcon(props: any) {
    return <Wrench {...props} />
}


// --- 6. Process Steps (3 Steps) ---
export function ProcessSteps() {
    const steps = [
        {
            num: "01",
            title: "Agendas",
            desc: "Nos escribes o llamas indicando la falla y la marca de tu equipo."
        },
        {
            num: "02",
            title: "Diagnóstico",
            desc: "Un experto visita tu hogar, detecta el problema y te da un presupuesto."
        },
        {
            num: "03",
            title: "Reparación",
            desc: "Si apruebas, el técnico repara en el sitio y te entrega garantía."
        }
    ]

    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-black text-center mb-16 text-slate-900">Proceso de Servicio</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100">
                            <span className="text-6xl font-black text-slate-200 absolute top-4 right-6">{step.num}</span>
                            <div className="relative z-10 pt-4">
                                <h3 className="text-xl font-bold mb-3 text-blue-900">{step.title}</h3>
                                <p className="text-slate-500">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- NEW: Coverage Section ---
export function CoverageSection() {
    const districts = [
        "Centro", "Arganzuela", "Retiro", "Salamanca", "Chamartín", "Tetuán", "Chamberí",
        "Fuencarral-El Pardo", "Moncloa-Aravaca", "Latina", "Carabanchel", "Usera",
        "Puente de Vallecas", "Moratalaz", "Ciudad Lineal", "Hortaleza", "Villaverde",
        "Villa de Vallecas", "Vicálvaro", "San Blas-Canillejas", "Barajas"
    ];

    return (
        <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-blue-300 font-bold uppercase text-sm tracking-widest mb-2 block">Cobertura Total</span>
                    <h2 className="text-4xl font-black mb-6">Servicio Técnico en todos los Distritos de Madrid</h2>
                    <p className="text-blue-100 text-lg">Nuestra red de técnicos nos permite llegar en tiempo récord a cualquier punto de la Comunidad. Cubrimos los 21 distritos de Madrid capital.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                    {districts.map((d, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/20 transition-all cursor-default">
                            <p className="font-medium text-blue-50">{d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- NEW: FAQ Section ---
export function FAQSection() {
    const faqs = [
        {
            q: "¿Cuánto cuesta el desplazamiento del técnico en Madrid?",
            a: "El desplazamiento es totalmente gratuito si se acepta el presupuesto de reparación. En caso contrario, se cobrará únicamente la visita mínima por diagnóstico."
        },
        {
            q: "¿Atendéis en pueblos de la periferia de Madrid?",
            a: "Sí, además de la capital, cubrimos zonas como Alcobendas, Alcorcón, Móstoles, Leganés y Pozuelo de Alarcón."
        }
    ];

    return (
        <section className="py-20 bg-white" id="faq">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-black text-center mb-12 text-slate-900">Preguntas Frecuentes</h2>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
                            <h3 className="font-bold text-xl mb-3 text-slate-900 flex items-start gap-2">
                                <span className="text-blue-600">P:</span> {faq.q}
                            </h3>
                            <p className="text-slate-600 pl-6 border-l-2 border-slate-200">
                                <span className="font-bold text-slate-900 mr-1">R:</span> {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- 7. Social Proof & Footer ---
export function SocialProofFooter({ settings }: { settings: any }) {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            {/* Testimonials */}
            <div className="container mx-auto px-4 mb-20 border-b border-slate-800 pb-16">
                <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Maria G.", text: "Excelente servicio, mi nevera quedó como nueva." },
                        { name: "Carlos P.", text: "Muy puntuales y profesionales. Recomendado 100%." },
                        { name: "Ana R.", text: "El técnico fue muy amable y me explicó todo el proceso." }
                    ].map((t, i) => (
                        <div key={i} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                            <div className="flex text-yellow-500 mb-4">★★★★★</div>
                            <p className="text-slate-300 mb-4 italic">"{t.text}"</p>
                            <span className="font-bold">{t.name}</span>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <p className="text-xl font-bold text-blue-400">Más de 5,000 servicios realizados este año 🚀</p>
                </div>
            </div>

            {/* Footer Links & Map */}
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                    <h3 className="font-bold text-xl mb-4">{settings?.companyName || "SuporTicket"}</h3>
                    <div className="text-slate-400 text-sm mb-4 space-y-2">
                        <p>Líderes en Reparación de Electrodomésticos en la Comunidad de Madrid. Tu servicio técnico de confianza cerca de ti.</p>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Contacto</h3>
                    <p className="text-slate-400 text-sm mb-2">{settings?.address || "Madrid, España"}</p>
                    <p className="text-slate-400 text-sm mb-2">{settings?.supportEmail || "contacto@suporticket.com"}</p>
                    <p className="text-slate-400 text-sm font-bold">{settings?.whatsappNumber || "600 000 000"}</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Legal</h3>
                    <ul className="text-slate-400 text-sm space-y-2">
                        <li><Link href={`/${useParams()?.locale || 'es'}/politica-privacidad`} className="hover:text-white">Política de Privacidad</Link></li>
                        <li><Link href={`/${useParams()?.locale || 'es'}/terminos`} className="hover:text-white">Términos del Servicio</Link></li>
                        <li><Link href={`/${useParams()?.locale || 'es'}/garantia`} className="hover:text-white">Garantía</Link></li>
                    </ul>
                </div>
                <div>
                    {/* Simple Map Placeholder */}
                    <div className="w-full h-40 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                            alt="Mapa de Madrid"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover opacity-50 hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">
                            Cobertura Total Madrid
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-slate-600 text-sm">
                Copyright © 2026 {settings?.companyName || "SuporTicket"} - Líderes en Reparación de Electrodomésticos en la Comunidad de Madrid. Tu servicio técnico de confianza cerca de ti.
            </div>
        </footer>
    )
}

// --- Lead Form (Generic Export) ---
export function LeadForm({ categories }: { categories: any[] }) {
    return (
        <section className="py-20 bg-blue-600/5">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">¿Prefieres que te llamemos?</h2>
                <p className="mb-8 text-slate-600">Déjanos tus datos y te contactaremos en minutos.</p>
                <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
                    <p className="italic text-slate-400">Formulario disponible (Opcional)</p>
                </div>
            </div>
        </section>
    )
}
