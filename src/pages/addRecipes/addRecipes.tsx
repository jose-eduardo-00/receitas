import { FormsAddRecipes } from "../../components/formsAddRecipes/formsAddRecipes"
import { Link } from "react-router-dom"
import './addRecipes.scss'


const AddRecipes = () => {
    return (
        <main className="add-recipes">
            <h1 className="title">Adicionar Receitas</h1>
            <Link to={'/loginProfile'}>
                <button className="btn-go-back">Voltar</button>
            </Link>
            <FormsAddRecipes />
        </main>
    )
}

export { AddRecipes }