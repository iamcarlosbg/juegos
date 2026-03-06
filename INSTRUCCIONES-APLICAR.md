# 🔧 INSTRUCCIONES EXACTAS - APLICAR CAMBIOS

## ❌ PROBLEMA ACTUAL:
- Los archivos en GitHub NO tienen las modificaciones
- El ZIP tiene config.js listo pero falta modificar los HTML
- Por eso no se ven: descripción, cómo jugar, rankings

## ✅ SOLUCIÓN:

Necesitas agregar 3 secciones HTML a cada juego.

---

## 📝 PARA JERARQUÍA DE OPERACIONES:

### 1. Buscar esta línea (aproximadamente línea 88):
```html
<h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
    Elige tu nivel de dificultad
</h2>
```

### 2. ANTES de esa línea, agregar:

```html
<!-- Descripción del juego -->
<div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
  <h3 class="text-2xl font-bold text-blue-900 mb-3 flex items-center">
    <span class="text-3xl mr-2">ℹ️</span>
    Sobre este juego
  </h3>
  <p id="gameDescription" class="text-gray-700 text-lg leading-relaxed"></p>
</div>
```

### 3. Buscar donde terminan los botones de nivel (después del tercer </button>), línea ~121

### 4. DESPUÉS de los botones, agregar:

```html
<!-- Cómo jugar -->
<div class="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 mb-8">
  <h3 class="text-2xl font-bold text-green-900 mb-4 flex items-center">
    <span class="text-3xl mr-2">📚</span>
    ¿Cómo jugar?
  </h3>
  <div id="howToPlayContent" class="space-y-3"></div>
</div>

<!-- Top 10 por nivel -->
<div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 mb-8">
  <h3 class="text-2xl font-bold text-orange-900 mb-6 text-center flex items-center justify-center">
    <span class="text-3xl mr-2">🏆</span>
    Top 10 Jugadores
  </h3>
  
  <!-- Tabs de niveles -->
  <div class="flex justify-center gap-2 mb-6 flex-wrap">
    <button onclick="showLevelRankingStart('Fácil')" class="level-tab px-6 py-3 rounded-xl bg-green-100 text-green-800 font-bold hover:bg-green-200 transition opacity-70" data-level="Fácil">
      Fácil
    </button>
    <button onclick="showLevelRankingStart('Medio')" class="level-tab px-6 py-3 rounded-xl bg-yellow-100 text-yellow-800 font-bold hover:bg-yellow-200 transition opacity-70" data-level="Medio">
      Medio
    </button>
    <button onclick="showLevelRankingStart('Difícil')" class="level-tab px-6 py-3 rounded-xl bg-red-100 text-red-800 font-bold hover:bg-red-200 transition opacity-70" data-level="Difícil">
      Difícil
    </button>
  </div>

  <!-- Container de rankings -->
  <div id="rankingsDisplayStart" class="space-y-2 max-h-96 overflow-y-auto">
    <p class="text-gray-500 text-center py-4">Cargando rankings...</p>
  </div>
</div>
```

### 5. Buscar el script de ranking (aproximadamente línea 280, después de `// ===== SISTEMA DE RANKING CON FIREBASE =====`)

### 6. DESPUÉS de `window.addEventListener('load', ...)`, agregar este código:

```javascript
// ===== CARGAR CONTENIDO DESDE CONFIG.JS =====
(function() {
  const GAME_NAME_FOR_CONFIG = 'jerarquia-operaciones';
  const gameConfig = typeof getGameConfig === 'function' ? getGameConfig(GAME_NAME_FOR_CONFIG) : {};
  
  // Cargar descripción
  if (gameConfig.description) {
    const descEl = document.getElementById('gameDescription');
    if (descEl) descEl.textContent = gameConfig.description;
  }
  
  // Cargar cómo jugar
  if (gameConfig.howToPlay) {
    const howToEl = document.getElementById('howToPlayContent');
    if (howToEl) {
      howToEl.innerHTML = gameConfig.howToPlay.map((step, i) => `
        <div class="flex items-start">
          <span class="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3 font-bold text-sm">${i + 1}</span>
          <span class="text-gray-700">${step}</span>
        </div>
      `).join('');
    }
  }
  
  // Función para mostrar ranking por nivel
  window.showLevelRankingStart = async function(level) {
    const container = document.getElementById('rankingsDisplayStart');
    if (!container) return;
    
    container.innerHTML = '<p class="text-gray-500 text-center py-4">Cargando...</p>';
    
    let allScores = [];
    if (typeof useFirebase !== 'undefined' && useFirebase && typeof getTopScoresFromFirebase === 'function') {
      allScores = await getTopScoresFromFirebase(100);
    } else {
      allScores = JSON.parse(localStorage.getItem(`scores_${GAME_NAME}`) || '[]');
    }
    
    const levelScores = allScores
      .filter(s => s.level === level)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    
    // Actualizar tabs
    document.querySelectorAll('.level-tab').forEach(tab => {
      if (tab.dataset.level === level) {
        tab.classList.remove('opacity-70');
        tab.classList.add('ring-4', 'ring-orange-500', 'scale-105');
      } else {
        tab.classList.add('opacity-70');
        tab.classList.remove('ring-4', 'ring-orange-500', 'scale-105');
      }
    });
    
    if (levelScores.length === 0) {
      container.innerHTML = `
        <div class="text-center py-8">
          <div class="text-5xl mb-3">🎯</div>
          <p class="text-gray-600 font-semibold">No hay récords en este nivel</p>
          <p class="text-gray-500 text-sm">¡Sé el primero en jugar!</p>
        </div>
      `;
      return;
    }
    
    container.innerHTML = levelScores.map((score, index) => {
      const rankEmoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
      const date = score.date ? new Date(score.date).toLocaleDateString('es-ES') : 'Hoy';
      const bgColor = index === 0 ? 'bg-yellow-50 border-l-4 border-yellow-400' : 
                      index === 1 ? 'bg-gray-50 border-l-4 border-gray-400' : 
                      index === 2 ? 'bg-orange-50 border-l-4 border-orange-400' : 'bg-white';
      
      return `
        <div class="flex justify-between items-center p-4 ${bgColor} rounded-xl shadow-sm hover:shadow-md transition">
          <div class="flex items-center gap-4">
            <span class="text-2xl font-bold w-12">${rankEmoji}</span>
            <div>
              <div class="font-bold text-lg text-gray-800">${score.name}</div>
              <div class="text-sm text-gray-600">${date}</div>
            </div>
          </div>
          <div class="text-2xl md:text-3xl font-bold text-blue-600">${score.score}</div>
        </div>
      `;
    }).join('');
  };
  
  // Cargar ranking inicial
  setTimeout(() => showLevelRankingStart('Fácil'), 300);
})();
```

---

## ✅ DESPUÉS DE ESTOS CAMBIOS:

1. Guarda el archivo
2. Sube a GitHub
3. Espera 1-2 minutos (GitHub Pages tarda en actualizarse)
4. Limpia caché del navegador
5. Recarga la página

**DEBERÍAS VER:**
- ✅ Descripción del juego
- ✅ Cómo jugar (5 pasos)
- ✅ Top 10 con tabs de niveles

---

## 🚨 SI NO FUNCIONA:

Abre la consola del navegador (F12) y busca errores.

Los errores comunes:
- `getGameConfig is not a function` → config.js no se cargó
- `useFirebase is not defined` → firebase-config.js no se cargó
- Rankings vacíos → Firebase no tiene datos o no está configurado

---

## 📋 PARA LOS OTROS 7 JUEGOS:

El proceso es EXACTAMENTE IGUAL, solo cambia:
- `GAME_NAME_FOR_CONFIG` → nombre del juego
- Los niveles en los tabs (algunos tienen 3, otros solo 1)

---

**¿Quieres que:**
A) Te haga un archivo completo de jerarquia-operaciones.html listo para copiar?
B) Hago todos los 8 archivos y te los paso?
C) Continúo con estas instrucciones para cada juego?
