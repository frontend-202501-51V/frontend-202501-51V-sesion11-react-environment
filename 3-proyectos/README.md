# Creación de Proyectos React

Domina las herramientas para inicializar y gestionar proyectos React de manera eficiente. Esta sección cubre las opciones modernas para establecer la base de tus aplicaciones.

---

## 🎯 Objetivos

- Dominar Create React App y Vite para crear proyectos
- Comprender la estructura básica de archivos
- Utilizar scripts esenciales para desarrollo
- Configurar el entorno de trabajo optimal

---

## 🚀 Herramientas principales

### Create React App

**Herramienta oficial** con configuración cero:

```bash
npx create-react-app mi-proyecto
cd mi-proyecto
npm start
```

### Vite

**Alternativa moderna** ultra-rápida:

```bash
npm create vite@latest mi-proyecto -- --template react
cd mi-proyecto
npm install && npm run dev
```

---

## 📁 Estructura básica

```plain
mi-proyecto/
├── public/          # Archivos estáticos
├── src/
│   ├── components/  # Componentes reutilizables
│   ├── App.js       # Componente principal
│   └── index.js     # Punto de entrada
└── package.json     # Configuración del proyecto
```

---

## ⚡ Scripts esenciales

```bash
npm start      # Servidor de desarrollo
npm run build  # Build para producción
npm test       # Ejecutar tests
npm install    # Instalar dependencias
```

---

## 🔧 Configuración rápida

### Variables de entorno

```bash
# .env
REACT_APP_API_URL=http://localhost:5000
```

### Paths absolutos

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

---

## 📊 Comparación CRA vs Vite

| Aspecto           | Create React App | Vite      |
| ----------------- | ---------------- | --------- |
| **Inicio**        | ~30s             | ~1s       |
| **Configuración** | Cero             | Mínima    |
| **Ideal para**    | Principiantes    | Velocidad |

---

## 📚 Contenido detallado

Esta carpeta incluye guías específicas para:

- **Create React App** - Instalación y configuración completa
- **Vite** - Setup moderno y optimización
- **Estructura de proyecto** - Organización profesional
- **Scripts y comandos** - Automatización del desarrollo

---

Una configuración correcta del proyecto es fundamental para un desarrollo eficiente y escalable en React.
