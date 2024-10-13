<script>
</script>

<div id="container" class="relative overflow-hidden w-full h-full bg-black">
    <img src={`/assets/img/transformacion/final-3.webp`} alt="">
</div>

<style>
    img {
        margin: 0 auto;
        transform: scale(0);
        animation-delay: -1s;
        animation-timing-function: ease-in;
        animation: scream 1s ;
    }

    @keyframes scream {
        0% {
            transform: scale(0);
        }

        60% {
            opacity: 1;
        }

        80% {
            transform: scale(3);
        }

        90% {
            opacity: 0;
        }

        100% {
            transform: scale(3);
            opacity: 0;
        }
    }
</style>
