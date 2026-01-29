# 🎫 SuporTicket - Sistema Integral de Gestión SAT

![Banner de SuporTicket](INSERTAR_LINK_BANNER_AQUI)

**SuporTicket** es una plataforma moderna y robusta diseñada para transformar la gestión de **Servicios de Asistencia Técnica (SAT)**. Centraliza todo el flujo de trabajo: desde la recepción del equipo y la asignación de técnicos, hasta la reparación, documentación fotográfica en la nube y la entrega final con firma digital y facturación PDF.

Diseñado pensando en la **movilidad** para los técnicos y el **control total** para los administradores.

> [!TIP]
> **🚀 Stack de Última Generación**
> Construido sobre **Next.js 16**, **Prisma ORM** y **Tailwind CSS v4** para máxima velocidad y escalabilidad.

## ✨ Características Principales

- **🛡️ Roles y Permisos Granulares**: Sistema de autenticación con roles diferenciados para **Administradores** (Control total) y **Técnicos** (Vista enfocada en tareas). Panel de administración accesible desde el dashboard técnico (solo para admins).
- **📱 App de Técnico 'Mobile First'**: Interfaz PWA-ready. Permite subir evidencias, gestionar estados y ver ingresos estimados. Diseño unificado con el panel de administración.
- **⚡ Triage Inteligente**: Formulario de recepción con asignación inmediata de técnicos y generación automática de mensajes de bienvenida para WhatsApp.
- **✍️ Firma Digital Integrada**: Captura la firma del cliente en pantalla táctil al momento de la entrega o aprobación de presupuesto.
- **📄 Motor de Facturación PDF Nativo**: Generación de PDFs directamente en el servidor (API Route) utilizando `@react-pdf/renderer` para documentos perfectos y ligeros. Enlace directo para WhatsApp sin pasos intermedios.
- **⚖️ Gestión de Textos Legales**: CMS integrado en el panel de administración para actualizar Política de Privacidad, Términos y Garantía sin tocar código.
- **☁️ Gestión de Evidencias (Cloudinary)**: Subida de fotos ilimitadas para documentar el estado "Inicial" y "Final" de la reparación, almacenadas de forma segura en la nube.
- **📊 Dashboard Analítico**: Métricas en tiempo real sobre tickets pendientes, ingresos estimados, productividad técnica y tiempos de resolución.
- **🛠️ Herramientas Administrativas**:
    - **Reenvío de Mensajes**: Botón para reenviar la notificación de WhatsApp al técnico.
    - **Seed de Emergencia**: Ruta `/api/seed` para recuperación de acceso administrador en desarrollo.
- **🌍 Internacionalización (i18n)**: Arquitectura lista para soporte multi-idioma (Español por defecto).
- **📦 Control de Inventario**: Gestión básica de marcas, modelos y categorías de dispositivos.

## 📸 Capturas de Pantalla

### 1. Dashboard Administrativo & Técnico
*Vista unificada con métricas clave, filtros de estado y acceso rápido a funciones.*
| Escritorio | Móvil |
| :---: | :---: |
| ![Admin Dashboard Desk](INSERTAR_IMAGEN_AQUI) | ![Admin Dashboard Mobile](INSERTAR_IMAGEN_AQUI) |

### 2. Triage & Asignación
*Formulario inteligente para crear tickets, asignar técnicos y notificar por WhatsApp en un solo paso.*
| Vista Formulario |
| :---: |
| ![Triage Form](INSERTAR_IMAGEN_AQUI) |

### 3. Detalle de Ticket & Diagnóstico
*Gestión completa de la reparación: descripción del problema, notas técnicas, repuestos y checklist de cierre.*
| Escritorio | Móvil |
| :---: | :---: |
| ![Ticket Detail Desk](INSERTAR_IMAGEN_AQUI) | ![Ticket Detail Mobile](INSERTAR_IMAGEN_AQUI) |

### 4. Evidencia Fotográfica (Antes/Después)
*Subida de imágenes integrada con Cloudinary.*
| Escritorio | Móvil |
| :---: | :---: |
| ![Photos Desk](INSERTAR_IMAGEN_AQUI) | ![Photos Mobile](INSERTAR_IMAGEN_AQUI) |

### 5. Firma Digital y Generación PDF
*Momento de cierre: el cliente firma y se genera el documento PDF automáticamente.*
| Escritorio | Móvil |
| :---: | :---: |
| ![Signature Desk](INSERTAR_IMAGEN_AQUI) | ![Signature Mobile](INSERTAR_IMAGEN_AQUI) |

---

## 🧩 Arquitectura y Componentes

La aplicación sigue una arquitectura moderna basada en **Server Actions** de Next.js para minimizar el JavaScript en el cliente y asegurar la integridad de los datos.

### Lógica de Negocio (`src/app/*-actions.ts`)
*   **`ticket-actions.ts`**: El núcleo transaccional. Maneja la creación, asignación y estados.
*   **`technician-actions.ts`**: Lógica para el flujo técnico (fotos, costos, cierre).
    *   **`uploadPhoto`**: Integración segura con Cloudinary.
    *   **`saveSignature`**: Digitalización de firmas.
*   **`settings-actions.ts`**: Configuración global persistente.

### Base de Datos (Prisma)
*   **Modelos Relacionales**: `Ticket`, `Customer`, `User`, `Brand`, `Category`.
*   **Soporte Multi-DB**: Configurado para funcionar con **PostgreSQL (Supabase)**, MySQL o SQLite.

---

## 🚀 Guía de Configuración e Instalación

### Prerrequisitos
- Node.js (v18+)
- npm o pnpm
- Cuenta en Cloudinary (Gratuita)
- Base de datos PostgreSQL (Recomendado: Supabase) o MongoDB.

### 1. Instalación Local

1.  **Clonar el repositorio**
    ```bash
    git clone https://github.com/tu-usuario/supor-ticket.git
    cd supor-ticket
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    ```

3.  **Configurar Entorno**
    Crea un archivo `.env` en la raíz copiando el ejemplo:
    ```env
    # Conexión a Base de Datos (Ej: Supabase Transaction Pooler)
    DATABASE_URL="postgresql://postgres:[PASSWORD]@db.supabase.co:6543/postgres?pgbouncer=true"
    
    # URL Directa (Para migraciones)
    DIRECT_URL="postgresql://postgres:[PASSWORD]@db.supabase.co:5432/postgres"
    
    # URL Base
    NEXT_PUBLIC_BASE_URL="http://localhost:3000"
    
    # Secretos
    AUTH_SECRET="tu_secreto_super_seguro"
    ```

4.  **Inicializar Base de Datos**
    ```bash
    npx prisma db push
    ```

5.  **Ejecutar Servidor**
    ```bash
    npm run dev
    ```

### 2. Configuración Post-Instalación

1.  Accede a `http://localhost:3000/admin`.
2.  Ve a **Configuración** (Settings).
3.  Rellena los datos de tu empresa (Logo, NIF, Dirección).
4.  **Integraciones**: Configura tus credenciales de **Cloudinary** para habilitar la subida de imágenes.

## 📦 Despliegue

Este proyecto está optimizado para desplegarse en **Vercel**.
*   Asegúrate de configurar las variables de entorno (`DATABASE_URL`, `DIRECT_URL`) en el panel de Vercel.

---

## 📄 Licencia

Este proyecto es propiedad privada. Contactar al desarrollador para permisos de uso.
