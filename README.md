# [NOMBRE MARCA] — V2 Premium

Rediseño editorial premium para una colección de viviendas industrializadas de hormigón.

## Cambios V2
- Hero cinematográfico y navegación transparente sobre imagen.
- Sistema visual mineral: blanco cálido + carbón + hormigón como material puntual.
- Colección presentada como producto premium, con Model 200 y Signature como modelos halo.
- Catálogo y fichas de vivienda rediseñados con jerarquía editorial y fotografía dominante.
- Fichas con hero fullscreen, galería asimétrica, plano, equipamiento y CTA premium.
- Menú móvil fullscreen.
- Footer editorial.

## Configuración principal
- Marca: `config/brand.ts`
- Catálogo y precios: `data/houses.ts`
- Mostrar precios: `config/brand.ts` → `showPrices`
- Renders: `public/renders/`
- Textura de hormigón: `public/textures/concrete.webp`

## Vista previa rápida
Abre `preview.html` directamente en el navegador.

## Producción
```bash
npm install
npm run dev
```

Preparado para Vercel. Los costes internos permanecen en el módulo server-only de datos y no se muestran en frontend.

## Media integrada (V3)

- Hero desktop: `public/media/hero/hero-desktop.mp4` (1920px, H.264, sin audio, optimizado para web).
- Hero móvil: `public/media/hero/hero-mobile.mp4` (1080px vertical, H.264, sin audio, optimizado para web).
- Posters: `public/media/hero/hero-desktop-poster.jpg` y `hero-mobile-poster.jpg`.
- Renders editoriales: `public/media/houses/`.

La HOME selecciona automáticamente el vídeo vertical por debajo de 768px y el horizontal en desktop. Los vídeos no hacen loop: al terminar permanecen en el último fotograma.

Los renders fotorrealistas integrados actualmente corresponden a los modelos 01 (90 m²), 03 (130 m²), 06 (200 m²) y 07 Signature. Los modelos 02, 04 y 05 mantienen temporalmente los renders conceptuales SVG hasta disponer de imágenes específicas.
