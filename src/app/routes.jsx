import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import { ChatPage } from "../features/chat/pages/ChatPage";

function AppRoutes() {
    return (
        <Routes>

            <Route
                path="/login"
                element={<LoginPage />}
            />

            <Route
                path="/register"
                element={<RegisterPage />}
            />

            <Route
                path="/chat"
                element={<ChatPage />}
            />


        </Routes>
    );
}

export default AppRoutes;