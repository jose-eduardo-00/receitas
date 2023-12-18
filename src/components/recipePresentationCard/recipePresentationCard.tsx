import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './recipePresentationCard.scss'
import { Link } from "react-router-dom"


const RecipePresentationCard = () => {
    return (
        <Link to={'/receitasDoCard'}>
            <div className="recipe-card">
                <img src="https://placehold.co/250x150" alt="foto da receita" />
                <h2>Nome da receita</h2>
                <h4>Nome do usuário que adicionou a receita</h4>
                <div className="recipe-review">
                    <FontAwesomeIcon icon={faHeart} />
                    <p>número total de avaliações de avaliação</p>
                </div>
            </div>
        </Link>
    )
}

export { RecipePresentationCard }