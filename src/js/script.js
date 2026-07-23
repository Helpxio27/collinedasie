class Page {
    constructor() {
        this.currentLang = 'fr';
        this.init();
    }

    translations = {
        fr: {
            name: "collinedasie",
            "nav-about": "A propos", 
            "nav-team":"Notre équipe",
            "nav-menu":"Nos menus",
            "nav-CallNow":"Appellez Ici! (+33) 01 46 06 92 45",
            "nav-language":"Langage"
        },
        en: {
            name: "collinedasie",
            "nav-about": "About",
            "nav-team":"Meet our chefs",
            "nav-menu":"Our menus",
            "nav-CallNow":"Call Now! (+33) 01 46 06 92 45",
            "nav-language":"Language"
            // hero carousel 
            "hero-title1":
            "hero-description1":
            "hero-button1":
            "hero-title2":
            "hero-description2":
            "hero-button2":
            "hero-title3":
            "hero-description3":
            "hero-button3":
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
            const element = document.getElementById(key);
            if (element) {
                element.textContent = this.translations[lang][key];
            }
        }
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        document.documentElement.lang = lang;
        
        localStorage.setItem('language', lang);
    }

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
