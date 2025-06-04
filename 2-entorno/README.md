# Configuración del Entorno

Guía concisa para establecer un entorno de desarrollo React profesional y eficiente. Esta sección cubre la instalación y configuración de herramientas esenciales para desarrollar aplicaciones React modernas.

---

## 🎯 Objetivos

- Configurar un entorno de desarrollo completo para React
- Instalar y optimizar herramientas esenciales
- Establecer flujo de trabajo productivo
- Resolver problemas comunes de configuración

---

## 📋 Herramientas esenciales

### Node.js y npm

**Runtime de JavaScript** y gestor de paquetes para ejecutar React fuera del navegador:

```bash
# Verificar instalación
node --version  # v18.0.0+
npm --version   # v8.0.0+

# Instalación recomendada con nvm
nvm install --lts
nvm use --lts
```

### Editor de código

**Visual Studio Code** con extensiones React:

- ES7+ React/Redux snippets
- Prettier (formateo automático)
- ESLint (detección de errores)
- Auto Rename Tag

### React Developer Tools

**Extensión de navegador** para debugging y profiling de componentes React.

### Git

**Control de versiones** para gestionar el código del proyecto.

---

## ⚡ Configuración rápida

### 1. Requisitos mínimos

- **SO:** Windows 10+, macOS 10.15+, Ubuntu 18.04+
- **RAM:** 4GB mínimo (8GB recomendado)
- **Navegador:** Chrome 90+, Firefox 88+

### 2. Instalación básica

```bash
# 1. Instalar Node.js desde nodejs.org (versión LTS)
# 2. Verificar instalación
node --version && npm --version

# 3. Instalar VS Code desde code.visualstudio.com
# 4. Instalar extensiones React en VS Code
# 5. Instalar React DevTools en navegador
```

### 3. Verificación del entorno

```bash
# Crear proyecto de prueba
npx create-react-app test-app
cd test-app
npm start

# Debe abrir http://localhost:3000 con aplicación React
```

---

## 🔧 Configuración optimizada

### VS Code settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.tabSize": 2
}
```

### Prettier (.prettierrc)

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

## 🐛 Problemas comunes

| Problema                      | Solución rápida                         |
| ----------------------------- | --------------------------------------- |
| **npm no encontrado**         | Reinstalar Node.js y verificar PATH     |
| **Puerto 3000 ocupado**       | `PORT=3001 npm start`                   |
| **Permisos denegados**        | Usar nvm en lugar de instalación global |
| **React DevTools no aparece** | Verificar modo desarrollo y refrescar   |

---

## 📚 Contenido detallado

Esta carpeta contiene guías paso a paso para:

- **Requisitos del sistema:** Especificaciones y compatibilidad
- **Instalación de Node.js:** Métodos de instalación y configuración
- **Configuración del editor:** VS Code optimizado para React
- **Herramientas de desarrollo:** Debugging y análisis de rendimiento

Cada archivo proporciona instrucciones detalladas, ejemplos prácticos y soluciones a problemas específicos para establecer un entorno de desarrollo React completo y profesional.

---

Un entorno bien configurado es la base para un desarrollo React eficiente. Con estas herramientas correctamente instaladas y configuradas, estarás listo para crear aplicaciones React modernas de manera productiva.
