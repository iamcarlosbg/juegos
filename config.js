// config.js - Configuración global del sitio
const SITE_CONFIG = {
  // Redes Sociales - Cambiar a true/false para mostrar/ocultar
  socialMedia: {
    instagram: {
      enabled: false, // Cambiar a true para mostrar
      url: "https://instagram.com/@iamcarlosbg"
    },
    facebook: {
      enabled: false, // Cambiar a true para mostrar
      url: "https://www.facebook.com/CuentosHermanosRomero/"
    },
    youtube: {
      enabled: false, // Cambiar a true para mostrar
      url: "https://youtube.com/@trioromero"
    },
    amazon: {
      enabled: true, // ✅ Activo por defecto
      url: "https://www.amazon.es/dp/B0DRZ41G82?binding=paperback&qid=1769810121&sr=8-1&ref=dbs_dp_awt_sb_pc_tpbk&fbclid=IwRlRTSAPqCCVleHRuA2FlbQIxMABzcnRjBmFwcF9pZAo2NjI4NTY4Mzc5AAEej4EFlLIjuKqPAJe0-WhODbLGRXWubmxq2EvwEz_IfWM5wkRjCw6PaLUyeMI_aem_T2WhhpSpVWm-tlm0JztS-A"
    }
  },
  
  // Features del sitio
  features: {
    ranking: true, // Sistema de ranking global
    firebase: true // Usar Firebase para rankings
  }
};

// Inicializar redes sociales automáticamente
document.addEventListener('DOMContentLoaded', function() {
  initSocialMedia();
});

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
      if (config.enabled && config.url) {
        element.href = config.url;
        element.style.display = ''; // Mostrar
      } else {
        element.style.display = 'none'; // Ocultar
      }
    }
  });
}
