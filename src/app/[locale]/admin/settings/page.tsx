import { getCompanySettings } from '@/app/settings-actions'
import { getSiteSettings, getPublicCategories, getPublicBrands } from "@/app/site-settings-actions"
import { db as prisma } from "@/lib/db"
import SettingsForm from './SettingsForm'
import WebSettingsForms from "@/components/admin/settings/WebSettingsForms"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Fetch helpers for Web Settings
async function getAllCategories() {
    return await prisma.category.findMany({ orderBy: { id: 'asc' } })
}

async function getAllBrands() {
    return await prisma.brand.findMany({ orderBy: { name: 'asc' } })
}

export default async function SettingsPage() {
    const companySettings = await getCompanySettings()

    // Web Settings Data
    const siteSettings = await getSiteSettings()
    const categories = await getAllCategories()
    const brands = await getAllBrands()

    return (
        <div className="max-w-5xl mx-auto pb-20">
            <h1 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Configuración del Sistema</h1>

            <Tabs defaultValue="company" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                    <TabsTrigger value="company" className="py-3 rounded-lg text-sm font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">
                        🏢 Empresa y Facturación
                    </TabsTrigger>
                    <TabsTrigger value="web" className="py-3 rounded-lg text-sm font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">
                        🌐 Sitio Web y Landing
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="company" className="animate-in fade-in-50 duration-300">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                        <h2 className="text-xl font-bold mb-6">Datos de la Empresa</h2>
                        <SettingsForm settings={companySettings} />
                    </div>
                </TabsContent>

                <TabsContent value="web" className="animate-in fade-in-50 duration-300">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                        <h2 className="text-xl font-bold mb-2">Personalización Web</h2>
                        <p className="text-slate-500 mb-8 text-sm">Edita los textos, imágenes y colores de tu página principal.</p>
                        <WebSettingsForms
                            settings={siteSettings}
                            categories={categories}
                            brands={brands}
                        />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

