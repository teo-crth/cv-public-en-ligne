// déclencher le javascript une fois que le DOM est chargé
window.addEventListener('DOMContentLoaded', (event) => {

    // CONSTANTES
        const NAVBAR = document.getElementById("navbar");
        const MENU = document.getElementById("menu");
    
        const BTN_REMONTER = document.getElementById("up");
        const CLASSES = BTN_REMONTER.classList;
    
        const SIDENAV = document.getElementById("mySidenav");
        const OPEN_BTN = document.getElementById("openBtn");
        const CLOSE_BTN = document.getElementById("closeBtn");
    
    
    // STICKY MENU ----------------------------------------------------------------------------
    
            window.onscroll = function(){
                console.log(window.scrollY);
                if(window.scrollY >= MENU.offsetTop){
                    NAVBAR.classList.add("sticky");
                }
                else{
                    NAVBAR.classList.remove("sticky");
                }
            }
    
        
    // CACHER LE BOUTON POUR REMONTER EN HAUT JUSQU'AU SCROLL DE LA PAGE
     
        window.onscroll = function(u) {
            let distanceScrolled = document.documentElement.scrollTop; 
            let btnClick = BTN_REMONTER.onclick
            if (distanceScrolled > 600) {
                BTN_REMONTER.classList.remove('btn-hidden')
            }
        }
    
      
    
        BTN_REMONTER.addEventListener("click", () => {
        const RESULT = CLASSES.toggle("btn-hidden");
        });
    
    
    // MENU BURGER
            OPEN_BTN.onclick = openNav;
            CLOSE_BTN.onclick = closeNav;
    
            /* Set the width of the side navigation to 250px */
            function openNav() {
                SIDENAV.classList.add("active");
            }
    
            /* Set the width of the side navigation to 0 */
            function closeNav() {
                SIDENAV.classList.remove("active");
            }
    
        
        
    //AGE Evolutif
    
        function getAge(date) { 
            let diff = Date.now() - date.getTime();
            let age = new Date(diff); 
            return Math.abs(age.getUTCFullYear() - 1970);
        };
    
        let ageTeo = getAge(new Date(1994, 6, 23));
    
        h3Header.innerText = `Développeur web ${ageTeo} ans`;
    
    
    // BANDEAU COOKIES
    
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
    
    
    
    });