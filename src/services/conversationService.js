import api from "../api/axios";

const conversationService = {
    async getConversations() { 
        return await api.get('/conversations'); 
    },

    async createConversation(userId) {
        return await api.post("/conversations", {
            user_id: userId,
        });
    },

    async getConversation(id) {
        return await api.get(`/conversations/${id}`);
    },
};
export default conversationService;
