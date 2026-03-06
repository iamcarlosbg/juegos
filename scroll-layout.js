/* ═══ SCROLL-SNAP LAYOUT JS ═══ */
(function() {
    // Activate snap on html
    document.documentElement.classList.add('has-snap');

    // Scroll indicator → jump to SEO
    var ind = document.querySelector('.scroll-indicator');
    if (ind) {
        ind.addEventListener('click', function() {
            var seo = document.getElementById('seo-content');
            if (seo) seo.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Back-to-top button
    var btn = document.getElementById('back-to-top');
    if (btn) {
        var hero = document.querySelector('.snap-hero') || document.querySelector('.materias-hero');
        window.addEventListener('scroll', function() {
            var threshold = hero ? hero.offsetHeight * 0.5 : 400;
            if (window.scrollY > threshold) {
                btn.classList.add('visible');
                if (ind) ind.style.opacity = '0';
            } else {
                btn.classList.remove('visible');
                if (ind) ind.style.opacity = '1';
            }
        });
        btn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Set footer year
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
})();
