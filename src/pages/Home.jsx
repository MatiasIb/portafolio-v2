
import { NavBar } from '../ui/organism/NavBar/NavBar'
import { Presentacion } from '../ui/organism/Presentacion/Presentacion'
import { SobreMi } from '../ui/organism/SobreMi/SobreMi'
import { Tecnologias } from '../ui/organism/Tecnologias/Tecnologias'

export const Home = () => {
  return (
    <>
    <NavBar />
    <Presentacion />
    <SobreMi />
    <Tecnologias /> 
    </>
  )
}
