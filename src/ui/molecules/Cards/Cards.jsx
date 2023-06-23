
import './Cards.css'

export const Cards = ({title, img}) => {
  return (
    <div className="card-box">
      <h5>{title}</h5>
      <img src={img} alt="Tecnologias"/>
    </div>
  )
}
