// config.js - Configuración global del sitio
// ============================================
// IMPORTANTE: Este archivo controla TODAS las páginas
// Cambios aquí se aplican automáticamente a todo el sitio
// ============================================

const SITE_CONFIG = {
  // ===== REDES SOCIALES =====
  // Cambiar enabled: false/true para mostrar/ocultar
  // Cambiar url: para actualizar el enlace en TODAS las páginas
  socialMedia: {
    instagram: {
      enabled: false,  // ← Cambiar a true para mostrar en TODAS las páginas
      url: "https://instagram.com/@iamcarlosbg"  // ← Tu URL aquí
    },
    facebook: {
      enabled: false,  // ← Cambiar a true para mostrar en TODAS las páginas
      url: "https://www.facebook.com/CuentosHermanosRomero/"  // ← Tu URL aquí
    },
    youtube: {
      enabled: false,  // ← Cambiar a true para mostrar en TODAS las páginas
      url: "https://youtube.com/@trioromero"  // ← Tu URL aquí
    },
    amazon: {
      enabled: true,   // ✅ Activo - se muestra en TODAS las páginas
      url: "https://www.amazon.es/dp/B0DRZ41G82"  // ← Tu URL aquí
    }
  },
  
  // ===== CONFIGURACIÓN DEL SITIO =====
  site: {
    name: "Aprende y Juega",
    year: new Date().getFullYear()
  },
  
  // ===== FEATURES =====
  features: {
    ranking: true,    // Sistema de ranking global
    firebase: true    // Usar Firebase para rankings
  }
};

// ===== INICIALIZACIÓN AUTOMÁTICA =====
// Este código se ejecuta en TODAS las páginas
document.addEventListener('DOMContentLoaded', function() {
  initSocialMedia();
  updateYear();
});

// Configurar enlaces de redes sociales
function initSocialMedia() {
  const socialLinks = {
    'link-instagram': SITE_CONFIG.socialMedia.instagram,
    'link-facebook': SITE_CONFIG.socialMedia.facebook,
    'link-youtube': SITE_CONFIG.socialMedia.youtube,
    'link-amazon': SITE_CONFIG.socialMedia.amazon
  };
  
  Object.keys(socialLinks).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      const config = socialLinks[id];
      if (config && config.enabled && config.url) {
        element.href = config.url;
        element.style.display = '';
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
      } else {
        element.style.display = 'none';
      }
    }
  });
}

// Actualizar año en footer automáticamente
function updateYear() {
  const yearElements = document.querySelectorAll('#year, .current-year');
  yearElements.forEach(el => {
    el.textContent = SITE_CONFIG.site.year;
  });
}

// Log de configuración (solo para debug)
console.log('✅ config.js cargado - Configuración aplicada a todas las páginas');
