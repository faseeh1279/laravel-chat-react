import { createContext, useContext, useState } from "react";

const MessageContext = createContext(null);

export const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages((previousMessages) => {
            const exists = previousMessages.some(
                (item) => item.id === message.id
            );

            if (exists) {
                return previousMessages;
            }

            return [...previousMessages, message];
        });
    };

    const setConversationMessages = (messages) => {
        setMessages(messages);
    };

    const clearMessages = () => {
        setMessages([]);
    };

    return (
        <MessageContext.Provider
            value={{
                messages,
                addMessage,
                setConversationMessages,
                clearMessages,
            }}
        >
            {children}
        </MessageContext.Provider>
    );
};

export const useMessage = () => {
    const context = useContext(MessageContext);

    if (!context) {
        throw new Error(
            "useMessage must be used inside MessageProvider"
        );
    }

    return context;
};