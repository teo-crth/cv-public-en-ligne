document.addEventListener('DOMContentLoaded', function() {
    const cards = [
        {
            id: 1,
            date: 'Janvier 2025',
            title: 'Création 1',
            description: 'Description de la création 1.',
            link: 'https://example.com',
            logo: '/img/opandco.png',
            mockup: 'mockup1.mp4'
        },
        {
            id: 1,
            date: 'Janvier 2025',
            title: 'Création 1',
            description: 'Description de la création 2.',
            link: 'https://example.com',
            logo: '',
            mockup: 'mockup1.mp4'
        }
    ];

    const container = document.getElementById('cards-container');

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('cardProject');
        // Description Section
        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('description');
        
        const dateElement = document.createElement('span');
        dateElement.classList.add('date');
        dateElement.textContent = card.date;
        
        const titleElement = document.createElement('h4');
        titleElement.classList.add('title');
        titleElement.textContent = card.title;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', card.link);
        linkElement.setAttribute('target', '_blank');
        const linkIcon = document.createElement('div');
        linkIcon.classList.add('link');
        linkIcon.textContent = '↗';
        linkElement.appendChild(linkIcon);
        
        const descriptionTextElement = document.createElement('p');
        descriptionTextElement.classList.add('description-text');
        
        descriptionElement.appendChild(dateElement);
        descriptionElement.appendChild(titleElement);
        descriptionElement.appendChild(linkElement);
        descriptionElement.appendChild(descriptionTextElement);
        
        
        // Logos Section
        const logosContainer = document.createElement('div');
        logosContainer.classList.add('logos-container');
        const logoElement = document.createElement('div');
        const logoImg = document.createElement('img');
        logoImg.setAttribute('src', card.logo);
        logoElement.appendChild(logoImg);
        logosContainer.appendChild(logoElement);
        
        // Mockup Section
        const containerVideo = document.createElement('div');
        containerVideo.classList.add('container-video');
        const mockupElement = document.createElement('div');
        mockupElement.classList.add('mockup');
        const videoElement = document.createElement('video');
        videoElement.setAttribute('id', 'mockup-' + card.id);
        videoElement.setAttribute('src', card.mockup);
        videoElement.setAttribute('muted', '');
        videoElement.setAttribute('autoplay', '');
        videoElement.setAttribute('loop', '');
        videoElement.setAttribute('playsinline', '');
        cardElement.appendChild(containerVideo);
        containerVideo.appendChild(mockupElement);
        mockupElement.appendChild(videoElement);
        
        descriptionElement.appendChild(logosContainer);
        // Append all sections to the card
        cardElement.appendChild(descriptionElement);
        
        // Append the card to the container
        container.appendChild(cardElement);
    });
});
