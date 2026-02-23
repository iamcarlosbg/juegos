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
    facebook: { enabled: true, url: 'https://www.facebook.com/Aprendejuega/' },
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
  // ┌─────────────────────────────────────────────────────────────┐
  // │  SISTEMA DE FEATURE FLAGS — Control central V2              │
  // │                                                             │
  // │  Cada flag se puede activar/desactivar independientemente.  │
  // │  También se puede forzar por URL para testing:              │
  // │    ?ff_newIndex=true                                        │
  // │    ?ff_multiplayer=true                                     │
  // │    ?ff_classMode=true                                       │
  // │                                                             │
  // │  INSTRUCCIONES DE ACTIVACIÓN PROGRESIVA:                    │
  // │  ─────────────────────────────────────────                  │
  // │  Fase actual → Todo false (desarrollo)                      │
  // │  Fase alpha  → Probar /modo-juego.html manualmente          │
  // │  Fase beta   → multiplayer: true, classMode: true           │
  // │  Fase launch → newIndex: true (cambia la home principal)    │
  // └─────────────────────────────────────────────────────────────┘
  features: {
    ranking: true,          // Sistema de ranking global (existente)
    firebase: true,         // Usar Firebase para rankings (existente)
    
    // ─── Nuevos flags V2 ─────────────────────────
    newIndex: false,        // true = la home redirige al nuevo index con 3 modos
    multiplayer: true,     // true = activa modo multijugador aleatorio
    classMode: true,       // true = activa modo clase / aulas
    realtimeSync: false,    // true = sincronización Firebase RTDB (se activa con multiplayer o classMode)
    
    // ─── Desarrollo ──────────────────────────────
    debugMode: false,       // true = logs extra en consola
    showDevBanner: false    // true = muestra banner "VERSIÓN BETA" en modos nuevos
  },
  
  // ===== COMPARTIR EN REDES SOCIALES =====
  // Configurar qué botones aparecen cuando se termina un juego
  shareButtons: {
    enabled: true,  // Mostrar botones de compartir en Game Over
    networks: {
      whatsapp: {
        enabled: true,
        message: "🎮 ¡Acabo de conseguir {score} puntos en {game}! 🏆\n\n¿Crees que puedes superarme? ¡Acepta el reto! 👇\n{url}"
      },
      facebook: { enabled: true, url: 'https://www.facebook.com/Aprendejuega/' },
      twitter: {
        enabled: true,
        message: "🎮 {score} puntos en {game}! 🔥\n\n¿Puedes superar mi puntuación? ¡Demuéstralo! 💪"
      },
      telegram: {
        enabled: true,
        message: "🏆 ¡{score} puntos en {game}!\n\n¿Aceptas el desafío? ¡Juega ahora! 🎯"
      }
    },
    copyLink: {
      enabled: true  // Botón "Copiar enlace"
    },
    challenge: {
      enabled: true,  // Botón "Retar amigo"
      message: "🎯 TE RETO A SUPERAR MI PUNTUACIÓN 🎯\n\nAcabo de hacer {score} puntos en {game} (nivel {level})\n\n¿Crees que puedes hacerlo mejor?\n\n¡Juega aquí! 👇\n{url}\n\n¡Que gane el mejor! 🏆"
    }
  },
  
  // ===== CONFIGURACIÓN DE JUEGOS =====
  games: {
    // Configuración global para todos los juegos
    showDescription: false,      // Mostrar descripción del juego
    showHowToPlay: false,        // Mostrar "Cómo jugar"
    showTopScores: false,        // Mostrar Top 10 por nivel
    
    // Configuración específica por juego (sobreescribe la global)
    'jerarquia-operaciones': {
      showDescription: true,
      showHowToPlay: true,
      showTopScores: true,
      description: "Aprende y practica la jerarquía de operaciones matemáticas. Primero se multiplica, después se suma. ¡Resuelve las operaciones correctamente y consigue la mejor puntuación!",
      howToPlay: [
        "Selecciona tu nivel de dificultad",
        "Resuelve las operaciones siguiendo el orden correcto",
        "Primero multiplica, después suma o resta",
        "Tienes 30 segundos por operación",
        "¡Gana puntos extra por velocidad!"
      ]
    },
    
    'invasores-matematicos': {
      showDescription: true,
      showHowToPlay: true,
      showTopScores: true,
      description: "Defiende la Tierra de los invasores matemáticos. Resuelve operaciones rápidamente para destruir a los enemigos antes de que lleguen abajo. ¡Pon a prueba tu rapidez mental!",
      howToPlay: [
        "Elige el tipo de operación que quieres practicar",
        "Resuelve la operación mostrada en pantalla",
        "Haz click en la respuesta correcta para destruir al invasor",
        "No dejes que lleguen abajo o perderás vidas",
        "Consigue la mayor puntuación posible"
      ]
    },
    
    'completa-numero': {
      showDescription: true,
      showHowToPlay: true,
      showTopScores: true,
      description: "Encuentra el número que falta en las secuencias. Desarrolla tu lógica matemática identificando patrones y completando las series numéricas correctamente.",
      howToPlay: [
        "Observa la secuencia de números",
        "Identifica el patrón",
        "Escribe el número que falta",
        "Presiona Enter o click en Verificar",
        "Consigue puntos por cada respuesta correcta"
      ]
    },
    
    'mayor-menor': {
      showDescription: true,
      showHowToPlay: true,
      showTopScores: true,
      description: "Compara números y operaciones matemáticas rápidamente. Elige si el número o resultado de la izquierda es mayor, menor o igual al de la derecha. ¡La velocidad es clave!",
      howToPlay: [
        "Se mostrarán dos números u operaciones",
        "Click en < si el de la izquierda es menor",
        "Click en > si el de la izquierda es mayor",
        "Click en = si son iguales",
        "¡Sé rápido! El tiempo cuenta"
      ]
    },
    
    'sopa-letras': {
      showDescription: true,
      showHowToPlay: true,
      showTopScores: true,
      description: "Encuentra las palabras escondidas en la sopa de letras. Mejora tu vocabulario y concentración buscando palabras en todas direcciones: horizontal, vertical y diagonal.",
      howToPlay: [
        "Elige un tema y nivel de dificultad",
        "Busca las palabras de la lista",
        "Click y arrastra para seleccionar",
        "Las palabras pueden estar en cualquier dirección",
        "Encuentra todas para completar el nivel"
      ]
    },
    
    'seguir-patrones': {
      showDescription: true,
      showHowToPlay: true,
      showTopScores: true,
      description: "Desarrolla tu memoria visual y lógica siguiendo y repitiendo patrones de colores. Los patrones se vuelven cada vez más complejos. ¿Hasta dónde puedes llegar?",
      howToPlay: [
        "Observa atentamente el patrón que se muestra",
        "Memoriza la secuencia de colores",
        "Repite el patrón haciendo click en el orden correcto",
        "Cada nivel añade más elementos al patrón",
        "¡No te equivoques o tendrás que empezar de nuevo!"
      ]
    },
    
    'completa-letra': {
      showDescription: true,
      showHowToPlay: true,
      showTopScores: true,
      description: "Completa las palabras añadiendo la letra que falta. Perfecto para mejorar la ortografía y ampliar el vocabulario de forma divertida y educativa.",
      howToPlay: [
        "Lee la palabra incompleta",
        "Identifica qué letra falta",
        "Escribe la letra correcta",
        "Gana puntos por cada acierto",
        "Aprende nuevas palabras mientras juegas"
      ]
    },
    
    'practica-escritura': {
      showDescription: true,
      showHowToPlay: true,
      showTopScores: true,
      description: "Mejora tu velocidad de escritura y ortografía escribiendo frases correctamente. Practica mecanografía mientras aprendes nuevas palabras y expresiones.",
      howToPlay: [
        "Lee la frase que aparece en pantalla",
        "Escríbela exactamente igual",
        "Presta atención a mayúsculas y puntuación",
        "Intenta escribir cada vez más rápido",
        "Consigue puntos por precisión y velocidad"
      ]
    }
  }
};

// ===== FEATURE FLAGS — FUNCIONES HELPER =====

/**
 * Comprobar si una feature está activa
 * @param {string} featureName - Nombre del flag (ej: 'multiplayer', 'classMode', 'newIndex')
 * @returns {boolean}
 */
function isFeatureEnabled(featureName) {
  return SITE_CONFIG.features[featureName] === true;
}

/**
 * Aplicar overrides de URL para testing
 * Permite activar features temporalmente vía URL:
 *   ?ff_newIndex=true
 *   ?ff_multiplayer=true
 *   ?ff_classMode=true
 *   ?ff_debugMode=true
 * 
 * SOLO para testing — los cambios NO persisten
 */
function applyFeatureFlagOverrides() {
  var params = new URLSearchParams(window.location.search);
  params.forEach(function(value, key) {
    if (key.startsWith('ff_')) {
      var flagName = key.replace('ff_', '');
      if (flagName in SITE_CONFIG.features) {
        SITE_CONFIG.features[flagName] = (value === 'true');
        if (SITE_CONFIG.features.debugMode) {
          console.log('[FeatureFlag] Override: ' + flagName + ' = ' + value);
        }
      }
    }
  });
}

// Aplicar overrides INMEDIATAMENTE (antes del DOMContentLoaded)
applyFeatureFlagOverrides();


// ===== INICIALIZACIÓN AUTOMÁTICA =====
// Este código se ejecuta en TODAS las páginas
document.addEventListener('DOMContentLoaded', function() {
  initSocialMedia();
  updateYear();
  
  // Log de features activas (si debugMode está activo)
  if (SITE_CONFIG.features.debugMode) {
    console.log('🚩 Feature Flags:', JSON.stringify(SITE_CONFIG.features, null, 2));
  }
});

// Configurar enlaces de redes sociales
function initSocialMedia() {
  var socialLinks = {
    'link-instagram': SITE_CONFIG.socialMedia.instagram,
    'link-facebook': SITE_CONFIG.socialMedia.facebook,
    'link-youtube': SITE_CONFIG.socialMedia.youtube,
    'link-amazon': SITE_CONFIG.socialMedia.amazon
  };
  
  Object.keys(socialLinks).forEach(function(id) {
    var element = document.getElementById(id);
    if (element) {
      var config = socialLinks[id];
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
  injectFooterSocials();
}

function injectFooterSocials() {
  var container = document.querySelector('footer .flex.justify-center');
  if (!container) return;
  var icons = {
    facebook: { enabled: true, url: 'https://www.facebook.com/Aprendejuega/' },
    instagram: { svg: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>', title: 'Instagram' },
    youtube: { svg: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>', title: 'YouTube' }
  };
  Object.keys(icons).forEach(function(key) {
    var cfg = SITE_CONFIG.socialMedia[key];
    var existing = document.getElementById('link-' + key);
    if (cfg && cfg.enabled && cfg.url && !existing) {
      var a = document.createElement('a');
      a.id = 'link-' + key;
      a.href = cfg.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.className = 'hover:scale-110 transform transition';
      a.title = icons[key].title;
      a.innerHTML = icons[key].svg;
      container.insertBefore(a, container.firstChild);
    }
  });
}

// Actualizar año en footer automáticamente
function updateYear() {
  var yearElements = document.querySelectorAll('#year, .current-year');
  yearElements.forEach(function(el) {
    el.textContent = SITE_CONFIG.site.year;
  });
}

// Obtener configuración de un juego específico
function getGameConfig(gameName) {
  var globalConfig = {
    showDescription: SITE_CONFIG.games.showDescription,
    showHowToPlay: SITE_CONFIG.games.showHowToPlay,
    showTopScores: SITE_CONFIG.games.showTopScores
  };
  
  var gameConfig = SITE_CONFIG.games[gameName] || {};
  
  // Merge manual (compatible sin spread operator en navegadores viejos)
  var result = {};
  for (var key in globalConfig) { result[key] = globalConfig[key]; }
  for (var key in gameConfig) { result[key] = gameConfig[key]; }
  return result;
}

// Log de configuración (solo para debug)
console.log('✅ config.js cargado - Configuración aplicada a todas las páginas');
