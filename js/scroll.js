// Fonction pour cacher/afficher le bouton "remonter en haut" en fonction du scroll
const scrollAction = () => {
    window.onscroll = function() {
        const BTN_REMONTER = document.getElementById("up");
        let distanceScrolled = document.documentElement.scrollTop;

        if (distanceScrolled > 600) {
            BTN_REMONTER.classList.remove('btn-hidden');
        } else {
            BTN_REMONTER.classList.add('btn-hidden');
        }
    };
};

// Fonction pour faire défiler la page jusqu'en haut avec un effet fluide
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Fonction pour gérer les événements de clic et de touch sur le bouton
const moveUpBtn = () => {
    const BTN_REMONTER = document.getElementById("up");

    BTN_REMONTER.addEventListener("click", function() {
        scrollToTop();
    });

    BTN_REMONTER.addEventListener("touchend", function() {
        scrollToTop();
    });
};

// Initialisation des fonctions
scrollAction();
moveUpBtn();
