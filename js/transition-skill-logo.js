// Sélectionner tous les logos de compétences
const logos = document.querySelectorAll('.logo-competences__indiv');

// Fonction pour vérifier la visibilité des logos et ajouter la classe 'visible'
const onScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Lorsque l'élément devient visible, ajouter la classe 'visible'
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Ne plus observer cet élément après qu'il soit visible
        }
    });
};

// Configurer l'observateur avec une marge pour que l'effet se déclenche un peu avant que l'élément soit totalement visible
const observer = new IntersectionObserver(onScroll, {
    root: null, // Utiliser la fenêtre comme référence
    threshold: 0.5, // Déclencher l'animation lorsque 50% du logo est visible
});

// Observer chaque logo
logos.forEach(logo => observer.observe(logo));
