document.addEventListener("DOMContentLoaded", () => {
    const age = (date) => {
        const now = new Date(); // Date actuelle
        let age = now.getFullYear() - date.getFullYear(); // Différence d'années

        // Vérifier si l'anniversaire est déjà passé cette année
        const monthDifference = now.getMonth() - date.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && now.getDate() < date.getDate())) {
            age--; // Si l'anniversaire n'est pas encore passé, on soustrait 1 à l'âge
        }

        const textAge = document.getElementById("age");
        if (textAge) {
            textAge.innerText = `${age} ans`; // Afficher l'âge dans l'élément HTML
        }
    }

    // Exemple d'utilisation
    age(new Date(1994, 6, 23)); // 23 juillet 1994
});
