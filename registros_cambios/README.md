# 🎮 App Educativa - Aprende Jugando

Una aplicación educativa interactiva para niños de 4 a 10 años con tres juegos divertidos:

- 🚀 **Invasores Matemáticos**: Practica sumas, restas y multiplicaciones
- 🔤 **Sopa de Letras**: Encuentra palabras escondidas
- ✍️ **Práctica de Escritura**: Mejora tu escritura

## 📁 Estructura de archivos

```
📦 app-educativa/
├── 📄 index.html                    # Menú principal
├── 📄 invasores-matematicos.html    # Juego de matemáticas
├── 📄 sopa-letras.html              # Juego de sopa de letras
├── 📄 practica-escritura.html       # Juego de escritura
├── 📄 README.md                     # Este archivo
└── 📄 LICENSE                       # Licencia MIT
```

## 🌐 Ver la aplicación en vivo

Una vez publicada en GitHub Pages, estará disponible en:
`https://tu-usuario.github.io/nombre-repositorio`

## 📦 Cómo publicar en GitHub Pages

### Opción 1: Subir archivos directamente (MÁS FÁCIL)

1. **Crea un nuevo repositorio en GitHub**
   - Ve a [github.com/new](https://github.com/new)
   - Nombre sugerido: `app-educativa`
   - Márcalo como **público**
   - NO inicialices con README (ya tenemos uno)

2. **Sube los archivos**
   - Haz clic en "uploading an existing file"
   - Arrastra TODOS estos archivos:
     - `index.html`
     - `invasores-matematicos.html`
     - `sopa-letras.html`
     - `practica-escritura.html`
     - `README.md`
     - `LICENSE`
   - Haz commit de los archivos

3. **Activa GitHub Pages**
   - Ve a Settings (Configuración) del repositorio
   - En el menú lateral, busca "Pages"
   - En "Source" selecciona la rama "main" 
   - Haz clic en Save
   - ¡Espera 1-2 minutos!

4. **¡Listo!**
   - Tu app estará en: `https://tu-usuario.github.io/app-educativa`

### Opción 2: Usando Git desde la terminal

Si tienes Git instalado en tu computadora:

```bash
# 1. Abre la terminal en la carpeta donde descargaste los archivos

# 2. Inicializa Git
git init

# 3. Añade los archivos
git add .

# 4. Haz el primer commit
git commit -m "Primera versión de la app educativa"

# 5. Conecta con tu repositorio (reemplaza TU-USUARIO y NOMBRE-REPO)
git remote add origin https://github.com/TU-USUARIO/NOMBRE-REPO.git

# 6. Sube los archivos
git branch -M main
git push -u origin main
```

Luego activa GitHub Pages desde Settings → Pages (como en la Opción 1).

## 🖥️ Probar localmente

Simplemente abre el archivo `index.html` en tu navegador favorito (Chrome, Firefox, Edge, Safari). Los enlaces a los juegos funcionarán automáticamente.

## 🎯 Características

### Invasores Matemáticos 🚀
- **3 niveles de dificultad**:
  - Fácil: Sumas hasta 10 (15 segundos)
  - Medio: Sumas y restas hasta 20 (11 segundos)
  - Difícil: Todas las operaciones (7 segundos)
- Sistema de vidas (3 corazones)
- Puntuación acumulativa
- Control con teclado (flechas ← →) o clic en los números

### Sopa de Letras 📚
- **3 niveles** con diferentes tamaños de cuadrícula:
  - Fácil: 8×8 con palabras cortas
  - Medio: 10×10 con palabras medianas
  - Difícil: 12×12 con palabras largas
- Palabras temáticas apropiadas para niños
- Sistema visual de palabras encontradas
- Haz clic en las letras para seleccionarlas

### Práctica de Escritura ✏️
- **3 niveles** de dificultad:
  - Fácil: Frases cortas y simples
  - Medio: Frases medianas
  - Difícil: Frases largas y complejas
- Feedback visual instantáneo (verde = correcto, rojo = error)
- Contador de errores
- Barra de progreso

## 🛠️ Tecnologías utilizadas

- React 18
- Tailwind CSS
- HTML5/CSS3
- JavaScript ES6+

## 📱 Responsive

La aplicación funciona perfectamente en:
- Computadoras de escritorio
- Tablets
- Teléfonos móviles

## ✏️ Personalización

Cada juego está en un archivo HTML separado, lo que facilita:
- Modificar un juego sin afectar a los demás
- Añadir nuevos juegos fácilmente
- Personalizar estilos y colores individualmente

### Para modificar un juego:
1. Abre el archivo HTML correspondiente en un editor de texto
2. Busca la sección que quieres modificar
3. Guarda los cambios
4. Abre el archivo en tu navegador para ver los cambios

## 🤝 Contribuir

Si quieres mejorar la aplicación:
1. Haz un fork del repositorio
2. Crea una rama para tu mejora
3. Envía un pull request

## 📄 Licencia

Este proyecto usa la licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

¡Disfruta aprendiendo! 🌟

**Desarrollado con ❤️ para ayudar a los niños a aprender jugando**
