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
      {menu ? (
            <div className="burgerMenu" style={{transform: `translateX(${open ? '0' : '100vw'})`, transition: `transform 0.3s` }} >
        <div className="burger" >
          <div className="arrows">
            <p id="arrow">➡️</p>
            <p id="arrow">➡️</p>
            <p id="arrow">➡️</p>
          </div>

          <div className="items">
            <button>Inicio</button>

            <button>Tecnologias</button>
            <button>Proyectos</button>
          </div>
        </div>
      </div>
        ): null

        }

   
    </div>
  );
};
