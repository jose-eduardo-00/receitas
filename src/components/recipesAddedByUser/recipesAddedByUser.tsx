import { RecipePresentationCard } from "../recipePresentationCard/recipePresentationCard"
import './recipesAddedByUser.scss'


const RecipesAddedByUser = () => {
    return (
        <section className="recipes-added">
            <h1>Receitas Adionadas</h1>
            <section className="cards-list">
                <RecipePresentationCard />
                <RecipePresentationCard />
                <RecipePresentationCard />
                <RecipePresentationCard />
            </section>
        </section>
    )
}

export { RecipesAddedByUser }