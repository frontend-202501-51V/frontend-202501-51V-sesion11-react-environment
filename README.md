# Workshop: Introducción a React y Configuración de Entorno

Aprende a crear aplicaciones modernas con React, la biblioteca líder para interfaces de usuario. Este workshop te guiará paso a paso para comprender los fundamentos de React, instalar y configurar tu entorno, y crear tu primera aplicación, combinando teoría, ejemplos prácticos y ejercicios guiados.

---

## 🎯 Objetivos de aprendizaje y metodología

Al finalizar este workshop, serás capaz de:

- **Comprender** qué es React, su historia y ventajas en el desarrollo frontend.
- **Instalar** y configurar el entorno de desarrollo para React.
- **Crear** tu primera aplicación React usando `create-react-app`.
- **Reconocer** la estructura básica de un proyecto React.
- **Aplicar** buenas prácticas desde el inicio.

### Metodología de aprendizaje

- **Explicaciones visuales y ejemplos claros:** Cada concepto se ilustra con diagramas y código.
- **Demostraciones prácticas:** Ejemplos reales explicados paso a paso.
- **Ejercicios interactivos:** Práctica guiada para afianzar los conceptos.
- **Retos de aplicación:** Problemas para resolver de forma autónoma.
- **Proyecto integrador:** Casos de uso reales y ejercicios progresivos.

---

## 📋 Requisitos previos

- Conocimientos básicos de JavaScript.
- Node.js y npm instalados.
- Editor de código (Visual Studio Code recomendado).

---

## 1. ¿Qué es React?

React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario interactivas y eficientes. Permite crear aplicaciones web de una sola página (SPA) mediante componentes reutilizables y un flujo de datos unidireccional.

**Ventajas principales:**

- Componentización y reutilización de código.
- Virtual DOM para actualizaciones eficientes.
- Gran ecosistema y comunidad activa.

---

## 2. Instalación de Node.js y npm

React requiere Node.js y npm (Node Package Manager).

- Descarga Node.js desde [nodejs.org](https://nodejs.org/)
- Verifica la instalación en la terminal:

  ```bash
  node -v
  npm -v
  ```

---

## 3. Crear tu primer proyecto React

Utilizaremos `create-react-app` para iniciar rápidamente.

```bash
npx create-react-app mi-primer-react
cd mi-primer-react
npm start
```

Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

---

## 4. Estructura básica de un proyecto React

- `public/`: Archivos estáticos (index.html, favicon, etc.)
- `src/`: Código fuente de la aplicación (componentes, estilos, etc.)
- `package.json`: Dependencias y scripts del proyecto

---

## 5. Ejercicio guiado

**Ejercicio 3.1:**  
Modifica el archivo `src/App.js` para mostrar tu nombre y una breve presentación.

```jsx
function App() {
  return (
    <div className="App">
      <h1>¡Hola, soy [Tu Nombre]!</h1>
      <p>Esta es mi primera aplicación React 🚀</p>
    </div>
  );
}

export default App;
```

Guarda los cambios y verifica el resultado en el navegador.

---

## 6. Buenas prácticas

- Usa nombres descriptivos para componentes y carpetas.
- Mantén el código limpio y bien indentado.
- Realiza pruebas frecuentes ejecutando `npm start` tras cada cambio.

---

## 🌐 Recursos recomendados

- [Documentación oficial de React](https://react.dev/)
- [Create React App](https://create-react-app.dev/)

---

## 🤝 Contribuciones

Este repositorio es de uso exclusivo interno de Skills4Up. No se aceptan contribuciones externas.

Si eres parte del equipo de Skills4Up y deseas proponer una mejora o corrección:

1. Crea un issue describiendo la mejora o problema.
2. Realiza cambios en una rama con prefijo según el tipo:
   - `feat/` para nuevas funcionalidades
   - `fix/` para correcciones
   - `docs/` para documentación
   - `refactor/` para refactorización
3. Usa mensajes de commit siguiendo el formato `type(scope): message`
4. Envía un Pull Request vinculado al issue original.

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

---
