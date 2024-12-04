const contactForm = () => {
    emailjs.init("vvGiymJO3abY9ymFB"); // Remplacez par votre clé publique

    const form = document.getElementById("contact-form");
    const messageP = document.getElementsByClassName("__popup-title");
    const messagep2 = document.getElementsByClassName("__popup-subtitle");
    const containerPopup = document.getElementById("popup-container-global");

    form.onsubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        
        emailjs.sendForm('service_64uhp8c', 'template_80p8ukb', form)
            .then((result) => {
                console.log('Email envoyé avec succès!', result.text);
                messageP.innerHTML = `Message envoyé !`;
                messagep2.innerHTML = `Merci pour votre message, nous vous répondrons dès que possible.`;
                containerPopup.style.display = "flex"; // Afficher la popup
                form.reset(); // Réinitialiser le formulaire
            }, (error) => {
                console.log('Erreur lors de l\'envoi:', error.text);
                messageP.innerHTML = `Une erreur est survenue. Veuillez réessayer.`;
                messagep2.innerHTML = `Si le problème persiste, merci de nous contacter directement à l'adresse suivante : teoconrath@gmail.com`
                containerPopup.style.display = "flex"; // Afficher la popup
            });
    }
}

const closePopup = () => {
    const popupButton = document.getElementById("__popup-button");
    const containerPopup = document.getElementById("popup-container-global");

    popupButton.onclick = () => {
        containerPopup.style.display = "none";
    }
}

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
closePopup();