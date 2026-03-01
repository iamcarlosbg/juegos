/* ═══════════════════════════════════════════════
   SCROLL-SNAP LAYOUT JS — Aprende y Juega
   Handles: scroll indicator, back-to-top button, snap activation
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ── Enable snap on html ──
    document.documentElement.classList.add('has-snap');
    
    // ── Scroll Indicator (click to go to SEO section) ──
    var indicator = document.querySelector('.scroll-indicator');
    var seoSection = document.getElementById('seo-content');
    
    if (indicator && seoSection) {
        indicator.addEventListener('click', function() {
            seoSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // ── Back to Top Button ──
    var backBtn = document.getElementById('back-to-top');
    var heroSection = document.querySelector('.snap-hero');
    
    if (backBtn && heroSection) {
        // Show/hide based on scroll position
        var heroHeight = heroSection.offsetHeight;
        var ticking = false;
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    if (window.scrollY > heroHeight * 0.5) {
                        backBtn.classList.add('visible');
                    } else {
                        backBtn.classList.remove('visible');
                    }
                    
                    // Hide scroll indicator when past hero
                    if (indicator) {
                        if (window.scrollY > heroHeight * 0.3) {
                            indicator.style.opacity = '0';
                            indicator.style.pointerEvents = 'none';
                        } else {
                            indicator.style.opacity = '';
                            indicator.style.pointerEvents = '';
                        }
                    }
                    
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
        
        backBtn.addEventListener('click', function() {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // ── Set current year in footer ──
    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
