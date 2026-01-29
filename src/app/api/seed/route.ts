import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function GET() {
    try {
        const hashedPassword = await bcrypt.hash("admin123", 10)

        const admin = await db.user.upsert({
            where: { email: "admin@suporticket.com" },
            update: {
                password: hashedPassword,
                role: "ADMIN",
                name: "Admin Principal"
            },
            create: {
                email: "admin@suporticket.com",
                name: "Admin Principal",
                password: hashedPassword,
                role: "ADMIN"
            }
        })

        return NextResponse.json({ success: true, message: "Admin user seeded: admin@suporticket.com / admin123" })
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to seed admin" }, { status: 500 })
    }
}
