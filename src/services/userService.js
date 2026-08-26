import api from "../api/axios";

const userService = {

    async getCurrentUser() {
        return await api.get("/user");
    },
    async getAllUsers(){ 
        return await api.get('/users'); 
    },
    async getUsersWithConversation(){ 
        return await api.get('/get-users'); 
    }
};

export default userService;