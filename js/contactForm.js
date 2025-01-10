const contactForm = () => {
    emailjs.init("vvGiymJO3abY9ymFB"); // clé publique

    const form = document.getElementById("contact-form");
    const messageP = document.getElementsByClassName("__popup-title");
    const messagep2 = document.getElementsByClassName("__popup-subtitle");
    const containerPopup = document.getElementById("popup-container-global");

    form.onsubmit = (e) => {
        e.preventDefault();
        
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

closePopup();
contactForm();