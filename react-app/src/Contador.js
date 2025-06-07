import { useState } from "react";

export function Contador() {
  // contador es el valor y setContador una funcion para actualizar el contador
  const [contador, setContador] = useState(0);

  return (
    <div>
      {/* imprimimos el contador */}
      <div>{contador}</div>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  )
}
