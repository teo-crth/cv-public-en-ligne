const menuHidden = () => { 
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
}

// MENU BURGER
const BurgerMenu = () => {

    const SIDENAV = document.getElementById("mySidenav");
    const OPEN_BTN = document.getElementById("openBtn");
    const CLOSE_BTN = document.getElementById("closeBtn");

    OPEN_BTN.onclick = function () {
        SIDENAV.classList.add("active");
    };

    CLOSE_BTN.onclick = function () {
        SIDENAV.classList.remove("active");
    };

    onkeydown = function (event) {
        if (event.key === "Escape") {
            SIDENAV.classList.remove("active");
        }
    };

    // Fermer le menu burger en cliquant en dehors de la sidenav
    document.addEventListener('click', (event) => {
        // Vérifiez si le clic est en dehors de la sidenav
        if (!SIDENAV.contains(event.target) && !OPEN_BTN.contains(event.target)) {
            SIDENAV.classList.remove("active");
        }
    });

}

menuHidden();
BurgerMenu();