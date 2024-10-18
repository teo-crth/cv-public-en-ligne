// déclencher le javascript une fois que le DOM est chargé
window.addEventListener('DOMContentLoaded', (event) => {

    const APP = {

// STICKY MENU ----------------------------------------------------------------------------

       menuHidden() { 
        window.onscroll = function(){
            const NAVBAR = document.getElementById("navbar");
            const MENU = document.getElementById("list-menu");
            
            if(window.scrollY >= MENU.offsetTop){
                NAVBAR.classList.add("sticky");
            }
            else{
                NAVBAR.classList.remove("sticky");
            }
        }
    },

    
// CACHER LE BOUTON POUR REMONTER EN HAUT JUSQU'AU SCROLL DE LA PAGE
    scrollAction() { window.onscroll = function() {
            const BTN_REMONTER = document.getElementById("up");
            let distanceScrolled = document.documentElement.scrollTop; 
            
                if (distanceScrolled > 600) {
                    BTN_REMONTER.classList.remove('btn-hidden');
                } else {
                    BTN_REMONTER.classList.add('btn-hidden');
                }
        }
    },

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Pour un défilement fluide
        });
    },

    moveUpBtn() {

        const scrollToTop = this.scrollToTop;

        document.getElementById("up").addEventListener("click", function() {
            scrollToTop();
        });

        document.getElementById("up").onclick = () => {
            scrollToTop();
        };
        
        document.getElementById("up").addEventListener("touchend", function() {
            scrollToTop();
        });
    },


// MENU BURGER
    BurgerMenu() {

        const SIDENAV = document.getElementById("mySidenav");
        const OPEN_BTN = document.getElementById("openBtn");
        const CLOSE_BTN = document.getElementById("closeBtn");

        OPEN_BTN.onclick = function () {
            SIDENAV.classList.add("active");
        };
    
        CLOSE_BTN.onclick = function () {
            SIDENAV.classList.remove("active");
        };

        // Fermer le menu burger en cliquant en dehors de la sidenav
        document.addEventListener('click', (event) => {
            // Vérifiez si le clic est en dehors de la sidenav
            if (!SIDENAV.contains(event.target) && !OPEN_BTN.contains(event.target)) {
                SIDENAV.classList.remove("active");
            }
        });

    },
    
//AGE Evolutif

    Age(date) {
        let diff = Date.now() - date.getTime();
        let ageTeo = Math.abs((new Date(diff).getUTCFullYear() - 1970));
        const textAge = document.getElementById("age");
        textAge.innerText = `${ageTeo} ans`; 
    },


// BANDEAU COOKIES
    cookies() {
        document.addEventListener("DOMContentLoaded", function () {
            const bandeauCookie = document.getElementById("bandeau-cookie");
            const boutonAccepter = document.getElementById("accepter-cookie");
            const boutonRefuser = document.getElementById("refuser-cookie");

        // Vérifier si le consentement a déjà été donné
            const consentementDonne = getCookie("cookieConsent");

            if (!consentementDonne) {
                bandeauCookie.style.display = "block";
            }

            boutonAccepter.addEventListener("click", function() {
                accepterCookies();
            });

            boutonRefuser.addEventListener("click", function() {
                refuserCookies();
            });

            function accepterCookies() {

        // Stocker le consentement dans un cookie qui expire en 365 jours
                setCookie("cookieConsent", true, 365);

        // Masquer le bandeau après avoir donné le consentement
                bandeauCookie.style.display = "none";
            }

            function refuserCookies() {
                // Traiter le refus comme vous le souhaitez (par exemple, rediriger vers une page sans cookies)
                console.log("Cookies refusés");
                bandeauCookie.style.display = "none";
            }

            function setCookie(nom, valeur, jours) {
                const dateExpiration = new Date();
                dateExpiration.setTime(dateExpiration.getTime() + (jours * 24 * 60 * 60 * 1000));
                const expiration = "expires=" + dateExpiration.toUTCString();
                document.cookie = nom + "=" + valeur + ";" + expiration + ";path=/";
            }

            function getCookie(nom) {
                const nomCookie = nom + "=";
                const cookies = document.cookie.split(';');

                for (let i = 0; i < cookies.length; i++) {
                    let cookie = cookies[i];
                    while (cookie.charAt(0) === ' ') {
                        cookie = cookie.substring(1);
                    }
                    if (cookie.indexOf(nomCookie) === 0) {
                        return cookie.substring(nomCookie.length, cookie.length);
                    }
                }
                return "";
            }
        });
    },

    // IMAGES LOGO COMPETENCES
    // FAIRE FONCTION AVEC BOUCLE FOR OF AJOUTER LES CLASS, LE LOADING LAZY, LA BALISE IMAGE ET LA DIV


    arrayLogo: [
       { 
        logo: "Javascript",
        src: "./img/js_400x400.webp",
        alt: "logo Javascript",
        },
        { 
            logo: "NodeJS",
            src: "./img/nodejs.webp",
            alt: "logo node.js",
        },
        { 
            logo: "React",
            src: "./img/react.webp",
            alt: "logo react",
        },
        { 
            logo: "Typescript",
            src: "./img/Typescript.webp",
            alt: "logo typescript",
        },
        { 
            logo: "PostgreSQL",
            src: "./img/postgresql.webp",
            alt: "logo PostgreSQL",
        },
        { 
        logo: "HTML",
        src: "./img/html5_400.webp",
        alt: "logo html5",
        },
        { 
        logo: "CSS",
        src: "./img/css_400x400.webp",
        alt: "logo CSS",
        },
        {        
        logo: "Prestashop",
        src: "./img/presta_400.webp",
        alt: "logo prestashop",
        },
        {        
            logo: "Wordpress",
            src: "./img/wordpress_400.webp",
            alt: "logo wordpress",
        },
        {        
            logo: "Search Console",
            src: "./img/searchconsole_400.webp",
            alt: "logo search console",
        },
        {        
            logo: "Google tag manager",
            src: "./img/tagmanager_400.webp",
            alt: "logo google tag manager",
        },
        {        
            logo: "Google ads",
            src: "./img/gads_400.webp",
            alt: "logo google ads",
        },
        {        
            logo: "Google analytics",
            src: "./img/ga_400.webp",
            alt: "logo google analytics",
        },
        {        
            logo: "Photoshop",
            src: "./img/psd_400px.webp",
            alt: "logo photoshop",
        },
    ],

    logoCreation() {
        for(logo of this.arrayLogo) {

        const CONTAINER_LOGOS = document.getElementsByClassName("skill-section__container-logos")[0];
        const LOGO_INDIV = document.createElement("div");
        const IMG_SKILL = document.createElement("img");
        const H3_SKILL_LOGO = document.createElement("h3");
        
        CONTAINER_LOGOS.appendChild(LOGO_INDIV);
        LOGO_INDIV.classList.add("logo-competences__indiv");
       
        LOGO_INDIV.appendChild(IMG_SKILL);
        IMG_SKILL.classList.add("skill-logo");
        IMG_SKILL.setAttribute("src", `${logo.src}`);
        IMG_SKILL.setAttribute("alt", `${logo.alt}`);
        
        LOGO_INDIV.appendChild(H3_SKILL_LOGO);
        H3_SKILL_LOGO.textContent = `${logo.logo}`;
        H3_SKILL_LOGO.classList.add("skill-ection__h3");

        }

    },

    arrayFormation: [
        { 
         date: "2023",
         logo: "./img/logo-oclock.webp",
         alt: "logo Formation O'clock",
         title: "Formation Dév Web Fullstack Javascript",
         description: "Titre RNCP niveau 5 (bac+2). 6 mois en formation continue : HTML, CSS, REACT, Node.js, API, SQL.",
         classDiv: "cart-0",
         classH2: "nomSpeOclock",
         id: "logo-oclock"
         },
         { 
            date: "2016",
            logo: "./img/inseec.webp",
            alt: "logo Inseec",
            title: "Master 2 Marketing Digital",
            description: "Master 2 en marketing digital avec un projet professionnel à construire durant l'année. Et un stage de 6 mois à la Mairie de Bordeaux.",
            classDiv: "cart-1",
            classH2: "nomSpeInseec",
            id: "logo-inseec"
            },
            { 
                date: "2012",
                logo: "./img/edheclogo.webp",
                alt: "logo Edhec business school",
                title: "Bachelor Post Bac Marketing",
                description: "Bachelor en 4 ans avec trois années généralistes (Finance, RH, Marketing, Entreprenariat) & une année spéacialisée en Marketing.",
                classDiv: "cart-2",
                classH2: "nomSpeEdhec",
                id: "logo-edhec"
                }
        ],

    cardCreation(){
        for (const formation of this.arrayFormation) {
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

    },

    contactForm() {
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
    },
    closePopup(){
        const popupButton = document.getElementById("__popup-button");
        const containerPopup = document.getElementById("popup-container-global");

        popupButton.onclick = () => {
            containerPopup.style.display = "none";
        }
    },

    typingText() {
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
    
                cursor.style.visibility = 'hidden'; // Masque le curseur
                await sleep(500); // Pause avant de passer à la phrase suivante
    
                curPhraseIndex = (curPhraseIndex + 1) % phrases.length; // Passer à la phrase suivante
            }
        };
    
        writeLoop();
    },

    init() {
        this.Age(new Date(1994, 6, 23));
        this.menuHidden();
        this.BurgerMenu();
        this.scrollAction();
        this.moveUpBtn();
        this.cardCreation();
        this.logoCreation();
        this.typingText();
        this.cookies();
        this.contactForm();
        this.closePopup();
    }

}

APP.init();

});