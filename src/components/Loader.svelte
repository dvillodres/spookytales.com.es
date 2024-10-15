<script>

    let phrases = [
        "Invocando espíritus fotográficos... 👻",
        "Cocinando una pócima de píxeles... 🧙‍♂️",
        "Afilando las garras de la IA... 🐺",
        "Tejiendo telarañas de terror... 🕸️",
        "Despertando monstruos en tu imagen... 🧟",
        "Susurrando cuentos oscuros a la IA... 🔮"
    ];

    let currentPhrase = phrases[0];
    let index = 0;

    const changePhrase = () => {
        index = (index + 1) % phrases.length; // Cicla entre las frases
        currentPhrase = phrases[index];
    };

    // Cambia la frase cada 4 segundos
    setInterval(changePhrase, 4000);


</script>

    <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>

    <small class="font-mono bg-purple-500/30 rounded py-2 w-full">{currentPhrase}</small>




<style>
    .container {
        --uib-size: 47px;
        --uib-color: #8400ff;
        --uib-speed: 1s;
        --uib-dot-size: calc(var(--uib-size) * 0.18);
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        height: calc(var(--uib-size) * 0.5);
        width: var(--uib-size);
    }

    .dot {
        flex-shrink: 0;
        width: calc(var(--uib-size) * 0.17);
        height: calc(var(--uib-size) * 0.17);
        border-radius: 50%;
        background-color: var(--uib-color);
        transition: background-color 0.3s ease;
    }

    .dot:nth-child(1) {
        animation: jump var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.45)
        infinite;
    }

    .dot:nth-child(2) {
        animation: jump var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.3)
        infinite;
    }

    .dot:nth-child(3) {
        animation: jump var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.15)
        infinite;
    }

    .dot:nth-child(4) {
        animation: jump var(--uib-speed) ease-in-out infinite;
    }

    @keyframes jump {
        0%,
        100% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-200%);
        }
    }
</style>

