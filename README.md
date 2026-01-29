# 🎫 SuporTicket - Sistema Integral de Gestión SAT

![Banner de SuporTicket](INSERTAR_LINK_BANNER_AQUI)

**SuporTicket** es una plataforma moderna y robusta diseñada para transformar la gestión de **Servicios de Asistencia Técnica (SAT)**. Centraliza todo el flujo de trabajo: desde la recepción del equipo y la asignación de técnicos, hasta la reparación, documentación fotográfica en la nube y la entrega final con firma digital y facturación PDF.

Diseñado pensando en la **movilidad** para los técnicos y el **control total** para los administradores.

> [!TIP]
> **🚀 Stack de Última Generación**
> Construido sobre **Next.js 16**, **Prisma ORM** y **Tailwind CSS v4** para máxima velocidad y escalabilidad.

## ✨ Características Principales

- **�️ Roles y Permisos Granulares**: Sistema de autenticación con roles diferenciados para **Administradores** (Control total) y **Técnicos** (Vista enfocada en tareas).
- **📱 App de Técnico 'Mobile First'**: Interfaz PWA-ready diseñada para ser usada en campo. Permite subir evidencias y cerrar tickets con una mano.
- **✍️ Firma Digital Integrada**: Captura la firma del cliente en pantalla táctil al momento de la entrega o aprobación de presupuesto.
- **📄 Motor de Facturación PDF**: Generación instantánea de documentos profesionales (Presupuestos, Resguardos, Facturas) calculando automáticamente impuestos (IVA) y totales.
- **☁️ Gestión de Evidencias (Cloudinary)**: Subida de fotos ilimitadas para documentar el estado "Inicial" y "Final" de la reparación, almacenadas de forma segura en la nube.
- **📊 Dashboard Analítico**: Métricas en tiempo real sobre tickets pendientes, ingresos estimados, productividad técnica y tiempos de resolución.
- **🌍 Internacionalización (i18n)**: Arquitectura lista para soporte multi-idioma.
- **📦 Control de Inventario**: Gestión básica de marcas, modelos y categorías de dispositivos.

## 📸 Capturas de Pantalla

### 1. Dashboard Administrativo
*Vista general con métricas clave, filtros de estado y lista de tickets recientes.*
| Escritorio | Móvil |
| :---: | :---: |
| ![Admin Dashboard Desk](INSERTAR_IMAGEN_AQUI) | ![Admin Dashboard Mobile](INSERTAR_IMAGEN_AQUI) |

### 2. App del Técnico (Vista de Lista)
*Interfaz limpia para que los técnicos vean sus asignaciones y prioridades del día.*
| Escritorio | Móvil |
| :---: | :---: |
| ![Tech List Desk](INSERTAR_IMAGEN_AQUI) | ![Tech List Mobile](INSERTAR_IMAGEN_AQUI) |

### 3. Detalle de Ticket & Diagnóstico
*Gestión completa de la reparación: descripción del problema, notas técnicas y repuestos.*
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

### 6. Configuración & Integraciones
*Panel para configurar datos de empresa y credenciales API (Cloudinary).*
![Settings Panel](INSERTAR_IMAGEN_AQUI)

---

## 🧩 Arquitectura y Componentes

La aplicación sigue una arquitectura moderna basada en **Server Actions** de Next.js para minimizar el JavaScript en el cliente y asegurar la integridad de los datos.

### Lógica de Negocio (`src/app/*-actions.ts`)
*   **`ticket-actions.ts`**: El núcleo transaccional. Maneja la creación de tickets, transiciones de estado (Pendiente -> En Progreso -> Finalizado) y asignación de técnicos.
*   **`technician-actions.ts`**: Lógica específica para el rol técnico.
    *   **`uploadPhoto`**: Procesa `FormData`, autentica con Cloudinary, sube la imagen y guarda la URL segura en la BD.
    *   **`saveSignature`**: Recibe la firma en Base64, la procesa y la vincula al ticket para el cierre.
*   **`settings-actions.ts`**: Gestión de la configuración global de la empresa (impuestos, moneda, logos) persistente en base de datos.

### Componentes UI Clave (`src/components/`)
*   **`InvoiceModal`**: Componente complejo que orquesta el cierre del ticket.
    *   Integra `react-signature-canvas` para capturar trazos.
    *   Utiliza `jsPDF` para maquetar vectorialmente el reporte final en el navegador, incrustando las fotos y la firma.
*   **`AdminTicketList`**: Tabla inteligente con filtrado en servidor y cliente, paginación y estados visuales.
*   **`AdminLayoutClient`**: Wrapper responsable de la navegación responsiva (Sidebar colapsable en móvil).

### Base de Datos (Prisma)
*   **Modelos Relacionales**:
    *   `Ticket` conecta con `Customer`, `User` (Técnico), `Brand`, `Category`.
    *   `CompanySettings` almacena configuración singleton para la tenant.
    *   `Photo` almacena referencias a recursos externos de Cloudinary.

---

## 🚀 Guía de Configuración e Instalación

### Prerrequisitos
- Node.js (v18+)
- npm o pnpm
- Cuenta en Cloudinary (Gratuita) para almacenamiento de imágenes.

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
    Crea un archivo `.env` en la raíz (puedes copiar un ejemplo si existe):
    ```env
    # Base de datos local SQLite
    DATABASE_URL="file:./dev.db"
    
    # URL Base para generación de links
    NEXT_PUBLIC_BASE_URL="http://localhost:3000"
    
    # Secretos de Auth (Generar uno seguro en producción)
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

Para que todas las funciones (especialmente imágenes) funcionen:

1.  Accede a `http://localhost:3000/admin`.
2.  Ve a **Configuración** (Settings).
3.  Rellena los datos de tu empresa.
4.  **CRÍTICO**: En la sección "Integraciones", introduce tus credenciales de **Cloudinary** (Cloud Name, API Key, API Secret). Sin esto, la subida de fotos no funcionará.

## 📦 Despliegue

Este proyecto está optimizado para desplegarse en **Vercel** o cualquier host que soporte Node.js/Next.js.
*Nota: Para despliegue en Vercel, asegúrate de cambiar el provider de Prisma a PostgreSQL o MySQL, ya que SQLite no persiste en funciones serverless efímeramente.*

---

## 📄 Licencia

Este proyecto es propiedad privada. Contactar al desarrollador para permisos de uso.
