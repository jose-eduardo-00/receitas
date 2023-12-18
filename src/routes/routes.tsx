import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/home";
import { LoginProfile } from "../pages/loginProfile/loginProfile";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loginProfile" element={<LoginProfile />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }