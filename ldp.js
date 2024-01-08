// déclencher le javascript une fois que le DOM est chargé
window.addEventListener('DOMContentLoaded', (event) => {

    //BALISES

    //EVENEMENTS

    //ALGORITHME

    //innerText pour modifier le contenu d'une balise existante
    //innerHTML pour modifier les balises HTML et leur contenu

    // STICKY MENU ----------------------------------------------------------------------------

        let navbar = document.getElementById("navbar");
        let menu = document.getElementById("menu");

        window.onscroll = function(){
            console.log(window.pageYOffset);
            if(window.pageYOffset >= menu.offsetTop){
                navbar.classList.add("sticky");
            }
            else{
                navbar.classList.remove("sticky");
            }
        }

    
    // CACHER LE BOUTON POUR REMONTER EN HAUT JUSQU'AU SCROLL DE LA PAGE

    let btnRemonter = document.getElementById("up");
 
    window.onscroll = function(u) {
        let distanceScrolled = document.documentElement.scrollTop; 
        let btnClick = btnRemonter.onclick
        if (distanceScrolled > 200) {
            btnRemonter.classList.remove('btn-hidden')
        }
    }

    const classes = btnRemonter.classList;

    btnRemonter.addEventListener("click", () => {
    const result = classes.toggle("btn-hidden");
    });


    // MENU BURGER

        let sidenav = document.getElementById("mySidenav");
        let openBtn = document.getElementById("openBtn");
        let closeBtn = document.getElementById("closeBtn");

        openBtn.onclick = openNav;
        closeBtn.onclick = closeNav;

        /* Set the width of the side navigation to 250px */
        function openNav() {
        sidenav.classList.add("active");
        }

        /* Set the width of the side navigation to 0 */
        function closeNav() {
        sidenav.classList.remove("active");
        }

    
    
        //AGE Evolutif
    // FONCTIONS

    function getAge(date) { 
        let diff = Date.now() - date.getTime();
        let age = new Date(diff); 
        return Math.abs(age.getUTCFullYear() - 1970);
    };

    //VARIABLES

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