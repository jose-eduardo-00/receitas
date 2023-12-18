import { Header } from "../../components/header/header"
import { LastRecipeAdded } from "../../components/lastRecipeAdded/lastRecipeAdded"
import { TopRatedRecipes } from "../../components/topRatedRecipes/topRatedRecipes"


const Home = () => {
    return (
        <>
            <Header />
            <TopRatedRecipes />
            <LastRecipeAdded />
        </>
    )
}

export { Home }