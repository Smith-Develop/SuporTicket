import { getSiteSettings } from "@/app/site-settings-actions"
import { LandingHeader, SocialProofFooter } from "@/components/landing/LandingComponents"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
    const settings = await getSiteSettings()
    return {
        title: `Términos y Condiciones | ${settings?.companyName}`,
        description: "Conoce las condiciones de uso de nuestro servicio.",
    }
}

export default async function TermsPage() {
    const settings = await getSiteSettings()

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
            <LandingHeader settings={settings} />

            <section className="pt-32 pb-12 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                        Términos y Condiciones
                    </h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg text-slate-600 whitespace-pre-wrap">
                        {settings?.termsConditions || "Contenido no disponible."}
                    </div>
                </div>
            </section>

            <SocialProofFooter settings={settings} />
        </main>
    )
}
