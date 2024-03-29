import React, { useState, useEffect } from "react";

import "./NavBar.css";

export const NavBar = () => {

  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleIcon = () => {
    setOpen(!open);
  }
 
 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 850) {
        setMenu(true);
      } else {
        setMenu(false);
      }
    };

    handleResize();


    // Agrega un event listener para detectar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpia el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    
    <div className="Nav">
      <div className="navBar">
        <h1>Matias Ibañez</h1>
        {!menu ? (  <ul className="itemNav">
          <li>
            {" "}
            <button>Inicio</button>{" "}
          </li>
          <li>
            {" "}
            <button>Tecnologias</button>{" "}
          </li>
          <li>
            {" "}
            <button>Proyectos</button>{" "}
          </li>
        </ul>) :( <div className={`hamburger-icon ${open ? 'active' : ''}`} onClick={toggleIcon}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>)}
      </div>
      {open ? (
            <div className="burgerMenu" style={{transform: `translateX(${open ? '0' : '100vw'})`, transition: `transform 0.3s` }} >
        <div className="burger" >
          <div className="arrows">
          <div className="row">
          <p id="arrow">➡️</p>
            <button>Inicio</button>
          </div>

          <div className="row">
          <p id="arrow">➡️</p>
            <button>Tecnologias</button>
          </div>

          <div className="row">
          <p id="arrow">➡️</p>
            <button>Proyectos</button>
          </div>

          
          
          </div>
        </div>
      </div>
        ): null

        }

   
    </div>
  );
};
