// ===== COMPARTIR EN REDES SOCIALES (CONFIGURABLE) =====
// Lee configuración de SITE_CONFIG.shareButtons en config.js

window.compartirWhatsApp = function(nombreJuego, score, nivel, urlJuego) {
  const config = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG.shareButtons : null;
  if (!config || !config.enabled || !config.networks.whatsapp.enabled) return;
  
  const template = config.networks.whatsapp.message || "🎮 ¡Acabo de conseguir {score} puntos en {game}! 🏆\n\n¿Crees que puedes superarme? ¡Acepta el reto! 👇\n{url}";
  const mensaje = template
    .replace('{score}', score)
    .replace('{game}', nombreJuego)
    .replace('{level}', nivel)
    .replace('{url}', urlJuego);
  
  const url = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

window.compartirFacebook = function(urlJuego) {
  const config = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG.shareButtons : null;
  if (!config || !config.enabled || !config.networks.facebook.enabled) return;
  
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlJuego)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

window.compartirTwitter = function(nombreJuego, score, urlJuego) {
  const config = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG.shareButtons : null;
  if (!config || !config.enabled || !config.networks.twitter.enabled) return;
  
  const template = config.networks.twitter.message || "🎮 {score} puntos en {game}! 🔥\n\n¿Puedes superar mi puntuación? ¡Demuéstralo! 💪";
  const texto = template
    .replace('{score}', score)
    .replace('{game}', nombreJuego);
  
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(urlJuego)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

window.compartirTelegram = function(nombreJuego, score, urlJuego) {
  const config = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG.shareButtons : null;
  if (!config || !config.enabled || !config.networks.telegram.enabled) return;
  
  const template = config.networks.telegram.message || "🏆 ¡{score} puntos en {game}!\n\n¿Aceptas el desafío? ¡Juega ahora! 🎯";
  const mensaje = template
    .replace('{score}', score)
    .replace('{game}', nombreJuego);
  
  const url = `https://t.me/share/url?url=${encodeURIComponent(urlJuego)}&text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

window.copiarEnlace = function(urlJuego, botonId) {
  const config = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG.shareButtons : null;
  if (!config || !config.enabled || !config.copyLink.enabled) return;
  
  navigator.clipboard.writeText(urlJuego).then(() => {
    const boton = document.getElementById(botonId);
    if (!boton) return;
    const textoOriginal = boton.innerHTML;
    boton.innerHTML = '<span class="text-xl">✅</span> ¡Copiado!';
    boton.classList.add('bg-green-500');
    boton.classList.remove('bg-gray-500');
    setTimeout(() => {
      boton.innerHTML = textoOriginal;
      boton.classList.remove('bg-green-500');
      boton.classList.add('bg-gray-500');
    }, 2000);
  }).catch(() => alert('No se pudo copiar. Copia manualmente: ' + urlJuego));
};

window.retarAmigo = function(nombreJuego, score, nivel, urlJuego) {
  const config = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG.shareButtons : null;
  if (!config || !config.enabled || !config.challenge.enabled) return;
  
  const template = config.challenge.message || "🎯 TE RETO A SUPERAR MI PUNTUACIÓN 🎯\n\nAcabo de hacer {score} puntos en {game} (nivel {level})\n\n¿Crees que puedes hacerlo mejor?\n\n¡Juega aquí! 👇\n{url}\n\n¡Que gane el mejor! 🏆";
  const mensaje = template
    .replace('{score}', score)
    .replace('{game}', nombreJuego)
    .replace('{level}', nivel)
    .replace('{url}', urlJuego);
  
  navigator.clipboard.writeText(mensaje).then(() => {
    alert('📋 ¡Mensaje copiado!\n\nAhora pégalo donde quieras: WhatsApp, Instagram, TikTok, Discord...\n\n¡Reta a tus amigos! 🎯');
  }).catch(() => alert('No se pudo copiar automáticamente.\n\nCopia este mensaje:\n\n' + mensaje));
};

// Función auxiliar para verificar si los botones deben mostrarse
window.shouldShowShareButtons = function() {
  const config = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG.shareButtons : null;
  return config && config.enabled;
};
