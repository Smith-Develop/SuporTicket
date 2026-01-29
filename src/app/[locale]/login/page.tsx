'use client'

import { useActionState } from 'react'
import { loginAction } from '@/app/auth-actions'
import { Loader2, Lock, User } from 'lucide-react'
import { useTranslations } from 'next-intl'

const initialState = {
    error: '',
}

export default function LoginPage() {
    const t = useTranslations('Technician') // reusing technician file or creating new one
    const [state, action, isPending] = useActionState(loginAction, initialState)

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-zinc-800">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white text-center">
                    <h1 className="text-3xl font-bold mb-2">SuporTicket</h1>
                    <p className="text-blue-100">Acceso a Personal</p>
                </div>

                <form action={action} className="p-8 space-y-6">
                    {state.error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center font-medium border border-red-100">
                            {state.error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="tecnico@ejemplo.com"
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Contraseña</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                name="password"
                                type="password"
                                required
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                            />
                        </div>
                    </div>

                    <button
                        disabled={isPending}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                    >
                        {isPending ? <Loader2 className="animate-spin" /> : 'Ingresar'}
                    </button>
                </form>

                <div className="p-6 text-center text-xs text-gray-400 border-t dark:border-zinc-800">
                    SuporTicket v1.0 • Acceso restringido
                </div>
            </div>
        </div>
    )
}
