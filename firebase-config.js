// firebase-config.js
// Configuración de Firebase para el sistema de ranking global
// Este archivo debe ser incluido en todos los juegos

// IMPORTANTE: Reemplaza estos valores con los de TU proyecto Firebase
// Los obtendrás siguiendo la guía FIREBASE-SETUP.md
const firebaseConfig = {
  apiKey: "AIzaSyBa-c5fyU5sZacTB1hNXLAha_HURhanz_I",
  authDomain: "aprendeyjuega.firebaseapp.com",
  projectId: "aprendeyjuega",
  storageBucket: "aprendeyjuega.firebasestorage.app",
  messagingSenderId: "414284717970",
  appId: "1:414284717970:web:c11231349e0151699feb4b",
  measurementId: "G-Q4902D1002"
};

// Inicializar Firebase (se hace automáticamente al cargar el script)
let db;
let scoresCollection;

// Función para inicializar Firebase
async function initFirebase(gameName) {
  try {
    // Inicializar Firebase
    const app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    
    // Cada juego tiene su propia colección
    scoresCollection = db.collection(`scores_${gameName}`);
    
    console.log('✅ Firebase inicializado correctamente');
    return true;
  } catch (error) {
    console.error('❌ Error al inicializar Firebase:', error);
    console.log('⚠️ Usando modo offline (localStorage)');
    return false;
  }
}

// Guardar puntuación en Firebase
async function saveScoreToFirebase(playerName, score, level, gameName) {
  try {
    const scoreData = {
      name: playerName.toUpperCase().substring(0, 15),
      score: parseInt(score),
      level: level,
      date: new Date().toISOString(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    await scoresCollection.add(scoreData);
    console.log('✅ Puntuación guardada en Firebase');
    return true;
  } catch (error) {
    console.error('❌ Error al guardar en Firebase:', error);
    // Fallback a localStorage
    saveScoreToLocalStorage(playerName, score, level, gameName);
    return false;
  }
}

// Obtener top scores desde Firebase
async function getTopScoresFromFirebase(limit = 100) {
  try {
    const snapshot = await scoresCollection
      .orderBy('score', 'desc')
      .limit(limit)
      .get();
    
    const scores = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      scores.push({
        name: data.name,
        score: data.score,
        level: data.level,
        date: new Date(data.date).toLocaleDateString()
      });
    });
    
    console.log(`✅ ${scores.length} puntuaciones cargadas desde Firebase`);
    return scores;
  } catch (error) {
    console.error('❌ Error al cargar desde Firebase:', error);
    // Fallback a localStorage
    return getTopScoresFromLocalStorage();
  }
}

// Fallback: Guardar en localStorage si Firebase falla
function saveScoreToLocalStorage(playerName, score, level, gameName) {
  const scoreData = {
    name: playerName.toUpperCase().substring(0, 15),
    score: parseInt(score),
    level: level,
    date: new Date().toLocaleDateString()
  };
  
  let scores = JSON.parse(localStorage.getItem(`scores_${gameName}`) || '[]');
  scores.push(scoreData);
  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, 100);
  localStorage.setItem(`scores_${gameName}`, JSON.stringify(scores));
  
  console.log('💾 Puntuación guardada en localStorage (modo offline)');
}

// Fallback: Obtener desde localStorage si Firebase falla
function getTopScoresFromLocalStorage(gameName) {
  const scores = JSON.parse(localStorage.getItem(`scores_${gameName}`) || '[]');
  console.log(`💾 ${scores.length} puntuaciones cargadas desde localStorage`);
  return scores;
}

// Verificar si Firebase está disponible
function isFirebaseAvailable() {
  return typeof firebase !== 'undefined' && db !== null;
}

// Obtener estadísticas globales
async function getGlobalStats(gameName) {
  try {
    const snapshot = await scoresCollection.get();
    const totalPlayers = new Set();
    let totalGames = 0;
    let totalScore = 0;
    let maxScore = 0;
    
    snapshot.forEach(doc => {
      const data = doc.data();
      totalPlayers.add(data.name);
      totalGames++;
      totalScore += data.score;
      if (data.score > maxScore) maxScore = data.score;
    });
    
    return {
      totalPlayers: totalPlayers.size,
      totalGames: totalGames,
      avgScore: Math.round(totalScore / totalGames),
      maxScore: maxScore
    };
  } catch (error) {
    console.error('Error al obtener estadísticas:', error);
    return null;
  }
}

console.log('📦 firebase-config.js cargado');
