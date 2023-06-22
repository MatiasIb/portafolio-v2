import React from 'react'

import './NavBar.css'

export const NavBar = () => {
  return (
    <div className='navBar'>
        <h1>Matias Ibañez</h1>
        <ul className='itemNav'>
            <li> <button >Inicio</button> </li>
            <li> <button >Tecnologias</button> </li>
            <li> <button >Proyectos</button> </li>
        </ul>
    </div>
  )
}
