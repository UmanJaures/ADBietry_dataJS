  // Données pour le slider (modifiable sans redéploiement)
        const sliderData = [
            {
                backgroundImage: 'https://i.postimg.cc/bvmCWc7r/BIENVENUE.png',
                title: 'Une Église pour tous',
                subtitle: 'Venez vivre une expérience spirituelle transformatrice',
                buttonText: 'En savoir plus',
                buttonLink: '#'
            },
            {
                backgroundImage: 'https://i.postimg.cc/fTD56yf0/church2.jpg',
                title: 'Un lieu de grâce et d\'impact',
                subtitle: 'Rejoignez notre communauté dynamique',
                buttonText: 'En savoir plus',
                buttonLink: '#'
            },
            {
                backgroundImage: 'https://i.postimg.cc/2yK6FVzX/church3.jpg',
                title: 'Jeunesse active',
                subtitle: 'Découvrez nos programmes pour les jeunes',
                buttonText: 'En savoir plus',
                buttonLink: '#'
            }
        ];

        // Données pour les pasteurs (modifiable sans redéploiement)
        const mainPastorData = {
            image: 'https://i.postimg.cc/kG69Cwmf/pastor-main.jpg',
            name: 'Couple pastorale Maman et Emile Yede',
            position: 'Pasteurs Principaux',
            description: 'L\'Apotre NGUESSAN YEDE EMILE et son épouse MAMAN YEDE dirigent le Temple La Grâce depuis les années 90. Après des études théologiques approfondies et plusieurs années de ministère dans différentes régions de la Côte d\'Ivoire, ils ont été appelés par Dieu à fonder cette œuvre à Biétry.',
            vision: 'Leur vision est de voir une église unie, remplie de l\'Esprit Saint, qui impacte positivement la société ivoirienne. Leur ministère est caractérisé par l\'enseignement profond de la Parole de Dieu, la prière et un engagement sans faille pour le développement spirituel de chaque membre.',
            quote: '"Nous croyons en une église qui vit la grâce au quotidien et qui transforme sa communauté par l\'amour de Christ."'
        };

        const otherPastorsData = [
            {
                image: 'https://i.postimg.cc/gJfcn14f/pastor1.jpg',
                name: 'Pasteur Konde',
                position: 'Pasteur du temple la Grace'
            },
            {
                image: 'https://i.postimg.cc/zfPM3HJ8/pasteur-gueu-2-1.jpg',
                name: 'Pasteur Gueu',
                position: 'Pasteur de beatitude'
            },
            {
                image: 'https://i.postimg.cc/gktS8d3X/pastor.jpg',
                name: 'PASTEUR',
                position: 'Pasteur d\'accomplissement'
            },
            {
                image: 'https://i.postimg.cc/gktS8d3X/pastor.jpg',
                name: 'Pasteur',
                position: 'Pasteur de Révélation'
            },
            {
                image: 'https://i.postimg.cc/gktS8d3X/pastor.jpg',
                name: 'Pasteur',
                position: 'Pasteur d\'ebenezer'
            }
        ];

        // Variables globales pour le slider
        let slides = [];
        let dots = [];
        let currentSlide = 0;
        let slideInterval;

        // Générer le contenu du slider
        function generateSliderContent() {
            const sliderContainer = document.querySelector('.slider-container');
            const dotsContainer = document.querySelector('.slider-dots');
            
            // Créer les slides
            sliderData.forEach((slide, index) => {
                const slideElement = document.createElement('div');
                slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
                slideElement.style.backgroundImage = `url('${slide.backgroundImage}')`;
                
                slideElement.innerHTML = `
                    <div class="slide-content">
                        <h2>${slide.title}</h2>
                        <p>${slide.subtitle}</p>
                        <a href="${slide.buttonLink}" class="btn">${slide.buttonText}</a>
                    </div>
                `;
                
                sliderContainer.insertBefore(slideElement, sliderContainer.firstChild);
                
                // Créer les dots
                const dot = document.createElement('div');
                dot.className = `dot ${index === 0 ? 'active' : ''}`;
                dotsContainer.appendChild(dot);
            });
            
            // Mettre à jour les références après génération
            slides = document.querySelectorAll('.slide');
            dots = document.querySelectorAll('.dot');
            
            // Ajouter les écouteurs d'événements aux dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => goToSlide(index));
            });
        }

        // Générer le pasteur principal
        function generateMainPastor() {
            const mainPastorContainer = document.getElementById('main-pastor-container');
            
            mainPastorContainer.innerHTML = `
                <div class="pastor-info">
                    <h3>${mainPastorData.name}</h3>
                    <h4>${mainPastorData.position}</h4>
                    <p>${mainPastorData.description}</p>
                    <p>${mainPastorData.vision}</p>
                    <p>${mainPastorData.quote}</p>
                </div>
                <div class="pastor-image">
                    <img src="${mainPastorData.image}" alt="${mainPastorData.name}">
                </div>
            `;
        }

        // Générer les autres pasteurs (CORRIGÉ)
        function generateOtherPastors() {
            const pastorsGridContainer = document.getElementById('pastors-grid-container');
            
            otherPastorsData.forEach(pastor => {
                const pastorCard = document.createElement('div');
                pastorCard.className = 'pastor-card animate-on-scroll';
                
                pastorCard.innerHTML = `
                    <div class="pastor-card-image">
                        <img src="${pastor.image}" alt="${pastor.name}">
                    </div>
                    <h4>${pastor.name}</h4>
                    <p>${pastor.position}</p>
                `;
                
                pastorsGridContainer.appendChild(pastorCard);
            });
        }

        // Fonctions pour contrôler le slider
        function goToSlide(index) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');

            currentSlide = (index + slides.length) % slides.length;

            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            goToSlide(currentSlide + 1);
        }

        function prevSlide() {
            goToSlide(currentSlide - 1);
        }

        function initSlider() {
            const nextBtn = document.querySelector('.next-slide');
            const prevBtn = document.querySelector('.prev-slide');
            const sliderContainer = document.querySelector('.slider-container');

            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);

            // Auto slide
            slideInterval = setInterval(nextSlide, 5000);

            // Pause auto slide when hovering slider
            sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
            sliderContainer.addEventListener('mouseleave', () => {
                slideInterval = setInterval(nextSlide, 5000);
            });
        }

          // Mobile Menu Toggle
       function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    dropdowns.forEach(dropdown => {
        // On cible le lien parent (qui ouvre le dropdown)
        const toggleLink = dropdown.querySelector('a');

        toggleLink.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                const href = toggleLink.getAttribute('href');

                // On bloque seulement si href="#" ou href="javascript:void(0)"
                if (href === '#' || href === 'javascript:void(0)') {
                    e.preventDefault();
                    dropdown.classList.toggle('open');
                    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                    dropdownMenu.classList.toggle('active');
                }
                // Sinon c'est un vrai lien, on laisse passer la navigation normalement
            }
        });
    });
}

        // Header Scroll Effect
        function initHeaderScroll() {
            window.addEventListener('scroll', () => {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }

        // Scroll Animation
        function initScrollAnimation() {
            const animateElements = document.querySelectorAll('.animate-on-scroll');

            function checkScroll() {
                animateElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;

                    if (elementTop < windowHeight * 0.85) {
                        element.classList.add('visible');
                    }
                });

                // Special handling for section titles and subtitles
                document.querySelectorAll('.section-title, .section-subtitle, .slogan').forEach(el => {
                    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
                        el.classList.add('visible');
                    }
                });
            }

            window.addEventListener('scroll', checkScroll);
            window.addEventListener('load', checkScroll);
        }

        // Initialisation complète du site
        function initSite() {
            // Générer le contenu dynamique
            generateSliderContent();
            generateMainPastor();
            generateOtherPastors();
            
            // Initialiser les fonctionnalités
            initMobileMenu();
            initHeaderScroll();
            initScrollAnimation();
            initSlider();
        }

        // Lancer l'initialisation quand le DOM est prêt
        document.addEventListener('DOMContentLoaded', initSite);