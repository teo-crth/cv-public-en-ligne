document.addEventListener('DOMContentLoaded', function() {
    
    const cardOpAndCo = {
        siteImages: ['/img/captures-sites/op-1.png', '/img/captures-sites/op-2.png', '/img/captures-sites/op-3.png', '/img/captures-sites/op-4.png'],
        siteImagesMobile: ['/img/captures-sites/op-1-mobile.png', '/img/captures-sites/op-service-mobile.png', '/img/captures-sites/op-faq-mobile.png', '/img/captures-sites/op-suisje-mobile.png', '/img/captures-sites/op-tarifaccueil-mobile.png'],
    };

    const cardAuDetourDesMots = {
        siteImages: ['/img/captures-sites/addm-accueil.png', '/img/captures-sites/addm-accueil-2.png', '/img/captures-sites/addm-search.png', '/img/captures-sites/addm-bookPage.png','/img/captures-sites/addm-search-dark.png', '/img/captures-sites/addm-accueil1-dark.png', '/img/captures-sites/addm-bookPage-dark.png'],
        siteImagesMobile: ['/img/captures-sites/addm-accueil-1-mobile.png', '/img/captures-sites/addm-search-mobile.png', '/img/captures-sites/addm-search-2-mobile.png', '/img/captures-sites/addm-menu-mobile.png', '/img/captures-sites/addm-bookPage-mobile.png', '/img/captures-sites/addm-bookPage-dark-mobile.png', '/img/captures-sites/addm-search-dark-mobile.png', '/img/captures-sites/addm-search-2-dark-mobile.png'],
    };

    const ImageWindowOpandCo = document.querySelector('#image-windowProject1');
    const ImageWindowAuDetourDesMots = document.querySelector('#image-windowAuDetourDesMots');
    
    // Fonction générique pour changer l'image
    function updateImage(projetImageElem, objImages) {
        let imageIndex = 0;
        
        setInterval(() => {
            // Appliquer l'animation pour cacher l'image actuelle
            projetImageElem.style.animation = 'slideLeftToRight 1s forwards';

            setTimeout(() => {
                // Choisir l'image à afficher en fonction de la taille de l'écran
                const currentImages = window.innerWidth < 768 ? objImages.siteImagesMobile : objImages.siteImages;
                imageIndex = (imageIndex + 1) % currentImages.length;  // Boucle sur les images

                // Mettre à jour la source de l'image
                projetImageElem.setAttribute('src', currentImages[imageIndex]);

                // Réinitialiser l'animation et appliquer l'animation d'arrivée
                projetImageElem.style.animation = '';  // Réinitialiser l'animation
                projetImageElem.style.animation = 'slideRightToLeft 1s forwards';
            }, 500);  // Attendre la fin de l'animation précédente avant de changer l'image
        }, 6000);  // Changer l'image toutes les 7 secondes
    }

    // Utiliser la fonction générique pour chaque projet
    updateImage(ImageWindowOpandCo, cardOpAndCo);
    updateImage(ImageWindowAuDetourDesMots, cardAuDetourDesMots);
});
