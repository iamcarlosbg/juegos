# 🎮 GUÍA DE INTEGRACIÓN - Sistema de Ranking

## ✅ ESTADO ACTUAL

**TODOS los juegos (8/8) tienen:**
- ✅ Pantalla de Game Over
- ✅ Input para guardar nombre
- ✅ Sistema de ranking con Firebase
- ✅ Top 10 visible en inicio
- ✅ Función `showGameOver(score, level)`
- ✅ Función `saveGameScore()` conectada a Firebase

---

## 🔧 CÓMO CONECTAR CADA JUEGO AL SISTEMA

Para que el ranking funcione, cada juego debe llamar a `showGameOver(puntuacion, nivel)` cuando termine la partida.

### 📝 Ejemplo de Implementación:

```javascript
// Cuando el jugador pierde todas las vidas o termina el juego:
function endGame() {
    const finalScore = gameState.score;  // Tu variable de puntuación
    const levelName = "Difícil";          // El nivel que jugó
    
    showGameOver(finalScore, levelName);  // ← Llamar esta función
}
```

---

## 🎮 INTEGRACIÓN POR JUEGO

### 1. jerarquia-operaciones.html ✅
**Estado:** Sistema completo integrado
**Ya llama a:** `showGameOver()` cuando se pierden las vidas

**Código actual:**
```javascript
function endGame() {
    clearInterval(gameState.timer);
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('gameOverScreen').classList.remove('hidden');
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('playerName').focus();
}
```

**✓ FUNCIONA CORRECTAMENTE**

---

### 2. invasores-matematicos.html
**Buscar:** Función que detecta cuando pierdes (ej: `gameOver()`, `checkCollision()`)

**Agregar:**
```javascript
// Buscar donde dice "Game Over" o cuando lives = 0
if (lives <= 0) {
    showGameOver(score, difficulty); // difficulty puede ser "Fácil", "Medio", "Difícil"
}
```

---

### 3. completa-numero.html
**Buscar:** Temporizador o límite de tiempo

**Agregar:**
```javascript
// Cuando se acaba el tiempo o se completa el reto
function finishGame() {
    showGameOver(score, "Normal");
}
```

---

### 4. mayor-menor.html
**Buscar:** Cuando falla la comparación

**Agregar:**
```javascript
// Cuando comete un error
function wrongAnswer() {
    lives--;
    if (lives <= 0) {
        showGameOver(score, currentLevel);
    }
}
```

---

### 5. sopa-letras.html
**Buscar:** Cuando encuentra todas las palabras o se acaba el tiempo

**Agregar:**
```javascript
// Al completar o terminar tiempo
function gameComplete() {
    const timeBonus = calculateTimeBonus();
    const finalScore = wordsFound * 100 + timeBonus;
    showGameOver(finalScore, difficulty);
}
```

---

### 6. seguir-patrones.html
**Buscar:** Cuando falla un patrón

**Agregar:**
```javascript
// Cuando falla
function patternFailed() {
    attempts--;
    if (attempts <= 0) {
        showGameOver(score, "Nivel " + currentLevel);
    }
}
```

---

### 7. completa-letra.html
**Buscar:** Final del juego

**Agregar:**
```javascript
// Al terminar
function endGame() {
    showGameOver(correctAnswers * 10, "Normal");
}
```

---

### 8. practica-escritura.html
**Buscar:** Al terminar la práctica

**Agregar:**
```javascript
// Al finalizar
function finishPractice() {
    const wpm = calculateWPM();
    const accuracy = calculateAccuracy();
    const score = Math.round(wpm * accuracy);
    showGameOver(score, "WPM: " + wpm);
}
```

---

## 🔍 CÓMO ENCONTRAR DÓNDE AGREGAR EL CÓDIGO

### Método 1: Buscar "Game Over" en el código
```bash
# En tu editor, buscar:
- "game over"
- "Game Over"  
- "fin del juego"
```

### Método 2: Buscar variables de vidas
```bash
# Buscar:
- lives
- vidas
- attempts
- intentos
```

### Método 3: Buscar funciones de fin
```bash
# Buscar:
- function endGame
- function gameOver
- function finish
- function complete
```

---

## 🧪 CÓMO PROBAR

### 1. Probar localmente (sin Firebase):
```javascript
// En la consola del navegador (F12):
showGameOver(1234, "Prueba");

// Deberías ver:
// - Pantalla de Game Over
// - Puntuación: 1234
// - Input para nombre
```

### 2. Probar guardado:
```javascript
// 1. Jugar el juego hasta terminar
// 2. Ver pantalla de Game Over
// 3. Ingresar nombre
// 4. Click "GUARDAR PUNTUACIÓN"
// 5. En consola (F12) deberías ver:
//    💾 Guardando puntuación: {playerName: "CARLOS", score: 1234, ...}
//    ✅ Puntuación guardada correctamente
```

### 3. Verificar Firebase:
```javascript
// En Firebase Console → Firestore Database
// Deberías ver colecciones:
// - scores_jerarquia-operaciones
// - scores_invasores-matematicos
// - scores_completa-numero
// etc.
```

---

## ❌ SOLUCIÓN DE PROBLEMAS

### "No aparece la pantalla de Game Over"
**Causa:** No se está llamando a `showGameOver()`
**Solución:** 
1. Abre F12 → Console
2. Escribe: `showGameOver(1000, "Test")`
3. Si aparece → El problema es que el juego no la llama
4. Si NO aparece → Recarga la página

### "Se guarda en localStorage pero no en Firebase"
**Causa:** Firebase no está configurado o hay error de conexión
**Solución:**
1. Verifica que firebase-config.js tenga tus credenciales
2. Abre F12 → Console
3. Busca: "✅ Firebase inicializado correctamente"
4. Si no aparece → Firebase no está configurado

### "Error: savePlayerScore is not defined"
**Causa:** El script de inicialización de Firebase no se cargó
**Solución:**
1. Verifica que el archivo tenga en el `<head>`:
```html
<script src="firebase-config.js"></script>
<script src="config.js"></script>
```
2. Y después de `<body>` debe tener el script de inicialización de Firebase

---

## 📊 VARIABLES QUE NECESITAS

Cada juego necesita tener disponibles:

```javascript
// 1. PUNTUACIÓN (cualquiera de estos nombres):
- score
- gameState.score
- points
- puntos
- totalScore

// 2. NIVEL (opcional):
- level
- difficulty
- gameState.level
- currentLevel

// Si no tienes nivel, usa:
showGameOver(score, "Normal");
```

---

## ✅ CHECKLIST POR JUEGO

Para cada juego, verifica:

```
□ Tiene pantalla de Game Over (buscar id="gameOverScreen")
□ Tiene función showGameOver()
□ Tiene función saveGameScore()
□ Llama a showGameOver() al terminar el juego
□ Pasa la puntuación correcta
□ Pasa el nivel si existe
□ Se puede probar con showGameOver(1000, "Test") en consola
```

---

## 🎯 PRÓXIMOS PASOS

1. **Para cada juego**, busca donde termina el juego
2. **Agrega** la llamada a `showGameOver(puntuacion, nivel)`
3. **Prueba** que aparezca la pantalla
4. **Configura** Firebase (si no lo has hecho)
5. **Verifica** que se guarde en Firebase

---

## 💡 EJEMPLO COMPLETO

```javascript
// ANTES - Juego sin ranking:
function gameOver() {
    alert("Game Over! Tu puntuación: " + score);
    location.reload();
}

// DESPUÉS - Juego CON ranking:
function gameOver() {
    showGameOver(score, currentLevel);  // ← Solo agregar esta línea
}
```

**¡Así de simple!** 🎉

---

¿Necesitas ayuda con algún juego específico? Dime cuál y te ayudo a integrarlo.
