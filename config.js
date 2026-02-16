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

// Obtener configuración de un juego específico
function getGameConfig(gameName) {
  const globalConfig = {
    showDescription: SITE_CONFIG.games.showDescription,
    showHowToPlay: SITE_CONFIG.games.showHowToPlay,
    showTopScores: SITE_CONFIG.games.showTopScores
  };
  
  const gameConfig = SITE_CONFIG.games[gameName] || {};
  
  return {
    ...globalConfig,
    ...gameConfig
  };
}

// Log de configuración (solo para debug)
console.log('✅ config.js cargado - Configuración aplicada a todas las páginas');
