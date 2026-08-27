import api from "../api/axios";

const messageService = {

    async getMessages(conversationId) {
        return await api.get(
            `/conversations/${conversationId}/messages`
        );
    },

    async sendMessage(conversationId, message) {
        return await api.post(
            `/conversations/${conversationId}/messages`,
            {
                message,
            }
        );
    },

};

export default messageService;