import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../services/authService'

export const AppNavbar = () => {
    const navigate = useNavigate();
    const { user, login, logout, isAuthenticated } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="navbar bg-white border-bottom px-3 py-2">

            <div className="container-fluid">

                {/* Brand */}
                <span className="navbar-brand mb-0 h5 fw-bold">
                    <i className="bi bi-chat-dots-fill text-primary me-2"></i>
                    Chat App
                </span>

                {/* User / Logout */}
                <div className="d-flex align-items-center gap-3">

                    <div className="d-flex align-items-center">

                        <div
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-semibold me-2"
                            style={{
                                width: "38px",
                                height: "38px",
                            }}
                        >
                            {user?.name?.charAt(0).toUpperCase()}
                        </div>

                        <span className="fw-semibold">
                            {user?.name}
                        </span>

                    </div>

                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={handleLogout}
                    >
                        <i className="bi bi-box-arrow-right me-1"></i>
                        Logout
                    </button>

                </div>

            </div>

        </nav>
    );
};