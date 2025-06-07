export function Lista() {
  const titulo = 'Lista';
  const items = ['React', 'JSX', 'CSS', 'tailwind'];
  // mostrará la lista o no
  const mostrarLista = true;

  return (
    <div className="app"   >
      <h1>{titulo}</h1>

      {/* operador cortocircuito */}
      {/* if condicionales */}
      {/* cuando haya un FALSE se corta */}
      {/* {  if(  validaUser() &&  validaConexion() && ingresa()     ) { console.log('')}  } */}

      {mostrarLista && (
        <ul>
          {items.map((item, index) => (
            // el atributo key es mandatorio en react
            <li key={index} >   {item}  </li>
          ))}
        </ul>
      )}

    </div>
  )

}
