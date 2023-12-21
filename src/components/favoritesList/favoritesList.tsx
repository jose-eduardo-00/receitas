import { RecipePresentationCard } from "../recipePresentationCard/recipePresentationCard"
import './favoritesList.scss'


const FavoritesList = () => {
    return (
        <section className="favorites">
            <h1>Lista de Favoritos</h1>
            <section className="cards-list">
                <RecipePresentationCard />
                <RecipePresentationCard />
                <RecipePresentationCard />
                <RecipePresentationCard />
            </section>
        </section>
    )
}

export { FavoritesList }