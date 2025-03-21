document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const scrollTopBtn = document.getElementById('scroll-top');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const skillCategories = document.querySelectorAll('.skill-category');
    const projectItems = document.querySelectorAll('.project-card');
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const form = document.querySelector('form');

    // Train background images for sections
    const trainImages = [
        'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1622619371484-bc138eb8db9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1470755008296-2939845775eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1553194587-2844a4260236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1532105956626-9569c03602f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    ];

    // Form validation functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showError(input, message) {
        clearError(input);
        
        input.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        input.parentNode.appendChild(errorElement);
    }
    
    function clearError(input) {
        const errorElement = input.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
        
        input.classList.remove('error');
    }

    // Form validation setup
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const inputs = this.querySelectorAll('input, textarea');
            
            inputs.forEach(function(input) {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    showError(input, 'This field is required');
                } else if (input.type === 'email' && input.value.trim() && !isValidEmail(input.value)) {
                    isValid = false;
                    showError(input, 'Please enter a valid email address');
                } else {
                    clearError(input);
                }
            });
            
            if (isValid) {
                // In a real website, you would send the form data to a server here
                alert('Thank you for your message! This is a demo form, so no message was actually sent.');
                this.reset();
            }
        });
    }

    // Check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Animate elements when they come into view
    function animateOnScroll() {
        // Timeline items animation
        timelineItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('animated');
                
                // Apply the animation class from data attribute
                const animationClass = item.getAttribute('data-animation');
                if (animationClass && !item.classList.contains(animationClass)) {
                    item.classList.add(animationClass);
                }
            }
        });
        
        // Skill categories animation
        skillCategories.forEach(category => {
            if (isElementInViewport(category)) {
                category.classList.add('animated');
                
                // Apply the animation class from data attribute
                const animationClass = category.getAttribute('data-animation');
                if (animationClass && !category.classList.contains(animationClass)) {
                    category.classList.add(animationClass);
                }
            }
        });
        
        // Project cards animation
        projectItems.forEach(card => {
            if (isElementInViewport(card)) {
                card.classList.add('animated');
                
                // Apply the animation class from data attribute
                const animationClass = card.getAttribute('data-animation');
                if (animationClass && !card.classList.contains(animationClass)) {
                    card.classList.add(animationClass);
                }
            }
        });
        
        // Contact section animation
        if (contactInfo && isElementInViewport(contactInfo)) {
            contactInfo.classList.add('animated');
        }
        
        if (contactForm && isElementInViewport(contactForm)) {
            contactForm.classList.add('animated');
        }
    }

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight && sectionId) {
                currentSection = '#' + sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Background image transitions
    function setupBackgroundImageTransitions() {
        const bgImages = document.querySelectorAll('.bg-image');
        
        // Set initial opacity for all background images
        bgImages.forEach(img => {
            img.style.opacity = '0.2';
        });
        
        // Create a subtle animation effect for each background image
        bgImages.forEach((img, index) => {
            // Create a subtle pulsing effect with different timing for each image
            const delay = index * 2;
            const duration = 8 + (index % 3) * 2; // Vary between 8-12 seconds
            
            img.style.animation = `bgPulse ${duration}s ease-in-out ${delay}s infinite alternate`;
        });
        
        // Add the keyframes for the background pulse animation
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes bgPulse {
                0% { opacity: 0.15; transform: scale(1); }
                100% { opacity: 0.25; transform: scale(1.05); }
            }
        `;
        document.head.appendChild(style);
        
        // Randomly change background images every 10 seconds
        setInterval(() => {
            const randomSection = Math.floor(Math.random() * bgImages.length);
            const randomImage = Math.floor(Math.random() * trainImages.length);
            
            // Create a smooth transition
            const img = bgImages[randomSection];
            img.style.opacity = '0';
            
            setTimeout(() => {
                img.style.backgroundImage = `url('${trainImages[randomImage]}')`;
                img.style.opacity = '0.2';
            }, 500);
        }, 10000);
    }

    // Parallax effect for background images
    function setupParallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            
            document.querySelectorAll('.bg-image').forEach(bg => {
                const parent = bg.parentElement;
                const parentTop = parent.offsetTop;
                const speed = 0.5; // Adjust for faster/slower parallax
                
                // Only apply parallax if the section is in view
                if (scrollPosition > parentTop - window.innerHeight && 
                    scrollPosition < parentTop + parent.offsetHeight) {
                    const yPos = (scrollPosition - parentTop) * speed;
                    bg.style.transform = `translateY(${yPos}px)`;
                }
            });
        });
    }

    // Interactive skill bars on hover
    function setupSkillInteractions() {
        const skillItems = document.querySelectorAll('.skill-list li');
        
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                // Add a glow effect
                item.style.textShadow = '0 0 10px rgba(58, 134, 255, 0.5)';
                item.style.color = '#3a86ff';
            });
            
            item.addEventListener('mouseleave', () => {
                // Remove the glow effect
                item.style.textShadow = 'none';
                item.style.color = '';
            });
        });
    }

    // Scroll to top button functionality
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
            
            // Animate elements when they come into view
            animateOnScroll();
            
            // Update active navigation link based on scroll position
            updateActiveNavLink();
        });

        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize all animations and interactions
    function init() {
        // Trigger animations for elements already in viewport on page load
        setTimeout(() => {
            animateOnScroll();
            updateActiveNavLink();
        }, 100);
        
        // Setup background image transitions
        setupBackgroundImageTransitions();
        
        // Setup parallax effect
        setupParallaxEffect();
        
        // Setup skill interactions
        setupSkillInteractions();
        
        // Add active class to first nav link by default
        if (navLinks.length > 0) {
            navLinks[0].classList.add('active');
        }
    }

    // Run initialization
    init();
});
