import './FechaActual.css';

export function FechaActual() {
  // aqui generariamos la logica

  // dentro de un componente tambien podemos agregar logica (precisa)
  const mensaje = 'hola desde la fecha actual'
  const obtenerFecha = () => new Date().toLocaleDateString();

  return (
    <div>
      <h1>{mensaje}</h1>
      <p>Fecha Actual: {obtenerFecha()}    </p>
    </div>
  )
}

export function FechaActualUpdated() {
  // Función para obtener la fecha formateada
  const obtenerFecha = () => {
    const fecha = new Date();
    return fecha.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Función para obtener la hora
  const obtenerHora = () => {
    const fecha = new Date();
    return fecha.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // Función para obtener el saludo según la hora
  const obtenerSaludo = () => {
    // acorde a la hora muestra el saludo
    const hora = new Date().getHours();
    if (hora < 12) return 'Buenos días';
    if (hora < 18) return 'Buenas tardes';
    return 'Buenas noches';
  };

  return (
    <div className="fecha-actual-container">
      <div className="fecha-card">
        <div className="fecha-header">
          <div className="saludo-icon">🌅</div>
          <h2 className="saludo-texto">{obtenerSaludo()}</h2>
        </div>

        <div className="fecha-content">
          <div className="fecha-info">
            <div className="fecha-principal">
              <span className="fecha-label">📅 Fecha</span>
              <span className="fecha-valor">{obtenerFecha()}</span>
            </div>

            <div className="hora-info">
              <span className="hora-label">🕐 Hora</span>
              <span className="hora-valor">{obtenerHora()}</span>
            </div>
          </div>
        </div>

        <div className="fecha-footer">
          <div className="timezone-info">
            <small>Zona horaria: {Intl.DateTimeFormat().resolvedOptions().timeZone}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
