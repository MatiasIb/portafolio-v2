
import { Presentacion_text } from '../../molecules/Presentacion_Text/Presentacion_text'
import fotoPresentacion from '../../../assets/foto-presentacion.gif'
import fotoMouse from '../../../assets/mouse_gif.gif'

import './presentacion.css'

export const Presentacion = () => {
  return (
    <>
    <div className='presentacion-box'>
        <Presentacion_text />
        <div className='box-image'>
            <img src={fotoPresentacion}/>
        </div>
    </div>
    <div className='transition-box'>
          <img src={fotoMouse}/>
    </div>
    
    </>
  )
}
