'use client'

import React from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function ClientLink({ id, displayId }: { id: string, displayId?: string }) {
    const locale = useLocale()
    return (
        <Link href={`/${locale}/admin/tickets/${id}`} className="hover:text-blue-600 underline decoration-blue-400 underline-offset-2 font-bold" prefetch={false}>
            {displayId || `#${id.slice(-6).toUpperCase()}`}
        </Link>
    )
}
