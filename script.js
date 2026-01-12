document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
    initializeNavigation();
    initializeScrollAnimations();
});

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }

        const formData = {
            name: name,
            email: email,
            subject: subject,
            message: message,
            timestamp: new Date().toISOString()
        };

        try {
            const existingData = JSON.parse(localStorage.getItem('portfolioMessages')) || [];
            existingData.push(formData);
            localStorage.setItem('portfolioMessages', JSON.stringify(existingData));

            showMessage('Message sent successfully! Thank you for reaching out.', 'success');
            form.reset();

            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = '';
            }, 5000);
        } catch (error) {
            showMessage('Error saving message. Please try again.', 'error');
        }
    });

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = type;
        formMessage.style.display = 'block';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbar = document.querySelector('.navbar-collapse');
            if (navbar.classList.contains('show')) {
                new bootstrap.Collapse(navbar).hide();
            }
        });
    });

    document.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .contact-card');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

function getStoredMessages() {
    try {
        return JSON.parse(localStorage.getItem('portfolioMessages')) || [];
    } catch {
        return [];
    }
}

function clearStoredMessages() {
    if (confirm('Are you sure you want to clear all stored messages?')) {
        localStorage.removeItem('portfolioMessages');
        console.log('All messages cleared');
    }
}

console.log('Portfolio website initialized successfully!');
