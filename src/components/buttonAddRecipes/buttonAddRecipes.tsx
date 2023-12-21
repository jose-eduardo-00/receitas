import { Link } from 'react-router-dom'
import './buttonAddRecipes.scss'


const ButtonAddRecipes = () => {
    return (
        <div className='btn-div'>
            <Link to={'/addRecipes'}>
                <button className='btn-add-recipes'>Adicionar receitas</button>
            </Link>
        </div>
    )
}

export { ButtonAddRecipes }