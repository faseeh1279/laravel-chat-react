import api from "../api/axios";
import { useContext } from "react";
import { AuthContext } from "../features/auth/context/AuthContext";
const authService = {

    async login(credentials) {
        return await api.post('/login', credentials);
    },

    async register(data) {
        return await api.post('/register', data);
    },

    async logout() {
        return await api.post('/logout');
    },

    async getUser() {
        return await api.get('/user');
    },

    async verify(){
        return await api.post('/verify'); 
    }
};
export function useAuth() {
    return useContext(AuthContext);
}
export default authService;