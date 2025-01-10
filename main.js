
// Existing scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }

    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});
const horizontalSection = document.querySelector('.horizontal-section');
const cardsContainer = document.querySelector('.cards-container');

window.addEventListener('scroll', () => {
    const horizontalScrollStart = horizontalSection.offsetTop;
    const scrolled = window.pageYOffset - horizontalScrollStart;
    const maxScroll = cardsContainer.scrollWidth - window.innerWidth;

    if (scrolled >= 0 && scrolled <= maxScroll) {
        const percentageScrolled = Math.min(scrolled, maxScroll);
        cardsContainer.style.transform = `translateX(-${percentageScrolled}px)`;
    }
});

// const images = [
//     'https://img.freepik.com/free-photo/funny-dark-skinned-female-feels-great-dances-rhythm-shakes-raised-hands-sings-along-with-music-wears-headphones_273609-25469.jpg?t=st=1735580999~exp=1735584599~hmac=69b0a68fc23d6cc3749f494a500843970af5f2b2cffac769f56211be35d94120&w=1480',
//     'https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     'https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     'https://img.freepik.com/free-photo/happy-cheerful-woman-enjoying-beach-sunset_53876-146825.jpg'
// ];

// let currentIndex = 0;

// function changeBackground() {
//     document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
//     currentIndex = (currentIndex + 1) % images.length;
// }

// // Change background every 5 seconds
// setInterval(changeBackground, 5000);

// // Set the initial background image
// changeBackground();


// const imageUrls = [
//     './Assests/WhatsApp Image 2024-12-30 at 19.04.53_2e457fb9.jpg',
//     './Assests/WhatsApp Image 2024-12-30 at 19.04.13_bccc82c0.jpg',
//     './Assests/WhatsApp Image 2024-12-30 at 19.04.12_949b34e6.jpg',
//     './Assests/WhatsApp Image 2024-12-30 at 19.04.12_2452452e.jpg',
//     './Assests/1720788778353.jpeg'
// ].map(url => `${url}?auto=format&fit=crop&w=100&q=80`);

// const numberOfImages = 10;
// let activeImages = [];
// let usedPositions = new Set();

// function getRandomPosition() {
//     const padding = 100; // Image width/height
//     const maxAttempts = 50;
//     const exclusionZones = [...document.querySelectorAll('.navbar, .hero-text')].map(el => el.getBoundingClientRect());
//     console.log("Exclusion Zones:", exclusionZones); // Debug log
//     let attempts = 0;

//     while (attempts < maxAttempts) {
//         const x = Math.floor(Math.random() * (window.innerWidth - padding));
//         const y = Math.floor(Math.random() * (window.innerHeight - padding));

//         // Check if the position overlaps with any exclusion zone
//         const isOverlapping = exclusionZones.some(zone => {
//             return (
//                 x + padding > zone.left &&
//                 x < zone.right &&
//                 y + padding > zone.top &&
//                 y < zone.bottom
//             );
//         });

//         if (!isOverlapping) {
//             const regionSize = 100; // Size of each region
//             const regionKey = `${Math.floor(x / regionSize)}-${Math.floor(y / regionSize)}`;

//             if (!usedPositions.has(regionKey)) {
//                 usedPositions.add(regionKey);
//                 setTimeout(() => {
//                     usedPositions.delete(regionKey);
//                 }, 5000);
//                 return { x, y };
//             }
//         }
//         attempts++;
//     }

//     return {
//         x: Math.random() * (window.innerWidth - padding),
//         y: Math.random() * (window.innerHeight - padding),
//     };
// }

// function createFloatingImage() {
//     const img = document.createElement('img');
//     img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
//     img.className = 'floating-image';

//     const { x, y } = getRandomPosition();

//     img.style.left = x + 'px';
//     img.style.top = y + 'px';
//     img.style.position = 'absolute';

//     document.body.appendChild(img);

//     img.offsetHeight; // Trigger reflow

//     setTimeout(() => {
//         img.classList.add('visible');
//     }, 100);

//     setTimeout(() => {
//         img.classList.remove('visible');
//         setTimeout(() => {
//             document.body.removeChild(img);
//         }, 300);
//     }, 3000);

//     return img;
// }
// const exclusionZones = [...document.querySelectorAll('.navbar, .hero-text')].map(el => {
//     const rect = el.getBoundingClientRect();
//     console.log('Exclusion Zone:', rect);
//     // Optional: visually debug the zones
//     const debugDiv = document.createElement('div');
//     debugDiv.style.position = 'absolute';
//     debugDiv.style.left = rect.left + 'px';
//     debugDiv.style.top = rect.top + 'px';
//     debugDiv.style.width = rect.width + 'px';
//     debugDiv.style.height = rect.height + 'px';
//     debugDiv.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
//     debugDiv.style.zIndex = 9999;
//     document.body.appendChild(debugDiv);
//     return rect;
// });


// function showRandomImage() {
//     if (activeImages.length < numberOfImages) {
//         const img = createFloatingImage();
//         activeImages.push(img);

//         setTimeout(() => {
//             const index = activeImages.indexOf(img);
//             if (index > -1) {
//                 activeImages.splice(index, 1);
//             }
//         }, 3300);
//     }
// }

// setInterval(showRandomImage, 3000);
