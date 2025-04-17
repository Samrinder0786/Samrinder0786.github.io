document.addEventListener('DOMContentLoaded', function() {
    // Animate sections as they come into view
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('.fade-in');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
            }
        });
    };

    // Initialize animation state
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.6s ease-out';
    });

    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Team member hover effect
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.querySelector('.member-photo').style.transform = 'scale(1.1)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.querySelector('.member-photo').style.transform = 'scale(1)';
        });
    });

    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        // Delay animation for each item
        item.style.transition = `all 0.5s ease ${index * 0.2}s`;
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(item);
    });

    // Testimonial carousel functionality
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }
    
    // Only run if there are multiple testimonials
    if (testimonials.length > 1) {
        // Initialize - show first testimonial
        showTestimonial(0);
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle (if you add a mobile menu later)
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuToggle.style.display = 'none'; // Hidden by default
    
    const header = document.querySelector('header.hero');
    header.appendChild(mobileMenuToggle);
    
    // Responsive check for mobile menu
    function checkMobileMenu() {
        if (window.innerWidth < 768) {
            mobileMenuToggle.style.display = 'block';
            // Add your mobile menu logic here
        } else {
            mobileMenuToggle.style.display = 'none';
        }
    }
    
    window.addEventListener('resize', checkMobileMenu);
    checkMobileMenu();
});