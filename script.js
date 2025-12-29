// Efeitos interativos e animações galácticas

document.addEventListener('DOMContentLoaded', function() {
    // Cria estrelas animadas
    createStars();
    
    // Adiciona efeito de ripple nos cards ao clicar
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Efeito parallax suave no scroll
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        const shapes = document.querySelectorAll('.floating-shape');
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const yPos = -(currentScroll * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
        
        lastScroll = currentScroll;
    });

    // Adiciona efeito de hover com partículas (opcional)
    linkCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // Verifica se a foto existe, caso contrário mostra placeholder
    const profilePhoto = document.getElementById('profile-photo');
    if (profilePhoto) {
        profilePhoto.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'photo-placeholder';
            placeholder.innerHTML = '👤';
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #3b82f6 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 48px;
                color: white;
                border: 4px solid rgba(255, 255, 255, 0.3);
                box-shadow: inset 0 0 20px rgba(139, 92, 246, 0.5);
            `;
            this.parentElement.appendChild(placeholder);
        });
    }

    // Adiciona animação de entrada para os elementos
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

    // Observa os cards de links
    linkCards.forEach(card => {
        observer.observe(card);
    });

    // Adiciona partículas galácticas ao mover o mouse
    createGalacticParticles();
});

// Função para criar estrelas animadas
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    if (!starsContainer) return;
    
    const numStars = 100;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            opacity: ${Math.random() * 0.8 + 0.2};
            animation: twinkle ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.8);
        `;
        
        starsContainer.appendChild(star);
    }
}

// Função para criar partículas galácticas
function createGalacticParticles() {
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            if (Math.random() > 0.7) { // Apenas 30% das vezes para não sobrecarregar
                const particle = document.createElement('div');
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                particle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%);
                    border-radius: 50%;
                    left: ${x}px;
                    top: ${y}px;
                    pointer-events: none;
                    z-index: 1000;
                    animation: particleFloat 1s ease-out forwards;
                `;
                
                this.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 1000);
            }
        });
    });
}

// Adiciona estilos para efeitos galácticos
const style = document.createElement('style');
style.textContent = `
    .link-card {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(139, 92, 246, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes twinkle {
        0%, 100% {
            opacity: 0.2;
            transform: scale(1);
        }
        50% {
            opacity: 1;
            transform: scale(1.2);
        }
    }
    
    @keyframes particleFloat {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(0);
        }
    }
    
    #stars-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
    }
`;
document.head.appendChild(style);

