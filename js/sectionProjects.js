document.addEventListener('DOMContentLoaded', function() {
    
    const cardOpAndCo =
        {
            siteImages: ['../img/captures-sites/op-1.png', '../img/captures-sites/op-2.png', '../img/captures-sites/op-3.png', '../img/captures-sites/op-4.png'],
            siteImagesMobile: ['../img/captures-sites/op-1-mobile.png', '../img/captures-sites/op-service-mobile.png', '../img/captures-sites/op-faq-mobile.png', '../img/captures-sites/op-suisje-mobile.png', '../img/captures-sites/op-tarifaccueil-mobile.png'],
        };
    
    // Logic to change image every 0.5 seconds with slide effect
     let imageIndex = 0;
     setInterval(() => {
         // Appliquer l'animation pour cacher l'image actuelle
         const ImageWindowOpandCo = document.querySelector('#image-windowProject1');
         ImageWindowOpandCo.style.animation = 'slideLeftToRight 1s forwards';  // Animation pour déplacer à gauche

         setTimeout(() => {
             // Changer l'image source
             if (window.innerWidth < 768) {
                 imageIndex = (imageIndex + 1) % cardOpAndCo.siteImagesMobile.length;  // Change index, loop back to 0 when reaching end
                 ImageWindowOpandCo.setAttribute('src', cardOpAndCo.siteImagesMobile[imageIndex]);
             } else {
             imageIndex = (imageIndex + 1) % cardOpAndCo.siteImages.length;  // Change index, loop back to 0 when reaching end
             ImageWindowOpandCo.setAttribute('src', cardOpAndCo.siteImages[imageIndex]); 
             ImageWindowOpandCo.style.animation = '';  // Réinitialiser l'animation
             }
             // Appliquer l'animation pour faire arriver la nouvelle image
             ImageWindowOpandCo.style.animation = 'slideRightToLeft 1s forwards'; 
         }, 1000);  // Attendre la fin de l'animation précédente (500ms)
     }, 7000);  // Changer l'image toutes les 1000ms (1 seconde)

     setInterval();
});
