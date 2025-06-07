// un componente reutilizable debe definirse una sola vez
// y reusarse acorde al contexto
import React from "react"
// aqui se importa los estilos, referencia a los archivos css, scss, etc
import './Boton.css'

// Componentes funcionales (usan funciones - moderna)
export function Boton({ texto, onClick, tipo = 'primary', disabled = false }) {
  return (
    <button className={`btn btn-${tipo} customcss`} onClick={onClick} disabled={disabled}>
      {/* reutilizo el texto */}
      {texto}
    </button>
  )
}

// Componentes de clase, poco usado, forma tradicional
class Card extends React.Component {
  render() {
    const { usuario } = this.props;
    return (<div>hola Card, {usuario}</div>)
  }
}
