'use client'

import { useActionState, useEffect } from 'react'
import { updateCustomer } from '@/app/customer-actions'
import { X, Loader2, Save } from 'lucide-react'

type Props = {
    customer: any
    onClose: () => void
}

const initialState = {
    message: '',
    success: false
}

export default function CustomerModal({ customer, onClose }: Props) {
    const action = updateCustomer.bind(null, customer.id)
    const [state, formAction, isPending] = useActionState(action, initialState)

    useEffect(() => {
        if (state?.success) {
            onClose()
        }
    }, [state?.success, onClose])

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-zinc-900 rounded-xl w-full max-w-md overflow-hidden">
                <div className="p-4 border-b dark:border-zinc-800 flex justify-between items-center bg-gray-50 dark:bg-zinc-800/50">
                    <h2 className="font-bold text-lg">Editar Cliente</h2>
                    <button onClick={onClose} className="p-1 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded transition"><X size={20} /></button>
                </div>

                <form action={formAction} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nombre</label>
                        <input defaultValue={customer.name} name="name" required className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Teléfono</label>
                        <input defaultValue={customer.phone} name="phone" className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input defaultValue={customer.email || ''} name="email" type="email" className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Dirección Completa</label>
                        <textarea defaultValue={customer.address || ''} name="address" rows={3} className="w-full p-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700" />
                    </div>

                    {state?.message && (
                        <p className={`text-sm text-center ${state.success ? 'text-green-600' : 'text-red-500'}`}>
                            {state.message}
                        </p>
                    )}

                    <div className="pt-2">
                        <button disabled={isPending} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition">
                            {isPending ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
