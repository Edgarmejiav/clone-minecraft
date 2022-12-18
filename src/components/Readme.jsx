import { useState } from 'react'

export const Readme = () => {
  const [isReadmeOpen, setIsReadmeOpen] = useState(true)
  if (!isReadmeOpen) return null
  return (<div className="readme">
    <h1> Instrucciones </h1>
    <h4> 1. Click crea nuevo cubo </h4>
    <h4> 2. alt + click elimina cubo </h4>
    <h4> 3. [ Número del 1-5 cambia textura] </h4>
    <h4> *.  Escape salir del juego</h4>
      <h2>

<a href="https://github.com/Edgarmejiav/clone-minecraft" target="_blank">  código  minecraft:</a>
      </h2>



    <button onClick={()=> setIsReadmeOpen(false)}>
      JUGAR
    </button>
  </div>)
}