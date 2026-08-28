import Message from "./Message";
import { useEffect, useState } from "react";
import messageService from "../../../services/messageService";
import userService from "../../../services/userService";
import pusher from "../../../services/pusher";
import { useMessage } from "../context/MessageContext";
const MessageList = ({ conversationId }) => {
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const {
        messages,
        setConversationMessages,
        clearMessages,
        addMessage,
    } = useMessage();

    const sortMessages = (messages) => {
        return [...messages].sort(
            (a, b) =>
                new Date(a.created_at) -
                new Date(b.created_at)
        );
    };

    /*
     * Load current user.
     */
    useEffect(() => {

        const loadUser = async () => {

            try {

                const response =
                    await userService.getCurrentUser();

                setCurrentUser(response.data);

            } catch (error) {

                console.error(
                    "Load current user failed:",
                    error.response?.data || error
                );

            }

        };

        loadUser();

    }, []);

    /*
     * Load messages when conversation changes.
     */
    useEffect(() => {

        if (!conversationId) {
            clearMessages();
            return;
        }

        const loadMessages = async () => {

            try {

                setLoading(true);

                const response =
                    await messageService.getMessages(
                        conversationId
                    );

                const loadedMessages =
                    response.data?.data ?? [];

                setConversationMessages(
                    sortMessages(loadedMessages)
                );

            } catch (error) {

                console.error(
                    "Load messages failed:",
                    error.response?.data || error
                );

                clearMessages();

            } finally {

                setLoading(false);

            }

        };

        loadMessages();
    }, [conversationId]);

    /*
     * Subscribe to private conversation channel.
     */
    useEffect(() => {

        if (!conversationId) {
            return;
        }

        const channelName =
            `private-conversation.${conversationId}`;

        console.log(
            "Subscribing to:",
            channelName
        );

        const channel =
            pusher.subscribe(channelName);

        const handleMessage = (data) => {

            console.log(
                "Real-time message received:",
                data
            );

            if (!data?.message) {
                console.error(
                    "Invalid broadcast payload:",
                    data
                );

                return;
            }

            addMessage(data.message);
        };

        channel.bind(
            "message.sent",
            handleMessage
        );

        return () => {

            console.log(
                "Unsubscribing from:",
                channelName
            );

            channel.unbind(
                "message.sent",
                handleMessage
            );

            pusher.unsubscribe(
                channelName
            );

        };

    }, [conversationId]);

    if (loading) {

        return (
            <div className="card-body d-flex justify-content-center align-items-center">

                <div className="spinner-border text-primary" />

            </div>
        );

    }

    return (
        <div
            className="card-body bg-light overflow-auto px-3 px-md-4 py-4"
            style={{ minHeight: 0 }}
        >

            <div className="d-flex flex-column gap-4">

                {messages.length === 0 ? (

                    <div className="text-center text-muted my-auto">

                        <i className="bi bi-chat-square-text fs-2"></i>

                        <div className="mt-2">
                            No messages yet
                        </div>

                        <small>
                            Start the conversation.
                        </small>

                    </div>

                ) : (

                    messages.map((message) => (

                        <Message
                            key={message.id}
                            message={{
                                ...message,

                                isMine:
                                    message.user?.id ===
                                    currentUser?.id,
                            }}
                        />

                    ))

                )}

            </div>

        </div>
    );
};

export default MessageList;