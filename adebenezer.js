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
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Carousel functionality
        const carouselImages = [
            {
                url: 'https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
                title: 'Retraite Spirituelle Annuelle',
                description: 'Rejoignez-nous du 15 au 17 septembre pour notre retraite spirituelle dans les montagnes',
                link: 'https://www.facebook.com/share/p/12KJFg1BCEc/'
            },
            {
                url: 'https://i.postimg.cc/FHRvQzvf/concertb.jpg',
                title: 'Concert Beatitude',
                description: 'Rejoignez-nous du 15 au 17 septembre pour notre retraite spirituelle dans les montagnes',
                link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftikerama.com%2Ffr%2Fevenement%2Fconcert-des-art'
            },
            {
                url: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
                title: 'Culte de Jeunesse Dynamique',
                description: 'Vendredi 8 septembre à 19h - Un temps fort pour les jeunes de 15 à 30 ans',
                link: 'https://www.facebook.com/share/p/12KJFg1BCEc/'
            },
            {
                url: 'https://i.postimg.cc/85DGr5hb/church1.jpg',
                title: 'Campagne d\'Évangélisation',
                description: 'Du 1er au 10 octobre - Ensemble pour apporter la Bonne Nouvelle dans notre quartier',
                link: 'https://www.facebook.com/share/p/12KJFg1BCEc/'
            },
            {
                url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80',
                title: 'Concert Gospel "Louanges Célestes"',
                description: 'Samedi 23 septembre à 18h - Une soirée de louange avec notre chorale et invités spéciaux',
                link: 'https://www.facebook.com/share/p/12KJFg1BCEc/'
            }
        ];

        const carouselTrack = document.querySelector('.carousel-track');
        const carouselDots = document.querySelector('.carousel-dots');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentSlide = 0;

        // Initialize carousel
        function initCarousel() {
            // Clear existing content
            carouselTrack.innerHTML = '';
            carouselDots.innerHTML = '';

            // Create slides and dots
            carouselImages.forEach((image, index) => {
                // Create slide
                const slide = document.createElement('div');
                slide.className = 'carousel-slide';
                slide.innerHTML = `
               <a href="${image.link}" target="_blank">
                 <img src="${image.url}" alt="${image.title}">
                  </a>
                   <div class="carousel-caption">
                      <h3>${image.title}</h3>
                       <p>${image.description}</p>
                        </div>
                `;
                carouselTrack.appendChild(slide);

                // Create dot
                const dot = document.createElement('div');
                dot.className = 'carousel-dot';
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                carouselDots.appendChild(dot);
            });

            // Set initial slide
            goToSlide(0);
        }

        function goToSlide(index) {
            currentSlide = index;
            carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

            // Update active dot
            document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
                if (i === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % carouselImages.length;
            goToSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
            goToSlide(currentSlide);
        }

        // Set up event listeners
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        // Auto slide
        let slideInterval = setInterval(nextSlide, 5000);

        // Pause auto slide when hovering carousel
        const carousel = document.querySelector('.carousel');
        carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
        carousel.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });

        // Initialize the carousel
        initCarousel();

        // Scroll Animation
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