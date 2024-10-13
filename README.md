# 🎃 spookytales.com.es 👻

## Descripción

**spookytales.com.es** es una aplicación interactiva donde los usuarios pueden subir una fotografía suya, y mediante la magia de la IA proporcionada por Cloudinary, la imagen va transformándose mientras se narra una historia de terror. Al final de la historia, la fotografía se convierte en una imagen aterradora. 👹

Además, los usuarios podrán explorar una galería con las imágenes transformadas de otros participantes y votar por sus favoritas, creando una experiencia espeluznante y colaborativa. 🕸️

## Características principales

- 🧙 **Transformación de imágenes con IA**: Usa la IA de Cloudinary para alterar las fotografías a lo largo de una historia de terror.
- 🎭 **Galería comunitaria**: Los usuarios pueden ver las imágenes generadas por otros y votar por sus favoritas.
- 🧛 **Votaciones**: Las imágenes más votadas aparecerán en un ranking destacado.

## Tecnologías utilizadas

- [**Astro**](https://astro.build/): Framework ligero y moderno para generar sitios estáticos rápidos.
- [**Svelte**](https://svelte.dev/): Utilizado en combinación con Astro para crear componentes dinámicos e interactivos.
- [**Cloudinary SDK**](https://cloudinary.com/documentation): Para manejar la carga, procesamiento y transformación de las imágenes.
- [**Strapi**](https://strapi.io/): Usado como CMS para almacenar y gestionar las votaciones de los usuarios.

## Instalación

Sigue los siguientes pasos para ejecutar **spookytales.com.es** localmente:

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/dvillodres/spookytales.com.es.git
   cd spookytales.com.es
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura Cloudinary y Strapi**:

    - Crea una cuenta en [Cloudinary](https://cloudinary.com) y obtén tus credenciales API.
    - Despliega un servidor de [Strapi](https://strapi.io) para manejar las votaciones.
    - Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
      ```
      CLOUDINARY_CLOUD_NAME=tu_cloud_name
      CLOUDINARY_API_KEY=tu_api_key
      CLOUDINARY_API_SECRET=tu_api_secret
      STRAPI_API_URL=https://tu-depliegue-de-strapi.com
      ```

4. **Ejecuta el proyecto**:
   ```bash
   npm run dev
   ```

5. **Accede a la aplicación**: Ve a `http://localhost:4321` en tu navegador para ver **spookytales.com.es** en acción.

## Uso

1. Sube una foto y disfruta cómo se transforma mientras se narra una historia de terror. 🎃
2. Explora la galería para ver las imágenes de otros usuarios. 🕸️
3. Vota por tus imágenes favoritas y descubre las más populares en el ranking. 👹

## Créditos y Agradecimientos

Este proyecto fue desarrollado como parte del hackathon **Cloudinary CloudCreate Spooky AI**, organizado por [**Midudev**](https://midu.dev) y [**Cloudinary**](https://cloudinary.com). 🎃 ¡Gracias por la oportunidad de crear algo tan divertido y espeluznante!

¡Entendido! Aquí tienes una versión más breve y directa para la sección "Author" o "Developer":

---

## Developer

Hola! Soy @dvillodres si quieres comentar algo del proyecto puedes contactarme en [~~Twitter~~ x](https://x.com/dvillodres_)  si quieres saber más sobre mí puedes ir a mi uedes visitar mi [web](https://www.d-v.es) personal.

