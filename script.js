// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'white';
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

// Mobile menu toggle
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'mobile-menu-btn';
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    hamburger.style.display = 'none';
    
    // Add styles for mobile menu
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block !important;
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--primary-blue);
                cursor: pointer;
                padding: 0.5rem;
            }
            
            .nav-links {
                display: none;
                width: 100%;
            }
            
            .nav-links.active {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 1rem 0;
                background: white;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
            }
            
            .nav-links.active li {
                margin: 0.5rem 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Insert hamburger button
    navbar.insertBefore(hamburger, navLinks);
    
    // Toggle menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
};

// Initialize mobile menu
createMobileMenu();

// Add scroll reveal animation
const revealOnScroll = () => {
    const elements = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(element);
    });
};

// Initialize scroll reveal
revealOnScroll();

// Project filtering
const initProjectFilters = () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projects.forEach(project => {
                if (filter === 'all' || project.getAttribute('data-category') === filter) {
                    project.classList.remove('hidden');
                } else {
                    project.classList.add('hidden');
                }
            });
        });
    });
};

// Initialize project filters
initProjectFilters();

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initProjectFilters();
}); 