document.addEventListener('DOMContentLoaded', function() {
    initAOS();
    initScrollAnimations();
    initParallax();
    initTypingEffect();
    initGlitchEffect();
});

// AOS Initialization
function initAOS() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// Scroll-based Animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-on-scroll');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.6s ease-out';
        scrollObserver.observe(el);
    });
}

// Parallax Effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        parallaxElements.forEach((el, index) => {
            const speed = (index + 1) * 5;
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;

            el.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    });
}

// Typing Effect
function initTypingEffect() {
    const typingElements = document.querySelectorAll('.typing-effect');

    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;

        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.disconnect();
                }
            });
        });

        observer.observe(element);
    });
}

// Glitch Effect on Hover
function initGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch');

    glitchElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.setAttribute('data-text', el.textContent);
        });
    });
}

// Smooth Scroll
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

smoothScroll();

// Reveal on Scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Create Particles on Click
document.addEventListener('click', function(e) {
    createParticles(e.clientX, e.clientY);
});

function createParticles(x, y) {
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animationDelay = (i * 0.1) + 's';

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 3000);
    }

}