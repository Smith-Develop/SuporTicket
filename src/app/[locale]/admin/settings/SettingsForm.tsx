'use client'

import { useActionState, useState, useRef } from 'react'
import { updateCompanySettings, testDbConnection } from '@/app/settings-actions'
import { Save, Check, AlertCircle, Loader2, Database } from 'lucide-react'

export default function SettingsForm({ settings }: { settings: any }) {
    const [state, action] = useActionState(updateCompanySettings, null)
    const formRef = useRef<HTMLFormElement>(null)


    return (
        <form ref={formRef} action={action} className="bg-white dark:bg-zinc-900 shadow-sm rounded-xl p-6 border border-gray-200 dark:border-zinc-800">

            {state?.success && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                    ✅ {state.message}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Nombre de la Empresa</label>
                    <input name="name" defaultValue={settings.name} className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Tax ID (CIF/NIF)</label>
                    <input name="taxId" defaultValue={settings.taxId} className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Dirección Fiscal</label>
                    <input name="address" defaultValue={settings.address} className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Teléfono</label>
                    <input name="phone" defaultValue={settings.phone} className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input name="email" defaultValue={settings.email} className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Logo URL</label>
                    <input name="logoUrl" defaultValue={settings.logoUrl} placeholder="https://..." className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">IVA (%)</label>
                    <div className="relative">
                        <input type="number" step="0.1" name="ivaPercentage" defaultValue={settings.ivaPercentage} className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 pl-4" />
                        <span className="absolute right-4 top-2 text-gray-400">%</span>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Simbolo Moneda</label>
                    <input name="currencySymbol" defaultValue={settings.currencySymbol || '€'} placeholder="€, $, etc" className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Código Moneda</label>
                    <input name="currencyCode" defaultValue={settings.currencyCode || 'EUR'} placeholder="EUR, USD, COP" className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Código País (WhatsApp)</label>
                    <div className="relative">
                        <span className="absolute left-3 top-2 text-gray-500">+</span>
                        <input name="countryCode" defaultValue={settings.countryCode || '34'} placeholder="34, 57" className="w-full p-2 pl-7 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" />
                    </div>
                </div>

                {/* Cloudinary Settings */}
                <div className="md:col-span-2 mt-4 pt-4 border-t dark:border-zinc-800">
                    <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">Configuración de Cloudinary (Imágenes)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Cloud Name</label>
                            <input name="cloudinaryCloudName" defaultValue={settings.cloudinaryCloudName} className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 font-mono text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">API Key</label>
                            <input name="cloudinaryApiKey" defaultValue={settings.cloudinaryApiKey} className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 font-mono text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">API Secret</label>
                            <input name="cloudinaryApiSecret" type="password" defaultValue={settings.cloudinaryApiSecret} className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 font-mono text-sm" />
                        </div>
                    </div>
                </div>


            </div>

            <div className="mt-6 flex justify-end">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2">
                    <Save size={18} />
                    Guardar Cambios
                </button>
            </div>
        </form>
    )
}
