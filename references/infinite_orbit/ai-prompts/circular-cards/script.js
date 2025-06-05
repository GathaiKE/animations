// DOM elements
const cardsList = document.getElementById('cardsList');

// Configuration
let config = {
    radius: 250,
    rotationSpeed: 0.5,
    itemCount: 8,
    currentAngle: 0,
    animationId: null,
    paused: false
};

// Sample data for circular cards
const cardData = [
    { icon: '🌞', title: 'Sun' },
    { icon: '🌍', title: 'Earth' },
    { icon: '🌕', title: 'Moon' },
    { icon: '⭐', title: 'Star' },
    { icon: '🪐', title: 'Saturn' },
    { icon: '☄️', title: 'Comet' },
    { icon: '🌌', title: 'Galaxy' },
    { icon: '🔭', title: 'Telescope' },
    { icon: '🚀', title: 'Rocket' },
    { icon: '👨‍🚀', title: 'Astronaut' },
    { icon: '🛸', title: 'UFO' },
    { icon: '🌠', title: 'Shooting Star' }
];

// Generate cards based on current configuration
function generateCards() {
    cardsList.innerHTML = '';

    for (let i = 0; i < config.itemCount; i++) {
        const card = document.createElement('li');
        card.className = 'card';
        card.dataset.index = i;

        const data = cardData[i % cardData.length];
        card.innerHTML = `
            <div class="card-icon">${data.icon}</div>
            <div class="card-title">${data.title}</div>
          `;

        // Add pause/resume functionality on hover
        card.addEventListener('mouseenter', () => {
            config.paused = true;
        });

        card.addEventListener('mouseleave', () => {
            config.paused = false;
        });

        cardsList.appendChild(card);
    }
}

// Position cards in a circle using trigonometric calculations
function positionCards() {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    if (totalCards === 0) return;

    const anglePerItem = 360 / totalCards;

    cards.forEach((card, index) => {
        // Calculate the angle for this card (in degrees)
        const angle = config.currentAngle + (index * anglePerItem);

        // Convert to radians for Math functions
        const radians = angle * (Math.PI / 180);

        // Calculate position using trigonometry
        const x = Math.cos(radians) * config.radius;
        const y = Math.sin(radians) * config.radius*0.5;

        // Apply position with z-index based on angle for proper stacking
        const zIndex = Math.round(Math.sin(radians) * 5) + 5;

        // Set the card position
        card.style.transform = `translate(${x}px, ${y}px)`;
        card.style.zIndex = zIndex;

        // Add a subtle color variation based on position
        const hue = (index * (360 / totalCards)) % 360;
        const bgColor = `linear-gradient(135deg, hsl(${hue}, 80%, 85%), hsl(${(hue + 60) % 360}, 80%, 90%))`;
        card.style.background = bgColor;
    });
}

// Animation function
function animate() {
    if (!config.paused) {
        config.currentAngle += config.rotationSpeed;

        if (config.currentAngle >= 360) {
            config.currentAngle -= 360;
        }

        positionCards();
    }

    config.animationId = requestAnimationFrame(animate);
}

// Initialize the application
function init() {
    generateCards();
    positionCards();
    animate();
}

// Start everything
init();

// Handle window resize
window.addEventListener('resize', () => {
    positionCards();
});