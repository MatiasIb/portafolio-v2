import "./SobreMi.css";

import curriculum from "../../../assets/curriculum.pdf";

export const SobreMi = () => {


  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = curriculum;
    link.download = "curriculum.pdf";
    link.click();
  }

  return (
    <div className="SobreMi-box">
        <div className="SobreMi-Text">
        <h3>Sobre mí</h3>
        <p>
        Soy Analista Programador graduado de Inacap Valparaíso cuento con experiencia en el desarrollo de software en los ámbitos de front-end, back-end y mobile.
        Me destaco por mi habilidad para trabajar en equipo, mi capacidad autodidacta y un sólido enfoque en el análisis.
        En mi trayectoria laboral, siempre busco la mejora continua, aplicando buenas prácticas y manteniéndome en constante aprendizaje.
        Disfruto asumir nuevos desafíos y adquirir conocimientos en nuevas tecnologías, lo cual considero fundamental para mi crecimiento profesional.
        <br/>
        <strong>
        Si necesitas más detalles o información adicional, no dudes en preguntar. ¡Estoy aquí para ayudarte!
        </strong>
        </p>
        <button onClick={ downloadFile }>
        Descargar CV
        </button>

      </div>
      <div className="SobreMi-Img">
        <img src="https://img.freepik.com/vector-premium/personaje-estilo-pop-art-perfil-hombre-enojado_18591-69658.jpg" alt="" />
      </div>
    
    </div>
  );
};
