class Page {
    constructor() {
        this.currentLang = 'fr';
        this.init();
    }

    translations = {
        fr: {
            name: "collinedasie",
            // page [global]
            "restaurant-name":"Colline D'Asie",
            // nav bar 
            "nav-menudelsarte": "Menu Del Sarte", 
            "nav-menuclignancourt":"Menu Clignancourt",
            "nav-contact":"Contact",
            "nav-about":"A Propos",
            "nav-CallNow":" Changer de Langue: ",
            // nav icon
            "nav-language":"Langue",
            
            // main [page]
            // page 1
            "hero-title1":"Restaurant asiatique raffiné",
            "hero-description1":"Des saveurs authentiques dans un cadre moderne et chaleureux",
            "hero-button1":"Découvrir le menu",
            //page2
            "hero-title2":"Votre petit-déjeuner parfait",
            "hero-description2":"La meilleure qualité culinaire est aussi ici !",
            "hero-button2":"Voir le menu",
            //page3
            "hero-title3":"Nouveau restaurant en ville",
            "hero-description3":"Profitez de nos menus spéciaux chaque dimanche et vendredi",
            "hero-button3":"Réservation",
            
            // Localisation
            "map-title":"OÙ SOMMES-NOUS",
            "map-description":"Venez nous rendre visite dans l'un de nos deux restaurants Colline d'Asie à Paris.",
            
            // REVIEW
            "review-title":"Avis clients",
            "review-description1":"“J’adore cette adresse ! Peu fréquentée par les touristes, elle permet d’un peu souffler quand on habite à Montmartre en période estivale. Le service est parfait, la nourriture est délicieuse, et l’ambiance est vraiment agréable.”",
            "review-description2":"“Un lieu charmant à Montmartre — une cuisine délicieuse, un service chaleureux et un excellent rapport qualité-prix.”",
            "review-description3":"“Excellentes saveurs vietnamiennes, service rapide et ambiance détendue. Parfait pour un déjeuner ou un dîner à Paris.”",
            "review-description4":"“Un des meilleurs repas à Paris. Frais, savoureux, et l'équipe vous accueille comme chez vous.”",
            "review-description5":"“Des plats magnifiquement préparés, une équipe très sympathique et un cadre agréable loin de la foule de touristes.”",
            "review-description6":"“Un trésor caché pour tous ceux qui cherchent des saveurs asiatiques authentiques à Paris. Très bon service et atmosphère agréable.”",
            
            // contact [footer]
            "footer-googlemaps":"Ouvrir dans Google Maps",
            "footer-orderonline":"Commander en ligne",
            "contact-title":"Contact",
            "contact-description":"Contactez-nous pour en savoir plus sur nos restaurants, nos spécialités ou vos commandes à emporter.",
           
            // about [page]
            "about-title":"A PROPOS",
            "about-description":"Colline d’Asie est une maison familiale parisienne qui célèbre la cuisine vietnamienne et cambodgienne à travers des recettes authentiques transmises au fil des générations. Depuis ses débuts, l’enseigne partage une cuisine généreuse, faite maison et inspirée des traditions du Sud-Est asiatique, entre grands classiques incontournables et spécialités plus confidentielles. À travers ses deux adresses situées au cœur de Montmartre, Colline d’Asie propose deux expériences différentes mais complémentaires : une adresse traditionnelle où retrouver les grands classiques de la cuisine vietnamienne et khmère, et un lieu plus moderne pensé pour une pause gourmande autour des spécialités asiatiques.",
            "about-description-delsarte":"Situé au 21 rue André del Sarte, Colline d’Asie –   Del Sarte est l’adresse historique de la maison. Ce restaurant à table propose une cuisine vietnamienne et khmère authentique, dans une ambiance chaleureuse et conviviale. La carte met à l’honneur les grands classiques du Sud-Est asiatique comme le bo bun, le pho, le curry khmer ou encore le khor ko. Apprécié pour ses recettes familiales, ses portions généreuses et son authenticité, c’est une adresse où découvrir les saveurs traditionnelles de la maison.",
            "about-description-clignancourt":"Située au 18 rue de Clignancourt, Colline d’Asie – Clignancourt propose une approche plus moderne de la cuisine asiatique. Dans un esprit cantine urbaine et coffee-shop, l’adresse met à l’honneur les spécialités de rue comme les banh mi, les baos, les soupes et les bobuns, accompagnées de desserts maison et de boissons originales. Plus décontractée et contemporaine, cette adresse permet de retrouver l’univers familial de Colline d’Asie dans un format différent, adapté aux pauses gourmandes du quotidien.",
            "about-button-menu":"Menu en ligne",

            // menu delsarte [page]
            "menudel-title":"menudel-title",
            "menudel-description":"menudel-description",
            // menu clignancout [page]
            "menucli-title":"menucli-title",
            "menucli-description":"menucli-description"
        },
        en: {
            name: "collinedasie",

            // page [global]
            "restaurant-name":"Colline D'Asie",

            // nav bar
            "nav-menudelsarte": "Menu Del Sarte",
            "nav-menuclignancourt":"Menu Clignancourt",
            "nav-contact":"Contact",
            "nav-about":"About",
            "nav-CallNow":" Change Languages: ",

            // nav icon
            "nav-language":"Language",

            // main [page]
            // page 1
            "hero-title1":"Fine Asian Dining",
            "hero-description1":"Authentic flavors in a warm, modern setting",
            "hero-button1":"Explore our menu",

            // page 2
            "hero-title2":"Your Perfect Breakfast",
            "hero-description2":"The best culinary quality is here too!",
            "hero-button2":"Discover menu",

            // page 3
            "hero-title3":"New Restaurant in Town",
            "hero-description3":"Enjoy our special menus every Sunday and Friday",
            "hero-button3":"Reservation",

            // Localisation
            "map-title":"WHERE ARE WE",
            "map-description":"Visit us at one of our two Colline D'Asie restaurants in Paris.",

            // REVIEW
            "review-title":"Testimonials",
            "review-description1":"“I love this place! It is less crowded by tourists, which makes it a great spot to relax when staying in Montmartre during summer. The service is perfect, the food is delicious, and the atmosphere is very pleasant.”",
            "review-description2":"“A truly lovely spot in Montmartre — delicious food, warm service, and very good value for money.”",
            "review-description3":"“Excellent Vietnamese flavors, fast service, and a relaxed atmosphere. Perfect for a casual lunch or dinner in Paris.”",
            "review-description4":"“One of the best-value meals I’ve had in Paris. Fresh, flavorful, and the staff makes you feel genuinely welcome.”",
            "review-description5":"“Beautifully prepared dishes, a very friendly team, and a comfortable place to enjoy a relaxed meal away from the tourist crowds.”",
            "review-description6":"“A hidden gem for anyone looking for authentic Asian flavors in Paris. Great food, great service, and a very pleasant atmosphere.”",

            // contact [footer]
            "footer-googlemaps":"Open in Google Maps",
            "footer-orderonline":"Order online",
            "contact-title":"Contact",
            "contact-description":"Contact us to learn more about our restaurants, specialties, or take-away orders.",

            // about [page]
            "about-title":"ABOUT US",
            "about-description":"Colline D'Asie is a Parisian family restaurant celebrating Vietnamese and Cambodian cuisine through authentic recipes passed down through generations. Since its beginnings, the brand has shared generous homemade dishes inspired by Southeast Asian traditions, blending classic favorites with lesser-known specialties. With its two Montmartre locations, Colline D'Asie offers two complementary experiences: a traditional dining room for Vietnamese and Khmer classics, and a more modern spot designed for a quick gourmet break with Asian specialties.",
            "about-description-delsarte":"Located at 21 rue André del Sarte, Colline D'Asie – Del Sarte is the house’s historic address. This sit-down restaurant serves authentic Vietnamese and Khmer cuisine in a warm, welcoming atmosphere. The menu highlights Southeast Asian classics like bo bun, pho, Khmer curry, and khor ko. Known for its family recipes, generous portions, and authenticity, it is a place to discover the traditional flavors of the house.",
            "about-description-clignancourt":"Situated at 18 rue de Clignancourt, Colline D'Asie – Clignancourt offers a more modern take on Asian cuisine. In an urban canteen and coffee-shop atmosphere, the restaurant showcases street food favorites like banh mi, baos, soups, and bobuns, accompanied by homemade desserts and original drinks. More relaxed and contemporary, this location brings the family spirit of Colline D'Asie to a different format, perfect for everyday gourmet breaks.",
            "about-button-menu":"Explore Our Menu",

            // menu delsarte [page]
            "menudel-title":"menudel-title",
            "menudel-description":"menudel-description",

            // menu clignancourt [page]
            "menucli-title":"menucli-title",
            "menucli-description":"menucli-description"
        }
    };

    init() {
        this.setupLanguage();
        // this.setupScrollAnimations();
        // this.setupSmoothScrolling();
        // this.setupEventListeners();
        this.loadPreferences();
    }

    setupLanguage() {
        this.setLang(this.currentLang);
    }

    setLang(lang) {
        this.currentLang = lang;
        
        for (const key in this.translations[lang]) {
            const elementById = document.getElementById(key);
            if (elementById) {
                elementById.textContent = this.translations[lang][key];
            }

            document.querySelectorAll(`[data-translate="${key}"]`).forEach(el => {
                el.textContent = this.translations[lang][key];
            });
        }
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        document.documentElement.lang = lang;
        
        localStorage.setItem('language', lang);
    }

    //setLang(lang) {
    //    this.currentLang = lang;
    //    
    //    for (const key in this.translations[lang]) {
    //        const element = document.getElementById(key);
    //        if (element) {
    //            element.textContent = this.translations[lang][key];
    //        }
    //    }
    //    
    //    document.querySelectorAll('.lang-btn').forEach(btn => {
    //        btn.classList.toggle('active', btn.dataset.lang === lang);
    //    });
    //    
    //    document.documentElement.lang = lang;
    //    
    //    localStorage.setItem('language', lang);
    //}

    // setupScrollAnimations() {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('animated');
    //             }
    //         });
    //     }, {
    //         threshold: 0.1,
    //         rootMargin: '0px 0px -50px 0px'
    //     });

    //     document.querySelectorAll('section, .project-card, .skill-category').forEach(el => {
    //         el.classList.add('animate-on-scroll');
    //         observer.observe(el);
    //     });
    // }

    // setupSmoothScrolling() {
    //     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //         anchor.addEventListener('click', (e) => {
    //             e.preventDefault();
    //             const target = document.querySelector(anchor.getAttribute('href'));
    //             if (target) {
    //                 const navbarHeight = document.querySelector('.navbar').offsetHeight;
    //                 const targetPosition = target.offsetTop - navbarHeight - 20;
                    
    //                 window.scrollTo({
    //                     top: targetPosition,
    //                     behavior: 'smooth'
    //                 });
    //             }
    //         });
    //     });
    // }

    // setupEventListeners() {
    //     let lastScrollTop = 0;
    //     const navbar = document.querySelector('.navbar');
        
    //     window.addEventListener('scroll', () => {
    //         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
    //         if (scrollTop > 100) {
    //             navbar.style.background = 'rgba(var(--bg-primary-rgb, 255, 255, 255), 0.95)';
    //             navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    //         } else {
    //             navbar.style.background = 'var(--bg-primary)';
    //             navbar.style.boxShadow = 'none';
    //         }
            
    //         lastScrollTop = scrollTop;
    //     });

    //     document.addEventListener('keydown', (e) => {
    //         if (e.key === 'Escape') {
    //             this.closeAllModals();
    //         }
    //     });
    // }

    // closeAllModals() {
    //     console.log('Closing all modals');
    // }

    loadPreferences() {
        const savedLang = localStorage.getItem('language') || 'fr';
        
        this.currentLang = savedLang;
        
        this.setLang(this.currentLang);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.page = new Page();
});

function setLang(lang) {
    if (window.page) {
        window.page.setLang(lang);
    }
}

if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        const criticalImages = document.querySelectorAll('img[loading="lazy"]');
        criticalImages.forEach(img => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        img.src = img.dataset.src || img.src;
                        observer.unobserve(img);
                    }
                });
            });
            observer.observe(img);
        });
    });
}
