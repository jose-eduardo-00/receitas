import { RecipePresentationCard } from "../recipePresentationCard/recipePresentationCard"
import './untestedRecipes.scss'


const UntestedRecipes = () => {
    return (
        <section className="untested-recipes">
            <h1>Receitas não Testadas</h1>
            <section className="cards-list">
                <RecipePresentationCard />
                <RecipePresentationCard />
                <RecipePresentationCard />
                <RecipePresentationCard />
            </section>
        </section>
    )
}

export { UntestedRecipes }