// ═══════════════════════════════════════════════════════════════════
// PALABRAS-LENGUA.JS — Banco centralizado de palabras
// Usado por: Ordena la Palabra, Completa la Letra, Sopa de Letras
// Para añadir palabras: añade entradas al array del nivel correspondiente.
// Cada palabra necesita: palabra, pista (para Ordena), categoria (para Completa)
// ═══════════════════════════════════════════════════════════════════

var PALABRAS_LENGUA = {

  facil: [
    // ── Animales ──
    { palabra: 'GATO', pista: 'Animal que maúlla', categoria: 'Animal' },
    { palabra: 'PERRO', pista: 'Animal que ladra', categoria: 'Animal' },
    { palabra: 'PATO', pista: 'Ave que nada', categoria: 'Animal' },
    { palabra: 'LEON', pista: 'Rey de la selva', categoria: 'Animal' },
    { palabra: 'OSO', pista: 'Animal grande del bosque', categoria: 'Animal' },
    { palabra: 'PUMA', pista: 'Felino americano', categoria: 'Animal' },
    { palabra: 'LOBO', pista: 'Aúlla a la luna', categoria: 'Animal' },
    { palabra: 'RANA', pista: 'Salta y dice croac', categoria: 'Animal' },
    { palabra: 'VACA', pista: 'Da leche', categoria: 'Animal' },
    { palabra: 'TORO', pista: 'Animal con cuernos', categoria: 'Animal' },
    { palabra: 'PAVO', pista: 'Ave grande de granja', categoria: 'Animal' },
    { palabra: 'MONO', pista: 'Se cuelga de los árboles', categoria: 'Animal' },
    { palabra: 'FOCA', pista: 'Mamífero marino con bigotes', categoria: 'Animal' },
    { palabra: 'LORO', pista: 'Ave que habla', categoria: 'Animal' },
    { palabra: 'RATA', pista: 'Roedor pequeño', categoria: 'Animal' },
    { palabra: 'SAPO', pista: 'Pariente de la rana', categoria: 'Animal' },
    { palabra: 'BUHO', pista: 'Ave nocturna sabia', categoria: 'Animal' },
    { palabra: 'ZORRO', pista: 'Animal astuto naranja', categoria: 'Animal' },
    { palabra: 'BURRO', pista: 'Animal de carga que rebuzna', categoria: 'Animal' },

    // ── Naturaleza ──
    { palabra: 'SOL', pista: 'Estrella que nos calienta', categoria: 'Naturaleza' },
    { palabra: 'MAR', pista: 'Agua salada inmensa', categoria: 'Naturaleza' },
    { palabra: 'RIO', pista: 'Agua dulce que fluye', categoria: 'Naturaleza' },
    { palabra: 'FLOR', pista: 'Crece en el jardín', categoria: 'Naturaleza' },
    { palabra: 'ARBOL', pista: 'Tiene hojas y ramas', categoria: 'Naturaleza' },
    { palabra: 'LUNA', pista: 'Brilla de noche', categoria: 'Naturaleza' },
    { palabra: 'ROCA', pista: 'Piedra grande', categoria: 'Naturaleza' },
    { palabra: 'LAGO', pista: 'Agua rodeada de tierra', categoria: 'Naturaleza' },
    { palabra: 'NUBE', pista: 'Flota en el cielo', categoria: 'Naturaleza' },
    { palabra: 'HOJA', pista: 'Parte verde del árbol', categoria: 'Naturaleza' },
    { palabra: 'ROSA', pista: 'Flor con espinas', categoria: 'Naturaleza' },
    { palabra: 'PINO', pista: 'Árbol siempre verde', categoria: 'Naturaleza' },
    { palabra: 'NIEVE', pista: 'Agua congelada que cae', categoria: 'Naturaleza' },
    { palabra: 'ARENA', pista: 'Cubre la playa', categoria: 'Naturaleza' },
    { palabra: 'HIELO', pista: 'Agua sólida fría', categoria: 'Naturaleza' },
    { palabra: 'SELVA', pista: 'Bosque tropical denso', categoria: 'Naturaleza' },

    // ── Casa / Objetos ──
    { palabra: 'CASA', pista: 'Donde vivimos', categoria: 'Lugar' },
    { palabra: 'MESA', pista: 'Mueble para comer', categoria: 'Mueble' },
    { palabra: 'SILLA', pista: 'Para sentarse', categoria: 'Mueble' },
    { palabra: 'CAMA', pista: 'Donde dormimos', categoria: 'Mueble' },
    { palabra: 'SOFA', pista: 'Asiento cómodo del salón', categoria: 'Mueble' },
    { palabra: 'LLAVE', pista: 'Abre la puerta', categoria: 'Objeto' },
    { palabra: 'VASO', pista: 'Para beber agua', categoria: 'Objeto' },
    { palabra: 'PLATO', pista: 'Donde ponemos la comida', categoria: 'Objeto' },
    { palabra: 'TAZA', pista: 'Para tomar café o té', categoria: 'Objeto' },
    { palabra: 'RELOJ', pista: 'Marca la hora', categoria: 'Objeto' },
    { palabra: 'BOLSO', pista: 'Para llevar cosas', categoria: 'Objeto' },
    { palabra: 'GORRA', pista: 'Cubre la cabeza', categoria: 'Ropa' },
    { palabra: 'BOTAS', pista: 'Calzado alto', categoria: 'Ropa' },

    // ── Comida ──
    { palabra: 'PAN', pista: 'Se come en el desayuno', categoria: 'Comida' },
    { palabra: 'PERA', pista: 'Fruta verde dulce', categoria: 'Comida' },
    { palabra: 'MIEL', pista: 'La hacen las abejas', categoria: 'Comida' },
    { palabra: 'LECHE', pista: 'Bebida blanca', categoria: 'Comida' },
    { palabra: 'HUEVO', pista: 'Lo pone la gallina', categoria: 'Comida' },
    { palabra: 'QUESO', pista: 'Se hace con leche', categoria: 'Comida' },
    { palabra: 'ARROZ', pista: 'Grano blanco pequeño', categoria: 'Comida' },
    { palabra: 'SOPA', pista: 'Comida líquida caliente', categoria: 'Comida' },
    { palabra: 'FLAN', pista: 'Postre con caramelo', categoria: 'Comida' },
    { palabra: 'COCO', pista: 'Fruta tropical dura', categoria: 'Comida' },
    { palabra: 'KIWI', pista: 'Fruta verde peluda', categoria: 'Comida' },
    { palabra: 'ATUN', pista: 'Pescado en lata', categoria: 'Comida' },

    // ── Escuela ──
    { palabra: 'AULA', pista: 'Salón de clase', categoria: 'Escuela' },
    { palabra: 'GOMA', pista: 'Borra el lápiz', categoria: 'Escuela' },
    { palabra: 'REGLA', pista: 'Mide centímetros', categoria: 'Escuela' },
    { palabra: 'LIBRO', pista: 'Tiene páginas y letras', categoria: 'Escuela' },
    { palabra: 'TIZA', pista: 'Escribe en la pizarra', categoria: 'Escuela' },
    { palabra: 'LAPIZ', pista: 'Para escribir y dibujar', categoria: 'Escuela' },
    { palabra: 'PAPEL', pista: 'Hoja para escribir', categoria: 'Escuela' },
    { palabra: 'NOTA', pista: 'Calificación del examen', categoria: 'Escuela' },
    { palabra: 'PLUMA', pista: 'Para escribir con tinta', categoria: 'Escuela' },

    // ── Transporte ──
    { palabra: 'AUTO', pista: 'Vehículo con cuatro ruedas', categoria: 'Transporte' },
    { palabra: 'TREN', pista: 'Va por las vías', categoria: 'Transporte' },
    { palabra: 'BARCO', pista: 'Navega por el mar', categoria: 'Transporte' },
    { palabra: 'AVION', pista: 'Vuela por el cielo', categoria: 'Transporte' },
    { palabra: 'MOTO', pista: 'Vehículo de dos ruedas', categoria: 'Transporte' },
    { palabra: 'TAXI', pista: 'Coche que te lleva pagando', categoria: 'Transporte' },
    { palabra: 'METRO', pista: 'Tren subterráneo', categoria: 'Transporte' },
    { palabra: 'BOTE', pista: 'Embarcación pequeña', categoria: 'Transporte' },

    // ── Cuerpo / Personas ──
    { palabra: 'MANO', pista: 'Tiene cinco dedos', categoria: 'Cuerpo' },
    { palabra: 'PELO', pista: 'Crece en la cabeza', categoria: 'Cuerpo' },
    { palabra: 'NARIZ', pista: 'Para oler', categoria: 'Cuerpo' },
    { palabra: 'BOCA', pista: 'Para hablar y comer', categoria: 'Cuerpo' },
    { palabra: 'PIE', pista: 'Para caminar', categoria: 'Cuerpo' },
    { palabra: 'OJO', pista: 'Para ver', categoria: 'Cuerpo' },
    { palabra: 'DEDO', pista: 'Parte de la mano', categoria: 'Cuerpo' },

    // ── Deportes ──
    { palabra: 'GOLF', pista: 'Deporte con palo y hoyo', categoria: 'Deporte' },
    { palabra: 'YOGA', pista: 'Ejercicio de relajación', categoria: 'Deporte' },
    { palabra: 'SURF', pista: 'Deporte sobre las olas', categoria: 'Deporte' },
    { palabra: 'JUDO', pista: 'Arte marcial japonés', categoria: 'Deporte' },
    { palabra: 'BOXEO', pista: 'Deporte de puños', categoria: 'Deporte' },

    // ── Otros ──
    { palabra: 'CIELO', pista: 'Arriba, donde están las nubes', categoria: 'Naturaleza' },
    { palabra: 'FUEGO', pista: 'Llama caliente', categoria: 'Naturaleza' },
    { palabra: 'AGUA', pista: 'Líquido vital', categoria: 'Naturaleza' },
    { palabra: 'TIERRA', pista: 'Suelo donde pisamos', categoria: 'Naturaleza' },
    { palabra: 'LUZ', pista: 'Lo contrario de oscuridad', categoria: 'Naturaleza' },
    { palabra: 'MONTE', pista: 'Elevación del terreno', categoria: 'Naturaleza' },
    { palabra: 'PLAYA', pista: 'Arena junto al mar', categoria: 'Naturaleza' },
    { palabra: 'CAMPO', pista: 'Zona verde sin edificios', categoria: 'Naturaleza' },
    { palabra: 'TORRE', pista: 'Edificio alto y estrecho', categoria: 'Lugar' },
    { palabra: 'PUENTE', pista: 'Cruza un río', categoria: 'Lugar' },
    { palabra: 'CAMINO', pista: 'Por donde se anda', categoria: 'Lugar' },
    { palabra: 'BOSQUE', pista: 'Muchos árboles juntos', categoria: 'Naturaleza' }
  ],

  medio: [
    // ── Animales ──
    { palabra: 'ELEFANTE', pista: 'Animal con trompa', categoria: 'Animal' },
    { palabra: 'MARIPOSA', pista: 'Insecto con alas de colores', categoria: 'Animal' },
    { palabra: 'JIRAFA', pista: 'Animal de cuello largo', categoria: 'Animal' },
    { palabra: 'TORTUGA', pista: 'Lleva su casa encima', categoria: 'Animal' },
    { palabra: 'DELFIN', pista: 'Mamífero marino inteligente', categoria: 'Animal' },
    { palabra: 'CABALLO', pista: 'Animal que se monta', categoria: 'Animal' },
    { palabra: 'CONEJO', pista: 'Tiene orejas largas', categoria: 'Animal' },
    { palabra: 'GALLINA', pista: 'Pone huevos', categoria: 'Animal' },
    { palabra: 'BALLENA', pista: 'El animal más grande del mar', categoria: 'Animal' },
    { palabra: 'ARDILLA', pista: 'Roedor que guarda nueces', categoria: 'Animal' },
    { palabra: 'SERPIENTE', pista: 'Reptil largo sin patas', categoria: 'Animal' },
    { palabra: 'CANGURO', pista: 'Salta y lleva a su cría', categoria: 'Animal' },
    { palabra: 'GORILA', pista: 'Primate grande y fuerte', categoria: 'Animal' },
    { palabra: 'PANTERA', pista: 'Felino negro', categoria: 'Animal' },
    { palabra: 'HALCON', pista: 'Ave rápida cazadora', categoria: 'Animal' },
    { palabra: 'CAMELLO', pista: 'Tiene jorobas', categoria: 'Animal' },
    { palabra: 'AGUILA', pista: 'Ave majestuosa rapaz', categoria: 'Animal' },
    { palabra: 'PALOMA', pista: 'Ave de la paz', categoria: 'Animal' },
    { palabra: 'AVESTRUZ', pista: 'Ave grande que no vuela', categoria: 'Animal' },

    // ── Naturaleza ──
    { palabra: 'ESTRELLA', pista: 'Brilla en el cielo nocturno', categoria: 'Naturaleza' },
    { palabra: 'PLANETA', pista: 'Cuerpo celeste que orbita', categoria: 'Naturaleza' },
    { palabra: 'VOLCAN', pista: 'Montaña que escupe lava', categoria: 'Naturaleza' },
    { palabra: 'CASCADA', pista: 'Agua que cae desde alto', categoria: 'Naturaleza' },
    { palabra: 'GLACIAR', pista: 'Gran masa de hielo', categoria: 'Naturaleza' },
    { palabra: 'OCEANO', pista: 'El mar más grande', categoria: 'Naturaleza' },
    { palabra: 'PRADERA', pista: 'Campo grande con hierba', categoria: 'Naturaleza' },
    { palabra: 'DESIERTO', pista: 'Lugar de mucha arena y calor', categoria: 'Naturaleza' },
    { palabra: 'COMETA', pista: 'Viaja por el espacio con cola', categoria: 'Naturaleza' },
    { palabra: 'COLINA', pista: 'Montaña pequeña', categoria: 'Naturaleza' },
    { palabra: 'PANTANO', pista: 'Zona de agua estancada', categoria: 'Naturaleza' },

    // ── Objetos ──
    { palabra: 'VENTANA', pista: 'Para mirar afuera', categoria: 'Casa' },
    { palabra: 'GUITARRA', pista: 'Instrumento de cuerdas', categoria: 'Instrumento' },
    { palabra: 'PELOTA', pista: 'Se usa en deportes', categoria: 'Deporte' },
    { palabra: 'ESPEJO', pista: 'Refleja tu imagen', categoria: 'Objeto' },
    { palabra: 'PARAGUAS', pista: 'Protege de la lluvia', categoria: 'Objeto' },
    { palabra: 'TIJERAS', pista: 'Para cortar papel', categoria: 'Objeto' },
    { palabra: 'LAMPARA', pista: 'Da luz', categoria: 'Objeto' },
    { palabra: 'CORTINA', pista: 'Cubre la ventana', categoria: 'Objeto' },
    { palabra: 'ALMOHADA', pista: 'Donde apoyas la cabeza', categoria: 'Objeto' },
    { palabra: 'MALETA', pista: 'Para llevar ropa de viaje', categoria: 'Objeto' },
    { palabra: 'SOMBRERO', pista: 'Cubre la cabeza del sol', categoria: 'Ropa' },
    { palabra: 'PULSERA', pista: 'Adorno para la muñeca', categoria: 'Ropa' },
    { palabra: 'CINTURON', pista: 'Sujeta el pantalón', categoria: 'Ropa' },

    // ── Comida ──
    { palabra: 'GALLETA', pista: 'Dulce crujiente', categoria: 'Comida' },
    { palabra: 'TOMATE', pista: 'Fruto rojo de ensalada', categoria: 'Comida' },
    { palabra: 'LECHUGA', pista: 'Hoja verde de ensalada', categoria: 'Comida' },
    { palabra: 'CEBOLLA', pista: 'Hace llorar al cortarla', categoria: 'Comida' },
    { palabra: 'PEPINO', pista: 'Vegetal verde alargado', categoria: 'Comida' },
    { palabra: 'ENSALADA', pista: 'Mezcla de verduras', categoria: 'Comida' },
    { palabra: 'TORTILLA', pista: 'Se hace con huevo', categoria: 'Comida' },
    { palabra: 'ZANAHORIA', pista: 'Vegetal naranja', categoria: 'Comida' },
    { palabra: 'NARANJA', pista: 'Fruta cítrica del mismo color', categoria: 'Comida' },
    { palabra: 'MANZANA', pista: 'Fruta roja o verde crujiente', categoria: 'Comida' },
    { palabra: 'CEREZA', pista: 'Fruta pequeña y roja', categoria: 'Comida' },
    { palabra: 'YOGURT', pista: 'Lácteo cremoso', categoria: 'Comida' },

    // ── Escuela / Profesiones ──
    { palabra: 'CUADERNO', pista: 'Para tomar apuntes', categoria: 'Escuela' },
    { palabra: 'MOCHILA', pista: 'Se lleva a la espalda', categoria: 'Escuela' },
    { palabra: 'PIZARRA', pista: 'El profesor escribe aquí', categoria: 'Escuela' },
    { palabra: 'MAESTRO', pista: 'Persona que enseña', categoria: 'Profesión' },
    { palabra: 'PINTURA', pista: 'Arte con colores', categoria: 'Arte' },
    { palabra: 'TECLADO', pista: 'Parte del ordenador para escribir', categoria: 'Tecnología' },
    { palabra: 'CAMION', pista: 'Vehículo grande de carga', categoria: 'Transporte' },
    { palabra: 'COHETE', pista: 'Viaja al espacio', categoria: 'Transporte' },
    { palabra: 'VELERO', pista: 'Barco con velas', categoria: 'Transporte' },

    // ── Deportes ──
    { palabra: 'FUTBOL', pista: 'Deporte rey con balón', categoria: 'Deporte' },
    { palabra: 'NATACION', pista: 'Deporte en el agua', categoria: 'Deporte' },
    { palabra: 'CICLISMO', pista: 'Deporte sobre dos ruedas', categoria: 'Deporte' },
    { palabra: 'VOLEIBOL', pista: 'Se juega con red y balón', categoria: 'Deporte' },
    { palabra: 'ESGRIMA', pista: 'Deporte con espadas', categoria: 'Deporte' },
    { palabra: 'GIMNASIA', pista: 'Acrobacias y ejercicios', categoria: 'Deporte' },
    { palabra: 'BEISBOL', pista: 'Deporte con bate', categoria: 'Deporte' },

    // ── Otros ──
    { palabra: 'TESORO', pista: 'Riqueza escondida', categoria: 'Objeto' },
    { palabra: 'RECETA', pista: 'Instrucciones para cocinar', categoria: 'Cocina' },
    { palabra: 'MONEDA', pista: 'Dinero redondo de metal', categoria: 'Objeto' },
    { palabra: 'CORONA', pista: 'La lleva un rey', categoria: 'Objeto' },
    { palabra: 'BANDERA', pista: 'Símbolo de un país', categoria: 'Objeto' },
    { palabra: 'CASTILLO', pista: 'Fortaleza medieval', categoria: 'Lugar' },
    { palabra: 'MERCADO', pista: 'Lugar donde se compra comida', categoria: 'Lugar' },
    { palabra: 'FABRICA', pista: 'Donde se producen cosas', categoria: 'Lugar' },
    { palabra: 'HOSPITAL', pista: 'Donde van los enfermos', categoria: 'Lugar' },
    { palabra: 'COLUMPIO', pista: 'Juego del parque que se balancea', categoria: 'Objeto' },
    { palabra: 'MARIPOSA', pista: 'Insecto con alas coloridas', categoria: 'Animal' },
    { palabra: 'COCODRILO', pista: 'Reptil grande de río', categoria: 'Animal' },
    { palabra: 'LEOPARDO', pista: 'Felino con manchas', categoria: 'Animal' },
    { palabra: 'FLAMENCO', pista: 'Ave rosa de patas largas', categoria: 'Animal' },
    { palabra: 'CARACOL', pista: 'Lleva su concha a cuestas', categoria: 'Animal' },
    { palabra: 'PIRAMIDE', pista: 'Construcción triangular egipcia', categoria: 'Lugar' },
    { palabra: 'TELEFONO', pista: 'Para llamar y hablar', categoria: 'Tecnología' },
    { palabra: 'LINTERNA', pista: 'Luz portátil', categoria: 'Objeto' },
    { palabra: 'CUCHILLO', pista: 'Para cortar comida', categoria: 'Objeto' },
    { palabra: 'ESCALERA', pista: 'Para subir pisos', categoria: 'Objeto' },
    { palabra: 'CUCHARAS', pista: 'Para comer sopa', categoria: 'Objeto' },
    { palabra: 'BUFANDA', pista: 'Calienta el cuello', categoria: 'Ropa' },
    { palabra: 'CAMISETA', pista: 'Prenda de arriba', categoria: 'Ropa' },
    { palabra: 'SANDWICH', pista: 'Pan con relleno', categoria: 'Comida' },
    { palabra: 'LIMONADA', pista: 'Bebida de limón', categoria: 'Comida' },
    { palabra: 'MANDARINA', pista: 'Cítrica pequeña fácil de pelar', categoria: 'Comida' },
    { palabra: 'PIMIENTA', pista: 'Especia que pica un poco', categoria: 'Comida' },
    { palabra: 'REFRESCO', pista: 'Bebida con burbujas', categoria: 'Comida' },
    { palabra: 'PALOMITA', pista: 'Maíz que explota en el cine', categoria: 'Comida' },
    { palabra: 'UNIVERSO', pista: 'Todo lo que existe', categoria: 'Naturaleza' },
    { palabra: 'HORIZONTE', pista: 'Donde el cielo toca la tierra', categoria: 'Naturaleza' },
    { palabra: 'PRIMAVERA', pista: 'Estación de las flores', categoria: 'Naturaleza' }
  ],

  dificil: [
    // ── Animales ──
    { palabra: 'DINOSAURIO', pista: 'Reptil extinto gigante', categoria: 'Animal' },
    { palabra: 'COCODRILO', pista: 'Reptil grande con mandíbulas', categoria: 'Animal' },
    { palabra: 'RINOCERONTE', pista: 'Animal con cuerno en la nariz', categoria: 'Animal' },
    { palabra: 'HIPOPOTAMO', pista: 'Animal enorme del río', categoria: 'Animal' },
    { palabra: 'CAMALEON', pista: 'Cambia de color', categoria: 'Animal' },
    { palabra: 'MURCIELAGO', pista: 'Mamífero que vuela de noche', categoria: 'Animal' },
    { palabra: 'SALAMANDRA', pista: 'Anfibio con cola', categoria: 'Animal' },
    { palabra: 'ESCARABAJO', pista: 'Insecto con caparazón duro', categoria: 'Animal' },
    { palabra: 'CHIMPANCE', pista: 'Primate muy inteligente', categoria: 'Animal' },
    { palabra: 'ORANGUTAN', pista: 'Primate pelirrojo', categoria: 'Animal' },
    { palabra: 'ARMADILLO', pista: 'Mamífero con coraza', categoria: 'Animal' },
    { palabra: 'MAPACHE', pista: 'Animal con antifaz natural', categoria: 'Animal' },

    // ── Tecnología ──
    { palabra: 'COMPUTADORA', pista: 'Máquina para trabajar y jugar', categoria: 'Tecnología' },
    { palabra: 'TELEVISION', pista: 'Pantalla para ver programas', categoria: 'Tecnología' },
    { palabra: 'CALCULADORA', pista: 'Para hacer operaciones', categoria: 'Tecnología' },
    { palabra: 'AUDIFONOS', pista: 'Para escuchar música solo', categoria: 'Tecnología' },
    { palabra: 'MICROSCOPIO', pista: 'Para ver cosas muy pequeñas', categoria: 'Tecnología' },
    { palabra: 'TELESCOPIO', pista: 'Para ver las estrellas', categoria: 'Tecnología' },

    // ── Transporte ──
    { palabra: 'HELICOPTERO', pista: 'Vuela con hélices', categoria: 'Transporte' },
    { palabra: 'BICICLETA', pista: 'Vehículo de dos ruedas sin motor', categoria: 'Transporte' },
    { palabra: 'AUTOMOVIL', pista: 'Coche de motor', categoria: 'Transporte' },
    { palabra: 'SUBMARINO', pista: 'Navega bajo el agua', categoria: 'Transporte' },
    { palabra: 'LOCOMOTORA', pista: 'Máquina que tira del tren', categoria: 'Transporte' },
    { palabra: 'AMBULANCIA', pista: 'Vehículo de emergencias', categoria: 'Transporte' },
    { palabra: 'MOTOCICLETA', pista: 'Moto grande y potente', categoria: 'Transporte' },
    { palabra: 'PARACAIDAS', pista: 'Para caer lentamente del cielo', categoria: 'Objeto' },

    // ── Electrodomésticos ──
    { palabra: 'REFRIGERADOR', pista: 'Mantiene la comida fría', categoria: 'Electrodoméstico' },
    { palabra: 'VENTILADOR', pista: 'Da aire fresco', categoria: 'Electrodoméstico' },
    { palabra: 'LAVADORA', pista: 'Lava la ropa', categoria: 'Electrodoméstico' },
    { palabra: 'MICROONDAS', pista: 'Calienta comida rápido', categoria: 'Electrodoméstico' },
    { palabra: 'ASPIRADORA', pista: 'Limpia el suelo', categoria: 'Electrodoméstico' },

    // ── Lugares / Escuela ──
    { palabra: 'BIBLIOTECA', pista: 'Lugar con muchos libros', categoria: 'Lugar' },
    { palabra: 'LABORATORIO', pista: 'Donde hacen experimentos', categoria: 'Lugar' },
    { palabra: 'SUPERMERCADO', pista: 'Tienda grande de comida', categoria: 'Lugar' },
    { palabra: 'RESTAURANTE', pista: 'Donde se come pagando', categoria: 'Lugar' },
    { palabra: 'UNIVERSIDAD', pista: 'Escuela para adultos', categoria: 'Lugar' },
    { palabra: 'MATEMATICAS', pista: 'Ciencia de los números', categoria: 'Asignatura' },
    { palabra: 'GEOGRAFIA', pista: 'Estudio de la Tierra', categoria: 'Asignatura' },
    { palabra: 'DICCIONARIO', pista: 'Libro con definiciones', categoria: 'Escuela' },

    // ── Profesiones ──
    { palabra: 'ASTRONAUTA', pista: 'Viaja al espacio', categoria: 'Profesión' },
    { palabra: 'CONSTRUCTOR', pista: 'Persona que construye', categoria: 'Profesión' },
    { palabra: 'ELECTRICISTA', pista: 'Trabaja con cables', categoria: 'Profesión' },
    { palabra: 'VETERINARIO', pista: 'Médico de animales', categoria: 'Profesión' },
    { palabra: 'CARPINTERO', pista: 'Trabaja con madera', categoria: 'Profesión' },
    { palabra: 'BOMBERO', pista: 'Apaga incendios', categoria: 'Profesión' },
    { palabra: 'PERIODISTA', pista: 'Informa las noticias', categoria: 'Profesión' },
    { palabra: 'ARQUITECTO', pista: 'Diseña edificios', categoria: 'Profesión' },

    // ── Naturaleza ──
    { palabra: 'TERREMOTO', pista: 'La tierra tiembla', categoria: 'Naturaleza' },
    { palabra: 'RELAMPAGO', pista: 'Luz eléctrica en tormenta', categoria: 'Naturaleza' },
    { palabra: 'TORMENTA', pista: 'Lluvia fuerte con truenos', categoria: 'Naturaleza' },
    { palabra: 'ARCOIRIS', pista: 'Colores en el cielo tras la lluvia', categoria: 'Naturaleza' },
    { palabra: 'CORDILLERA', pista: 'Cadena de montañas', categoria: 'Naturaleza' },
    { palabra: 'CONSTELACION', pista: 'Grupo de estrellas con forma', categoria: 'Naturaleza' },
    { palabra: 'PENINSULA', pista: 'Tierra rodeada de agua por tres lados', categoria: 'Naturaleza' },
    { palabra: 'ACANTILADO', pista: 'Roca vertical junto al mar', categoria: 'Naturaleza' },

    // ── Comida ──
    { palabra: 'HAMBURGUESA', pista: 'Pan con carne', categoria: 'Comida' },
    { palabra: 'CHOCOLATE', pista: 'Dulce marrón de cacao', categoria: 'Comida' },
    { palabra: 'ESPAGUETI', pista: 'Pasta larga italiana', categoria: 'Comida' },
    { palabra: 'FRAMBUESA', pista: 'Fruta roja del bosque', categoria: 'Comida' },
    { palabra: 'AGUACATE', pista: 'Fruta verde cremosa', categoria: 'Comida' },
    { palabra: 'BERENJENA', pista: 'Vegetal morado', categoria: 'Comida' },
    { palabra: 'ALCACHOFA', pista: 'Vegetal con capas', categoria: 'Comida' },
    { palabra: 'CALABAZA', pista: 'Vegetal naranja de Halloween', categoria: 'Comida' },

    // ── Deportes ──
    { palabra: 'BALONCESTO', pista: 'Deporte con canasta', categoria: 'Deporte' },
    { palabra: 'TAEKWONDO', pista: 'Arte marcial coreano', categoria: 'Deporte' },
    { palabra: 'ESCALADA', pista: 'Subir paredes o montañas', categoria: 'Deporte' },
    { palabra: 'WATERPOLO', pista: 'Deporte de equipo en el agua', categoria: 'Deporte' },

    // ── Otros ──
    { palabra: 'CALENDARIO', pista: 'Muestra los días del mes', categoria: 'Objeto' },
    { palabra: 'TERMOMETRO', pista: 'Mide la temperatura', categoria: 'Objeto' },
    { palabra: 'ENCICLOPEDIA', pista: 'Libro con todo el saber', categoria: 'Escuela' },
    { palabra: 'RASCACIELOS', pista: 'Edificio muy muy alto', categoria: 'Lugar' },
    { palabra: 'SEMAFORO', pista: 'Luz roja, amarilla y verde', categoria: 'Objeto' },
    { palabra: 'CRUCIGRAMAS', pista: 'Juego de palabras cruzadas', categoria: 'Juego' },
    { palabra: 'ORNITORRINCO', pista: 'Mamífero con pico de pato', categoria: 'Animal' },
    { palabra: 'TARANTULA', pista: 'Araña grande y peluda', categoria: 'Animal' },
    { palabra: 'PUERCOESPIN', pista: 'Animal con púas', categoria: 'Animal' },
    { palabra: 'DROMEDARIO', pista: 'Camello de una joroba', categoria: 'Animal' },
    { palabra: 'CATERPILLAR', pista: 'Oruga antes de ser mariposa', categoria: 'Animal' },
    { palabra: 'ELECTRONICO', pista: 'Funciona con electricidad', categoria: 'Tecnología' },
    { palabra: 'CAMPEONATO', pista: 'Competición deportiva', categoria: 'Deporte' },
    { palabra: 'PARACAIDISMO', pista: 'Saltar desde un avión', categoria: 'Deporte' },
    { palabra: 'GUARDABOSQUES', pista: 'Cuida el bosque', categoria: 'Profesión' },
    { palabra: 'FARMACEUTICO', pista: 'Trabaja en la farmacia', categoria: 'Profesión' },
    { palabra: 'PALEONTOLOGIA', pista: 'Estudia los fósiles', categoria: 'Asignatura' },
    { palabra: 'FERROCARRIL', pista: 'Vía por donde va el tren', categoria: 'Transporte' },
    { palabra: 'INVERNADERO', pista: 'Casa de cristal para plantas', categoria: 'Lugar' },
    { palabra: 'OBSERVATORIO', pista: 'Para mirar las estrellas', categoria: 'Lugar' },
    { palabra: 'ARCHIPIELAGO', pista: 'Grupo de islas', categoria: 'Naturaleza' },
    { palabra: 'MANANTIAL', pista: 'Fuente natural de agua', categoria: 'Naturaleza' },
    { palabra: 'PRECIPICIO', pista: 'Caída vertical peligrosa', categoria: 'Naturaleza' },
    { palabra: 'MADRUGADA', pista: 'Las primeras horas del día', categoria: 'Naturaleza' },
    { palabra: 'MERMELADA', pista: 'Dulce de fruta para untar', categoria: 'Comida' },
    { palabra: 'MANTEQUILLA', pista: 'Grasa para untar en el pan', categoria: 'Comida' },
    { palabra: 'BOCADILLO', pista: 'Pan con algo dentro', categoria: 'Comida' },
    { palabra: 'CANDELABRO', pista: 'Soporte para varias velas', categoria: 'Objeto' },
    { palabra: 'DESPERTADOR', pista: 'Suena por la mañana', categoria: 'Objeto' },
    { palabra: 'BINOCULARES', pista: 'Para ver cosas lejanas', categoria: 'Objeto' },
    { palabra: 'IMPERMEABLE', pista: 'Abrigo que no deja pasar agua', categoria: 'Ropa' },
    { palabra: 'ESCENARIO', pista: 'Donde actúan los artistas', categoria: 'Lugar' },
    { palabra: 'ACUARIO', pista: 'Lugar con peces', categoria: 'Lugar' },
    { palabra: 'CATEDRAL', pista: 'Iglesia grande e importante', categoria: 'Lugar' },
    { palabra: 'EXPOSICION', pista: 'Muestra de arte o ciencia', categoria: 'Lugar' }
  ]
};

// ═══ UTILIDADES ═══

// Fisher-Yates shuffle
function shufflePalabras(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

// Genera N palabras aleatorias sin repetir del nivel indicado
// nivel: 'facil' | 'medio' | 'dificil'
function obtenerPalabrasAleatorias(nivel, cantidad) {
  var pool = PALABRAS_LENGUA[nivel] || PALABRAS_LENGUA.facil;
  var shuffled = shufflePalabras(pool);
  // Si piden más de las que hay, repite el pool
  var result = [];
  while (result.length < cantidad) {
    var batch = shufflePalabras(pool);
    result = result.concat(batch);
  }
  return result.slice(0, cantidad);
}
