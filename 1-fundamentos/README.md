# Fundamentos de React

React es una biblioteca de JavaScript desarrollada por Meta (Facebook) para construir interfaces de usuario interactivas y eficientes. Esta sección introduce los conceptos fundamentales necesarios para comenzar tu desarrollo con React.

---

## 🎯 Objetivos

- Comprender qué es React y sus ventajas principales
- Dominar conceptos clave: componentes, JSX, props y state
- Aprender hooks básicos (useState, useEffect)
- Establecer buenas prácticas desde el inicio

---

## ⚛️ ¿Qué es React?

**React es una biblioteca de JavaScript** que se enfoca en crear interfaces de usuario mediante componentes reutilizables y un flujo de datos unidireccional.

### Características principales

**🧩 Basado en componentes**
- Cada parte de la UI es un componente independiente
- Los componentes se pueden reutilizar
- Facilita el mantenimiento y testing

**⚡ Virtual DOM**
- Optimiza actualizaciones comparando cambios
- Mejora significativamente el rendimiento

**🔄 Flujo unidireccional**
- Los datos fluyen de padres a hijos
- Código más predecible y fácil de debuggear

```javascript
// Ejemplo básico de componente React
function WelcomeMessage({ name }) {
  return <h1>¡Hola, {name}!</h1>;
}
```

---

## 🔍 Conceptos fundamentales

### JSX (JavaScript XML)
JSX permite escribir elementos similares a HTML dentro de JavaScript:

```javascript
// JSX - Lo que escribes
const elemento = <h1>¡Hola, mundo!</h1>;

// Reglas importantes:
// ✅ className en lugar de class
<div className="container">

// ✅ Cerrar todos los elementos
<img src="imagen.jpg" alt="Descripción" />

// ✅ Expresiones JavaScript entre llaves
const user = { name: "María", age: 25 };
<p>Nombre: {user.name}</p>
```

### Componentes
Los componentes son bloques de construcción reutilizables:

```javascript
// Componente funcional
function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button 
      className={`btn btn--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Uso del componente
<Button variant="secondary" onClick={handleSave}>
  Guardar
</Button>
```

### Props vs State

**Props (Propiedades):**
- Datos que se pasan de padre a hijo
- Son inmutables dentro del componente hijo

```javascript
// Componente padre pasa props
function App() {
  return (
    <UserCard 
      name="Ana García"
      age={28}
      email="ana@email.com"
    />
  );
}

// Componente hijo recibe props
function UserCard({ name, age, email }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Edad: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}
```

**State (Estado):**
- Datos internos del componente que pueden cambiar
- Se maneja con useState hook

```javascript
import { useState } from 'react';

function Counter() {
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

## 🎯 Hooks básicos

### useState - Manejo de estado

```javascript
function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  
  const addItem = (item) => {
    setItems([...items, item]);
    setTotal(total + item.price);
  };
  
  return (
    <div>
      <p>Items: {items.length}</p>
      <p>Total: ${total}</p>
      <button onClick={() => addItem({ id: 1, price: 10 })}>
        Agregar producto
      </button>
    </div>
  );
}
```

### useEffect - Efectos secundarios

```javascript
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, [userId]); // Se ejecuta cuando userId cambia
  
  if (loading) return <div>Cargando...</div>;
  
  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
}
```

---

## 🎨 Manejo de eventos y estilos

### Eventos en React

```javascript
const FormExample = () => {
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Valor enviado:', inputValue);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe algo..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
};
```

### Estilos en React

```javascript
// 1. Clases CSS
import './Button.css';
<button className="btn btn--primary">Click</button>

// 2. Estilos inline
const cardStyle = {
  padding: '1rem',
  borderRadius: '8px',
  backgroundColor: '#f0f8ff'
};
<div style={cardStyle}>Contenido</div>

// 3. Clases condicionales
const alertClasses = `alert ${type === 'error' ? 'alert--error' : 'alert--info'}`;
<div className={alertClasses}>{message}</div>
```

---

## 📈 Buenas prácticas

### Estructura recomendada

```plain
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas principales
├── hooks/         # Custom hooks
├── utils/         # Funciones auxiliares
├── App.js         # Componente principal
└── index.js       # Punto de entrada
```

### Nomenclatura

```javascript
// ✅ Componentes en PascalCase
const UserProfile = () => {};

// ✅ Variables y funciones en camelCase
const userName = 'Ana';
const handleClick = () => {};

// ✅ Constantes en UPPER_CASE
const API_BASE_URL = 'https://api.example.com';
```

---

## 🐛 Errores comunes

| Error                                       | Solución                                          |
| ------------------------------------------- | ------------------------------------------------- |
| **Objects are not valid as React child**    | Acceder a propiedades específicas del objeto      |
| **Each child should have a unique key**     | Agregar prop `key` única en listas                |
| **Cannot read property 'map' of undefined** | Verificar que el array existe antes de usar `map` |

```javascript
// ❌ Error común
{items.map(item => <div>{item.name}</div>)}

// ✅ Solución
{(items || []).map(item => <div key={item.id}>{item.name}</div>)}
```

---

## 📚 Contenido detallado

Esta carpeta contiene guías específicas sobre:

- **¿Qué es React?** - Definición, ventajas y casos de uso
- **Historia y evolución** - Cronología y versiones importantes  
- **Comparación con frameworks** - React vs Vue vs Angular
- **Conceptos clave** - Virtual DOM, componentes y arquitectura

Cada archivo profundiza en aspectos específicos de React, proporcionando ejemplos prácticos y ejercicios para afianzar el conocimiento de los fundamentos de esta biblioteca.

---

React revolutiona el desarrollo de interfaces mediante componentes reutilizables y un Virtual DOM eficiente. Dominar estos fundamentos te proporcionará una base sólida para crear aplicaciones modernas, escalables y mantenibles.
