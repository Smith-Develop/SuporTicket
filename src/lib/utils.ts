export function formatTicketId(ticket: { id: string, ticketNumber?: number | null, category?: { prefix?: string | null } | null }) {
    if (ticket.ticketNumber && ticket.category?.prefix) {
        return `${ticket.category.prefix}${ticket.ticketNumber.toString().padStart(3, '0')}`
    }
    return ticket.id.slice(-6).toUpperCase()
}

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
