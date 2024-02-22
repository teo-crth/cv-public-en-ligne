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

    moveUpBtn() {
        document.getElementById("up").addEventListener("click", function() {
            scrollToTop();
        });
        
        document.getElementById("up").addEventListener("touchend", function() {
            scrollToTop();
        });
        
        function scrollToTop() {
            document.body.scrollTop = 0;
        }
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

    },
    
//AGE Evolutif

    Age(date) {
        let diff = Date.now() - date.getTime();
        let ageTeo = Math.abs((new Date(diff).getUTCFullYear() - 1970));
        const H3_HEADER = document.getElementById("h3Header");
        H3_HEADER.innerText = `Développeur web ${ageTeo} ans`; 
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
        CONTAINER_LOGOS.appendChild(LOGO_INDIV);
        LOGO_INDIV.classList.add("logo-competences__indiv");
        const IMG_SKILL = document.createElement("img");
        LOGO_INDIV.appendChild(IMG_SKILL);
        IMG_SKILL.classList.add("skill-logo");
        IMG_SKILL.setAttribute("src", `${logo.src}`);
        IMG_SKILL.setAttribute("alt", `${logo.alt}`);
        const H3_SKILL_LOGO = document.createElement("h3");
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
    popupSubmitForm(){
        const containerPopup = document.getElementById("popup-container-global");
        const form = document.getElementById("contact-form");
        const messageP = document.getElementById("__popup-form-message");

        
        form.onsubmit = (e) => {
            e.preventDefault();
            containerPopup.style.display = "flex";
            const messageChamp = document.querySelector('textarea[name="message"]').value;
            messageP.innerHTML = `<p><p>Votre message :</p><p>${messageChamp}</p>`;

        }
        
        
    },
    closePopup(){
        const popupButton = document.getElementById("__popup-button");
        const containerPopup = document.getElementById("popup-container-global");

        popupButton.onclick = () => {
            containerPopup.style.display = "none";
        }
    },

    init() {
        this.Age(new Date(1994, 6, 23));
        this.menuHidden();
        this.BurgerMenu();
        this.scrollAction();
        this.moveUpBtn();
        this.cardCreation();
        this.logoCreation();
        this.cookies();
        this.popupSubmitForm();
        this.closePopup();
    }

}

APP.init();

});