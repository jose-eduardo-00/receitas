import { RecipePresentationCard } from '../recipePresentationCard/recipePresentationCard'
import './lastRecipeAdded.scss'

const LastRecipeAdded = () => {
    return (
        <section className="last-recipes-added-section">
            <h1>Últimas receitas adicionadas</h1>
            <div className='recipes-list'>
                <RecipePresentationCard />
                <RecipePresentationCard />
                <RecipePresentationCard />
                <RecipePresentationCard />
                <RecipePresentationCard />
                <RecipePresentationCard />
            </div>
        </section>
    )
}

export { LastRecipeAdded }