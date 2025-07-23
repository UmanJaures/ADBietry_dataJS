  // Données dynamiques pour les annonces et vidéos
        const eventSlides = [
            {
                image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",
                title: "Concert Gospel de Noël",
                date: "24 décembre 2023",
                link: "#"
            },
            {
                image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                title: "Retraite Spirituelle Annuelle",
                date: "15-17 septembre 2023",
                link: "#"
            },
            {
                image: "https://i.postimg.cc/DymfRn2b/buildg.jpg",
                title: "Campagne d'Évangélisation",
                date: "1-10 octobre 2023",
                link: "#"
            }
        ];

        const announcements = [
            {
                image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                title: "Culte de Jeunesse Dynamique",
                description: "Vendredi 8 septembre à 19h - Un temps fort pour les jeunes de 15 à 30 ans",
                link: "https://facebook.com/event"
            },
            {
                image: "https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
                title: "Séminaire sur la Famille Chrétienne",
                description: "Samedi 16 septembre de 9h à 13h - Avec le Pasteur Jean Dupont",
                link: "https://facebook.com/event"
            },
            {
                image: "https://i.postimg.cc/tCk10pn3/benevolat.avif",
                title: "Programme de Bénévolat Communautaire",
                description: "Rejoignez-nous chaque samedi matin pour servir notre communauté",
                link: "https://facebook.com/event"
            },
            {
                image: "https://i.postimg.cc/5NrX9ppy/ecodim.jpg",
                title: "Cours de Catéchèse pour Enfants",
                description: "Inscriptions ouvertes pour la nouvelle année scolaire",
                link: "https://facebook.com/event"
            }
        ];

        const videos = [
            {
                thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                title: "Culte du Dimanche 3 septembre 2023",
                link: "https://youtube.com/video"
            },
            {
                thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                title: "Témoignage: La Puissance de la Guérison Divine",
                link: "https://youtube.com/video"
            },
            {
                thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                title: "Chorale Gospel: Chants d'Adoration",
                link: "https://youtube.com/video"
            },
            {
                thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                title: "Conférence sur la Foi en Temps d'Épreuve",
                link: "https://youtube.com/video"
            },
            {
                thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                title: "Baptême de 15 Nouveaux Croyants",
                link: "https://youtube.com/video"
            },
            {
                thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                title: "Célébration de la Fête des Mères",
                link: "https://youtube.com/video"
            },
            {
                thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                title: "Série d'enseignement sur la prière",
                link: "https://youtube.com/video"
            },
            {
                thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                title: "Concert de Noël 2022",
                link: "https://youtube.com/video"
            }
        ];

        const reconstructionImages = [
            {
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "Avancement des travaux - Septembre 2023"
            },
            {
                image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1984&q=80",
                title: "Fondations du nouveau temple"
            },
            {
                image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80",
                title: "Structure principale en construction"
            },
            {
                image: "https://i.postimg.cc/Yq74y88m/cst.jpg",
                title: "Structure principale en construction"
            },
            {
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
                title: "Vue aérienne du chantier"
            }
        ];

        // Initialisation des composants
        document.addEventListener('DOMContentLoaded', function () {
            // Initialisation des carrousels
            initEventCarousel();
            initAnnouncements();
            initVideos();
            initReconstructionGallery();
            initNavigation();
            initScrollAnimations();
            initVideoScroll();
        });

        // Carrousel d'événements
        function initEventCarousel() {
            const carouselTrack = document.querySelector('.events-carousel .carousel-track');
            const dotsContainer = document.querySelector('.events-carousel .carousel-dots');

            // Création des slides
            eventSlides.forEach((slide, index) => {
               const slideElement = document.createElement('a');
                slideElement.className = 'carousel-slide';
                slideElement.href = slide.link;
                slideElement.target = "_blank";
                slideElement.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}">
               <div class="carousel-caption">
              <h3>${slide.title}</h3>
             <p>${slide.date}</p>
                  </div>
                `;
                carouselTrack.appendChild(slideElement);

                // Création des points
                const dot = document.createElement('div');
                dot.className = 'carousel-dot';
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });

            // Contrôles de navigation
            document.querySelector('.prev-event').addEventListener('click', prevSlide);
            document.querySelector('.next-event').addEventListener('click', nextSlide);

            // Auto slide
            let slideInterval = setInterval(nextSlide, 5000);
            const carousel = document.querySelector('.events-carousel');
            carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
            carousel.addEventListener('mouseleave', () => {
                slideInterval = setInterval(nextSlide, 5000);
            });

            let currentSlide = 0;
            const slides = document.querySelectorAll('.events-carousel .carousel-slide');
            const dots = document.querySelectorAll('.events-carousel .carousel-dot');

            function goToSlide(index) {
                slides[currentSlide].classList.remove('active');
                dots[currentSlide].classList.remove('active');

                currentSlide = (index + slides.length) % slides.length;

                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
                carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            }

            function nextSlide() {
                goToSlide(currentSlide + 1);
            }

            function prevSlide() {
                goToSlide(currentSlide - 1);
            }

            // Initialisation
            goToSlide(0);
        }

        // Annonces horizontales
        function initAnnouncements() {
            const container = document.querySelector('.announcements-scroll');

            announcements.forEach(announcement => {
                const card = document.createElement('a');
                card.className = 'announcement-card';
                card.href = announcement.link;
                card.target = "_blank";
                card.innerHTML = `
                    <div class="announcement-image">
                        <img src="${announcement.image}" alt="${announcement.title}">
                    </div>
                    <div class="announcement-content">
                        <h3>${announcement.title}</h3>
                        <p>${announcement.description}</p>
                    </div>
                `;
                container.appendChild(card);
            });

            // Navigation horizontale
            document.querySelector('.scroll-left').addEventListener('click', () => {
                container.scrollBy({ left: -300, behavior: 'smooth' });
            });

            document.querySelector('.scroll-right').addEventListener('click', () => {
                container.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }

        // Vidéos - MODIFICATION POUR LE DÉFILEMENT HORIZONTAL
        function initVideos() {
            const container = document.getElementById('videosContainer');
            const indicator = document.getElementById('scrollIndicator');
            
            // Création des cartes vidéo
            videos.forEach(video => {
                const card = document.createElement('a');
                card.className = 'video-card';
                card.href = video.link;
                card.target = "_blank";
                card.innerHTML = `
                    <div class="video-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}">
                        <div class="play-btn">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                    <div class="video-info">
                        <h3>${video.title}</h3>
                    </div>
                `;
                container.appendChild(card);
            });

            // Création des indicateurs de défilement
            const dotsCount = Math.ceil(videos.length / 3);
            for (let i = 0; i < dotsCount; i++) {
                const dot = document.createElement('div');
                dot.className = 'scroll-dot';
                if (i === 0) dot.classList.add('active');
                dot.dataset.index = i;
                dot.addEventListener('click', function() {
                    scrollToVideoSection(parseInt(this.dataset.index));
                });
                indicator.appendChild(dot);
            }
        }

        // Système de défilement pour les vidéos
        function initVideoScroll() {
            const container = document.getElementById('videosContainer');
            const scrollLeftBtn = document.getElementById('scrollLeftVideo');
            const scrollRightBtn = document.getElementById('scrollRightVideo');
            const dots = document.querySelectorAll('.scroll-dot');
            
            let currentPosition = 0;
            const cardWidth = 320 + 25; // Largeur de la carte + gap
            const visibleCards = Math.min(3, Math.floor(container.clientWidth / cardWidth));
            const scrollAmount = cardWidth * visibleCards;
            
            // Mise à jour initiale des boutons
            updateScrollButtons();

            // Défilement vers la gauche
            scrollLeftBtn.addEventListener('click', () => {
                currentPosition = Math.max(0, currentPosition - scrollAmount);
                container.scrollTo({
                    left: currentPosition,
                    behavior: 'smooth'
                });
                updateScrollButtons();
                updateActiveDot();
            });

            // Défilement vers la droite
            scrollRightBtn.addEventListener('click', () => {
                const maxScroll = container.scrollWidth - container.clientWidth;
                currentPosition = Math.min(maxScroll, currentPosition + scrollAmount);
                container.scrollTo({
                    left: currentPosition,
                    behavior: 'smooth'
                });
                updateScrollButtons();
                updateActiveDot();
            });

            // Mise à jour automatique lors du défilement tactile
            container.addEventListener('scroll', () => {
                currentPosition = container.scrollLeft;
                updateScrollButtons();
                updateActiveDot();
            });

            // Mise à jour lors du redimensionnement
            window.addEventListener('resize', () => {
                updateScrollButtons();
                updateActiveDot();
            });

            // Fonction pour mettre à jour l'état des boutons
            function updateScrollButtons() {
                const maxScroll = container.scrollWidth - container.clientWidth;
                
                scrollLeftBtn.disabled = currentPosition <= 0;
                scrollRightBtn.disabled = currentPosition >= maxScroll - 5; // Tolérance
                
                if (scrollLeftBtn.disabled) {
                    scrollLeftBtn.style.opacity = "0.5";
                    scrollLeftBtn.style.cursor = "not-allowed";
                } else {
                    scrollLeftBtn.style.opacity = "1";
                    scrollLeftBtn.style.cursor = "pointer";
                }
                
                if (scrollRightBtn.disabled) {
                    scrollRightBtn.style.opacity = "0.5";
                    scrollRightBtn.style.cursor = "not-allowed";
                } else {
                    scrollRightBtn.style.opacity = "1";
                    scrollRightBtn.style.cursor = "pointer";
                }
            }

            // Fonction pour mettre à jour le point actif
            function updateActiveDot() {
                const cardWidth = 320 + 25;
                const currentIndex = Math.round(currentPosition / (cardWidth * 3));
                
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }

            // Fonction pour faire défiler à une section spécifique
            function scrollToVideoSection(index) {
                const cardWidth = 320 + 25;
                currentPosition = index * (cardWidth * 3);
                
                container.scrollTo({
                    left: currentPosition,
                    behavior: 'smooth'
                });
                
                updateScrollButtons();
                
                // Mettre à jour les points actifs
                dots.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
        }

        // Galerie reconstruction
        function initReconstructionGallery() {
            const mainImage = document.querySelector('.main-image');
            const thumbnailsContainer = document.querySelector('.thumbnails-container');

            // Initialisation de la première image
            mainImage.innerHTML = `<img src="${reconstructionImages[0].image}" alt="${reconstructionImages[0].title}">`;

            // Création des miniatures
            reconstructionImages.forEach((img, index) => {
                const thumbnail = document.createElement('div');
                thumbnail.className = 'thumbnail';
                if (index === 0) thumbnail.classList.add('active');
                thumbnail.innerHTML = `<img src="${img.image}" alt="${img.title}">`;

                thumbnail.addEventListener('click', () => {
                    // Mettre à jour l'image principale
                    mainImage.innerHTML = `<img src="${img.image}" alt="${img.title}">`;

                    // Mettre à jour les miniatures actives
                    document.querySelectorAll('.thumbnail').forEach(thumb => {
                        thumb.classList.remove('active');
                    });
                    thumbnail.classList.add('active');
                });

                thumbnailsContainer.appendChild(thumbnail);
            });

            // Défilement automatique des miniatures
            let currentIndex = 0;
            setInterval(() => {
                currentIndex = (currentIndex + 1) % reconstructionImages.length;
                const thumbnails = document.querySelectorAll('.thumbnail');
                thumbnails[currentIndex].click();
            }, 5000);
        }

 //mobile navigation
 function initNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle du menu mobile
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    });

    // Gestion des dropdowns sur mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                const isDropdownLink = e.target.closest('.dropdown-menu a');

                // Si on clique sur un lien dans le sous-menu, on laisse le lien fonctionner normalement
                if (isDropdownLink) return;

                // Sinon, on toggle le menu déroulant
                e.preventDefault();
                dropdown.classList.toggle('open');
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                dropdownMenu.classList.toggle('active');
            }
        });
    });
}

        // Animations au défilement
        function initScrollAnimations() {
            const animateElements = document.querySelectorAll('.animate-on-scroll');

            function checkScroll() {
                animateElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;

                    if (elementTop < windowHeight * 0.85) {
                        element.classList.add('visible');
                    }
                });
            }

            window.addEventListener('scroll', checkScroll);
            window.addEventListener('load', checkScroll);
        }

         // Lancer l'initialisation quand le DOM est prêt
        document.addEventListener('DOMContentLoaded', initSite);