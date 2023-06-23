
import { PresentacionText } from '../../molecules/PresentacionText/PresentacionText'
import fotoPresentacion from '../../../assets/fotoPresentacion.gif'
import fotoMouse from '../../../assets/mouseGif.gif'

import './Presentacion.css'

export const Presentacion = () => {
  return (
    <>
    <div className='presentacion-box'>
        <PresentacionText />
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
