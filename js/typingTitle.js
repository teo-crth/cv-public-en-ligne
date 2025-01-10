const typingText = () => {
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const phrases = ["Fullstack", "Javascript"];
    const el = document.getElementById("titreldp2-subtitle");
    const cursor = document.getElementById("cursor");

    let sleepTime = 100; // Temps entre chaque lettre
    let curPhraseIndex = 0;

    const writeLoop = async () => {
        while (true) {
            let curWord = phrases[curPhraseIndex];
            cursor.style.visibility = 'visible'; // Affiche le curseur

            // Écrire le mot
            for (let i = 0; i < curWord.length; i++) {
                el.innerText = curWord.substring(0, i + 1);
                await sleep(sleepTime);
            }

            await sleep(2500); // Pause avant de supprimer

            // Effacer le mot
            for (let i = curWord.length; i > 0; i--) {
                el.innerText = curWord.substring(0, i-1);
                await sleep(sleepTime);
            }

            cursor.style.visibility = 'hidden';
            await sleep(500); // Pause avant de passer à la phrase suivante

            curPhraseIndex = (curPhraseIndex + 1) % phrases.length; // Passer à la phrase suivantee
        }
    };

    writeLoop();
}

typingText();