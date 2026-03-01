# 🔥 CONFIGURACIÓN FIREBASE - MODO PRODUCCIÓN

## ⚠️ DIFERENCIA CLAVE

**Modo Prueba (30 días):** Cualquiera puede leer/escribir
**Modo Producción:** ✅ Solo lectura pública + escritura validada

---

## 🚀 PASO 1: Crear Cuenta y Proyecto

### 1.1 Crear cuenta
1. Ve a: **https://console.firebase.google.com/**
2. Click "Ir a la consola"
3. Inicia sesión con Gmail

### 1.2 Crear proyecto
1. Click "**Agregar proyecto**"
2. Nombre: `juegos-educativos` (o el que quieras)
3. Click "Continuar"
4. **Google Analytics:** Desactivar (no necesario)
5. Click "Crear proyecto"
6. Espera 30 segundos
7. Click "Continuar"

---

## 🚀 PASO 2: Configurar Firestore en MODO PRODUCCIÓN

### 2.1 Crear base de datos
1. Menú lateral → "**Firestore Database**"
2. Click "**Crear base de datos**"

### 2.2 Seleccionar ubicación
Elige según tu ubicación:
- **🇪🇸 España/Europa:** `europe-west1` (Bélgica)
- **🇺🇸 América:** `us-central1` (Iowa)
- **🇲🇽 México:** `us-central1`
- **🇦🇷 Argentina:** `southamerica-east1` (São Paulo)

Click "**Siguiente**"

### 2.3 ⚠️ IMPORTANTE - Seleccionar modo PRODUCCIÓN
**SELECCIONA:**
```
🔒 Comenzar en modo de PRODUCCIÓN
```

**NO selecciones "modo de prueba"**

Click "**Crear**"

---

## 🚀 PASO 3: Configurar Reglas de Seguridad (PRODUCCIÓN)

### 3.1 Ir a Reglas
1. En Firestore Database
2. Click pestaña "**Reglas**" (arriba)

### 3.2 Borrar todo y pegar esto:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Reglas para colecciones de puntuaciones
    match /scores_{game}/{scoreId} {
      
      // ✅ LECTURA: Permitida para todos (ver rankings)
      allow read: if true;
      
      // ✅ ESCRITURA: Solo crear puntuaciones válidas
      allow create: if 
        // Validar que tenga todos los campos requeridos
        request.resource.data.keys().hasAll(['name', 'score', 'level', 'date', 'timestamp'])
        
        // Validar nombre (string de 1-15 caracteres, solo letras y números)
        && request.resource.data.name is string
        && request.resource.data.name.size() >= 1
        && request.resource.data.name.size() <= 15
        && request.resource.data.name.matches('^[A-Z0-9 ]+$')
        
        // Validar puntuación (número entre 0 y 10,000,000)
        && request.resource.data.score is int
        && request.resource.data.score >= 0
        && request.resource.data.score <= 10000000
        
        // Validar nivel (string no vacío)
        && request.resource.data.level is string
        && request.resource.data.level.size() > 0
        && request.resource.data.level.size() <= 20
        
        // Validar fecha (string ISO)
        && request.resource.data.date is string
        
        // Validar timestamp (debe ser timestamp de servidor)
        && request.resource.data.timestamp == request.time;
      
      // ❌ NO SE PUEDE: Actualizar o eliminar puntuaciones
      allow update, delete: if false;
    }
    
    // ❌ Denegar acceso a cualquier otra colección
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

### 3.3 Publicar
Click "**Publicar**" (arriba derecha)

### 3.4 Confirmar
Aparecerá mensaje: "Las reglas tienen restricciones"
Click "**Publicar**" de nuevo

---

## 🚀 PASO 4: Obtener Credenciales

### 4.1 Ir a configuración
1. Click ⚙️ (engranaje) junto a "Descripción general del proyecto"
2. Click "**Configuración del proyecto**"

### 4.2 Scroll hasta "Tus apps"
Baja hasta ver "Tus apps" o "Your apps"

### 4.3 Agregar app web
1. Click en el ícono `</>` (Web)
2. **Alias:** `juegos-educativos-web`
3. **NO marques** "Firebase Hosting"
4. Click "**Registrar app**"

### 4.4 Copiar configuración
Verás algo como esto:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC1xXxXxXxXxXxXxXxXxXxXxXxX",
  authDomain: "juegos-educativos-abc123.firebaseapp.com",
  projectId: "juegos-educativos-abc123",
  storageBucket: "juegos-educativos-abc123.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};
```

**🔴 COPIA ESTOS VALORES** (los necesitas ahora)

Click "**Continuar a la consola**"

---

## 🚀 PASO 5: Configurar firebase-config.js

### 5.1 Abrir archivo
Abre `firebase-config.js`

### 5.2 Reemplazar líneas 5-11

**BUSCA esto:**
```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY_AQUI",
  authDomain: "TU_PROJECT_ID.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_PROJECT_ID.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};
```

**REEMPLAZA con tus valores del Paso 4.4**

**Ejemplo:**
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC1xXxXxXxXxXxXxXxXxXxXxXxX",
  authDomain: "juegos-educativos-abc123.firebaseapp.com",
  projectId: "juegos-educativos-abc123",
  storageBucket: "juegos-educativos-abc123.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};
```

### 5.3 Guardar
Guarda el archivo

---

## 🚀 PASO 6: Subir a GitHub

### Opción A: GitHub Web (Más Fácil)
1. Ve a tu repositorio en GitHub
2. Click "Add file" → "Upload files"
3. Arrastra TODOS los archivos de `juegos-final/`
4. Commit message: `Sistema de ranking global con Firebase`
5. Click "Commit changes"

### Opción B: Terminal
```bash
# Navega a tu repositorio
cd ruta/a/tu/repositorio

# Copia los archivos
cp -r juegos-final/* .

# Agrega todos los cambios
git add .

# Commit
git commit -m "Sistema de ranking global con Firebase en producción"

# Push
git push origin main
```

---

## ✅ PASO 7: Probar que Funciona

### 7.1 Esperar despliegue
Espera 2-3 minutos para que GitHub Pages actualice

### 7.2 Abrir tu sitio
`https://tu-usuario.github.io/tu-repositorio/propiedad-distributiva.html`

### 7.3 Abrir consola del navegador
1. Presiona **F12**
2. Ve a pestaña "**Console**"

### 7.4 Verificar mensajes
Deberías ver:
```
📦 firebase-config.js cargado
✅ Firebase inicializado correctamente
✅ X puntuaciones cargadas desde Firebase
```

### 7.5 Jugar y guardar
1. Juega una partida
2. Ingresa tu nombre
3. Click "GUARDAR PUNTUACIÓN"

**Deberías ver:**
```
✅ Puntuación guardada en Firebase
```

### 7.6 Verificar en Firebase Console
1. Ve a Firebase Console
2. Click "Firestore Database"
3. Deberías ver colección: `scores_propiedad-distributiva`
4. Click para ver tu puntuación guardada

### 7.7 ✨ Prueba Final
1. Abre el juego desde **otro dispositivo** (móvil/tablet)
2. **¡Deberías ver tu puntuación anterior!**
3. Guarda otra puntuación
4. Refresca en el primer dispositivo
5. **¡Deberías ver ambas puntuaciones!**

---

## 🔒 Seguridad de las Reglas

### ✅ Lo que SÍ permite:
- Leer todas las puntuaciones (ver rankings)
- Crear puntuaciones válidas con:
  - Nombre: 1-15 caracteres, solo letras mayúsculas y números
  - Puntuación: 0 a 10,000,000 puntos
  - Nivel: texto hasta 20 caracteres
  - Fecha y timestamp válidos

### ❌ Lo que NO permite:
- Modificar puntuaciones existentes
- Borrar puntuaciones
- Nombres con caracteres especiales
- Puntuaciones negativas o absurdas
- Guardar datos sin validar
- Acceso a otras colecciones

### 🛡️ Protección contra:
- Trampas básicas (puntuaciones imposibles)
- Nombres maliciosos (SQL injection, XSS)
- Modificación de récords ajenos
- Borrado de datos
- Spam (límite de Firebase aplica)

---

## 📊 Monitorear Uso

### Ver estadísticas en tiempo real:
1. Firebase Console → ⚙️ → **Uso y facturación**
2. Verás gráficas de:
   - 📖 Lecturas de documentos
   - ✍️ Escrituras de documentos
   - 💾 Almacenamiento usado
   - 📡 Transferencia de red

### Límites gratuitos (Plan Spark):
- **Lecturas:** 50,000/día
- **Escrituras:** 20,000/día
- **Almacenamiento:** 1 GB
- **Transferencia:** 10 GB/mes

### Estimación real:
Con **100 jugadores activos/día**:
- Cada jugador ve top 10: **1 lectura**
- Cada jugador juega 5 partidas: **5 escrituras**
- Total: **100 lecturas + 500 escrituras/día**
- **Uso: 0.2% de lecturas, 2.5% de escrituras**

**Conclusión:** Puedes tener fácilmente **1,000+ jugadores diarios** gratis

---

## 🔥 Crear Índices (Opcional - para mejor rendimiento)

Si tienes MUCHAS puntuaciones (10,000+), crear índices:

### 7.1 Ir a Índices
1. Firestore Database → pestaña "**Índices**"

### 7.2 Crear índice compuesto
Click "**Crear índice**"

**Configuración:**
- **Colección:** `scores_propiedad-distributiva`
- **Campos indexar:**
  1. `score` → Descendente
  2. `timestamp` → Descendente
- Click "**Crear**"

Espera 2-3 minutos mientras se crea

**Repite para cada juego:**
- `scores_invasores-matematicos`
- `scores_completa-numero`
- etc.

---

## 🆘 Solución de Problemas

### ❌ "Permission denied" al guardar
**Causa:** Reglas muy restrictivas o mal configuradas

**Solución:**
1. Ve a Firestore → Reglas
2. Copia EXACTAMENTE las reglas del Paso 3.2
3. Publica de nuevo

### ❌ "Firebase is not defined"
**Causa:** Scripts no cargados

**Solución:**
Verifica que TODOS los HTMLs tengan en el `<head>`:
```html
<script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore-compat.js"></script>
<script src="firebase-config.js"></script>
```

### ❌ "Invalid apiKey"
**Causa:** Credenciales incorrectas

**Solución:**
1. Ve a Firebase Console → ⚙️ → Configuración del proyecto
2. Scroll hasta "SDK snippet"
3. Copia de nuevo los valores
4. Reemplaza en firebase-config.js

### ❌ Sigo viendo localStorage
**Causa:** Firebase no está inicializando

**Solución:**
1. Abre F12 → Console
2. Busca errores en rojo
3. Verifica que firebase-config.js esté accesible
4. Prueba: `https://tu-sitio.com/firebase-config.js`

---

## 🎯 Checklist Final

Antes de considerar que está funcionando:

```
✅ Proyecto creado en Firebase
✅ Firestore Database creado en modo PRODUCCIÓN
✅ Reglas de seguridad configuradas y publicadas
✅ Credenciales copiadas a firebase-config.js
✅ Todos los archivos subidos a GitHub
✅ Sitio actualizado en GitHub Pages
✅ Console muestra "✅ Firebase inicializado"
✅ Puedo guardar puntuación desde PC
✅ Puedo guardar puntuación desde móvil
✅ Veo las mismas puntuaciones en ambos dispositivos
✅ Firebase Console muestra las puntuaciones guardadas
```

---

## 🔐 Seguridad Adicional (Opcional)

### Restricción por dominio:
1. Firebase Console → ⚙️ → Configuración del proyecto
2. Scroll hasta "Dominios autorizados"
3. Click "Agregar dominio"
4. Agrega: `tu-usuario.github.io`
5. Esto evita que otros sitios usen tu Firebase

### App Check (Avanzado):
Previene acceso desde bots/scripts
- Firebase Console → App Check
- Configurar reCAPTCHA v3
- Solo necesario si detectas abuso

---

## 📈 Próximos Pasos

1. ✅ **AHORA:** Probar Propiedad Distributiva
2. 📅 **Mañana:** Agregar Firebase a Invasores Matemáticos
3. 📅 **Esta semana:** Agregar a los demás juegos
4. 🎉 **Resultado:** Sistema de ranking global profesional

---

## 🎉 ¡FELICIDADES!

Ahora tienes un sistema de ranking **profesional** y **escalable**:

- ✅ Modo producción (no expira)
- ✅ Seguro (reglas validadas)
- ✅ Gratis (hasta 50k lecturas/día)
- ✅ Global (todos ven el mismo ranking)
- ✅ Sin servidor (todo en Firebase)
- ✅ Compatible con GitHub Pages

**Tiempo total:** 15-20 minutos
**Dificultad:** Media
**Resultado:** Sistema de ranking como los grandes juegos

---

## 📞 Ayuda Adicional

Si algo no funciona:
1. Revisa la consola (F12) para errores
2. Verifica las reglas en Firebase
3. Comprueba que las credenciales sean correctas
4. Abre un issue en GitHub o pregúntame

**¡Éxito con tu plataforma educativa!** 🎮🏆🚀
