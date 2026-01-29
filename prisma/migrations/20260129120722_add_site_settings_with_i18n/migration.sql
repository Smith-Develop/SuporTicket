-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logoUrl" TEXT DEFAULT '',
    "showOnWeb" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT DEFAULT '',
    "descriptionEn" TEXT DEFAULT '',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "prefix" TEXT NOT NULL DEFAULT 'GEN',

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "ticketNumber" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "priority" TEXT NOT NULL DEFAULT 'MEDIUM',
    "cancellationReason" TEXT,
    "customerId" TEXT,
    "customerName" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "contactMethod" TEXT,
    "addressStreet" TEXT NOT NULL DEFAULT '',
    "addressColony" TEXT NOT NULL DEFAULT '',
    "addressZip" TEXT NOT NULL DEFAULT '',
    "addressCity" TEXT NOT NULL DEFAULT '',
    "propertyType" TEXT NOT NULL DEFAULT 'RESIDENTIAL',
    "brandId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "model" TEXT,
    "serialNumber" TEXT,
    "issueDescription" TEXT NOT NULL,
    "triageData" TEXT NOT NULL,
    "technicianId" TEXT,
    "laborCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "partsCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "invoiceUrl" TEXT,
    "signatureUrl" TEXT,
    "technicianNotes" TEXT,
    "isRepaired" BOOLEAN NOT NULL DEFAULT false,
    "invoiceName" TEXT,
    "invoiceTaxId" TEXT,
    "invoiceEmail" TEXT,
    "invoiceAddress" TEXT,
    "includeIva" BOOLEAN NOT NULL DEFAULT true,
    "appliedIvaPercentage" DOUBLE PRECISION NOT NULL DEFAULT 21.0,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT,
    "documentNumber" TEXT,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT,
    "phone" TEXT,
    "role" TEXT NOT NULL DEFAULT 'TECHNICIAN',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SparePart" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "SparePart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanySettings" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "name" TEXT NOT NULL DEFAULT 'My Company',
    "taxId" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "logoUrl" TEXT DEFAULT '',
    "ivaPercentage" DOUBLE PRECISION NOT NULL DEFAULT 21.0,
    "currencySymbol" TEXT NOT NULL DEFAULT 'EUR',
    "currencyCode" TEXT NOT NULL DEFAULT 'EUR',
    "countryCode" TEXT NOT NULL DEFAULT '34',
    "cloudinaryCloudName" TEXT NOT NULL DEFAULT '',
    "cloudinaryApiKey" TEXT NOT NULL DEFAULT '',
    "cloudinaryApiSecret" TEXT NOT NULL DEFAULT '',
    "externalDbUrl" TEXT NOT NULL DEFAULT '',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanySettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SiteSettings" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "companyName" TEXT NOT NULL DEFAULT 'SuporTicket',
    "logoUrl" TEXT DEFAULT '',
    "faviconUrl" TEXT DEFAULT '',
    "emergencyPhone" TEXT NOT NULL DEFAULT '',
    "whatsappNumber" TEXT NOT NULL DEFAULT '',
    "supportEmail" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "googleMapUrl" TEXT DEFAULT '',
    "facebookUrl" TEXT DEFAULT '',
    "instagramUrl" TEXT DEFAULT '',
    "twitterUrl" TEXT DEFAULT '',
    "linkedinUrl" TEXT DEFAULT '',
    "primaryColor" TEXT NOT NULL DEFAULT '#0f172a',
    "secondaryColor" TEXT NOT NULL DEFAULT '#3b82f6',
    "fontFamily" TEXT NOT NULL DEFAULT 'Inter',
    "metaTitle" TEXT DEFAULT 'Servicio Técnico Oficial',
    "metaDescription" TEXT DEFAULT 'Reparación de electrodomésticos y dispositivos electrónicos.',
    "googleAnalyticsId" TEXT DEFAULT '',
    "facebookPixelId" TEXT DEFAULT '',
    "heroTitle" TEXT NOT NULL DEFAULT 'Reparación Experta en Tu Ciudad',
    "heroTitleEn" TEXT DEFAULT 'Expert Repair in Your City',
    "heroSubtitle" TEXT NOT NULL DEFAULT 'Técnicos certificados a tu disposición inmediata.',
    "heroSubtitleEn" TEXT DEFAULT 'Certified technicians at your immediate disposal.',
    "heroImageUrl" TEXT DEFAULT '',
    "aboutTitle" TEXT NOT NULL DEFAULT 'Sobre Nosotros',
    "aboutTitleEn" TEXT DEFAULT 'About Us',
    "aboutText" TEXT NOT NULL DEFAULT 'Somos líderes en servicio técnico con más de 10 años de experiencia.',
    "aboutTextEn" TEXT DEFAULT 'We are leaders in technical service with over 10 years of experience.',
    "aboutImageUrl" TEXT DEFAULT '',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SiteSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriageQuestion" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "triggerPriority" TEXT NOT NULL DEFAULT 'NONE',
    "categoryId" INTEGER,

    CONSTRAINT "TriageQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phone_key" ON "Customer"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_documentNumber_key" ON "Customer"("documentNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SparePart_sku_key" ON "SparePart"("sku");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriageQuestion" ADD CONSTRAINT "TriageQuestion_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
