import { getSiteSettings, getPublicCategories, getPublicBrands } from '@/app/site-settings-actions'
import { HeroSection, TrustBar, ServicesGrid, LeadForm, FloatingUrgencyBar, ProcessSteps, LandingHeader, FeaturesSection, SocialProofFooter } from '@/components/landing/LandingComponents'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'

// Dynamic Metadata based on Settings
export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  return {
    title: settings?.metaTitle || "SuporTicket Service",
    description: settings?.metaDescription || "Professional Repair Services",
  }
}

export default async function Home() {
  const settings = await getSiteSettings()
  const categories = await getPublicCategories()
  const brands = await getPublicBrands()

  // Prepare Schema.org JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: settings?.companyName || "SuporTicket",
    image: settings?.logoUrl,
    telephone: settings?.whatsappNumber || settings?.emergencyPhone,
    email: settings?.supportEmail,
    address: settings?.address,
  }

  return (
    <div
      className="bg-white min-h-screen flex flex-col font-sans text-slate-900 selection:bg-blue-100"
      style={{
        '--primary': settings?.primaryColor || '#0f172a',
        '--secondary': settings?.secondaryColor || '#3b82f6',
      } as React.CSSProperties}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <FloatingUrgencyBar phoneNumber={settings?.whatsappNumber} />

      {/* 1. Sticky Header */}
      <LandingHeader settings={settings} />

      <main className="flex-grow">

        {/* 2. Hero Section */}
        <HeroSection settings={settings} />

        {/* 3. Trust Bar */}
        <TrustBar brands={brands} />

        {/* 4. Services Grid */}
        <ServicesGrid categories={categories} />

        {/* 5. Features (Why Choose Us) */}
        <FeaturesSection />

        {/* 6. Process Steps */}
        <ProcessSteps />

        {/* Optional: Original LeadForm if desired, or kept hidden as per strict new design */}
        {/* <LeadForm categories={categories} /> */}
      </main>

      {/* 7. Social Proof & Footer */}
      <SocialProofFooter settings={settings} />
    </div>
  )
}
