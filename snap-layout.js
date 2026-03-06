/**
 * Snap Layout System for Aprende y Juega
 * Provides full-screen hero + scrollable SEO content with snap behavior
 * 
 * SEO-safe: No content is hidden. All content remains in the DOM.
 * AdSense-safe: No cloaking, no display:none. Standard scroll behavior.
 */
(function() {
    'use strict';

    // ── Inject CSS ──
    var style = document.createElement('style');
    style.textContent = `
        /* ═══ SNAP LAYOUT SYSTEM ═══ */
        
        /* Main scroll container */
        html.snap-enabled {
            scroll-snap-type: y proximity;
            scroll-behavior: smooth;
        }

        /* Hero section: full viewport, centered content */
        .snap-hero {
            min-height: 100vh;
            min-height: 100dvh; /* Dynamic viewport height for mobile */
            scroll-snap-align: start;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            padding: 1rem;
            box-sizing: border-box;
        }

        .snap-hero > .snap-hero-inner {
            width: 100%;
            max-width: 72rem; /* max-w-6xl */
        }

        /* SEO section: natural flow, snap start */
        .snap-seo {
            scroll-snap-align: start;
            position: relative;
        }

        /* Scroll indicator arrow */
        .snap-scroll-hint {
            position: absolute;
            bottom: 1.5rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            cursor: pointer;
            z-index: 20;
            opacity: 0.7;
            transition: opacity 0.3s ease;
        }
        .snap-scroll-hint:hover {
            opacity: 1;
        }
        .snap-scroll-hint span {
            font-size: 0.75rem;
            color: rgba(255,255,255,0.85);
            font-weight: 600;
            text-shadow: 0 1px 3px rgba(0,0,0,0.3);
            letter-spacing: 0.05em;
        }
        .snap-scroll-hint svg {
            width: 2rem;
            height: 2rem;
            fill: none;
            stroke: rgba(255,255,255,0.9);
            stroke-width: 2.5;
            stroke-linecap: round;
            stroke-linejoin: round;
            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
            animation: snap-bounce 2s ease-in-out infinite;
        }

        @keyframes snap-bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(8px); }
            60% { transform: translateY(4px); }
        }

        /* Hide hint once user scrolls past hero */
        .snap-scroll-hint.hidden {
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease;
        }

        /* ── Back to top floating button (visible in SEO section) ── */
        .snap-back-top {
            position: fixed;
            bottom: 1.5rem;
            right: 1.5rem;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: rgba(147, 51, 234, 0.9); /* purple-600 */
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.25);
            cursor: pointer;
            z-index: 50;
            opacity: 0;
            transform: scale(0.8);
            transition: opacity 0.3s ease, transform 0.3s ease;
            pointer-events: none;
            border: none;
            line-height: 1;
        }
        .snap-back-top.visible {
            opacity: 1;
            transform: scale(1);
            pointer-events: auto;
        }
        .snap-back-top:hover {
            background: rgba(126, 34, 206, 0.95); /* purple-700 */
            transform: scale(1.1);
        }

        /* ── Divider between hero and SEO ── */
        .snap-divider {
            width: 100%;
            padding: 0.75rem 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .snap-divider::before,
        .snap-divider::after {
            content: '';
            flex: 1;
            max-width: 6rem;
            height: 2px;
            background: rgba(255,255,255,0.3);
            border-radius: 1px;
        }
        .snap-divider-icon {
            margin: 0 1rem;
            font-size: 1.25rem;
            opacity: 0.6;
        }

        /* ── Mobile adjustments ── */
        @media (max-width: 768px) {
            .snap-hero {
                padding: 0.75rem;
                padding-bottom: 3.5rem; /* Room for scroll hint */
            }
            .snap-scroll-hint {
                bottom: 1rem;
            }
            .snap-back-top {
                bottom: 1rem;
                right: 1rem;
                width: 2.5rem;
                height: 2.5rem;
                font-size: 1.25rem;
            }
        }

        /* ── Ensure hero content scales down on small viewports ── */
        @media (max-height: 600px) {
            .snap-hero {
                padding-top: 0.5rem;
                padding-bottom: 3rem;
            }
            .snap-hero h1 { font-size: 2rem !important; }
            .snap-hero h2 { font-size: 1.5rem !important; }
        }
    `;
    document.head.appendChild(style);

    // ── Enable snap on html ──
    document.documentElement.classList.add('snap-enabled');

    // ── Create scroll indicator ──
    function createScrollHint() {
        var hero = document.querySelector('.snap-hero');
        if (!hero) return null;

        var hint = document.createElement('div');
        hint.className = 'snap-scroll-hint';
        hint.innerHTML = '<span>Más info</span><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>';
        hint.setAttribute('aria-label', 'Desplazar hacia abajo para ver más contenido');
        hint.setAttribute('role', 'button');
        hint.setAttribute('tabindex', '0');
        hero.appendChild(hint);

        hint.addEventListener('click', function() {
            var seo = document.querySelector('.snap-seo');
            if (seo) {
                seo.scrollIntoView({ behavior: 'smooth' });
            }
        });

        return hint;
    }

    // ── Create back-to-top button ──
    function createBackTop() {
        var btn = document.createElement('button');
        btn.className = 'snap-back-top';
        btn.innerHTML = '🎮';
        btn.setAttribute('aria-label', 'Volver a los juegos');
        btn.setAttribute('title', 'Volver arriba');
        document.body.appendChild(btn);

        btn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        return btn;
    }

    // ── Scroll observer ──
    function setupScrollObserver(hint, backBtn) {
        var hero = document.querySelector('.snap-hero');
        if (!hero) return;

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (hint) {
                    if (entry.isIntersecting) {
                        hint.classList.remove('hidden');
                    } else {
                        hint.classList.add('hidden');
                    }
                }
                if (backBtn) {
                    if (entry.isIntersecting) {
                        backBtn.classList.remove('visible');
                    } else {
                        backBtn.classList.add('visible');
                    }
                }
            });
        }, { threshold: 0.3 });

        observer.observe(hero);
    }

    // ── Init on DOM ready ──
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        var hint = createScrollHint();
        var backBtn = createBackTop();
        setupScrollObserver(hint, backBtn);
    }
})();
