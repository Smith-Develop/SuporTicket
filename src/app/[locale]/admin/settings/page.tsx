import { getCompanySettings } from '@/app/settings-actions'
import SettingsForm from './SettingsForm'

export default async function SettingsPage() {
    const settings = await getCompanySettings()

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Configuración de Empresa</h1>
            <SettingsForm settings={settings} />
        </div>
    )
}
