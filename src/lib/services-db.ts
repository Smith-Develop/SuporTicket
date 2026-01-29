import { db } from './db'

// Simplified to return the main database instance directly.
// Maintained as an async function to verify connection if needed and preserve API compatibility.
export async function getServicesDb() {
    return db
}
