# 🎮 FASE 2 — Multijugador: Guía de implementación

## Estructura de la carpeta `multijugador/`

```
aprendeyjuega.com/
├── index.html                  ← Home con 3 modos (ya actualizado)
├── config.js                   ← Feature flags (ya actualizado)
├── firebase-config.js          ← Ahora con databaseURL para RTDB
├── ...
│
└── multijugador/               ← 🆕 CARPETA NUEVA
    ├── lobby.html              ← Elegir materia → juego → dificultad → buscar
    ├── partida.html            ← Partida en tiempo real entre 2 jugadores
    └── firebase-rtdb-rules.json ← Reglas para copiar en Firebase Console
```

## Archivos modificados fuera de la carpeta

| Archivo | Cambio |
|---------|--------|
| `firebase-config.js` | Añadido `databaseURL`, app se inicializa una sola vez |
| `index.html` | Link del multijugador apunta a `multijugador/lobby.html` |
| `sitemap.xml` | Añadida entrada para `multijugador/lobby.html` |

---

## Paso 1: Activar Firebase Realtime Database

1. Ir a [Firebase Console](https://console.firebase.google.com) → Proyecto `aprendeyjuega`
2. Menú lateral → **Realtime Database** → **Crear base de datos**
3. Seleccionar ubicación: **europe-west1** (Belgium)
4. Seleccionar **modo de prueba** (luego pondremos las reglas)
5. Una vez creada, copiar la URL de la base de datos

### ⚠️ IMPORTANTE: Actualizar databaseURL

En `firebase-config.js`, la línea:
```javascript
databaseURL: "https://aprendeyjuega-default-rtdb.europe-west1.firebasedatabase.app",
```

Debe coincidir con la URL que muestra Firebase Console. Si tu Realtime Database 
está en otra región, la URL será diferente. Cópiala exactamente.

### Aplicar reglas de seguridad

1. En Firebase Console → Realtime Database → **Reglas**
2. Pegar el contenido de `firebase-rtdb-rules.json`
3. Clic en **Publicar**

---

## Paso 2: Subir archivos

Subir estos archivos a la raíz del proyecto:
- `multijugador/lobby.html`
- `multijugador/partida.html`
- `firebase-config.js` (reemplaza el actual)
- `firebase-rtdb-rules.json` (referencia, no se sube a hosting)
- `sitemap.xml` (reemplaza el actual)

---

## Paso 3: Activar el feature flag

Para probar SIN que el público lo vea, acceder con URL override:

```
https://aprendeyjuega.com/?ff_multiplayer=true
```

Esto activará la tarjeta de Multijugador en el index. Al hacer clic lleva al lobby.

Para probar el flujo completo, necesitas **2 pestañas/dispositivos**:
1. Pestaña A: Entra al lobby, elige materia + juego + dificultad → "Buscar"
2. Pestaña B: Entra al lobby, elige LA MISMA materia + juego + dificultad → "Buscar"
3. Ambas se emparejan automáticamente → cuenta atrás → empieza la partida

---

## Cómo funciona el flujo

```
Lobby → Elegir materia → Elegir juego → Elegir dificultad → Nombre → Buscar
                                                                      │
                                                        Firebase RTDB: queue
                                                                      │
                                                    ¿Hay 2 en la misma cola?
                                                          │           │
                                                         No          Sí
                                                          │           │
                                                     "Buscando..."   Crear match
                                                                      │
                                                              Ambos redirigen a
                                                           multijugador/partida.html
                                                                      │
                                                    Mismas 20 preguntas para ambos
                                                    Score del rival en tiempo real
                                                                      │
                                                        Ambos terminan o tiempo
                                                                      │
                                                        Pantalla de resultados
                                                        Victoria / Derrota / Empate
```

---

## Juegos soportados en multijugador

| Juego | Tipo | Cómo funciona en multi |
|-------|------|----------------------|
| Invasores Matemáticos | math | Resolver operaciones (+, -, ×) |
| Jerarquía Operaciones | math | Resolver a + b × c |
| Mayor o Menor | compare | Elegir >, < o = |
| Completa el Número | math | Resolver operaciones |
| Sopa de Letras | letter | Completar letras (versión simplificada) |
| Completa la Letra | letter | Escribir la letra que falta |
| Seguir Patrones | pattern | Identificar siguiente elemento |
| Práctica Escritura | typing | Escribir frases exactas |

---

## Checklist

- [ ] Realtime Database creada en Firebase Console
- [ ] databaseURL correcta en firebase-config.js
- [ ] Reglas RTDB publicadas
- [ ] multijugador/lobby.html accesible
- [ ] `?ff_multiplayer=true` activa la tarjeta en el index
- [ ] Test con 2 pestañas: emparejamiento funciona
- [ ] Las preguntas son las mismas para ambos
- [ ] Score del rival se actualiza en tiempo real
- [ ] Pantalla de resultados muestra ganador
- [ ] Los juegos existentes siguen funcionando (firebase-config.js no rompe nada)

---

## Próxima fase

**Fase 3: Modo Clase** — Reutiliza mucha lógica del multijugador pero con:
- Sala de espera con N jugadores (no solo 2)
- Código de clase (alias + UUID)
- Ranking completo de la clase
- Firestore en vez de RTDB (queries complejas)
