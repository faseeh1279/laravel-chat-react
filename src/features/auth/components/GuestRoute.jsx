import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const GuestRoute = () => {
   const token = localStorage.getItem("access_token");

    if (token) {
        return <Navigate to="/chat" replace />;
    }

    return <Outlet />;
}
