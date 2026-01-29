'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Users, Wrench, ClipboardList, LayoutDashboard, Settings, Menu, X, LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { logoutAction } from '@/app/auth-actions'

type AdminLayoutClientProps = {
    children: React.ReactNode
    locale: string
    settings: any
}

export default function AdminLayoutClient({ children, locale, settings }: AdminLayoutClientProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const pathname = usePathname()

    const navLinks = [
        { href: `/${locale}/admin`, label: 'Dashboard', icon: LayoutDashboard },
        { href: `/${locale}/admin/customers`, label: 'Clientes', icon: Users },
        { href: `/${locale}/admin/technicians`, label: 'Técnicos', icon: Users }, // Different user icon maybe?
        { href: `/${locale}/admin/catalogs`, label: 'Catálogos', icon: Wrench },
        { href: `/${locale}/admin/settings`, label: 'Configuración', icon: Settings },
    ]

    const isActive = (href: string) => {
        if (href === `/${locale}/admin` && pathname === href) return true
        if (href !== `/${locale}/admin` && pathname.startsWith(href)) return true
        return false
    }

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-zinc-950 overflow-hidden">

            {/* MOBILE OVERLAY */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* SIDEBAR */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-zinc-900 shadow-xl border-r dark:border-zinc-800 transition-transform duration-300 ease-in-out
                md:relative md:translate-x-0
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="h-full flex flex-col">
                    {/* Header Logo */}
                    <div className="p-6 border-b dark:border-zinc-800 flex justify-between items-center">
                        <div className="flex justify-center w-full">
                            {settings?.logoUrl ? (
                                <img src={settings.logoUrl} alt="Logo" className="max-h-10 object-contain" />
                            ) : (
                                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                    SuporTicket
                                </h1>
                            )}
                        </div>
                        <button
                            className="md:hidden text-gray-500"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Nav */}
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                        <div className="mb-6 px-4">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Menu Principal</p>
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition font-medium ${isActive(link.href)
                                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800'
                                    }`}
                            >
                                <link.icon size={20} />
                                {link.label}
                            </Link>
                        ))}

                        <div className="my-4 border-t dark:border-zinc-800 mx-4"></div>

                        <Link
                            href={`/${locale}/technician`}
                            className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-lg transition"
                        >
                            <ClipboardList size={20} /> Ir a App Técnico
                        </Link>
                    </nav>

                    {/* Footer User */}
                    <div className="p-4 border-t dark:border-zinc-800">
                        <form action={logoutAction}>
                            <button className="flex items-center gap-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 w-full p-3 rounded-lg transition">
                                <LogOut size={16} /> Cerrar Sesión
                            </button>
                        </form>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT WRAPPER */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">

                {/* MOBILE HEADER BAR */}
                <header className="bg-white dark:bg-zinc-900 border-b dark:border-zinc-800 p-4 flex items-center gap-4 md:hidden shadow-sm z-30">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition"
                    >
                        <Menu size={24} />
                    </button>
                    <span className="font-bold text-lg">Admin Panel</span>
                </header>

                {/* SCROLLABLE PAGE CONTENT */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
                    {children}
                </main>
            </div>
        </div>
    )
}
