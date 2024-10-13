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

{#key currentPhrase}
    <small class="font-mono bg-purple-500/30 rounded py-2 w-full">{currentPhrase}</small>
{/key}

