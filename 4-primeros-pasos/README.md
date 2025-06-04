# Primeros Pasos con React

Construye tu primera aplicación React y domina los conceptos básicos. Esta sección te guía desde crear componentes hasta establecer buenas prácticas de desarrollo.

---

## 🎯 Objetivos

- Crear tu primer componente React
- Dominar JSX básico
- Modificar la aplicación inicial
- Establecer buenas prácticas

---

## 🧩 Primer componente

### Componente básico

```javascript
function Saludo() {
  return <h1>¡Hola, mundo!</h1>;
}
```

### Con props

```javascript
function SaludoPersonalizado({ nombre }) {
  return <h1>¡Hola, {nombre}!</h1>;
}
```

### Con estado

```javascript
import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

---

## 📝 JSX básico

### Reglas fundamentales

```javascript
// ✅ className en lugar de class
<div className="container">

// ✅ Cerrar elementos
<img src="imagen.jpg" alt="Descripción" />

// ✅ Expresiones JavaScript
const usuario = { nombre: "Ana" };
<h1>Hola, {usuario.nombre}</h1>
```

### Renderizado de listas

```javascript
{tareas.map(tarea => (
  <li key={tarea.id}>{tarea.texto}</li>
))}
```

---

## 🔧 Modificar aplicación inicial

```javascript
import { useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('¡Bienvenido!');
  
  return (
    <div className="App">
      <h1>{mensaje}</h1>
      <button onClick={() => setMensaje('¡React es genial!')}>
        Cambiar mensaje
      </button>
    </div>
  );
}
```

---

## 📋 Buenas prácticas

### Nomenclatura

```javascript
// ✅ Componentes en PascalCase
const UserProfile = () => {};

// ✅ Funciones con 'handle'
const handleClick = () => {};

// ✅ Estado descriptivo
const [isLoading, setIsLoading] = useState(false);
```

### Estructura de componente

```javascript
const Component = ({ props }) => {
  // 1. Hooks y estado
  // 2. Funciones
  // 3. Renderizado condicional
  // 4. JSX principal
};
```

---

## 🐛 Errores comunes

| Error                                | Solución                          |
| ------------------------------------ | --------------------------------- |
| **Objects not valid as React child** | Acceder a propiedades específicas |
| **Missing key prop**                 | Agregar `key` única en listas     |
| **Cannot read map of undefined**     | Verificar array existe            |

---

## 📚 Contenido detallado

Esta carpeta contiene guías para:

- **Primer componente** - Creación y estructura básica
- **JSX básico** - Sintaxis y reglas
- **Modificar aplicación** - Personalización inicial
- **Buenas prácticas** - Convenciones recomendadas

---

Dominar estos fundamentos es esencial para construir una base sólida en React.
