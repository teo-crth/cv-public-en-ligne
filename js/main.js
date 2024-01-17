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
            document.body.scrollTop = 0; // Pour les navigateurs anciens
            document.documentElement.scrollTop = 0; // Pour les navigateurs modernes
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

 /*   getAge(date) { 
        let diff = Date.now() - date.getTime();
        return Math.abs((new Date(diff).getUTCFullYear() - 1970));
    } */

    Age(date) {
        let diff = Date.now() - date.getTime();
        console.log(diff);
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
        logo: "HTML",
        url: "./img/html5_400.webp",
        alt: "logo html5",
        },
        { 
        logo: "CSS",
        url: "./img/css_400x400.webp",
        alt: "logo CSS",
        },
        {        
        logo: "prestashop",
        url: "./img/presta_400.webp",
        alt: "logo prestashop",
        },
        {        
            logo: "wordpress",
            url: "./img/wordpress_400.webp",
            alt: "logo wordpress",
        },
        {        
            logo: "search console",
            url: "./img/searchconsole_400.webp",
            alt: "logo search console",
        },
        {        
            logo: "google tag manager",
            url: "./img/tagmanager_400.webp",
            alt: "logo google tag manager",
        },
        {        
            logo: "google ads",
            url: "./img/gads_400.webp",
            alt: "logo google ads",
        },
        {        
            logo: "google analytics",
            url: "./img/ga_400.webp",
            alt: "logo google analytics",
        },
        {        
            logo: "photoshop",
            url: "./img/psd_400px.webp",
            alt: "logo photoshop",
        },
    ],

    init() {
        this.menuHidden();
        this.BurgerMenu();
        this.scrollAction();
        this.Age(new Date(1994, 6, 23));
        this.moveUpBtn();
        this.cookies();
    }

}

APP.init();

});