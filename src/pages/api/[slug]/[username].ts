import {getCldImageUrl} from "astro-cloudinary/helpers"

export async function GET({ params }) {
    const {slug, username} = params;
    let adventure = null;

    const getImage = (slug, scene) => {
        return getCldImageUrl({
            src: slug,
            format: "webp",
            extract: 'person',
            replace: [scene.replace, scene.prompt, true]
        })
    }

    const getExtractedBaseImage = (slug) => {
        return getCldImageUrl({
            src: slug,
            format: "webp",
            extract: 'person'
        })
    }

    const results = await fetch('https://n8n-strapi.pauypi.easypanel.host/spooky-tales-adventures/2')
        .then(response => response.json())
        .then(async (response) => {
            adventure = response.scenes

            const promises = adventure.map(async (scene) => {
                if (scene.prompt && scene.replace) {
                    const response = await fetch(getImage(slug, scene));
                    return {
                        status: response.status,
                        url: `/api/image/${scene.phase}/${slug}`,
                        ...scene
                    };
                }
                if (scene.replace) {
                    const response = await fetch(getExtractedBaseImage(slug,));
                    return {
                        status: response.status,
                        url: `/api/image/${scene.phase}/${slug}`,
                        ...scene
                    };
                }
                return {
                    status: null,
                    url: `/api/image/${scene.phase}/${slug}`,
                    description: scene.description,
                    image: scene.image
                };
            });

            return await Promise.all(promises);
        });

    await fetch('https://n8n-strapi.pauypi.easypanel.host/spooky-tales-games', {
        method: 'POST',
        body: JSON.stringify({ username: username, cloudinaryID: slug, adventure: 2 }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => console.log(response.data))
    .catch((e) => {
        console.log(e.status)
        console.log(e.body)
    })

    return new Response(JSON.stringify({success: 1, data: results, adventure: 2}), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
