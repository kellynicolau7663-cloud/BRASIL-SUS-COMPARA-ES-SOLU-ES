document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       MOBILE MENU TOGGLE
       ========================================================================== */
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('open')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Close menu when clicking nav links on mobile
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
        });
    });

    /* ==========================================================================
       SCROLL PROGRESS & SCROLL ACTIVE NAV LINK
       ========================================================================== */
    const scrollProgress = document.getElementById('scroll-progress');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // Scroll progress bar
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        if (totalScroll > 0) {
            const percentage = (currentScroll / totalScroll) * 100;
            scrollProgress.style.width = `${percentage}%`;
        }

        // Active link tracking
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       PRINCIPLE CARDS INTERACTIVITY (ACCORDION CHIPS)
       ========================================================================== */
    const principleCards = document.querySelectorAll('.principle-card');
    
    principleCards.forEach(card => {
        card.addEventListener('click', () => {
            const isExpanded = card.classList.contains('expanded');
            
            // Close all first
            principleCards.forEach(c => c.classList.remove('expanded'));
            
            // Toggle clicked
            if (!isExpanded) {
                card.classList.add('expanded');
            }
        });
    });

    /* ==========================================================================
       COMPARISON TABS (PUBLIC VS PRIVATE)
       ========================================================================== */
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });

    /* ==========================================================================
       CAROUSEL (AVANÇOS DO SISTEMA)
       ========================================================================== */
    const carouselNavBtns = document.querySelectorAll('.carousel-nav-btn');
    const carouselSlides = document.querySelectorAll('.carousel-slide');

    carouselNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const slideIdx = parseInt(btn.getAttribute('data-slide'));

            carouselNavBtns.forEach(b => b.classList.remove('active'));
            carouselSlides.forEach(s => s.classList.remove('active'));

            btn.classList.add('active');
            carouselSlides[slideIdx].classList.add('active');
        });
    });

    /* ==========================================================================
       REFERÊNCIAS ACCORDION
       ========================================================================== */
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

            // Toggle clicked
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       INTERACTIVE DASHBOARD CHARTS (CHART.JS)
       ========================================================================== */
    
    // Global font configurations for Chart.js
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = 'hsl(217, 15%, 40%)';
    Chart.defaults.plugins.tooltip.padding = 12;
    Chart.defaults.plugins.tooltip.cornerRadius = 8;
    Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(17, 24, 39, 0.9)';

    // Teal gradient helper for styling
    function getTealGradient(ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 250);
        gradient.addColorStop(0, 'rgba(13, 148, 136, 0.4)');
        gradient.addColorStop(1, 'rgba(13, 148, 136, 0.0)');
        return gradient;
    }

    // Cyan/Blue gradient helper
    function getBlueGradient(ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 250);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');
        return gradient;
    }

    // Chart 1: Expectativa de Vida
    const ctxLife = document.getElementById('chartExpectativaVida').getContext('2d');
    new Chart(ctxLife, {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Expectativa de Vida (Anos)',
                data: [76.2, 76.4, 74.8, 72.8, 75.5, 76.2, 76.6],
                borderColor: '#0d9488',
                borderWidth: 3,
                backgroundColor: getTealGradient(ctxLife),
                fill: true,
                tension: 0.3,
                pointBackgroundColor: '#0d9488',
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    min: 70,
                    max: 78,
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });

    // Chart 2: Mortalidade Infantil
    const ctxMort = document.getElementById('chartMortalidadeInfantil').getContext('2d');
    new Chart(ctxMort, {
        type: 'line',
        data: {
            labels: ['1940', '1960', '1980', '2000', '2010', '2020', '2024'],
            datasets: [{
                label: 'Óbitos por mil nascidos vivos',
                data: [146.6, 110.5, 69.1, 29.0, 17.2, 12.8, 12.3],
                borderColor: '#3b82f6',
                borderWidth: 3,
                backgroundColor: getBlueGradient(ctxMort),
                fill: true,
                tension: 0.2,
                pointBackgroundColor: '#3b82f6',
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });

    // Chart 3: Distribuição Médica por Região
    const ctxDoc = document.getElementById('chartMedicosRegiao').getContext('2d');
    new Chart(ctxDoc, {
        type: 'bar',
        data: {
            labels: ['Norte', 'Nordeste', 'C-Oeste', 'Sul', 'Sudeste', 'Méd. Nacional'],
            datasets: [{
                label: 'Médicos por 1.000 hab',
                data: [1.3, 1.8, 2.4, 2.8, 3.5, 2.5],
                backgroundColor: [
                    'rgba(249, 115, 22, 0.75)',  // Orange
                    'rgba(139, 92, 246, 0.75)',  // Purple
                    'rgba(59, 130, 246, 0.75)',   // Blue
                    'rgba(16, 185, 129, 0.75)',  // Green
                    'rgba(13, 148, 136, 0.75)',  // Teal
                    'rgba(17, 24, 39, 0.5)'      // Grey (Average)
                ],
                borderWidth: 0,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    max: 4.5,
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });

    // Chart 4: Investimento PIB
    const ctxPIB = document.getElementById('chartPIBSaude').getContext('2d');
    new Chart(ctxPIB, {
        type: 'doughnut',
        data: {
            labels: ['Público (SUS)', 'Privado (Planos/Bolso)'],
            datasets: [{
                data: [4.0, 5.0],
                backgroundColor: [
                    '#0d9488', // Teal (Public)
                    '#f97316'  // Orange (Private)
                ],
                hoverOffset: 6,
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        padding: 20
                    }
                }
            },
            cutout: '65%'
        }
    });

    /* ==========================================================================
       SCROLL REVEAL ANIMATION (INTERSECTION OBSERVER)
       ========================================================================== */
    const revealElements = document.querySelectorAll(
        '.intro-visual, .intro-text-content, .principle-card, .comparison-tabs, .dashboard-card, .carousel-container, .desafios-text, .cooperacao-card, .conclusion-box, .accordion'
    );

    // Initial styles
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });
});
