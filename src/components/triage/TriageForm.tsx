'use client'

import { useActionState, useState, useEffect } from 'react' // React 19 hook
import { createTicket, createBrand, createCategory } from '@/app/actions' // Updated import with new actions
import { searchCustomers } from '@/app/customer-actions'
import { useTranslations } from 'next-intl'
import { Check, Loader2, X, Search, User, Phone, MapPin, Edit } from 'lucide-react'
import Link from 'next/link'

// Define types locally since Prisma generation is flaky in dev environment
type Brand = { id: number; name: string }
type Category = { id: number; name: string; slug: string }

interface TriageFormProps {
    brands: Brand[]
    categories: Category[]
    onSuccess?: () => void
    onCancel?: () => void
    isModal?: boolean
    technicians?: any[]
    triageQuestions?: { id: number; text: string; triggerPriority: string; categoryId: number | null }[]
}

const initialState = {
    message: '',
    whatsappUrl: '',
    ticketId: '',
}

export default function TriageForm({ brands: initialBrands, categories: initialCategories, onSuccess, onCancel, isModal, technicians, triageQuestions = [] }: TriageFormProps) {
    const t = useTranslations('Triage')
    const [state, formAction, isPending] = useActionState(createTicket, initialState)
    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)
    const [priority, setPriority] = useState<string>('NORMAL')

    // Local State for Lists (synced with props initially)
    const [brands, setBrands] = useState<Brand[]>(initialBrands)
    const [categories, setCategories] = useState<Category[]>(initialCategories)

    // Quick Add State
    const [isAddingBrand, setIsAddingBrand] = useState(false)
    const [isAddingCategory, setIsAddingCategory] = useState(false)
    const [newBrandName, setNewBrandName] = useState('')
    const [newCategoryName, setNewCategoryName] = useState('')
    const [newCategoryPrefix, setNewCategoryPrefix] = useState('')

    // ... (Customer Search State remains the same)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState<any[]>([])
    const [isSearching, setIsSearching] = useState(false)
    const [selectedCustomer, setSelectedCustomer] = useState<any | null>(null)
    const [mode, setMode] = useState<'SEARCH' | 'NEW' | 'SELECTED'>('SEARCH')


    useEffect(() => {
        if (state.whatsappUrl && onSuccess) {
            // Optional: Call onSuccess immediately or after a delay
        }
    }, [state.whatsappUrl, onSuccess])

    const handleSearch = async (query: string) => {
        setSearchQuery(query)
        if (query.length < 2) {
            setSearchResults([])
            return
        }
        setIsSearching(true)
        const results = await searchCustomers(query)
        setSearchResults(results)
        setIsSearching(false)
    }

    const selectCustomer = (customer: any) => {
        setSelectedCustomer(customer)
        setMode('SELECTED')
        setSearchResults([])
    }

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const catId = parseInt(e.target.value)
        const cat = categories.find(c => c.id === catId)
        setSelectedCategory(cat ? cat.slug : '')
        setSelectedCategoryId(catId || null)
        // Reset priority when category changes
        setPriority('NORMAL')
    }

    const handleAddBrand = async () => {
        if (!newBrandName.trim()) return
        const res = await createBrand(newBrandName)
        if (res.brand) {
            setBrands(prev => [...prev, res.brand])
            setIsAddingBrand(false)
            setNewBrandName('')
        } else {
            alert('Error creating brand')
        }
    }

    const handleAddCategory = async () => {
        if (!newCategoryName.trim()) return
        const res = await createCategory(newCategoryName, newCategoryPrefix)
        if (res.category) {
            setCategories(prev => [...prev, res.category])
            setIsAddingCategory(false)
            setNewCategoryName('')
            setNewCategoryPrefix('')
            setSelectedCategory(res.category.slug)
        } else {
            alert('Error creating category')
        }
    }

    // Filter questions based on selection
    const relevantQuestions = triageQuestions.filter(q =>
        q.categoryId === null || (selectedCategoryId && q.categoryId === selectedCategoryId)
    )

    const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>, triggerPriority: string) => {
        // Simple logic: If checking a HIGH priority item, set priority to HIGH.
        // In a real app, we might want to recalculate based on *all* checked items.
        // For now, let's keep it simple: If any HIGH is checked, it's HIGH.

        // Use timeout to allow state update or form data inspection if needed,
        // but since we derive purely visual priority here, we can just check inputs.

        const form = e.target.closest('form')
        if (form) {
            const highTriggers = Array.from(form.querySelectorAll('input[data-priority="HIGH"]:checked'))
            const mediumTriggers = Array.from(form.querySelectorAll('input[data-priority="MEDIUM"]:checked'))

            if (highTriggers.length > 0) setPriority('HIGH')
            else if (mediumTriggers.length > 0) setPriority('MEDIUM')
            else setPriority('NORMAL')
        }
    }


    if (state.whatsappUrl) {
        return (
            <div className={`flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-zinc-900 ${!isModal ? 'max-w-md mx-auto rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800' : ''}`}>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 animate-bounce-slow">
                    <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">¡Ticket Creado!</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6 font-mono text-lg">#{state.ticketId}</p>

                <a
                    href={state.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition transform hover:scale-105 shadow-lg shadow-green-600/20 mb-4"
                >
                    <Phone size={20} />
                    Enviar a Técnico (WhatsApp)
                </a>

                {isModal ? (
                    <button onClick={onSuccess} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-sm font-medium">
                        Cerrar y Actualizar
                    </button>
                ) : (
                    <Link href="/" className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-sm font-medium">
                        Volver al Inicio
                    </Link>
                )}
            </div>
        )
    }

    return (
        <form action={formAction} className={`max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-800 ${isModal ? 'shadow-none border-0 p-0' : ''}`}>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t('title')}</h1>
                {isModal && onCancel && (
                    <button type="button" onClick={onCancel} className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition">
                        <X size={20} />
                    </button>
                )}
            </div>

            {/* Customer Section */}
            <div className="mb-6">
                <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200 border-b pb-1 dark:border-zinc-800 flex justify-between items-center">
                    <span>{t('customer')}</span>
                    {mode === 'SELECTED' && (
                        <button type="button" onClick={() => setMode('SEARCH')} className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                            <Edit size={12} /> Cambiar
                        </button>
                    )}
                </h3>

                {mode === 'SEARCH' && (
                    <div className="space-y-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                placeholder="Buscar por Nombre, Teléfono o DNI..."
                                className="w-full pl-10 p-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                autoFocus
                            />
                            {isSearching && <Loader2 className="absolute right-3 top-3 animate-spin text-gray-400" size={18} />}
                        </div>

                        {/* Search Results */}
                        {searchResults.length > 0 && (
                            <div className="bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-xl shadow-lg max-h-60 overflow-y-auto divide-y dark:divide-zinc-700">
                                {searchResults.map(c => (
                                    <button
                                        type="button"
                                        key={c.id}
                                        onClick={() => selectCustomer(c)}
                                        className="w-full text-left p-3 hover:bg-gray-50 dark:hover:bg-zinc-700 transition flex flex-col"
                                    >
                                        <span className="font-bold text-gray-800 dark:text-gray-200">{c.name}</span>
                                        <span className="text-sm text-gray-500">{c.phone} | {c.documentNumber || 'Sin DNI'}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* No results or Explicit New */}
                        {(searchQuery.length > 0 && searchResults.length === 0 && !isSearching) && (
                            <div className="text-center p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-xl border border-dashed border-gray-300 dark:border-zinc-700">
                                <p className="text-gray-500 mb-2">No se encontró cliente.</p>
                                <button type="button" onClick={() => setMode('NEW')} className="text-blue-600 font-bold hover:underline">
                                    + Crear Nuevo Cliente
                                </button>
                            </div>
                        )}
                        {searchQuery.length === 0 && (
                            <div className="text-right">
                                <button type="button" onClick={() => setMode('NEW')} className="text-sm text-gray-500 hover:text-blue-600">
                                    O ingresa datos manualmente &rarr;
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {mode === 'SELECTED' && selectedCustomer && (
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-xl flex items-start gap-3">
                        <div className="bg-blue-200 dark:bg-blue-800 p-2 rounded-full text-blue-700 dark:text-blue-100">
                            <User size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 dark:text-gray-100">{selectedCustomer.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                <Phone size={12} /> {selectedCustomer.phone}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                <MapPin size={12} /> {selectedCustomer.address || 'Sin dirección registrada'}
                            </p>
                            <input type="hidden" name="customerId" value={selectedCustomer.id} />
                        </div>
                    </div>
                )}

                {(mode === 'NEW' || mode === 'SELECTED') && (
                    <div className="grid grid-cols-1 gap-4 mt-4 animate-in fade-in slide-in-from-top-4 duration-300">
                        {mode === 'NEW' && (
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-bold text-gray-400 uppercase">Datos del Cliente</span>
                                <button type="button" onClick={() => setMode('SEARCH')} className="text-xs text-red-500 hover:underline">Cancelar</button>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                name="customerName"
                                required
                                defaultValue={selectedCustomer?.name}
                                key={selectedCustomer?.id ? `name-${selectedCustomer.id}` : 'name-new'}
                                placeholder="Nombre Completo"
                                className={`w-full p-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition ${mode === 'SELECTED' ? 'bg-gray-100 dark:bg-zinc-900' : ''}`}
                                readOnly={mode === 'SELECTED'}
                            />
                            <input
                                name="customerPhone"
                                required
                                type="tel"
                                defaultValue={selectedCustomer?.phone}
                                key={selectedCustomer?.id ? `phone-${selectedCustomer.id}` : 'phone-new'}
                                placeholder="Teléfono"
                                className={`w-full p-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition ${mode === 'SELECTED' ? 'bg-gray-100 dark:bg-zinc-900' : ''}`}
                                readOnly={mode === 'SELECTED'}
                            />
                        </div>

                        <input
                            name="documentNumber"
                            defaultValue={selectedCustomer?.documentNumber}
                            key={selectedCustomer?.id ? `doc-${selectedCustomer.id}` : 'doc-new'}
                            placeholder="DNI / NIF / Documento (Opcional)"
                            className="w-full p-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                            readOnly={mode === 'SELECTED'}
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <input name="addressStreet" required defaultValue={selectedCustomer?.address?.split(',')[0]} placeholder="Calle y Número" className="w-full p-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" />
                            <input name="addressZip" required placeholder="Código Postal" className="w-full p-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <select name="addressColony" required className="w-full p-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition">
                                <option value="">Selecciona Municipio...</option>
                                <optgroup label="Madrid Capital">
                                    <option value="Madrid Centro">Madrid Centro</option>
                                    <option value="Arganzuela">Arganzuela</option>
                                    <option value="Retiro">Retiro</option>
                                    <option value="Salamanca">Salamanca</option>
                                    <option value="Chamartín">Chamartín</option>
                                    <option value="Tetuán">Tetuán</option>
                                    <option value="Chamberí">Chamberí</option>
                                    <option value="Hortaleza">Hortaleza</option>
                                    <option value="Fuencarral-El Pardo">Fuencarral-El Pardo</option>
                                    <option value="Moncloa-Aravaca">Moncloa-Aravaca</option>
                                </optgroup>
                                <optgroup label="Otros">
                                    <option value="Otro">Otro / Fuera de Madrid</option>
                                </optgroup>
                            </select>
                            <select name="propertyType" required className="w-full p-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition">
                                <option value="RESIDENTIAL">Vivienda</option>
                                <option value="COMMERCIAL">Local / Oficina</option>
                            </select>
                        </div>
                        <input name="addressCity" defaultValue="Comunidad de Madrid" className="w-full p-3 bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-500 cursor-not-allowed" />
                    </div>
                )}
            </div>

            {/* Device Info */}
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300 border-b pb-1 dark:border-zinc-800">{t('device')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">{t('brand')}</label>
                        {!isAddingBrand ? (
                            <div className="flex gap-2">
                                <select name="brandId" required className="w-full p-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition">
                                    <option value="">Select...</option>
                                    {brands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                                </select>
                                <button type="button" onClick={() => setIsAddingBrand(true)} className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg text-blue-600 font-bold">+</button>
                            </div>
                        ) : (
                            <div className="flex gap-2">
                                <input
                                    value={newBrandName}
                                    onChange={e => setNewBrandName(e.target.value)}
                                    placeholder="Nueva Marca"
                                    className="flex-1 p-2.5 bg-white border rounded-lg focus:ring-2 focus:ring-green-500"
                                    autoFocus
                                />
                                <button type="button" onClick={handleAddBrand} className="px-3 bg-green-600 text-white rounded-lg hover:bg-green-700">OK</button>
                                <button type="button" onClick={() => setIsAddingBrand(false)} className="px-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">X</button>
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">{t('category')}</label>
                        {!isAddingCategory ? (
                            <div className="flex gap-2">
                                <select name="categoryId" required onChange={handleCategoryChange} className="w-full p-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition">
                                    <option value="">Select...</option>
                                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                                </select>
                                <button type="button" onClick={() => setIsAddingCategory(true)} className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg text-blue-600 font-bold">+</button>
                            </div>
                        ) : (
                            <div className="flex gap-2 flex-wrap">
                                <input
                                    value={newCategoryName}
                                    onChange={e => setNewCategoryName(e.target.value)}
                                    placeholder="Nueva Categoria"
                                    className="flex-1 p-2.5 bg-white border rounded-lg focus:ring-2 focus:ring-green-500 min-w-[120px]"
                                    autoFocus
                                />
                                <input
                                    value={newCategoryPrefix}
                                    onChange={e => setNewCategoryPrefix(e.target.value)}
                                    placeholder="PFX (Ej: LV)"
                                    maxLength={3}
                                    className="w-20 p-2.5 bg-white border rounded-lg focus:ring-2 focus:ring-green-500 uppercase"
                                />
                                <button type="button" onClick={handleAddCategory} className="px-3 bg-green-600 text-white rounded-lg hover:bg-green-700">OK</button>
                                <button type="button" onClick={() => setIsAddingCategory(false)} className="px-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">X</button>
                            </div>
                        )}
                    </div>
                    <input name="model" placeholder={t('model')} className="w-full p-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
                    <input name="serialNumber" placeholder={t('serial')} className="w-full p-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
                </div>
            </div>

            {/* Technician Assignment */}
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300 border-b pb-1 dark:border-zinc-800">Asignación (Opcional)</h3>

                {technicians && technicians.length > 0 ? (
                    <select name="technicianId" className="w-full p-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition">
                        <option value="">-- Sin Asignar --</option>
                        {technicians.map((tech: any) => (
                            <option key={tech.id} value={tech.id}>
                                {tech.name} ({tech.role === 'ADMIN' ? 'Admin' : 'Técnico'}) - {tech.tickets?.length || 0} tickets
                            </option>
                        ))}
                    </select>
                ) : (
                    <div className="p-3 bg-yellow-50 text-yellow-700 rounded-lg text-sm border border-yellow-200">
                        No hay técnicos registrados. Ve a la sección de técnicos para agregar uno.
                    </div>
                )}
            </div>

            {/* Conditional Questions */}
            {(relevantQuestions.length > 0) && (
                <div className="mb-6 bg-gray-50 dark:bg-zinc-800 p-4 rounded-md border border-gray-100 dark:border-zinc-700">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-sm font-bold uppercase text-gray-500">Checklist de Diagnóstico</h3>
                        {priority === 'HIGH' && <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-1 rounded animate-pulse">ALTA PRIORIDAD RECOMENDADA</span>}
                        {priority === 'MEDIUM' && <span className="text-xs font-bold bg-yellow-100 text-yellow-600 px-2 py-1 rounded">Prioridad Media</span>}
                    </div>

                    <div className="space-y-2">
                        {relevantQuestions.map(q => (
                            <label key={q.id} className={`flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded cursor-pointer transition ${q.triggerPriority === 'HIGH' ? 'border-l-4 border-l-transparent hover:border-l-red-500' : ''}`}>
                                <input
                                    type="checkbox"
                                    name={`question_${q.id}`}
                                    value={q.text}
                                    data-priority={q.triggerPriority}
                                    onChange={(e) => handleQuestionChange(e, q.triggerPriority)}
                                    className={`w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${q.triggerPriority === 'HIGH' ? 'text-red-600 focus:ring-red-500' : ''}`}
                                />
                                <span className={q.triggerPriority === 'HIGH' ? 'font-medium text-red-700 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'}>
                                    {q.text} {q.triggerPriority === 'HIGH' && '🔥'}
                                </span>
                            </label>
                        ))}
                    </div>
                    {/* Hidden input to pass calculated priority suggestion to server if we wanted,
                        but server actions can also verify this. For now let's just rely on the questions being sent. */}
                </div>
            )}


            {/* Description */}
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300 border-b pb-1 dark:border-zinc-800">{t('issue')}</h3>
                <textarea name="issueDescription" required className="w-full p-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition h-24" placeholder="Describe brevemente lo que observa..."></textarea>
            </div>

            <button disabled={isPending} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                {isPending && <Loader2 className="animate-spin" />}
                {t('submit')}
            </button>

            {state.message && !state.whatsappUrl && <p className="text-red-500 mt-2 text-center">{state.message}</p>}
        </form>
    )
}
