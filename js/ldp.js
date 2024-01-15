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

    init() {
        this.menuHidden();
        this.BurgerMenu();
        this.scrollAction();
        this.Age(new Date(1994, 6, 23));
        this.cookies();
    }

}

APP.init();

});