document.addEventListener('DOMContentLoaded', () => {
    animateNumbers();
});

// Menú hamburguesa
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

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    }
});

// Cerrar menú al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    }
});

// Datos de los servicios
const serviciosData = {
    marcas: {
        titulo: 'Registro de Marcas: Protege la identidad de tu negocio',
        descripcion: 'Una marca es mucho más que un nombre o un logotipo: es la representación de tu identidad comercial y un activo estratégico clave. En CONSULMARCAS, te guiamos en cada paso del proceso para garantizar que tu marca esté debidamente registrada y protegida contra usos indebidos.',
        beneficios: [
            'Derecho exclusivo: El registro te otorga el uso exclusivo de la marca en tu sector y la posibilidad de impedir que terceros la utilicen sin autorización.',
            'Valor comercial: Una marca registrada aumenta el valor de tu empresa y puede ser comercializada, licenciada o vendida.',
            'Protección legal: En caso de disputa, contar con un registro otorga respaldo legal para defender tus derechos.',
            'Diferenciación en el mercado: Evita confusiones con otras marcas y fortalece la confianza de tus clientes.'
        ],
        proceso: [
            'Búsqueda y análisis de viabilidad: Antes de registrar una marca, realizamos un estudio de antecedentes para verificar la disponibilidad y evitar posibles conflictos con marcas preexistentes.',
            'Clasificación y estrategia: Determinamos las clases del sistema de Clasificación de Niza en las que debe registrarse la marca, asegurando una protección adecuada según el sector de tu negocio.',
            'Solicitud ante la Dirección Nacional de Propiedad Industrial: Preparamos y presentamos la solicitud ante la Dirección Nacional de Propiedad Industrial, cumpliendo con todos los requisitos legales.',
            'Seguimiento y defensa: Monitoreamos el proceso hasta la concesión del registro y defendemos tu solicitud ante oposiciones o requerimientos adicionales.',
            'Renovaciones y vigilancia: Las marcas deben renovarse periódicamente para mantener su protección. También ofrecemos un servicio de vigilancia para detectar posibles infracciones y actuar a tiempo.'
        ]
    },
    patentes: {
        titulo: 'Registro de Patentes: Protege tu Innovación',
        descripcion: 'Una patente es el mejor mecanismo para resguardar tus invenciones y garantizar que solo tú puedas explotarlas comercialmente. En CONSULMARCAS, te ayudamos a proteger tus creaciones tecnológicas, asegurando que tu esfuerzo y creatividad sean reconocidos y rentabilizados.',
    que: {
        titulo: '¿Qué es una patente y qué protege?',
        descripcion: 'Una patente es un derecho exclusivo otorgado sobre una invención, permitiendo a su titular impedir que terceros la fabriquen, utilicen o vendan sin autorización.',
        protege: [
            '<li> 🔹 Productos y dispositivos: Máquinas, herramientas, dispositivos electrónicos, etc.</li>',
            '<li> 🔹 Procesos y métodos: Procedimientos industriales, técnicas de fabricación, algoritmos aplicados a procesos técnicos.</li>',
            '<li> 🔹 Sustancias y composiciones químicas: Fármacos, materiales, fórmulas innovadoras.</li>'
            ]
        },
        beneficios: [
            'Exclusividad comercial: Evita que terceros copien, utilicen o vendan tu invención sin tu consentimiento.',
            ' Ventaja competitiva: Diferencia tu empresa y refuerza su posición en el mercado.',
            ' Rentabilidad: Puedes licenciar o vender la patente, generando ingresos adicionales.',
            ' Internacionalización: Protege tu innovación en múltiples países mediante tratados como el PCT (Tratado de Cooperación en materia de Patentes).'
        
        ],
        proceso: [
            'Búsqueda de antecedentes: Realizamos un estudio de patentabilidad para verificar si tu invención es nueva y cumple con los requisitos legales.',
            'Redacción de la solicitud: Elaboramos una memoria descriptiva detallada, reivindicaciones y dibujos técnicos conforme a las normativas nacionales e internacionales.',
            'Presentación y gestión ante la Dirección Técnica de patentes: Nos encargamos de presentar tu solicitud ante la Dirección Técnica de patentes y gestionamos los trámites necesarios.',
            'Examen de patentabilidad: Damos seguimiento a los exámenes técnicos y legales, respondiendo a observaciones para asegurar la concesión de la patente.',
            'Mantenimiento y defensa: Las patentes requieren renovaciones periódicas. Además, vigilamos posibles infracciones para proteger tus derechos.'
        ]

    },
    derechos: {
        titulo: 'Derechos de Autor: Protege tu creatividad',
        descripcion: 'Las obras intelectuales reflejan la creatividad y esfuerzo de sus autores. En CONSULMARCAS, ofrecemos asesoría integral para proteger tus creaciones y garantizar que nadie las use sin tu autorización.',
        que:{
        titulo: '¿Qué es un derecho de autor?',
        descripcion: 'Un derecho de autor es un derecho exclusivo otorgado a los autores de obras literarias y artísticas, permitiendo a su titular impedir que terceros las utilicen sin su consentimiento.',
        protege: [
            '<li> 🎨 Obras literarias y artísticas: Novelas, poemas, obras teatrales, canciones, dibujos, esculturas, etc.</li>',
            '<li> 💻 Software y bases de datos: Programas de computadora, bases de datos, etc.</li>',
            '<li> 🎬 Obras audiovisuales: Películas, videos, programas de televisión, etc.</li>',
            '<li> 🎵 Música: Canciones, arreglos musicales, etc.</li>',
            '<li> 📑 Bases de datos y contenido digital: Compilaciones de información con estructura original.</li>'

        ]
       },
        beneficios: [
            'Registro de obras literarias y artísticas',
            'Protección de software y bases de datos',
            'Asesoría en contratos de licencia',
            'Defensa contra plagio',
            'Gestión de derechos digitales'
        ],
        proceso: [
            'Evaluación de la obra',
            'Preparación de documentación',
            'Registro ante autoridades competentes',
            'Emisión de certificados',
            'Asesoría en protección'
        ]
    },
    Oposiciones: {
        titulo: 'Oposiciones a registros de propiedad industrial',
        descripcion: 'Cuando una empresa o persona intenta registrar una marca, patente o diseño industrial que pueda afectar tus derechos, puedes presentar una oposición ante Dirección Nacional de Propiedad Industrial.',
        que: {
            titulo: ' ¿Cuándo presentar una oposición?',
            descripcion: '<li> Si la nueva marca es similar o idéntica a la tuya y puede causar confusión en el mercado.</li>' +
            ' <li> Si el signo distintivo solicitado vulnera derechos previos adquiridos por tu empresa.</li>' +
            ' <li> Si se intenta registrar un diseño o patente que no cumple con los requisitos de originalidad o novedad.</li>' +
            ' <li> Si el solicitante actúa de mala fe al intentar registrar un signo ajeno.</li>',
            protege: []
        },
        beneficios: [
            'Representación en litigios',
            'Mediación y arbitraje',
            'Defensa contra infracciones',
            'Asesoría en acuerdos de licencia',
            'Gestión de disputas internacionales'
        ],
        proceso: [
            'Análisis y monitoreo: Revisamos solicitudes de registro en la gaceta de Propiedad Intelectual, para detectar conflictos potenciales.',
            'Presentación de oposición: Preparamos y presentamos los argumentos legales ante la Dirección Nacional de Propiedad Industrial.',
            'Seguimiento del procedimiento: Respondemos requerimientos y gestionamos negociaciones si es necesario.',
            'Defensa en caso de impugnaciones: Representamos a nuestros clientes ante recursos administrativos y judiciales.'
        ]
    },
    Consultoría: {
        titulo: 'Consultoría y Estrategia en Propiedad Intelectual',
        descripcion: 'La propiedad intelectual es un activo estratégico que puede impulsar el crecimiento y la competitividad de tu empresa. En CONSULMARCAS, brindamos asesoría especializada para ayudarte a gestionar, proteger y maximizar el valor de tus creaciones, marcas, invenciones y otros activos intangibles.',
        que: {
            titulo: '¿Por qué es importante una estrategia de propiedad intelectual?',
            descripcion: '<li> Protección integral: Garantiza la seguridad jurídica de tus activos intangibles y evita riesgos de infracción.</li>' +
            '<li> Monetización y crecimiento: Potencia el valor de tu propiedad intelectual mediante licencias, franquicias y comercialización.</li>' +
            '<li> Expansión global: Diseñamos estrategias para proteger tus derechos en mercados internacionales.</li>' +
            '<li> Prevención de conflictos: Implementamos medidas para reducir riesgos legales y disputas con terceros.</li>',
            protege: []
        },
        beneficios: [
            'Auditoría de Propiedad Intelectual',
            'Gestión de Portafolios de Marcas, Patentes y Derechos de Autor',
            'Estrategias de Expansión Internacional',
            'Valoración y Comercialización de Activos Intangibles',
            'Estrategias de Cumplimiento y Prevención de Infracciones',
            'Consultoría en Innovación y Protección Tecnológica'
        ],
        proceso: [
            'Evaluación de activos intangibles',
            'Desarrollo de estrategia personalizada',
            'Implementación de medidas de protección',
            'Monitoreo y vigilancia',
            'Optimización continua del portafolio'
        ]
    },
    Transferencia: {
        titulo: 'Transferencia de Tecnología y Licencias',
        descripcion: 'La transferencia de tecnología y la concesión de licencias permiten a las empresas y creadores monetizar sus innovaciones y ampliar su impacto en el mercado. En CONSULMARCAS, asesoramos a nuestros clientes en la negociación, estructuración y formalización de acuerdos que maximicen el valor de sus activos de propiedad intelectual.',
        que: {
            titulo: '¿Qué es la transferencia de tecnología?',
            descripcion: 'La transferencia de tecnología es el proceso mediante el cual una empresa, institución o creador cede el uso de su conocimiento, invenciones o desarrollos a terceros, asegurando su correcta explotación comercial. Esto puede incluir:' +
            '<li> Patentes y modelos de utilidad</li>' +
            '<li> Software y desarrollos tecnológicos</li>' +
            '<li> Conocimientos técnicos y secretos industriales</li>' +
            '<li> Diseños industriales e innovaciones en procesos productivos</li>',
            protege: []
        },
        beneficios: [
            'Licencias exclusivas: Solo el licenciatario puede explotar el derecho concedido, incluso excluyendo al titular',
            'Licencias no exclusivas: El titular conserva el derecho de conceder licencias a múltiples empresas o personas',
            'Licencias obligatorias: Impuestas por la autoridad en casos específicos de interés público',
            'Franquicias: Permiten a terceros explotar un modelo de negocio completo bajo condiciones específicas',
            'Negociación y estructuración de contratos',
            'Estrategias de comercialización de tecnología'
        ],
        proceso: [
            'Due Diligence de Propiedad Intelectual',
            'Protección de secretos empresariales',
            'Registro y cumplimiento regulatorio',
            'Implementación de estrategias de confidencialidad',
            'Evaluación de viabilidad legal y comercial'
        ]
    }

};

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del DOM
    const modalOverlay = document.querySelector('.service-more-modal-overlay');
    const modalContent = document.querySelector('.modal-content');
    const closeButton = document.querySelector('.close-more');
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    // Función para mostrar el modal con el contenido del servicio
    function showModal(serviceId) {
        const service = serviciosData[serviceId];
        if (!service) {
            console.error('Servicio no encontrado:', serviceId);
            return;
        }

        // Título y descripción
        modalContent.innerHTML = `
            <h2 class="modal-main-title">${service.titulo}</h2>
            <p class="modal-desc">${service.descripcion}</p>
        `;

        // Mostrar bloque especial "que" si existe (justo después de la descripción)
        if (service.que) {
            modalContent.innerHTML += `
                <div class="modal-what-is">
                    <h3 class="modal-subtitle">${service.que.titulo}</h3>
                    <p>${service.que.descripcion}</p>
                    <ul class="modal-benefits">
                        ${service.que.protege.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // Beneficios
        modalContent.innerHTML += `
            <div class="modal-benefits-card">
                <h3 class="modal-subtitle">Beneficios</h3>
                <ul class="modal-benefits">
                    ${service.beneficios.map(beneficio => `
                        <li>
                            <i class="fas fa-check benefit-icon"></i>
                            ${beneficio}
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="modal-process-card">
                <h3 class="modal-process-title">Nuestro Proceso</h3>
                <ol class="modal-process-list">
                    ${service.proceso.map(paso => `
                        <li>${paso}</li>
                    `).join('')}
                </ol>
            </div>
        `;

        // Mostrar el modal
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Agregar event listeners a los botones "Conoce más"
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const serviceId = this.getAttribute('data-service');
            console.log('Botón clickeado, servicio:', serviceId); // Para debugging
            showModal(serviceId);
        });
    });

    // Cerrar modal al hacer clic en el botón de cerrar
    closeButton.addEventListener('click', function () {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Cerrar modal al hacer clic fuera del contenido
    modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
// Funcionalidad para el botón de WhatsApp
document.addEventListener('DOMContentLoaded', function () {
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

    whatsappLink.addEventListener('mouseenter', function () {
        messageSpan.textContent = '¿Te puedo ayudar?';
        whatsappButton.classList.add('expanded');
    });

    whatsappLink.addEventListener('mouseleave', function () {
        messageSpan.textContent = originalText;
        whatsappButton.classList.remove('expanded');
    });

    // Añadir efecto al hacer clic
    whatsappLink.addEventListener('click', function () {
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
