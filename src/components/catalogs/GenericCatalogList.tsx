'use client'

import { useState } from 'react'
import { Plus, Edit, Trash2, Save, X } from 'lucide-react'
import ImageUpload from '@/components/ui/ImageUpload'

interface Item {
    id: number
    name: string
    prefix?: string
    [key: string]: any
}

interface GenericCatalogListProps {
    title: string
    items: Item[]
    onCreate: (formData: FormData) => Promise<{ success: boolean; message: string }>
    onUpdate: (id: number, formData: FormData) => Promise<{ success: boolean; message: string }>
    onDelete: (id: number) => Promise<{ success: boolean; message: string }>
    hasPrefix?: boolean
    imageFieldName?: string // 'logoUrl' or 'imageUrl'
    heroImageFieldName?: string // Optional second image for Hero
    hasLogo?: boolean // Deprecated, kept for backward comp if needed, but we'll map it to imageFieldName
}

export default function GenericCatalogList({ title, items, onCreate, onUpdate, onDelete, hasPrefix, imageFieldName, heroImageFieldName, hasLogo }: GenericCatalogListProps) {
    const [isCreating, setIsCreating] = useState(false)
    const [editingId, setEditingId] = useState<number | null>(null)

    // State for managing image URLs during create/edit
    const [createImageUrl, setCreateImageUrl] = useState('')
    const [createHeroImageUrl, setCreateHeroImageUrl] = useState('')

    const [editImageUrl, setEditImageUrl] = useState('')
    const [editHeroImageUrl, setEditHeroImageUrl] = useState('')

    // Normalize image field name (support old hasLogo prop)
    const activeImageField = imageFieldName || (hasLogo ? 'logoUrl' : undefined)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, action: 'create' | 'update', id?: number) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        // Ensure the image URL is appended if using the uploader
        if (activeImageField) {
            formData.set(activeImageField, action === 'create' ? createImageUrl : editImageUrl)
        }
        if (heroImageFieldName) {
            formData.set(heroImageFieldName, action === 'create' ? createHeroImageUrl : editHeroImageUrl)
        }

        let result
        if (action === 'create') {
            result = await onCreate(formData)
            if (result.success) {
                setIsCreating(false)
                setCreateImageUrl('')
                setCreateHeroImageUrl('')
            }
        } else if (id) {
            result = await onUpdate(id, formData)
            if (result.success) {
                setEditingId(null)
                setEditImageUrl('')
                setEditHeroImageUrl('')
            }
        }

        if (result && !result.success) alert(result.message)
    }

    const startEditing = (item: Item) => {
        setEditingId(item.id)
        if (activeImageField) setEditImageUrl(item[activeImageField] || '')
        if (heroImageFieldName) setEditHeroImageUrl(item[heroImageFieldName] || '')
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
                    onClick={() => {
                        setIsCreating(true);
                        setCreateImageUrl('');
                        setCreateHeroImageUrl('');
                    }}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                    <Plus size={16} /> Nuevo
                </button>
            </div>

            {isCreating && (
                <form onSubmit={(e) => handleSubmit(e, 'create')} className="mb-6 p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-lg border border-gray-200 dark:border-zinc-700 animate-in fade-in slide-in-from-top-2">
                    <div className="flex gap-4 items-start">
                        <div className="flex-1 space-y-4">
                            <div>
                                <label className="block text-xs font-bold mb-1 uppercase text-gray-500">Nombre</label>
                                <input name="name" required autoFocus className="w-full p-2 rounded border dark:bg-zinc-800 dark:border-zinc-700" />
                            </div>

                            {hasPrefix && (
                                <div>
                                    <label className="block text-xs font-bold mb-1 uppercase text-gray-500">Prefijo (3 letras)</label>
                                    <input name="prefix" placeholder="ABC" maxLength={3} className="w-full p-2 rounded border dark:bg-zinc-800 dark:border-zinc-700" />
                                </div>
                            )}

                            {activeImageField && (
                                <div>
                                    <label className="block text-xs font-bold mb-1 uppercase text-gray-500">Imagen Principal</label>
                                    <ImageUpload
                                        value={createImageUrl}
                                        onChange={setCreateImageUrl}
                                    />
                                    <input type="hidden" name={activeImageField} value={createImageUrl} />
                                </div>
                            )}

                            {heroImageFieldName && (
                                <div>
                                    <label className="block text-xs font-bold mb-1 uppercase text-gray-500">Imagen Hero (Fondo)</label>
                                    <ImageUpload
                                        value={createHeroImageUrl}
                                        onChange={setCreateHeroImageUrl}
                                    />
                                    <input type="hidden" name={heroImageFieldName} value={createHeroImageUrl} />
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 pt-6">
                            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2"><Save size={18} /> Guardar</button>
                            <button type="button" onClick={() => setIsCreating(false)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 flex items-center gap-2"><X size={18} /> Cancelar</button>
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
                            {activeImageField && !hasPrefix && <th className="px-4 py-3">Imagen</th>}
                            <th className="px-4 py-3 rounded-r-lg w-24 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
                        {items.map(item => (
                            <tr key={item.id} className="group hover:bg-gray-50 dark:hover:bg-zinc-800/30 transition-colors">
                                {editingId === item.id ? (
                                    <td colSpan={hasPrefix || activeImageField ? 3 : 2} className="p-4 bg-blue-50/50 dark:bg-blue-900/10">
                                        <form onSubmit={(e) => handleSubmit(e, 'update', item.id)} className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-bold text-gray-500 mb-1">Nombre</label>
                                                    <input name="name" defaultValue={item.name} required className="w-full p-2 rounded border dark:bg-zinc-800 dark:border-zinc-700" />
                                                </div>
                                                {hasPrefix && (
                                                    <div>
                                                        <label className="block text-xs font-bold text-gray-500 mb-1">Prefijo</label>
                                                        <input name="prefix" defaultValue={item.prefix} maxLength={3} className="w-full p-2 rounded border dark:bg-zinc-800 dark:border-zinc-700" />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {activeImageField && (
                                                    <div>
                                                        <label className="block text-xs font-bold text-gray-500 mb-1">Imagen Principal</label>
                                                        <ImageUpload
                                                            value={editImageUrl}
                                                            onChange={setEditImageUrl}
                                                        />
                                                        <input type="hidden" name={activeImageField} value={editImageUrl} />
                                                    </div>
                                                )}

                                                {heroImageFieldName && (
                                                    <div>
                                                        <label className="block text-xs font-bold text-gray-500 mb-1">Imagen Hero</label>
                                                        <ImageUpload
                                                            value={editHeroImageUrl}
                                                            onChange={setEditHeroImageUrl}
                                                        />
                                                        <input type="hidden" name={heroImageFieldName} value={editHeroImageUrl} />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex gap-2 justify-end">
                                                <button type="submit" className="px-3 py-1 bg-green-600 text-white rounded text-xs">Guardar</button>
                                                <button type="button" onClick={() => setEditingId(null)} className="px-3 py-1 bg-gray-400 text-white rounded text-xs">Cancelar</button>
                                            </div>
                                        </form>
                                    </td>
                                ) : (
                                    <>
                                        <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-200 flex items-center gap-3">
                                            {activeImageField && item[activeImageField] && (
                                                <div className="h-10 w-10 relative bg-white rounded border border-gray-100 overflow-hidden shrink-0">
                                                    <img src={item[activeImageField]} className="h-full w-full object-contain" alt="" />
                                                </div>
                                            )}
                                            {item.name}
                                        </td>
                                        {hasPrefix && (
                                            <td className="px-4 py-3 font-mono text-xs bg-gray-100 dark:bg-zinc-800 w-min rounded px-2 py-1 text-center">
                                                {item.prefix}
                                            </td>
                                        )}
                                        {activeImageField && !hasPrefix && <td className="px-4 py-3"></td>}
                                        <td className="px-4 py-3 text-center">
                                            <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => startEditing(item)} className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Edit size={16} /></button>
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
        </div >
    )
}
