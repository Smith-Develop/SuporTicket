'use client'

import { useState } from 'react'
import { Plus, Edit, Trash2, Save, X } from 'lucide-react'

interface Item {
    id: number
    name: string
    prefix?: string
}

interface GenericCatalogListProps {
    title: string
    items: Item[]
    onCreate: (formData: FormData) => Promise<{ success: boolean; message: string }>
    onUpdate: (id: number, formData: FormData) => Promise<{ success: boolean; message: string }>
    onDelete: (id: number) => Promise<{ success: boolean; message: string }>
    hasPrefix?: boolean
}

export default function GenericCatalogList({ title, items, onCreate, onUpdate, onDelete, hasPrefix }: GenericCatalogListProps) {
    const [isCreating, setIsCreating] = useState(false)
    const [editingId, setEditingId] = useState<number | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, action: 'create' | 'update', id?: number) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        let result
        if (action === 'create') {
            result = await onCreate(formData)
            if (result.success) setIsCreating(false)
        } else if (id) {
            result = await onUpdate(id, formData)
            if (result.success) setEditingId(null)
        }

        if (result && !result.success) alert(result.message)
    }

    const handleDelete = async (id: number) => {
        if (!confirm('¿Seguro que deseas eliminar este elemento?')) return
        await onDelete(id)
    }

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-800 p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
                <button
                    onClick={() => setIsCreating(true)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                    <Plus size={16} /> Nuevo
                </button>
            </div>

            {isCreating && (
                <form onSubmit={(e) => handleSubmit(e, 'create')} className="mb-6 p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-lg border border-gray-200 dark:border-zinc-700 animate-in fade-in slide-in-from-top-2">
                    <div className="flex gap-4 items-end">
                        <div className="flex-1">
                            <label className="block text-xs font-bold mb-1 uppercase text-gray-500">Nombre</label>
                            <input name="name" required autoFocus className="w-full p-2 rounded border dark:bg-zinc-800 dark:border-zinc-700" />
                        </div>
                        {hasPrefix && (
                            <div className="w-24">
                                <label className="block text-xs font-bold mb-1 uppercase text-gray-500">Prefijo</label>
                                <input name="prefix" placeholder="ABC" maxLength={3} className="w-full p-2 rounded border dark:bg-zinc-800 dark:border-zinc-700" />
                            </div>
                        )}
                        <div className="flex gap-2">
                            <button type="submit" className="p-2 bg-green-600 text-white rounded hover:bg-green-700"><Save size={18} /></button>
                            <button type="button" onClick={() => setIsCreating(false)} className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600"><X size={18} /></button>
                        </div>
                    </div>
                </form>
            )}

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 dark:bg-zinc-800/50 text-gray-500 uppercase font-medium">
                        <tr>
                            <th className="px-4 py-3 rounded-l-lg">Nombre</th>
                            {hasPrefix && <th className="px-4 py-3">Prefijo</th>}
                            <th className="px-4 py-3 rounded-r-lg w-24 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
                        {items.map(item => (
                            <tr key={item.id} className="group hover:bg-gray-50 dark:hover:bg-zinc-800/30 transition-colors">
                                {editingId === item.id ? (
                                    <td colSpan={hasPrefix ? 3 : 2} className="p-2">
                                        <form onSubmit={(e) => handleSubmit(e, 'update', item.id)} className="flex gap-4 items-center">
                                            <input name="name" defaultValue={item.name} required className="flex-1 p-1 rounded border dark:bg-zinc-800 dark:border-zinc-700" />
                                            {hasPrefix && (
                                                <input name="prefix" defaultValue={item.prefix} maxLength={3} className="w-24 p-1 rounded border dark:bg-zinc-800 dark:border-zinc-700" />
                                            )}
                                            <button type="submit" className="text-green-600 hover:bg-green-100 p-1 rounded"><Save size={18} /></button>
                                            <button type="button" onClick={() => setEditingId(null)} className="text-gray-500 hover:bg-gray-100 p-1 rounded"><X size={18} /></button>
                                        </form>
                                    </td>
                                ) : (
                                    <>
                                        <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-200">{item.name}</td>
                                        {hasPrefix && (
                                            <td className="px-4 py-3 font-mono text-xs bg-gray-100 dark:bg-zinc-800 w-min rounded px-2 py-1 text-center">
                                                {item.prefix}
                                            </td>
                                        )}
                                        <td className="px-4 py-3 text-center">
                                            <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => setEditingId(item.id)} className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Edit size={16} /></button>
                                                <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:bg-red-50 p-1 rounded"><Trash2 size={16} /></button>
                                            </div>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {items.length === 0 && (
                    <div className="text-center py-8 text-gray-400">No hay elementos registrados</div>
                )}
            </div>
        </div>
    )
}
