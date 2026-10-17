# Recomendaciones — Laura Díaz Pérez Portfolio

El sitio compila y despliega correctamente (build estático, EN + ES). Estas son las mejoras
recomendadas, ordenadas por impacto:

## 1. Dominio propio
El sitemap genera URLs en `https://laura-diaz-portfolio.vercel.app`. Cambia `site` en
`astro.config.mjs` por tu dominio real (p. ej. `https://lauradiaz.dev`) antes de indexar;
después regenera el sitemap y verifica el dominio en Google Search Console.

## 2. Formulario de contacto real
El formulario usa React Hook Form + Zod, pero el envío necesita un backend. Opciones:
- **Formspree / Web3Forms** (gratis, sin backend propio): apunta el `action` al endpoint.
- **API route en Vercel**: un `api/contact.ts` que reenvíe a tu email con Resend.
Añade además `rate limiting` básico (honeypot o límite por IP) para evitar spam.

## 3. Imágenes y CV
- Sustituye las imágenes placeholder del hero/case studies por capturas reales de tus
  proyectos (formato WebP, < 200 KB).
- El botón de descarga del CV apunta a un archivo; coloca tu PDF real en `public/`.

## 4. Contenido de los case studies
Los 3 case studies (shopify-store, woocommerce-store, wordpress-seo) vienen de la plantilla.
Reescribelos con tus proyectos reales: métricas, proceso, herramientas. Añade tus propios
`heroImage` y resultados verificables — son lo primero que un reclutador lee.

## 5. SEO y analítica
- Verifica el dominio en Google Search Console y envía `sitemap-index.xml`.
- Añade analytics respetuoso con privacidad (umami, Plausible o Vercel Analytics).
- Rellena `AUTHOR` y `SOCIAL_LINKS` en `src/consts.ts` con todos tus perfiles reales
  (falta LinkedIn/GitHub activos si no están completos).

## 6. Rendimiento
- Hay un aviso de chunk > 500 KB (React Three / three.js). Si la escena 3D no es esencial,
  considera cargirla solo en `hover`/lazy o eliminarla para reducir ~600 KB.
- `npm run preview` para revisar el resultado final antes de desplegar.

## Comandos útiles
```bash
npm run dev      # desarrollo (http://localhost:4321)
npm run build    # build estático en dist/
npm run preview  # sirve dist/ localmente
```
