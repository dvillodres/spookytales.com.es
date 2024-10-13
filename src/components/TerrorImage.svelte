<script>
    export let imgURL;
    export let bgURL;
    $: bg = `background-image: url('/assets/img/transformacion/${bgURL}'); background-size: cover; background-position: center;`;

</script>


<div style={bg}  class="h-64 w-64 mx-auto  border border-purple-600 overflow-hidden rounded-full">
    <div class="w-full h-full backdrop-blur-sm">
        <img src={imgURL} class=" character bg-transparent w-full h-full object-cover" alt="Imagen modificada por la IA de cloudinary">

    </div>

</div>

<style>
    .character {
        animation: moverYEscalar 20s ease-in-out infinite alternate;
    }

    @keyframes moverYEscalar {
        0% {
            transform: translateX(0) scale(1);
        }
        100% {
            transform: translateX(-12px) scale(1.1);
        }
    }
</style>
