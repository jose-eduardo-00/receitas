import { RecipePresentationCard } from '../recipePresentationCard/recipePresentationCard'
import './topRatedRecipes.scss'


const TopRatedRecipes = () => {
    return (
        <section className="top-rated-recipes-section">
            <h1>Receitas mais bem avaliadas</h1>
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

export { TopRatedRecipes }