import Message from "./Message";
import { useEffect, useState } from "react";
import pusher from "../../../services/pusher";
import messageService from "../../../services/messageService";
import userService from "../../../services/userService";

const MessageList = () => {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    const sortMessages = (messages) => {
        return [...messages].sort(
            (a, b) =>
                new Date(a.created_at) - new Date(b.created_at)
        );
    };

    useEffect(() => {

        const loadUser = async () => {

            try {

                const response =
                    await userService.getCurrentUser();

                setCurrentUser(response.data);

            } catch (error) {

                console.error(error);

            }

        };

        const loadMessages = async () => {

            try {

                const response =
                    await messageService.getMessages();

                setMessages(sortMessages(response.data));

            } catch (error) {

                console.error(
                    error.response?.data || error
                );

            } finally {

                setLoading(false);

            }

        };

        loadUser();
        loadMessages();

    }, []);

    useEffect(() => {

        const channel = pusher.subscribe("chat");

        channel.bind("message.sent", (data) => {

            console.log("New message:", data);

            setMessages((previousMessages) =>
                sortMessages([
                    ...previousMessages,
                    data.message,
                ])
            );

        });

        return () => {

            channel.unbind("message.sent");
            pusher.unsubscribe("chat");

        };

    }, []);

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

                {messages.map((message) => (

                    <Message
                        key={message.id}
                        message={{
                            ...message,
                            isMine:
                                message.user_id === currentUser?.id,
                        }}
                    />

                ))}

            </div>

        </div>
    );
};

export default MessageList;