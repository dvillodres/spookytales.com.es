import {getCldImageUrl} from "astro-cloudinary/helpers"

export async function GET({ params }) {
    const {slug, sceneID} = params;

    const getImage = (slug, scene) => {
        return getCldImageUrl({
            src: slug,
            format: "webp",
            extract: 'person',
            replace: [scene.replace, scene.prompt, true],
            fillLight: true,
            width: "800",
            height: "800",
            crop: "crop",
            sharpen: true
        })
    }

    const getBaseImage = (slug) => {
        return getCldImageUrl({
            src: slug,
            width: "800",
            height: "800",
            crop: "crop",
        })
    }

    const getExtractedBaseImage = (slug) => {
        return getCldImageUrl({
            src: slug,
            width: "800",
            height: "800",
            extract: 'person',
            crop: "crop",
        })
    }


    const response = await fetch('https://n8n-strapi.pauypi.easypanel.host/spooky-tales-adventures/2');
    const data = await response.json();
    const adventure = data.scenes;
    const scene = adventure.find(scene => scene.phase === parseInt(sceneID));

    if (!scene) {
        return new Response(JSON.stringify({ success: 0, message: "Scene not found"}), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    let imageUrl;
    if (scene.prompt && scene.replace) {
        imageUrl = getImage(slug, scene);
    } else if (scene.replace) {
        imageUrl = getExtractedBaseImage(slug);
    } else {
        imageUrl = getBaseImage(slug);
    }

    const imageResponse = await fetch(imageUrl);
    const imageBlob = await imageResponse.blob();

    return new Response(imageBlob, {
        status: 200,
        headers: {
            'Content-Type': 'image/webp',
            'Cache-Control': 'public, max-age=3600', // 1 hora de cache
        },
    });
}