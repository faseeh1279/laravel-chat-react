import api from "../api/axios";

const messageService = {

    async getMessages() {
        return await api.get("/messages");
    },

    async sendMessage(message) {
        return await api.post("/messages", {
            message,
        });
    },

};

export default messageService;