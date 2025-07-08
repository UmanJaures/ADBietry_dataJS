// Données pour le direct 
        const liveData = {
            isLive: true,
            liveUrl: "https://www.youtube.com/embed/l8PMl7tUDIE?si=0e8wV9VD3cKV-G7r",
            title: "Culte du Dimanche",
            subtitle: "En direct chaque dimanche à 8h",
            statusText: "En direct maintenant"
        };

        // Données pour les vidéos précédentes 
        const videosData = [
            {
                id: "video1",
                title: "Culte de Noël - L'espérance est née",
                date: "24 décembre 2023",
                youtubeId: "dQw4w9WgXcQ",
                thumbnail: "https://i.postimg.cc/5yXG0cWb/video1.jpg"
            },
            {
                id: "video2",
                title: "La puissance de la louange",
                date: "17 décembre 2023",
                youtubeId: "dQw4w9WgXcQ",
                thumbnail: "https://i.postimg.cc/cCjHkfGj/video2.jpg"
            },
            {
                id: "video3",
                title: "La grâce qui transforme",
                date: "10 décembre 2023",
                youtubeId: "dQw4w9WgXcQ",
                thumbnail: "https://i.postimg.cc/9fWXyF1T/video3.jpg"
            },
            {
                id: "video4",
                title: "L'amour inconditionnel de Dieu",
                date: "3 décembre 2023",
                youtubeId: "dQw4w9WgXcQ",
                thumbnail: "https://i.postimg.cc/HLqF4n9s/video4.jpg"
            },
            {
                id: "video5",
                title: "La foi qui surmonte les épreuves",
                date: "26 novembre 2023",
                youtubeId: "dQw4w9WgXcQ",
                thumbnail: "https://i.postimg.cc/rmt3c6bY/video5.jpg"
            },
            {
                id: "video6",
                title: "La puissance de la prière",
                date: "19 novembre 2023",
                youtubeId: "dQw4w9WgXcQ",
                thumbnail: "https://i.postimg.cc/7P4yH9hF/video6.jpg"
            },
            {
                id: "video7",
                title: "L'importance de la famille",
                date: "12 novembre 2023",
                youtubeId: "dQw4w9WgXcQ",
                thumbnail: "https://i.postimg.cc/7YdQ9dYc/video7.jpg"
            },
            {
                id: "video8",
                title: "Vivre dans la sainteté",
                date: "5 novembre 2023",
                youtubeId: "dQw4w9WgXcQ",
                thumbnail: "https://i.postimg.cc/ht0dHXJk/video8.jpg"
            },
            {
                id: "video9",
                title: "La puissance du Saint-Esprit",
                date: "29 octobre 2023",
                youtubeId: "dQw4w9WgXcQ",
                thumbnail: "https://i.postimg.cc/7YdQ9dYc/video7.jpg"
            }
        ];

        // Variables pour la gestion des vidéos
        let visibleVideos = 6;
        const videosPerLoad = 3;
        const videosGrid = document.getElementById('videos-grid');
        const seeMoreBtn = document.getElementById('see-more-btn');
        const seeLessBtn = document.getElementById('see-less-btn');

        // Afficher le direct YouTube ou un message par défaut
        function renderLiveContent() {
            const liveContainer = document.getElementById('live-container');
            
            let liveHTML = `
                <div class="live-header">
                    <h2>${liveData.title}</h2>
                    ${liveData.isLive ? `
                        <div class="live-status">
                            <span class="live-indicator"></span>
                            <span>${liveData.statusText}</span>
                        </div>
                    ` : ''}
                </div>
                <div class="live-content">
                    <div class="live-video-container">
            `;
            
            if (liveData.isLive) {
                liveHTML += `
                    <iframe 
                        src="${liveData.liveUrl}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                `;
            } else {
                liveHTML += `
                    <div class="no-live-message">
                        <h3>Aucun direct en cours actuellement</h3>
                        <p>${liveData.subtitle}</p>
                        <a href="#" class="btn">Voir les vidéos précédentes</a>
                    </div>
                `;
            }
            
            liveHTML += `
                    </div>
                </div>
            `;
            
            liveContainer.innerHTML = liveHTML;
        }

        // Générer les cards vidéo
        function renderVideos() {
            videosGrid.innerHTML = '';
            
            videosData.slice(0, visibleVideos).forEach((video, index) => {
                const videoCard = document.createElement('div');
                videoCard.className = 'video-card';
                
                videoCard.innerHTML = `
                    <div class="video-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}">
                        <a href="https://www.youtube.com/watch?v=${video.youtubeId}" class="play-button" target="_blank">
                            <i class="fas fa-play"></i>
                        </a>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">${video.title}</h3>
                        <div class="video-date">
                            <i class="far fa-calendar-alt"></i> ${video.date}
                        </div>
                    </div>
                `;
                
                videosGrid.appendChild(videoCard);
            });
            
            // Gérer l'affichage des boutons
            seeMoreBtn.style.display = visibleVideos < videosData.length ? 'flex' : 'none';
            seeLessBtn.style.display = visibleVideos > videosPerLoad ? 'flex' : 'none';
        }

        // Charger plus de vidéos
        seeMoreBtn.addEventListener('click', () => {
            visibleVideos = Math.min(visibleVideos + videosPerLoad, videosData.length);
            renderVideos();
        });

        // Réduire le nombre de vidéos affichées
        seeLessBtn.addEventListener('click', () => {
            visibleVideos = 6; // Revenir à l'affichage initial
            renderVideos();
            // Scroll vers la section vidéos
            document.querySelector('.videos-section').scrollIntoView({ behavior: 'smooth' });
        });

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
                const toggleLink = dropdown.querySelector('a');
                
                toggleLink.addEventListener('click', (e) => {
                    if (window.innerWidth <= 992) {
                        const href = toggleLink.getAttribute('href');
                        if (href === '#' || href === 'javascript:void(0)') {
                            e.preventDefault();
                            dropdown.classList.toggle('open');
                            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                            dropdownMenu.classList.toggle('active');
                        }
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

        // Initialisation complète du site
        function initSite() {
            // Générer le contenu dynamique
            renderLiveContent();
            renderVideos();
            
            // Initialiser les fonctionnalités
            initMobileMenu();
            initHeaderScroll();
        }

        // Lancer l'initialisation quand le DOM est prêt
        document.addEventListener('DOMContentLoaded', initSite);