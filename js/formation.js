const arrayFormation = [
    { 
        date: "2024",
        logo: "./img/wild.webp",
        alt: "logo Wild code School",
        title: "Formation React.js",
        description: "Formation avancée Développeur Javascript React destinée aux professionnels ou personnes en reconversion qui souhaitent continuer leur montée en compétence dans le développement.",
        classDiv: "cart-0",
        classH2: "nomSpeWild",
        id: "logo-wild"
    },
    { 
     date: "2023",
     logo: "./img/logo-oclock.webp",
     alt: "logo Formation O'clock",
     title: "Formation Dév Web Fullstack Javascript",
     description: "Titre RNCP niveau 5 (bac+2). 6 mois en formation continue : HTML, CSS, REACT, Node.js, API, SQL.",
     classDiv: "cart-1",
     classH2: "nomSpeOclock",
     id: "logo-oclock"
    },
    { 
        date: "2016",
        logo: "./img/inseec.webp",
        alt: "logo Inseec",
        title: "Master 2 Marketing Digital",
        description: "Master 2 en marketing digital avec un projet professionnel à construire durant l'année. Et un stage de 6 mois à la Mairie de Bordeaux.",
        classDiv: "cart-2",
        classH2: "nomSpeInseec",
        id: "logo-inseec"
    }
]

const cardCreation = () => {
    for (const formation of arrayFormation) {
        const CONTAINER_CARDS = document.getElementsByClassName('container-allcards')[0];
        const ARTICLE = document.createElement("article");
        CONTAINER_CARDS.appendChild(ARTICLE);
        ARTICLE.classList.add("card");
        const H3_CARD = document.createElement("h3");
        ARTICLE.appendChild(H3_CARD);
        H3_CARD.classList.add("cards__formation-date");
        H3_CARD.textContent = `${formation.date}`;
        const DIV_CART = document.createElement("div");
        DIV_CART.classList.add(`${formation.classDiv}`);
        ARTICLE.appendChild(DIV_CART);
        const CARD_TOP = document.createElement("div");
        DIV_CART.appendChild(CARD_TOP);
        CARD_TOP.classList.add("cards__card-top");
        const IMG_CARD = document.createElement("img");
        CARD_TOP.appendChild(IMG_CARD);
        IMG_CARD.classList.add("cartimg");
        IMG_CARD.id = `${formation.id}`;
        IMG_CARD.setAttribute("src", `${formation.logo}`);
        IMG_CARD.setAttribute("alt", `${formation.alt}`);
        IMG_CARD.setAttribute("loading", "lazy");
        const CARD_TITLE = document.createElement("h2");
        CARD_TITLE.classList.add(`${formation.classH2}`);
        CARD_TITLE.textContent = `${formation.title}`;
        CARD_TOP.appendChild(CARD_TITLE);
        const CARD_BOTTOM = document.createElement("div");
        DIV_CART.appendChild(CARD_BOTTOM);
        CARD_BOTTOM.classList.add("cards__card-bottom");
        const DESCRIPTION_CARD = document.createElement("p");
        CARD_BOTTOM.appendChild(DESCRIPTION_CARD);
        DESCRIPTION_CARD.textContent = `${formation.description}`;
    }

}

cardCreation();