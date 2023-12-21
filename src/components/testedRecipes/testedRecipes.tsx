import { RecipePresentationCard } from "../recipePresentationCard/recipePresentationCard"
import './testedRecipes.scss'


const TestedRecipes = () => {
    return (
        <section className="tested-recipes">
            <h1>Receitas Testadas</h1>
            <section className="cards-list">
                <RecipePresentationCard />
                <RecipePresentationCard />
                <RecipePresentationCard />
                <RecipePresentationCard />
            </section>
        </section>
    )
}

export { TestedRecipes }