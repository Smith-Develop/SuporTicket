import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        // Fetch Cloudinary credentials from DB
        const settings = await db.companySettings.findUnique({
            where: { id: 1 }
        });

        if (!settings || !settings.cloudinaryCloudName || !settings.cloudinaryApiKey || !settings.cloudinaryApiSecret) {
            return NextResponse.json({ error: "Cloudinary no está configurado en los Ajustes de Empresa." }, { status: 500 });
        }

        // Configure Cloudinary dynamically
        cloudinary.config({
            cloud_name: settings.cloudinaryCloudName,
            api_key: settings.cloudinaryApiKey,
            api_secret: settings.cloudinaryApiSecret,
        });

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Upload to Cloudinary via stream
        const result = await new Promise<any>((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                {
                    folder: "suporticket_uploads",
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(buffer);
        });

        return NextResponse.json({ url: result.secure_url });
    } catch (error) {
        console.error("Cloudinary upload error:", error);
        return NextResponse.json({ error: "Upload failed: " + (error as any).message }, { status: 500 });
    }
}
