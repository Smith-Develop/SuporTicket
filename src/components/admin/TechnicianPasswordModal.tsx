'use client'

import { useActionState, useEffect } from 'react'
import { resetTechnicianPassword } from '@/app/admin-actions'
import { X, Loader2, Save } from 'lucide-react'

type Props = {
    technicianId: string
    onClose: () => void
}

const initialState = {
    message: '',
    success: false
}

export default function TechnicianPasswordModal({ technicianId, onClose }: Props) {
    const bindedAction = resetTechnicianPassword.bind(null, technicianId)
    const [state, formAction, isPending] = useActionState(bindedAction, initialState)

    useEffect(() => {
        if (state?.success) {
            onClose()
        }
    }, [state?.success, onClose])

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-zinc-900 rounded-xl w-full max-w-md overflow-hidden">
                <div className="p-4 border-b dark:border-zinc-800 flex justify-between items-center bg-gray-50 dark:bg-zinc-800/50">
                    <h2 className="font-bold text-lg">Cambiar Contraseña</h2>
                    <button onClick={onClose} className="p-1 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded transition"><X size={20} /></button>
                </div>

                <form action={formAction} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nueva Contraseña</label>
                        <input name="password" type="password" required className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" placeholder="******" />
                    </div>

                    {state?.message && (
                        <p className={`text-sm text-center ${state.success ? 'text-green-600' : 'text-red-500'}`}>
                            {state.message}
                        </p>
                    )}

                    <div className="pt-2">
                        <button disabled={isPending} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition">
                            {isPending ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                            Actualizar Contraseña
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
