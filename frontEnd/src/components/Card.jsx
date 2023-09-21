import Poster from '../assets/poster.jpg'
import './Card.css'

const Card = () => {
    const msg = `Olá`
    const title = "nome do filme"

  return (
    <div className="card-container">
        <img src={Poster} alt="" />

        <div className="card-description">
            <h1>{title}</h1>
            <p>{msg}</p>
        </div>
    </div>
  )
}

export default Card