// validar como se puede reutilizar un componente almacenandolo en una constante

// el arrow function contiene al componente

// pueden usar declaracion/asignacion de un componente
// cuando quieren EVITAR el efecto hoisting

// ejemplo de hosting:
//
// const isTrue = true;
// function first(){}
//
// ->> al ejecutarse en nodejs/browser
// ->> js cambia la posicion,declaración de tu codigo
//
// function fist() {}
// const isTrue
// const isTrue = true;

// el objetivo de asignar es que se evite usar un componente ANTES de ser declarado

function App() {
  return (
    <div>
      {/* aqui no se podria usar aun por que ConstComponent aun no existe */}
      <ConstComponent></ConstComponent>
    </div>
  )
}

export const ConstComponent = () => {
  return (
    <div>
      <h1>Componente que se almacena en una variable para posteriormente reutilizarlo</h1>
    </div>
  )
}

//
