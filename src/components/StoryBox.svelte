<script>
    import { onMount } from "svelte";
    import Loader from "./Loader.svelte";
    import TerrorImage from "./TerrorImage.svelte";
    import Scream from "./Scream.svelte";
    export let slug;
    export let username;
    let data = null;
    let started = false;
    let currentScene = 0;
    $: isLastPage = data !== null ? currentScene >= data.length - 1 : false;
    $: bgImage = data !== null ? data[currentScene]?.image : '';
    $: image = data !== null ? data[currentScene]?.url : '';
    $: description = data !== null ? data[currentScene]?.description : '';
    let music = null;
    let sound = null;
    let scream = null;
    let hidePanel = false;

    onMount(() => {
        music = new Audio('/assets/music/sound.mp3')
        sound = new Audio('/assets/music/sonido-1.mp3')
        scream = new Audio('/assets/music/scream.mp3')

        music.loop = true;
        fetch(`/api/${slug}/${username}`)
            .then(response => response.json())  // Asumiendo que la respuesta es JSON
            .then((response) => {
                data = response.data
            });
    });

    const nextScene = () => {
        if (!started) {
            sound.pause()

            sound?.play();
            music?.play()
            started = true
        } else {
            if (!isLastPage) {
                sound.pause()
                sound = new Audio(`/assets/music/sonido-${currentScene+2}.mp3`)
                sound.play()
                currentScene++;
            } else {
                sound.pause()
                scream?.play()
                scream.addEventListener('ended', () => {window.location.href = `/aventura/${slug}/${username}/compartir`; } );
                hidePanel = true;
            }
        }
    }
    $: bg = `background-image: url('/assets/img/transformacion/${bgImage}'); background-size: cover; background-position: center;`;

</script>

{#if !hidePanel}
    <div id="container" data-slug={slug} class="relative overflow-hidden w-full h-full fog-slow" style={bg}>
        <div class="bg-purple-950/30 backdrop-blur-sm overflow-hidden w-full h-full flex justify-center items-center ">
            <div class="w-[960px] min-h-[80vh] p-12 items-center justify-center flex flex-col gap-4 bg-neutral-950/60 rounded-xl">
                {#if data !== null && !isLastPage}
                    <TerrorImage imgURL={image} bgURL={bgImage} />
                {/if}
                {#if data !== null}
                    <p class="font-mono">{description}</p>
                {:else}
                    <p class="font-mono">Eras tú, al menos al principio. Un día como cualquier otro, caminando entre las sombras al atardecer, notaste algo extraño en tu reflejo. Un brillo, una sombra, algo que no debería estar ahí...</p>
                {/if}
                {#if data !== null}
                    <button on:click={nextScene}  class="font-mono bg-purple-500/20 backdrop-blur rounded py-2 w-full">{#if isLastPage}Finalizar{:else if started }Avanzar{:else}Comenzar{/if}</button>
                {:else}
                    <Loader/>
                {/if}
            </div>
        </div>
    </div>

{:else}
    <Scream />
{/if}
