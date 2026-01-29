'use client'

import { useState } from 'react'
import { Plus, Trash2, Save, X, AlertTriangle, Globe, Filter } from 'lucide-react'

interface Question {
    id: number
    text: string
    triggerPriority: string
    categoryId: number | null
    category?: { name: string }
}

interface Category {
    id: number
    name: string
}

interface TriageQuestionListProps {
    questions: Question[]
    categories: Category[]
    onCreate: (formData: FormData) => Promise<{ success: boolean; message: string }>
    onDelete: (id: number) => Promise<{ success: boolean; message: string }>
}

export default function TriageQuestionList({ questions, categories, onCreate, onDelete }: TriageQuestionListProps) {
    const [isCreating, setIsCreating] = useState(false)
    const [filterCategory, setFilterCategory] = useState<string>('all')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const res = await onCreate(formData)
        if (res.success) {
            setIsCreating(false)
        } else {
            alert(res.message)
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('¿Eliminar esta pregunta?')) return
        await onDelete(id)
    }

    const filteredQuestions = questions.filter(q => {
        if (filterCategory === 'all') return true
        if (filterCategory === 'global') return q.categoryId === null
        return q.categoryId === parseInt(filterCategory)
    })

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-800 p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><AlertTriangle size={24} /></div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Preguntas de Diagnóstico</h3>
                        <p className="text-sm text-gray-500">Define las preguntas que ayudarán a priorizar tickets</p>
                    </div>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative">
                        <Filter className="absolute left-2 top-2.5 text-gray-400" size={16} />
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="pl-8 p-2 border rounded-lg bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        >
                            <option value="all">Todas</option>
                            <option value="global">Globales</option>
                            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                    </div>
                    <button
                        onClick={() => setIsCreating(true)}
                        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                    >
                        <Plus size={16} /> Nueva Pregunta
                    </button>
                </div>
            </div>

            {isCreating && (
                <form onSubmit={handleSubmit} className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-800/30 animate-in fade-in slide-in-from-top-2">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                        <div className="md:col-span-6">
                            <label className="block text-xs font-bold mb-1 uppercase text-gray-500">Pregunta</label>
                            <input name="text" required placeholder="Ej: ¿Huele a quemado?" autoFocus className="w-full p-2.5 rounded border dark:bg-zinc-800 dark:border-zinc-700" />
                        </div>
                        <div className="md:col-span-3">
                            <label className="block text-xs font-bold mb-1 uppercase text-gray-500">Categoría</label>
                            <select name="categoryId" className="w-full p-2.5 rounded border dark:bg-zinc-800 dark:border-zinc-700">
                                <option value="">-- Global (Todas) --</option>
                                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold mb-1 uppercase text-gray-500">Prioridad</label>
                            <select name="triggerPriority" className="w-full p-2.5 rounded border dark:bg-zinc-800 dark:border-zinc-700 font-bold">
                                <option value="NONE" className="text-gray-500">Normal</option>
                                <option value="MEDIUM" className="text-yellow-600">Media</option>
                                <option value="HIGH" className="text-red-600">Alta (Urgente)</option>
                            </select>
                        </div>
                        <div className="md:col-span-1 flex justify-end">
                            <button type="submit" className="p-2.5 bg-green-600 text-white rounded hover:bg-green-700"><Save size={18} /></button>
                            <button type="button" onClick={() => setIsCreating(false)} className="p-2.5 ml-2 bg-gray-400 text-white rounded hover:bg-gray-500"><X size={18} /></button>
                        </div>
                    </div>
                </form>
            )}

            <div className="space-y-2">
                {filteredQuestions.map(q => (
                    <div key={q.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-lg hover:bg-white dark:hover:bg-zinc-800 border border-transparent hover:border-gray-200 dark:hover:border-zinc-700 transition shadow-sm group">
                        <div className="flex items-center gap-3">
                            <span className={`p-1.5 rounded text-xs font-bold ${q.triggerPriority === 'HIGH' ? 'bg-red-100 text-red-600' :
                                    q.triggerPriority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-600' :
                                        'bg-gray-200 text-gray-500'
                                }`}>
                                {q.triggerPriority === 'HIGH' ? 'URG' : q.triggerPriority === 'MEDIUM' ? 'MED' : 'NRM'}
                            </span>
                            <span className="font-medium text-gray-800 dark:text-gray-200">{q.text}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            {q.categoryId ? (
                                <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100">
                                    {q.category?.name}
                                </span>
                            ) : (
                                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full border border-gray-200 flex items-center gap-1">
                                    <Globe size={10} /> Global
                                </span>
                            )}

                            <button onClick={() => handleDelete(q.id)} className="text-gray-400 hover:text-red-500 transition opacity-0 group-hover:opacity-100">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
                {filteredQuestions.length === 0 && (
                    <p className="text-center text-gray-400 py-8 italic">No hay preguntas configuradas para este filtro.</p>
                )}
            </div>
        </div>
    )
}
