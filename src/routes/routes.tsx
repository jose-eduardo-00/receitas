import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/home";
import { LoginProfile } from "../pages/loginProfile/loginProfile";
import { Recipe } from "../pages/recipe/recipe";
import { AuthenticationUser } from "../pages/authenticationUser/authenticationUser";
import { AddRecipes } from "../pages/addRecipes/addRecipes";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loginProfile" element={<LoginProfile />} />
                <Route path="/receitasDoCard" element={<Recipe />} />
                <Route path="/authentication" element={<AuthenticationUser />} />
                <Route path="/addRecipes" element={<AddRecipes />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }