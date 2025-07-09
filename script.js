// Navigation functionality
let currentPage = 'home';

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageId;
    }

    // Update navigation active states
    updateNavigation(pageId);

    // Close mobile menu if open
    closeMobileMenu();

    // Scroll to top
    window.scrollTo(0, 0);
}

function updateNavigation(activePageId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('onclick');
        if (href && href.includes(activePageId)) {
            link.classList.add('active');
        }
    });
}

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isOpen = !mobileMenu.classList.contains('hidden');

    if (isOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
}

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}

// Testimonials functionality
const testimonials = [
    {
        name: 'Sarah Johnson',
        company: 'Green Eats Restaurant',
        content: 'Sealpack has revolutionized our takeout packaging. The quality is exceptional and our customers love the eco-friendly approach.',
        rating: 5
    },
    {
        name: 'Michael Chen',
        company: 'Urban Bistro Chain',
        content: 'Outstanding service and products. The packaging is sturdy, attractive, and aligns perfectly with our sustainability goals.',
        rating: 5
    },
    {
        name: 'Emma Rodriguez',
        company: 'Fresh Market Co.',
        content: 'We\'ve been using Sealpack for over two years. Their consistency and commitment to quality is unmatched.',
        rating: 5
    }
];

let currentTestimonial = 0;

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];

    // Update stars
    const starsContainer = document.getElementById('stars-container');
    starsContainer.innerHTML = '';
    for (let i = 0; i < testimonial.rating; i++) {
        const star = document.createElement('svg');
        star.className = 'w-5 h-5 text-muted-orange fill-current';
        star.innerHTML = '<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>';
        starsContainer.appendChild(star);
    }

    // Update content
    document.getElementById('testimonial-content').textContent = `"${testimonial.content}"`;
    document.getElementById('testimonial-name').textContent = testimonial.name;
    document.getElementById('testimonial-company').textContent = testimonial.company;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

// Newsletter subscription
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();

    if (!email) {
        alert('Please enter your email address.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate subscription
    alert('Thank you for subscribing to our newsletter!');
    emailInput.value = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Timeline data for About page
const milestones = [
    {
        year: '2018',
        title: 'Company Founded',
        description: 'Sealpack Enterprises was established with a vision to revolutionize sustainable packaging'
    },
    {
        year: '2019',
        title: 'First Major Contract',
        description: 'Secured partnership with 50+ restaurants for eco-friendly packaging solutions'
    },
    {
        year: '2020',
        title: 'Production Expansion',
        description: 'Opened new manufacturing facility to meet growing demand'
    },
    {
        year: '2021',
        title: 'Certification Achievement',
        description: 'Received ISO 14001 environmental management certification'
    },
    {
        year: '2022',
        title: 'Product Innovation',
        description: 'Launched new line of compostable packaging materials'
    },
    {
        year: '2023',
        title: 'Market Leadership',
        description: 'Became the leading eco-friendly packaging provider in the region'
    },
    {
        year: '2024',
        title: 'Global Expansion',
        description: 'Expanded operations to serve international markets'
    }
];

function populateTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) return;

    timelineContainer.innerHTML = '';

    milestones.forEach((milestone, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`;

        timelineItem.innerHTML = `
            <div class="flex-1 px-8">
                <div class="bg-white p-6 rounded-xl shadow-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}">
                    <div class="flex items-center gap-4 mb-3">
                        <span class="bg-warm-brown text-warm-beige px-3 py-1 rounded-full text-sm font-semibold">
                            ${milestone.year}
                        </span>
                        <h3 class="text-xl font-semibold text-dark-gray">${milestone.title}</h3>
                    </div>
                    <p class="text-dark-gray/70">${milestone.description}</p>
                </div>
            </div>
            <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-warm-brown rounded-full border-4 border-warm-beige"></div>
        `;

        timelineContainer.appendChild(timelineItem);
    });
}

// Best Seller Products data
const bestSellerProducts = [
    {
        id: 1,
        title: 'Eco-Friendly Food Containers',
        price: '$24.99',
        originalPrice: '$29.99',
        image: '/images/still-life-cardboard-organic-dinnerware.jpg',
        description: 'Premium biodegradable containers perfect for takeout and delivery services.',
        badge: 'Best Seller',
        rating: 4.8,
        reviews: 156,
        features: ['Leak-proof', 'Microwave safe', 'Compostable']
    },
    {
        id: 2,
        title: 'Insulated Coffee Cups',
        price: '$18.99',
        originalPrice: '$22.99',
        image: '/images/two-cups-coffee-go-stand-wooden-bench.jpg',
        description: 'Double-wall insulated cups for hot beverages with custom branding options.',
        badge: 'Hot Deal',
        rating: 4.9,
        reviews: 203,
        features: ['Heat resistant', 'Custom printing', 'Compostable']
    },
    {
        id: 3,
        title: 'Biodegradable Plates Set',
        price: '$32.99',
        originalPrice: '$39.99',
        image: '/images/high-angle-plates-arrangement.jpg',
        description: 'Elegant disposable plates made from sustainable materials for events.',
        badge: 'Popular',
        rating: 4.7,
        reviews: 124,
        features: ['Cut resistant', 'Elegant design', 'Biodegradable']
    }
];

// Function to populate best seller products
function populateBestSellerProducts() {
    const bestSellerContainer = document.getElementById('best-seller-products');
    if (!bestSellerContainer) return;

    bestSellerContainer.innerHTML = '';

    bestSellerProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-on-scroll';
        productCard.style.animationDelay = `${index * 0.1}s`;

        // Generate star rating
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 !== 0;
        let starsHTML = '';

        for (let i = 0; i < fullStars; i++) {
            starsHTML += `<svg class="w-4 h-4 text-muted-orange fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;
        }

        if (hasHalfStar) {
            starsHTML += `<svg class="w-4 h-4 text-muted-orange fill-current" viewBox="0 0 20 20"><defs><linearGradient id="half-${product.id}"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="#e5e7eb"/></linearGradient></defs><path fill="url(#half-${product.id})" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;
        }

        const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            starsHTML += `<svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;
        }

        // Determine badge color
        let badgeColor = 'bg-red-500';
        if (product.badge === 'Hot Deal') badgeColor = 'bg-red-500';
        if (product.badge === 'Popular') badgeColor = 'bg-red-500';

        productCard.innerHTML = `
            <div class="relative">
                <div class="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img
                        src="${product.image}"
                        alt="${product.title}"
                        class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div class="absolute top-3 left-3">
                    <span class="${badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${product.badge}
                    </span>
                </div>
                
            </div>
            
            <div class="p-6">
                <div class="flex items-center gap-1 mb-2">
                    ${starsHTML}
                    <span class="text-sm text-dark-gray/60 ml-2">(${product.reviews} reviews)</span>
                </div>
                
                <h3 class="text-xl font-semibold text-dark-gray mb-2 group-hover:text-warm-brown transition-colors">
                    ${product.title}
                </h3>
                
                <p class="text-dark-gray/70 mb-4 text-sm leading-relaxed">
                    ${product.description}
                </p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                    ${product.features.map(feature => `
                        <span class="bg-warm-beige text-dark-gray px-2 py-1 rounded-full text-xs font-medium">
                            ${feature}
                        </span>
                    `).join('')}
                </div>
                
                
                
                <div class="flex gap-2">
                    <button onclick="showPage('contact')" class="flex-1 bg-logo-blue-dark hover:bg-logo-blue-dark/90 text-white py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 3H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-1.586l-.293-.293a1 1 0 010-1.414L9 11.586V13z"></path>
                        </svg>
                        Order Now
                    </button>
                </div>
            </div>
        `;

        bestSellerContainer.appendChild(productCard);
    });
}

// Products data
const productCategories = [
    {
        title: 'Food Containers',
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>`,
        image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'Durable, leak-proof containers perfect for takeout, delivery, and food storage. Made from renewable materials.',
        features: ['Leak-proof design', 'Microwave safe', 'Stackable', 'Grease resistant']
    },
    {
        title: 'Cups & Glasses',
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>`,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'Insulated cups and glasses for hot and cold beverages. Compostable and stylish designs.',
        features: ['Double-wall insulation', 'Heat resistant', 'Compostable', 'Custom printing available']
    },
    {
        title: 'Plates & Bowls',
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>`,
        image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'Elegant plates and bowls for dining. Strong, lightweight, and completely biodegradable.',
        features: ['Cut resistant', 'Elegant design', 'Biodegradable', 'Various sizes']
    },
    {
        title: 'Cutlery',
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 3H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-1.586l-.293-.293a1 1 0 010-1.414L9 11.586V13z"></path>
              </svg>`,
        image: 'https://images.pexels.com/photos/1171156/pexels-photo-1171156.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'Complete cutlery sets made from plant-based materials. Sturdy enough for any meal.',
        features: ['Plant-based materials', 'Durable construction', 'Smooth finish', 'Complete sets available']
    },
    {
        title: 'Pouches & Rolls',
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M8 11v6a2 2 0 002 2h4a2 2 0 002-2v-6M8 11h8"></path>
              </svg>`,
        image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'Flexible packaging solutions for various food items. Excellent barrier properties.',
        features: ['Flexible design', 'Barrier protection', 'Resealable options', 'Custom sizes']
    },
    {
        title: 'Clamshells & Trays',
        icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14l-1 9H6L5 8zM5 8L4 6H2m16 2l1-2h2M9 12h6m-6 4h6"></path>
              </svg>`,
        image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'Secure clamshells and trays for grab-and-go items. Perfect for delis and food courts.',
        features: ['Secure closure', 'Stackable design', 'Clear visibility', 'Tamper-evident']
    }
];

function populateProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    productCategories.forEach((category, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'group bg-warm-beige rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105';

        productCard.innerHTML = `
            <div class="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                    src="${category.image}"
                    alt="${category.title}"
                    class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            
            <div class="p-6">
                <div class="flex items-center gap-3 mb-4">
                    <div class="text-warm-brown">
                        ${category.icon}
                    </div>
                    <h3 class="text-xl font-semibold text-dark-gray">${category.title}</h3>
                </div>
                
                <p class="text-dark-gray/70 mb-4 leading-relaxed">
                    ${category.description}
                </p>
                
                <div class="space-y-2">
                    <h4 class="font-semibold text-dark-gray text-sm">Key Features:</h4>
                    <ul class="text-sm text-dark-gray/70 space-y-1">
                        ${category.features.map(feature => `
                            <li class="flex items-center gap-2">
                                <div class="w-1.5 h-1.5 bg-warm-brown rounded-full"></div>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="mt-6 pt-4 border-t border-warm-brown/20">
                    <button onclick="showPage('contact')" class="w-full bg-warm-brown hover:bg-warm-brown/90 text-warm-beige py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                        Request Quote
                    </button>
                </div>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });
}

// Contact form functionality
function handleContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate form submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Initialize page functionality
document.addEventListener('DOMContentLoaded', function () {
    // Initialize animations
    initializeAnimations();

    // Initialize testimonials
    updateTestimonial();

    // Set up testimonial navigation
    document.getElementById('next-testimonial').addEventListener('click', nextTestimonial);
    document.getElementById('prev-testimonial').addEventListener('click', prevTestimonial);

    // Auto-rotate testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);

    // Initialize timeline
    populateTimeline();

    // Initialize products
    populateProducts();

    // Initialize best seller products
    populateBestSellerProducts();

    // Initialize contact form
    handleContactForm();

    // Set initial navigation state
    updateNavigation('home');

    // Initialize scroll progress indicator
    initializeScrollProgress();
});

// Animation system
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Special handling for timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, 100);
                }
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .timeline-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add staggered animation to product cards
    const productCards = document.querySelectorAll('#product-categories-grid .group');
    productCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button, .btn-animate');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Scroll progress indicator
function initializeScrollProgress() {
    const scrollIndicator = document.getElementById('scroll-indicator');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        scrollIndicator.style.width = scrollPercent + '%';
    });
}

// Enhanced page transitions
function showPage(pageId) {
    // Hide all pages with fade out
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.opacity = '0';
        page.style.transform = 'translateY(20px)';
        setTimeout(() => {
            page.classList.remove('active');
        }, 250);
    });

    // Show selected page with fade in
    setTimeout(() => {
        const targetPage = document.getElementById(pageId + '-page');
        if (targetPage) {
            targetPage.classList.add('active');
            setTimeout(() => {
                targetPage.style.opacity = '1';
                targetPage.style.transform = 'translateY(0)';
            }, 50);
            currentPage = pageId;
        }

        // Update navigation active states
        updateNavigation(pageId);

        // Close mobile menu if open
        closeMobileMenu();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Re-initialize animations for the new page
        setTimeout(() => {
            initializeAnimations();
        }, 300);
    }, 250);
}

// Enhanced mobile menu with animations
function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('show');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');

    // Animate menu items
    const menuItems = mobileMenu.querySelectorAll('a');
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

function closeMobileMenu() {
    mobileMenu.classList.remove('show');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300);
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}

// Enhanced testimonial transitions
function updateTestimonial() {
    const testimonialCard = document.querySelector('.testimonial-card');
    const testimonial = testimonials[currentTestimonial];

    // Fade out
    testimonialCard.style.opacity = '0.5';
    testimonialCard.style.transform = 'scale(0.95)';

    setTimeout(() => {
        // Update stars
        const starsContainer = document.getElementById('stars-container');
        starsContainer.innerHTML = '';
        for (let i = 0; i < testimonial.rating; i++) {
            const star = document.createElement('svg');
            star.className = 'w-5 h-5 text-muted-orange fill-current';
            star.style.opacity = '0';
            star.style.transform = 'scale(0.5)';
            star.innerHTML = '<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>';
            starsContainer.appendChild(star);

            // Animate star appearance
            setTimeout(() => {
                star.style.transition = 'all 0.3s ease';
                star.style.opacity = '1';
                star.style.transform = 'scale(1)';
            }, i * 100);
        }

        // Update content
        document.getElementById('testimonial-content').textContent = `"${testimonial.content}"`;
        document.getElementById('testimonial-name').textContent = testimonial.name;
        document.getElementById('testimonial-company').textContent = testimonial.company;

        // Fade in
        testimonialCard.style.opacity = '1';
        testimonialCard.style.transform = 'scale(1)';
    }, 300);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.group, .text-center');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations after page load
window.addEventListener('load', addScrollAnimations);


// Blogs

const blogPosts = [
    {
        title: "Why Sustainable Packaging is the Future",
        image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Explore the rising trend of eco-conscious packaging and how it's transforming industries.",
        link: "#"
    },
    {
        title: "How to Choose the Right Food Packaging",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Tips to select safe, functional, and eco-friendly packaging solutions for your business.",
        link: "#"
    },
    {
        title: "Sealpack’s Journey to Sustainability",
        image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A behind-the-scenes look at our mission to redefine packaging with purpose.",
        link: "#"
    }
];

const blogContainer = document.getElementById('blog-list');
blogPosts.forEach(post => {
    const card = document.createElement('div');
    card.className = "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300";
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-bold text-logo-gray mb-2">${post.title}</h3>
        <p class="text-logo-gray/70 text-sm mb-4">${post.description}</p>
        <a href="${post.link}" class="text-logo-blue-dark font-semibold hover:underline">Read More →</a>
      </div>
    `;
    blogContainer.appendChild(card);
});