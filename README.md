# Workshop: Introducción a React y Configuración de Entorno

Aprende a crear aplicaciones modernas con React, la biblioteca líder para interfaces de usuario. Este workshop te guiará paso a paso para comprender los fundamentos de React, instalar y configurar tu entorno de desarrollo, y crear tu primera aplicación, combinando teoría, ejemplos prácticos y ejercicios guiados, siguiendo una estructura didáctica y progresiva.

---

## 🎯 Objetivos de aprendizaje y metodología

Al finalizar este workshop, serás capaz de:

- **Comprender** qué es React, su historia, evolución y ventajas en el desarrollo frontend moderno.
- **Instalar** y configurar correctamente el entorno de desarrollo para React.
- **Crear** tu primera aplicación React usando diferentes herramientas y métodos.
- **Reconocer** la estructura básica de un proyecto React y sus archivos principales.
- **Aplicar** buenas prácticas desde el inicio para un desarrollo eficiente.
- **Utilizar** herramientas de desarrollo y debugging para React.

### Metodología de aprendizaje

- **Explicaciones visuales y ejemplos claros:** Cada concepto se ilustra con diagramas, código y casos de uso reales.
- **Demostraciones prácticas:** Ejemplos reales explicados paso a paso con capturas de pantalla.
- **Ejercicios interactivos:** Práctica guiada para afianzar los conceptos fundamentales.
- **Retos de aplicación:** Problemas para resolver de forma autónoma y creativa.
- **Proyecto integrador:** Casos de uso reales y ejercicios progresivos que simulan el desarrollo profesional.

---

## 🗺️ Mapa de progresión de conocimientos

### Bloque 1: Fundamentos de React

- [¿Qué es React y por qué usarlo?](1-fundamentos/1-que-es-react.md)
- [Historia y evolución de React](1-fundamentos/2-historia-evolucion.md)
- [Comparación con otras bibliotecas y frameworks](1-fundamentos/3-comparacion-frameworks.md)
- [Conceptos clave: Virtual DOM, componentes y estado](1-fundamentos/4-conceptos-clave.md)

### Bloque 2: Configuración del Entorno de Desarrollo

- [Requisitos del sistema y herramientas necesarias](2-entorno/1-requisitos-sistema.md)
- [Instalación de Node.js, npm y herramientas auxiliares](2-entorno/2-instalacion-nodejs.md)
- [Configuración del editor de código y extensiones](2-entorno/3-configuracion-editor.md)
- [Herramientas de desarrollo y debugging](2-entorno/4-herramientas-desarrollo.md)

### Bloque 3: Creación de Proyectos React

- [Create React App: instalación y uso](3-proyectos/1-create-react-app.md)
- [Vite: alternativa moderna y rápida](3-proyectos/2-vite-react.md)
- [Estructura de archivos y carpetas](3-proyectos/3-estructura-proyecto.md)
- [Scripts disponibles y comandos útiles](3-proyectos/4-scripts-comandos.md)

### Bloque 4: Primeros Pasos con React

- [Tu primer componente React](4-primeros-pasos/1-primer-componente.md)
- [Entendiendo JSX básico](4-primeros-pasos/2-jsx-basico.md)
- [Modificando la aplicación inicial](4-primeros-pasos/3-modificar-app.md)
- [Buenas prácticas desde el inicio](4-primeros-pasos/4-buenas-practicas.md)

---

## 📚 Rutas de aprendizaje y práctica guiada

La ruta de aprendizaje está organizada en bloques temáticos progresivos.  
Cada bloque cuenta con archivos que explican los conceptos paso a paso, con ejemplos prácticos y ejercicios. Explora cada bloque para avanzar de lo fundamental a lo aplicado:

- **[Fundamentos de React](1-fundamentos/README.md):**  
  Comprende qué es React, su propósito y ventajas en el desarrollo moderno.

- **[Configuración del Entorno](2-entorno/README.md):**  
  Aprende a configurar tu entorno de desarrollo de forma profesional.

- **[Creación de Proyectos](3-proyectos/README.md):**  
  Domina las herramientas para crear y gestionar proyectos React.

- **[Primeros Pasos](4-primeros-pasos/README.md):**  
  Construye tu primera aplicación y entiende los conceptos básicos.

En cada bloque encontrarás:

- Explicaciones claras y orientadas a resultados.
- Ejercicios prácticos y retos para afianzar los conceptos.
- Buenas prácticas para escribir código limpio y eficiente.
- Recursos adicionales y referencias útiles.

---

## 📋 Requisitos previos

### Conocimientos técnicos

- **JavaScript moderno (ES6+):** Variables, funciones, arrays, objetos, destructuring.
- **HTML y CSS:** Estructura básica, selectores, responsive design.
- **Línea de comandos:** Navegación básica y ejecución de comandos.
- **Git (opcional pero recomendado):** Control de versiones básico.

### Software necesario

- **Sistema operativo:** Windows 10+, macOS 10.15+, o Linux Ubuntu 18.04+
- **Navegador moderno:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Memoria RAM:** Mínimo 4GB, recomendado 8GB o más
- **Espacio en disco:** Al menos 2GB libres para herramientas y proyectos

### Herramientas que instalaremos

- **Node.js:** Versión 18.0 o superior (LTS recomendada)
- **npm:** Incluido con Node.js
- **Editor de código:** Visual Studio Code (recomendado)
- **Git:** Para control de versiones

---

## 🚀 Inicio rápido

### Verificación previa

Antes de comenzar, verifica que tienes Node.js instalado:

```bash
node --version
npm --version
```

Si no los tienes instalados, ve a la sección [Instalación de Node.js](2-entorno/instalacion-nodejs.md).

### Crear tu primera aplicación React

```bash
# Crear nueva aplicación
npx create-react-app mi-primera-app-react

# Navegar al directorio
cd mi-primera-app-react

# Iniciar el servidor de desarrollo
npm start
```

Tu aplicación estará disponible en `http://localhost:3000`.

### Estructura inicial del proyecto

```plain
mi-primera-app-react/
├── public/
│   ├── index.html          # Página HTML principal
│   ├── favicon.ico         # Icono de la aplicación
│   └── manifest.json       # Configuración PWA
├── src/
│   ├── App.js              # Componente principal
│   ├── App.css             # Estilos del componente App
│   ├── index.js            # Punto de entrada de React
│   └── index.css           # Estilos globales
├── package.json            # Dependencias y scripts
└── README.md               # Documentación del proyecto
```

---

## 💡 Conceptos fundamentales

### ¿Qué es React?

React es una **biblioteca de JavaScript** desarrollada por Meta (Facebook) para construir interfaces de usuario interactivas y eficientes. Se enfoca en crear aplicaciones web de una sola página (SPA) mediante componentes reutilizables y un flujo de datos unidireccional.

### Características principales

**🧩 Basado en componentes**

- Cada parte de la UI es un componente independiente
- Los componentes se pueden reutilizar en diferentes partes de la aplicación
- Facilita el mantenimiento y testing del código

**⚡ Virtual DOM**

- React crea una representación virtual del DOM en memoria
- Optimiza las actualizaciones comparando cambios
- Mejora significativamente el rendimiento

**🔄 Flujo de datos unidireccional**

- Los datos fluyen desde componentes padres hacia hijos
- Hace el código más predecible y fácil de debuggear
- Facilita el seguimiento de cambios en la aplicación

**🛠️ Ecosistema robusto**

- Gran comunidad y soporte activo
- Abundantes librerías y herramientas complementarias
- Amplia documentación y recursos de aprendizaje

### Ventajas de usar React

| Ventaja           | Descripción                  | Beneficio                                |
| ----------------- | ---------------------------- | ---------------------------------------- |
| **Reutilización** | Componentes modulares        | Menos código duplicado                   |
| **Performance**   | Virtual DOM optimizado       | Aplicaciones más rápidas                 |
| **Flexibilidad**  | Solo la capa de vista        | Se integra con cualquier backend         |
| **Comunidad**     | Ecosistema maduro            | Soporte y recursos abundantes            |
| **Herramientas**  | DevTools avanzadas           | Debugging eficiente                      |
| **Escalabilidad** | Arquitectura component-based | Fácil mantenimiento en proyectos grandes |

---

## 🛠️ Herramientas del ecosistema React

### Herramientas de desarrollo

**React Developer Tools**

- Extensión para navegador que permite inspeccionar componentes
- Visualizar el árbol de componentes y sus props/state
- Profiler para medir performance

**Create React App**

- Herramienta oficial para crear proyectos React
- Configuración automática de Webpack, Babel y ESLint
- Ideal para proyectos nuevos y aprendizaje

**Vite**

- Herramienta de build moderna y rápida
- Hot Module Replacement (HMR) instantáneo
- Alternativa más rápida a Create React App

### Librerías complementarias

**Gestión de estado**

- Redux: Para aplicaciones complejas
- Zustand: Alternativa ligera y simple
- Context API: Nativo de React

**Routing**

- React Router: Navegación en SPAs
- Next.js Router: Para aplicaciones full-stack

**Estilos**

- Styled Components: CSS-in-JS
- Emotion: Alternativa a Styled Components
- Tailwind CSS: Utility-first CSS framework

---

## 📖 Ejercicios prácticos

### Ejercicio 1: Configuración del entorno

**Objetivo:** Configurar correctamente el entorno de desarrollo para React.

**Pasos:**

1. **Verificar Node.js y npm:**

   ```bash
   node --version  # Debe mostrar v18.0 o superior
   npm --version   # Debe mostrar v8.0 o superior
   ```

2. **Instalar React Developer Tools:**
   - Ve a Chrome Web Store o Firefox Add-ons
   - Busca "React Developer Tools"
   - Instala la extensión oficial

3. **Configurar VS Code (si lo usas):**
   - Instala la extensión "ES7+ React/Redux/React-Native snippets"
   - Instala "Auto Rename Tag"
   - Instala "Bracket Pair Colorizer"

### Ejercicio 2: Tu primera aplicación React

**Objetivo:** Crear y personalizar tu primera aplicación React.

**Pasos:**

1. **Crear el proyecto:**

   ```bash
   npx create-react-app mi-portfolio
   cd mi-portfolio
   npm start
   ```

2. **Modificar App.js:**

```jsx
function App() {
  const nombre = "Tu Nombre";
  const profesion = "Frontend Developer";
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Hola! Soy {nombre}</h1>
        <p>Especialista en {profesion}</p>
        <p>Esta es mi primera aplicación React 🚀</p>
        <div>
          <h2>Tecnologías que estoy aprendiendo:</h2>
          <ul>
            <li>React</li>
            <li>JavaScript ES6+</li>
            <li>HTML5 & CSS3</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
```

3. **Personalizar los estilos en App.css:**

```css
.App {
  text-align: center;
}

.App-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.App-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.App-header ul {
  list-style: none;
  padding: 0;
}

.App-header li {
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}
```

### Ejercicio 3: Explorar la estructura del proyecto

**Objetivo:** Entender cada archivo y carpeta del proyecto React.

**Tareas:**

1. **Analiza package.json:**
   - Identifica las dependencias principales
   - Revisa los scripts disponibles
   - Entiende la diferencia entre dependencies y devDependencies

2. **Examina public/index.html:**
   - Localiza el div con id="root"
   - Entiende cómo React se conecta con el HTML

3. **Estudia src/index.js:**
   - Ve cómo se renderiza el componente App
   - Entiende la importación de React y ReactDOM

4. **Experimenta con cambios:**
   - Modifica el título en index.html
   - Cambia el favicon.ico
   - Agrega meta tags para SEO

---

## 🔧 Comandos útiles

### Scripts de npm

```bash
# Iniciar servidor de desarrollo
npm start

# Crear build para producción
npm run build

# Ejecutar tests
npm test

# Eyectar configuración (irreversible)
npm run eject

# Instalar nueva dependencia
npm install nombre-paquete

# Instalar dependencia de desarrollo
npm install --save-dev nombre-paquete

# Actualizar dependencias
npm update

# Verificar vulnerabilidades
npm audit

# Corregir vulnerabilidades automáticamente
npm audit fix
```

### Comandos de desarrollo

```bash
# Crear nuevo proyecto con npm
npx create-react-app nombre-proyecto

# Crear nuevo proyecto con yarn
yarn create react-app nombre-proyecto

# Crear proyecto con Vite
npm create vite@latest nombre-proyecto -- --template react

# Navegar al proyecto
cd nombre-proyecto

# Abrir en VS Code
code .

# Ver información del proyecto
npm info

# Limpiar cache de npm
npm cache clean --force
```

---

## 🎨 Buenas prácticas desde el inicio

### Estructura de archivos

```plain
src/
├── components/          # Componentes reutilizables
│   ├── Header/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   └── index.js
│   └── Button/
│       ├── Button.js
│       ├── Button.css
│       └── index.js
├── pages/              # Páginas/vistas principales
│   ├── Home/
│   ├── About/
│   └── Contact/
├── styles/             # Estilos globales
│   ├── globals.css
│   └── variables.css
├── utils/              # Funciones auxiliares
├── hooks/              # Custom hooks
└── constants/          # Constantes de la aplicación
```

### Convenciones de nomenclatura

**Componentes:**

- Usar PascalCase: `UserProfile.js`
- Nombres descriptivos: `ProductCard.js`, no `Card.js`
- Un componente por archivo

**Archivos y carpetas:**

- Carpetas en camelCase: `userProfile/`
- Archivos CSS igual que el componente: `UserProfile.css`
- Index files para exports limpios

**Variables y funciones:**

- camelCase: `userName`, `handleClick`
- Funciones descriptivas: `handleSubmitForm`, no `submit`
- Constantes en UPPER_CASE: `API_BASE_URL`

### Organización del código

```jsx
// ✅ Buena estructura de componente
import React from 'react';
import './UserCard.css';

const UserCard = ({ user, onEdit, onDelete }) => {
  // Lógica del componente
  const handleEdit = () => {
    onEdit(user.id);
  };

  // Render
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <div className="user-card__actions">
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => onDelete(user.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default UserCard;
```

### Performance básico

```jsx
// ✅ Evitar crear objetos en render
const MyComponent = () => {
  const buttonStyle = { color: 'blue' }; // ❌ Se crea en cada render
  
  return <button style={buttonStyle}>Click me</button>;
};

// ✅ Mejor práctica
const buttonStyle = { color: 'blue' }; // ✅ Se crea una vez

const MyComponent = () => {
  return <button style={buttonStyle}>Click me</button>;
};
```

---

## 🐛 Resolución de problemas comunes

### Error: "Module not found"

**Problema:** No se encuentra un módulo o componente.

**Soluciones:**

```bash
# Verificar que la dependencia esté instalada
npm list nombre-paquete

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# Verificar la ruta de importación
import Component from './components/Component'; // Ruta relativa correcta
```

### Error: "Port 3000 is already in use"

**Problema:** El puerto 3000 está siendo usado por otro proceso.

**Soluciones:**

```bash
# Usar otro puerto
PORT=3001 npm start

# O en Windows
set PORT=3001 && npm start

# Matar proceso en puerto 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# En Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Error: "React must be in scope when using JSX"

**Problema:** React no está importado (en versiones antiguas).

**Solución:**

```jsx
// ✅ Asegúrate de importar React
import React from 'react';

const Component = () => {
  return <div>Hello World</div>;
};
```

### Warning: "Each child should have a unique key prop"

**Problema:** Elementos en listas sin prop `key`.

**Solución:**

```jsx
// ❌ Sin key
{items.map(item => <div>{item.name}</div>)}

// ✅ Con key única
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

---

## 🌐 Recursos recomendados

### Documentación oficial

- **[React Documentation](https://react.dev/)** - Documentación oficial más actualizada
- **[Create React App](https://create-react-app.dev/)** - Guía completa de CRA
- **[React DevTools](https://react.dev/learn/react-developer-tools)** - Herramientas de desarrollo

### Tutoriales y cursos

- **[React Tutorial Oficial](https://react.dev/learn/tutorial-tic-tac-toe)** - Tutorial interactivo paso a paso
- **[Scrimba React Course](https://scrimba.com/learn/learnreact)** - Curso interactivo gratuito
- **[FreeCodeCamp React](https://www.freecodecamp.org/learn/front-end-development-libraries/#react)** - Certificación gratuita

### Herramientas útiles

- **[React Snippets for VS Code](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)** - Snippets para mayor productividad
- **[Vite](https://vitejs.dev/)** - Alternativa rápida a Create React App
- **[CodeSandbox](https://codesandbox.io/)** - IDE online para React

### Comunidad y soporte

- **[Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)** - Preguntas y respuestas
- **[Reddit r/reactjs](https://www.reddit.com/r/reactjs/)** - Comunidad activa
- **[Discord Reactiflux](https://discord.gg/reactiflux)** - Chat en tiempo real

---

## 🤝 Contribuciones

Este repositorio es de uso exclusivo interno de Skills4Up. No se aceptan contribuciones externas.

Si eres parte del equipo de Skills4Up y deseas proponer una mejora o corrección:

1. **Crea un issue** describiendo la mejora o problema detectado.
2. **Realiza cambios** en una rama con prefijo según el tipo:
   - `feat/` para nuevas funcionalidades
   - `fix/` para correcciones
   - `docs/` para documentación
   - `refactor/` para refactorización
3. **Usa mensajes de commit** siguiendo el formato `type(scope): message`
4. **Envía un Pull Request** vinculado al issue original.

Todas las contribuciones internas incluirán los créditos correspondientes.

---

## 📜 Licencia

Copyright (c) 2024 Skills4Up

Todos los derechos reservados.

Este material es propiedad exclusiva de Skills4Up. Queda prohibida su reproducción, distribución, comunicación pública o transformación, total o parcial, sin la autorización expresa y por escrito de Skills4Up. El uso de este material está restringido únicamente a fines internos de Skills4Up.

Para autorizaciones especiales, contacta a [info@skills4up.com](mailto:info@skills4up.com).

---

## 🧩 ¿Cómo usar este archivo como contexto para otros temas?

- **Estructura:** Cada sección y ejemplo muestra el código relevante y el contexto necesario para comprenderlo.
- **Progresión:** Los contenidos avanzan de lo más simple a situaciones más complejas y frecuentes en el desarrollo profesional.
- **Aplicación:** Usa este formato para enseñar otros temas de React (componentes, hooks, consumo de APIs, etc.), mostrando siempre ejemplos claros, incrementando la dificultad y explicando el contexto de uso.
- **Recomendación:** Para cada nuevo tema, inicia con una breve definición, luego presenta ejemplos básicos y avanza hacia casos de uso más complejos o frecuentes en el desarrollo profesional.
- **Importante:** Solo utiliza conceptos del tema que se está enseñando. Evita incluir conceptos más avanzados o que aún no se hayan visto, para no generar confusión y asegurar el aprendizaje progresivo.
