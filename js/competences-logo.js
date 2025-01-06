// IMAGES LOGO COMPETENCES
// FAIRE FONCTION AVEC BOUCLE FOR OF AJOUTER LES CLASS, LE LOADING LAZY, LA BALISE IMAGE ET LA DIV

const arrayLogo = 
    [
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
            logo: "Angular",
            src: "./img/angular_logo.webp",
            alt: "logo angular",
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
            logo: "Tailwind",
            src: "./img/tailwind.webp",
            alt: "logo tailwind",
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
            logo: "Jira",
            src: "./img/jira_logo.webp",
            alt: "logo Jira",
        },
        {        
            logo: "Git & Github",
            src: "./img/github-logo.webp",
            alt: "logo github",
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
    ];
 
const logoCreation = () => {
    for(logo of arrayLogo) {

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
        IMG_SKILL.setAttribute("lazy", `loading`);
        
        LOGO_INDIV.appendChild(H3_SKILL_LOGO);
        H3_SKILL_LOGO.textContent = `${logo.logo}`;
        H3_SKILL_LOGO.classList.add("skill-ection__h3");

    }
 
}

logoCreation();
