'use client'

import { useState } from 'react'
import { updateSiteSettings, toggleServiceVisibility, toggleBrandVisibility } from '@/app/site-settings-actions'
import { Loader2, Save, Upload, Check, X, ShieldAlert } from 'lucide-react'
import Image from 'next/image'
import ImageUpload from '@/components/ui/ImageUpload'

// Helper for tabs
const tabs = [
    { id: 'identity', label: 'Identidad y Branding' },
    { id: 'contact', label: 'Contacto y Redes' },
    { id: 'seo', label: 'SEO y Analíticas' },
    { id: 'content', label: 'Contenidos (Hero/About)' },
    { id: 'legal', label: 'Textos Legales' }, // NEW
    { id: 'services', label: 'Gestión de Servicios' },
    { id: 'brands', label: 'Galería de Marcas' }
]

type WebSettingsFormsProps = {
    settings: any
    categories: any[]
    brands: any[]
}

export default function WebSettingsForms({ settings, categories, brands }: WebSettingsFormsProps) {
    const [activeTab, setActiveTab] = useState('identity')
    const [isSaving, setIsSaving] = useState(false)

    // Image States
    const [logoUrl, setLogoUrl] = useState(settings?.logoUrl || '')
    const [faviconUrl, setFaviconUrl] = useState(settings?.faviconUrl || '')
    const [heroImageUrl, setHeroImageUrl] = useState(settings?.heroImageUrl || '')
    const [aboutImageUrl, setAboutImageUrl] = useState(settings?.aboutImageUrl || '')


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSaving(true)
        const formData = new FormData(e.currentTarget)
        try {
            await updateSiteSettings(formData)
            alert("Configuración guardada correctamente")
        } catch (error) {
            alert("Error al guardar")
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">

            {/* Tabs Navigation */}
            <div className="flex overflow-x-auto border-b border-zinc-200 dark:border-zinc-800 p-2">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${activeTab === tab.id
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                            : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="p-6">
                <form onSubmit={handleSubmit}>

                    {/* Identity Tab */}
                    {activeTab === 'identity' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold dark:text-white">Identidad de Marca</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input name="companyName" label="Nombre de la Empresa" defaultValue={settings?.companyName} />
                                <Input name="fontFamily" label="Tipografía (Google Fonts)" defaultValue={settings?.fontFamily} placeholder="Inter, Roboto..." />

                                <div className="space-y-2">
                                    <input type="hidden" name="logoUrl" value={logoUrl} />
                                    <ImageUpload label="Logo del Sitio" value={logoUrl} onChange={setLogoUrl} />
                                </div>

                                <div className="space-y-2">
                                    <input type="hidden" name="faviconUrl" value={faviconUrl} />
                                    <ImageUpload label="Favicon" value={faviconUrl} onChange={setFaviconUrl} />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Color Primario</label>
                                    <div className="flex items-center gap-2">
                                        <input type="color" name="primaryColor" defaultValue={settings?.primaryColor} className="h-10 w-20 rounded border" />
                                        <input type="text" name="primaryColor" defaultValue={settings?.primaryColor} className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm dark:bg-zinc-800 dark:border-zinc-700" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Color Secundario</label>
                                    <div className="flex items-center gap-2">
                                        <input type="color" name="secondaryColor" defaultValue={settings?.secondaryColor} className="h-10 w-20 rounded border" />
                                        <input type="text" name="secondaryColor" defaultValue={settings?.secondaryColor} className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm dark:bg-zinc-800 dark:border-zinc-700" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Contact Tab */}
                    {activeTab === 'contact' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold dark:text-white">Información de Contacto</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input name="emergencyPhone" label="Teléfono Emergencias" defaultValue={settings?.emergencyPhone} />
                                <Input name="whatsappNumber" label="WhatsApp (Intl Format: +34...)" defaultValue={settings?.whatsappNumber} />
                                <Input name="supportEmail" label="Email Soporte" defaultValue={settings?.supportEmail} />
                                <Input name="address" label="Dirección Física" defaultValue={settings?.address} />
                                <Input name="googleMapUrl" label="Google Maps Embed URL" defaultValue={settings?.googleMapUrl} className="md:col-span-2" />

                                <h4 className="text-md font-medium mt-4 md:col-span-2 dark:text-zinc-200">Redes Sociales</h4>
                                <Input name="facebookUrl" label="Facebook URL" defaultValue={settings?.facebookUrl} />
                                <Input name="instagramUrl" label="Instagram URL" defaultValue={settings?.instagramUrl} />
                                <Input name="twitterUrl" label="Twitter/X URL" defaultValue={settings?.twitterUrl} />
                                <Input name="linkedinUrl" label="LinkedIn URL" defaultValue={settings?.linkedinUrl} />
                            </div>
                        </div>
                    )}

                    {/* SEO Tab */}
                    {activeTab === 'seo' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold dark:text-white">SEO & Scripts</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <Input name="metaTitle" label="Meta Título Global" defaultValue={settings?.metaTitle} />
                                <Input name="metaDescription" label="Meta Descripción Global" defaultValue={settings?.metaDescription} as="textarea" />
                                <Input name="googleAnalyticsId" label="Google Analytics ID (G-XXXX)" defaultValue={settings?.googleAnalyticsId} />
                                <Input name="facebookPixelId" label="Facebook Pixel ID" defaultValue={settings?.facebookPixelId} />
                            </div>
                        </div>
                    )}

                    {/* Content Tab */}
                    {activeTab === 'content' && (
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold dark:text-white border-b pb-2">Sección Hero (Inicio)</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input name="heroTitle" label="Título Principal (Español)" defaultValue={settings?.heroTitle} />
                                    <Input name="heroTitleEn" label="Título Principal (Inglés)" defaultValue={settings?.heroTitleEn} />

                                    <Input name="heroSubtitle" label="Subtítulo (Español)" defaultValue={settings?.heroSubtitle} as="textarea" />
                                    <Input name="heroSubtitleEn" label="Subtítulo (Inglés)" defaultValue={settings?.heroSubtitleEn} as="textarea" />

                                    <div className="md:col-span-2 space-y-2">
                                        <input type="hidden" name="heroImageUrl" value={heroImageUrl} />
                                        <ImageUpload label="Imagen de Fondo Hero" value={heroImageUrl} onChange={setHeroImageUrl} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold dark:text-white border-b pb-2">Sección Nosotros</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input name="aboutTitle" label="Título (Español)" defaultValue={settings?.aboutTitle} />
                                    <Input name="aboutTitleEn" label="Título (Inglés)" defaultValue={settings?.aboutTitleEn} />

                                    <Input name="aboutText" label="Texto Principal (Español)" defaultValue={settings?.aboutText} as="textarea" rows={4} className="md:col-span-2" />
                                    <Input name="aboutTextEn" label="Texto Principal (Inglés)" defaultValue={settings?.aboutTextEn} as="textarea" rows={4} className="md:col-span-2" />

                                    <div className="md:col-span-2 space-y-2">
                                        <input type="hidden" name="aboutImageUrl" value={aboutImageUrl} />
                                        <ImageUpload label="Imagen Sección Nosotros" value={aboutImageUrl} onChange={setAboutImageUrl} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Legal Tab */}
                    {activeTab === 'legal' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold dark:text-white">Páginas Legales</h3>
                            <p className="text-sm text-zinc-500">Define aquí el texto completo que aparecerá en las páginas de Política de Privacidad, Términos y Garantía.</p>

                            <div className="space-y-6">
                                <Input
                                    name="privacyPolicy"
                                    label="Política de Privacidad"
                                    defaultValue={settings?.privacyPolicy}
                                    as="textarea"
                                    rows={10}
                                    placeholder="En cumplimiento de la normativa..."
                                />

                                <Input
                                    name="termsConditions"
                                    label="Términos y Condiciones"
                                    defaultValue={settings?.termsConditions}
                                    as="textarea"
                                    rows={10}
                                    placeholder="El uso de este sitio web implica..."
                                />

                                <Input
                                    name="warrantyPolicy"
                                    label="Política de Garantía"
                                    defaultValue={settings?.warrantyPolicy}
                                    as="textarea"
                                    rows={10}
                                    placeholder="Todas nuestras reparaciones cuentan con..."
                                />
                            </div>
                        </div>
                    )}

                    {/* Services Tab: Custom UI, not just inputs */}
                    {activeTab === 'services' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold dark:text-white">Gestión de Servicios Públicos</h3>
                            <p className="text-sm text-zinc-500 mb-4">Activa o desactiva las categorías que quieres mostrar en la web.</p>
                            <div className="grid grid-cols-1 gap-2">
                                {categories.map(cat => (
                                    <div key={cat.id} className="flex items-center justify-between p-3 border rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
                                        <span className="font-medium dark:text-zinc-200">{cat.name} ({cat.slug})</span>
                                        <Toggle
                                            checked={cat.isActive}
                                            onChange={() => toggleService(cat.id, cat.isActive)}
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Hidden inputs to keep 'services' tab form valid if user clicks save, though toggle is instant */}
                            <div className="hidden"></div>
                        </div>
                    )}

                    {/* Brands Tab */}
                    {activeTab === 'brands' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold dark:text-white">Marcas Visibles</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {brands.map(brand => (
                                    <div key={brand.id} className={`p-3 border rounded-lg flex flex-col items-center gap-2 cursor-pointer transition-all ${brand.showOnWeb ? 'border-primary ring-1 ring-primary bg-blue-50/50' : 'opacity-60 grayscale'}`}
                                        onClick={() => toggleBrand(brand.id, brand.showOnWeb)}>
                                        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm">
                                            {brand.logoUrl ? (
                                                <img src={brand.logoUrl} alt={brand.name} className="max-w-full max-h-full p-1" />
                                            ) : (
                                                <span className="text-xs font-bold">{brand.name.substring(0, 2)}</span>
                                            )}
                                        </div>
                                        <span className="text-sm font-medium text-center">{brand.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Global Save Button (except for instant toggles) */}
                    {(activeTab !== 'services' && activeTab !== 'brands') && (
                        <div className="kticky bottom-0 bg-white dark:bg-zinc-900 pt-4 mt-6 border-t dark:border-zinc-800 flex justify-end">
                            <button
                                type="submit"
                                disabled={isSaving}
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                            >
                                {isSaving ? <Loader2 className="animate-spin w-4 h-4" /> : <Save className="w-4 h-4" />}
                                Guardar Cambios
                            </button>
                        </div>
                    )}

                </form>
            </div>
        </div>
    )

    // Handlers for instant toggles
    async function toggleService(id: number, current: boolean) {
        // Optimistic or just simple alert for now
        await toggleServiceVisibility(id, !current)
        // In a real app we'd use router.refresh() or specialized state update
        // But since server action calls revalidatePath, purely client state update is tricky without props refresh
        // For MVP, we presume revalidatePath works and UI might lag a bit or we force manual reload/useTransition
        // To make it smooth:
        window.location.reload() // Brute force update for MVP correctness
    }

    async function toggleBrand(id: number, current: boolean) {
        await toggleBrandVisibility(id, !current)
        window.location.reload()
    }
}

// Simple internal components
function Input({ label, name, as = 'input', className = '', ...props }: any) {
    const Component = as
    return (
        <div className={`space-y-1 ${className}`}>
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{label}</label>
            <Component
                name={name}
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                {...props}
            />
        </div>
    )
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
    return (
        <button
            type="button"
            onClick={onChange}
            className={`w-11 h-6 flex items-center rounded-full transition-colors ${checked ? 'bg-blue-600' : 'bg-zinc-300 dark:bg-zinc-600'}`}
        >
            <span className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
    )
}

