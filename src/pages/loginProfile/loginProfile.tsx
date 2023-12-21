import { ButtonAddRecipes } from "../../components/buttonAddRecipes/buttonAddRecipes"
import { FavoritesList } from "../../components/favoritesList/favoritesList"
import { Header } from "../../components/header/header"
import { InfosProfile } from "../../components/infosProfile/infosProfile"
import { RecipesAddedByUser } from "../../components/recipesAddedByUser/recipesAddedByUser"
import { TestedRecipes } from "../../components/testedRecipes/testedRecipes"
import { UntestedRecipes } from "../../components/untestedRecipes/untestedRecipes"
import './loginProfile.scss'


const LoginProfile = () => {
    return (
        <>
            <Header />
            <section className="login-profile-section">
                <InfosProfile />
                <ButtonAddRecipes />
                <FavoritesList />
                <RecipesAddedByUser />
                <UntestedRecipes />
                <TestedRecipes />
            </section>
        </>
    )
}

export { LoginProfile }