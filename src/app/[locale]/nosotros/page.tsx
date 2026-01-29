import { getSiteSettings } from "@/app/site-settings-actions"
import { LandingHeader, SocialProofFooter } from "@/components/landing/LandingComponents"
import { Metadata } from "next"
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react"

export async function generateMetadata(): Promise<Metadata> {
    const settings = await getSiteSettings()
    return {
        title: `${settings?.aboutTitle || "Sobre Nosotros"} | ${settings?.companyName}`,
        description: settings?.aboutText?.slice(0, 160) || "Conoce más sobre nuestra empresa de servicios técnicos.",
    }
}

export default async function AboutPage() {
    const settings = await getSiteSettings()

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
            <LandingHeader settings={settings} />

            {/* Simple Hero */}
            <section className="pt-32 pb-16 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                        {settings?.aboutTitle || "Sobre Nosotros"}
                    </h1>
                    <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Side */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-800">Nuestra Historia y Misión</h2>
                        <div className="prose prose-lg text-slate-600">
                            <p className="whitespace-pre-line">
                                {settings?.aboutText || "Somos una empresa dedicada a dar soluciones rápidas y efectivas..."}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                                <span className="font-medium text-slate-700">Técnicos Certificados</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                                <span className="font-medium text-slate-700">Garantía por Escrito</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                                <span className="font-medium text-slate-700">Atención Inmediata</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                                <span className="font-medium text-slate-700">Presupuestos Claros</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                        <img
                            src={settings?.aboutImageUrl || "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"}
                            alt="Sobre Nosotros"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </section>

            {/* Contact Info Block */}
            <section className="py-20 bg-blue-900 text-white">
                <div className="container mx-auto px-4 text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda inmediata?</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto">Nuestro equipo de atención al cliente está disponible para resolver tus dudas y agendar tu visita técnica.</p>
                </div>

                <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 text-center max-w-4xl mx-auto">
                    {settings?.whatsappNumber && (
                        <a href={`https://wa.me/${settings.whatsappNumber.replace(/\+/g, '').replace(/\s/g, '')}`} target="_blank" className="w-full max-w-sm p-8 bg-white/10 rounded-2xl hover:bg-white/20 transition-all border border-white/10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                            <p className="text-blue-200">{settings.whatsappNumber}</p>
                            <span className="mt-4 text-sm font-bold uppercase tracking-wider bg-green-600 px-3 py-1 rounded-full text-white">Recomendado</span>
                        </a>
                    )}

                    {settings?.supportEmail && (
                        <a href={`mailto:${settings.supportEmail}`} className="w-full max-w-sm p-8 bg-white/10 rounded-2xl hover:bg-white/20 transition-all border border-white/10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-blue-200">{settings.supportEmail}</p>
                        </a>
                    )}
                </div>
            </section>

            <SocialProofFooter settings={settings} />
        </main>
    )
}
