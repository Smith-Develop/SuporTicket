import { getSiteSettings } from "@/app/site-settings-actions"
import { LandingHeader, SocialProofFooter } from "@/components/landing/LandingComponents"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
    const settings = await getSiteSettings()
    return {
        title: `Política de Privacidad | ${settings?.companyName}`,
        description: "Normativa de privacidad y protección de datos.",
    }
}

export default async function PrivacyPage() {
    const settings = await getSiteSettings()

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
            <LandingHeader settings={settings} />

            <section className="pt-32 pb-12 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                        Política de Privacidad
                    </h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg text-slate-600 whitespace-pre-wrap">
                        {settings?.privacyPolicy || "Contenido no disponible."}
                    </div>
                </div>
            </section>

            <SocialProofFooter settings={settings} />
        </main>
    )
}
