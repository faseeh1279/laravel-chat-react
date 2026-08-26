import api from "../api/axios";

const authService = {
    // async csrf() {
    //     return await api.get('/sanctum/csrf-cookie');
    // },

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

export default authService;