
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

let missionChange = document.querySelector('.feature-card.dark');

const images = [
    'https://img.freepik.com/free-photo/people-identifical-clothes-african-couple-autumn-city-people-sitting-uses-phone_1157-42584.jpg?t=st=1736533683~exp=1736537283~hmac=c7ff39b8f3befa0b3d5ebdc0e7017e42ef3e3ac3c71f165696972054ac7dd682&w=1380',
    'https://img.freepik.com/free-photo/medium-shot-plus-sized-woman-influencer_23-2151414149.jpg?t=st=1736533725~exp=1736537325~hmac=72c525cba85c6fd1a40b5e06d3ca415d083b5501d5575bcc37f7bfeb317c1837&w=1380',
    'https://img.freepik.com/free-photo/african-american-woman-taking-selfie-with-her-smartphone_23-2149093245.jpg?t=st=1736533764~exp=1736537364~hmac=c08dfaf88191e47ef3d0494b541cce4d100513b7da63610994d0abd12a033253&w=1380',
    'https://img.freepik.com/free-photo/front-view-smiley-friends-taking-selfie_23-2149452666.jpg?t=st=1736533827~exp=1736537427~hmac=48213c13c501fac426ba0e129dee98bbd037fea1c0e5a7284bebec592735466c&w=1380',
    'https://img.freepik.com/free-photo/group-friends-posing-outside-clothing-store-city_23-2149295740.jpg?t=st=1736533910~exp=1736537510~hmac=e90ada0e70b8963c1713dc77b65841cdff2f3ee26a19034ae6a934f70fb4d624&w=1380'

]

let currentIndex = 0;

function changeBackground() {
    missionChange.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Set the initial background image
changeBackground();


const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam, accusantium impedit ratione iure alias aliquid nam odit natus commodi?",
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Felix Morgan",
    },
    {
        text: "This service is outstanding! Highly recommended for everyone.",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "John Doe",
    },
    {
        text: "Amazing experience! I’m extremely satisfied with the quality.",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
        name: "Jane Smith",
    },
];

let currentIndexTes = 0;
window.addEventListener("DOMContentLoaded", () => {
    const testimonialContainer = document.getElementById("testimonial");
    testimonialContainer.classList.add("fade-in");
});

function updateTestimonial() {
    const testimonialContainer = document.getElementById("testimonial");
    currentIndex = (currentIndex + 1) % testimonials.length; // Move to the next testimonial
    const currentTestimonial = testimonials[currentIndexTes];

    // Fade-out animation
    testimonialContainer.classList.add("fade-out");

    setTimeout(() => {
        // Update content
        testimonialContainer.querySelector("h1").textContent = currentTestimonial.text;
        testimonialContainer.querySelector("img").src = currentTestimonial.img;
        testimonialContainer.querySelector("h2").textContent = currentTestimonial.name;

        // Fade-in animation
        testimonialContainer.classList.remove("fade-out");
        testimonialContainer.classList.add("fade-in");

        // Prepare for the next testimonial
        currentIndexTes = (currentIndexTes + 1) % testimonials.length;
    }, 1000); // Match with the fade-out duration
}

// Start the rotation after the initial display
setInterval(updateTestimonial, 10000); // Change testimonials every 5 seconds // Change testimonials every 5 seconds


const imageContainer = document.querySelectorAll('.image-container');
const circle = document.querySelectorAll('.circle');

imageContainer.forEach(imageContainerItem => {
    imageContainerItem.addEventListener('mousemove', (e) => {
        const rect = imageContainerItem.getBoundingClientRect();
        const x = e.clientX - rect.left; // X-coordinate relative to the container
        const y = e.clientY - rect.top;  // Y-coordinate relative to the container

        // Move the circle to follow the mouse
        circle.forEach(circleItem => {
            circleItem.style.left = `${x}px`;
            circleItem.style.top = `${y}px`;
        })

    });

})



imageContainer.forEach(imageContainerItem => {
    imageContainerItem.addEventListener('mouseleave', (e) => {
        const rect = imageContainerItem.getBoundingClientRect();
        const x = e.clientX - rect.left; // X-coordinate relative to the container
        const y = e.clientY - rect.top;  // Y-coordinate relative to the container

        // Move the circle to follow the mouse
        circle.forEach(circleItem => {
            circleItem.style.left = `50%`;
            circleItem.style.top = `50%`;
        })

    });

})

// ====================

const cards = document.querySelectorAll('.news1207-card');
const animationDelay = 3500; // 0.3s delay between cards

function resetCards() {
    cards.forEach(card => {
        card.classList.remove('news1207-active');
    });
}

function animateCards() {
    resetCards();

    // Show all cards initially
    cards.forEach(card => {
        card.classList.add('news1207-active');
    });

    // After 5 seconds, start removing cards from back to front
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove('news1207-active');
            }, (cards.length - 1 - index) * animationDelay); // Reverse order
        });

        // Reset and start over after all cards are hidden
        setTimeout(() => {
            animateCards();
        }, cards.length * animationDelay - 2500); // Add 1s extra delay before restarting
    }, 5000);
}

// Start the animation
animateCards();



// =============================MENU BAR==============


const menuBtn = document.querySelector(".btn");
const menu = document.querySelector(".nav-links");

menuBtn.addEventListener('click', () => {

    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");


})

// ===============X==============MENU BAR==========X====

// Initialize AOS when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});


const hero = document.querySelector('.hero');

function resetHeroAnimation() {
    hero.style.animation = 'none';
    void hero.offsetWidth; // Trigger reflow to reset animation
    hero.style.animation = 'backgroundFade 30s infinite ease-in-out';
}

// Reset the animation every 35 seconds (same as the animation duration)
setInterval(resetHeroAnimation, 30000);




// Form validation
// const emailInput = document.getElementById('email');
// const submitButton = document.getElementById('news1207-submit');

// submitButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     const email = emailInput.value;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email) {
//         alert('Please enter your email address');
//         return;
//     }

//     if (!emailRegex.test(email)) {
//         alert('Please enter a valid email address');
//         return;
//     }

//     alert('Thank you for subscribing!');
//     emailInput.value = '';
// });


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
