import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import { ChatPage } from "../features/chat/pages/ChatPage";
import { GuestRoute } from "../features/auth/components/GuestRoute";
import { ProtectedRoute } from "../features/auth/components/ProtectedRoute";
import { Navigate } from "react-router-dom";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<GuestRoute/>}>
                <Route
                    path="/login"
                    element={<LoginPage />}
                    />

                <Route
                    path="/register"
                    element={<RegisterPage />}
                    />
            </Route>

            <Route element={<ProtectedRoute />}>

                <Route
                    path="/chat"
                    element={<ChatPage />}
                />

            </Route>

            <Route
                path="/"
                element={<Navigate to="/chat" replace />}
            />



        </Routes>
    );
}

export default AppRoutes;