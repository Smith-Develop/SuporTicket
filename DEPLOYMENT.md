# Guía de Despliegue y SEO para SuporTicket

Esta guía te ayudará a subir tu aplicación a internet y asegurarte de que Google la encuentre correctamente.

## 1. Despliegue (Hosting)

Recomendamos usar **Vercel** para el frontend y **Supabase** para la base de datos.

### Base de Datos (Supabase)
1.  Crea un proyecto en [Supabase](https://supabase.com).
2.  Ve a `Project Settings` > `Database` y copia la `Connection String`.
3.  Necesitarás dos URLs:
    *   **Transaction Mode** (Puerto 6543): Úsala para la variable `DATABASE_URL`.
    *   **Session Mode** (Puerto 5432): Úsala para la variable `DIRECT_URL`.

### Aplicación (Vercel)
1.  Sube tu código a GitHub.
2.  Crea una cuenta en [Vercel](https://vercel.com) e importa tu repositorio.
3.  En la configuración del proyecto ("Environment Variables"), añade las siguientes variables del archivo `.env`:
    *   `DATABASE_URL` (La de Supabase puerto 6543)
    *   `DIRECT_URL` (La de Supabase puerto 5432)
    *   `NEXT_PUBLIC_APP_URL` (Tu dominio final, ej: `https://suporticket.com`)
    *   `AUTH_SECRET` (Genera uno nuevo largo y seguro)
    *   `CLOUDINARY_...` (Tus claves de Cloudinary)
4.  Dale a **Deploy**.

## 2. SEO y Google Search Console

Una vez tu web esté online (ej: `https://tu-web.vercel.app` o `https://tu-dominio.com`):

### Verificación
1.  Entra en [Google Search Console](https://search.google.com/search-console).
2.  Añade tu propiedad (Dominio o Prefijo de URL).
3.  Si usas Vercel, la verificación por DNS es la más fácil si compraste el dominio allí, o subiendo el archivo HTML que te da Google a la carpeta `public` del proyecto (requiere otro deploy).

### Mapa del Sitio (Sitemap)
1.  En Search Console, ve a la sección **Sitemaps**.
2.  Envía la URL de tu sitemap: `https://tu-web.com/sitemap.xml`
    *   *Nota: Nosotros generamos `sitemap.xml` automáticamente en `src/app/sitemap.ts`.*
3.  Google leerá tu web y verá las páginas públicas (`/nosotros`, `/servicios/...`).
4.  Gracias al archivo `robots.txt` que creamos, Google **ignorará** automáticamente `/admin` y `/technician`, protegiendo la privacidad de tu gestión.

### Consejos Extra
*   **Google My Business**: Crea una ficha de negocio físico en Google Maps y enlaza tu web. Esto es vital para el SEO local ("reparación lavadoras madrid").
*   **Redes Sociales**: Pon el enlace de tu web en Instagram/Facebook.
