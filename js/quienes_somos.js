const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.querySelector('.whatsapp-button');
    
    // Añadir animación de entrada
    setTimeout(() => {
        whatsappButton.classList.add('visible');
    }, 1000);
    
    // Añadir efecto de pulso cada cierto tiempo
    setInterval(() => {
        whatsappButton.classList.add('pulse');
        setTimeout(() => {
            whatsappButton.classList.remove('pulse');
        }, 1000);
    }, 5000);
    
    // Mostrar mensaje al hacer hover
    const whatsappLink = document.querySelector('.whatsapp-link');
    const messageSpan = whatsappLink.querySelector('span');
    const originalText = messageSpan.textContent;
    
    whatsappLink.addEventListener('mouseenter', function() {
        messageSpan.textContent = '¿Te puedo ayudar?';
        whatsappButton.classList.add('expanded');
    });
    
    whatsappLink.addEventListener('mouseleave', function() {
        messageSpan.textContent = originalText;
        whatsappButton.classList.remove('expanded');
    });
    
    // Añadir efecto al hacer clic
    whatsappLink.addEventListener('click', function() {
        whatsappButton.classList.add('clicked');
        setTimeout(() => {
            whatsappButton.classList.remove('clicked');
        }, 300);
    });
});

// Añadir estilos CSS dinámicamente para las animaciones
const whatsappStyles = document.createElement('style');
whatsappStyles.innerHTML = `
    .whatsapp-button {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 1000;
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.3s ease;
    }
    
    .whatsapp-button.visible {
        opacity: 1;
        transform: scale(1);
    }
    
    .whatsapp-button.pulse {
        animation: whatsappPulse 1s ease;
    }
    
    .whatsapp-button.expanded {
        transform: scale(1.05);
    }
    
    .whatsapp-button.clicked {
        transform: scale(0.9);
    }
    
    .whatsapp-link {
        overflow: hidden;
        width: 50px;
        transition: width 0.3s ease;
    }
    
    .whatsapp-link span {
        opacity: 0;
        width: 0;
        transition: opacity 0.3s ease, width 0.3s ease;
        white-space: nowrap;
    }
    
    .whatsapp-link:hover,
    .whatsapp-button.expanded .whatsapp-link {
        width: 180px;
    }
    
    .whatsapp-link:hover span,
    .whatsapp-button.expanded .whatsapp-link span {
        opacity: 1;
        width: auto;
    }
    
    @keyframes whatsappPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(whatsappStyles);
