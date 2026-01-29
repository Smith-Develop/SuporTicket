'use client'

import { ComponentProps } from 'react'

export function InvoicePrintButton(props: ComponentProps<'button'>) {
    return (
        <button
            onClick={() => window.print()}
            {...props}
        >
            {props.children || '🖨️ Imprimir / Guardar'}
        </button>
    )
}
