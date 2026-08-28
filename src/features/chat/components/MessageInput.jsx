import { useState } from "react";
import messageService from "../../../services/messageService";
import { useMessage } from "../context/MessageContext";
const MessageInput = ({ conversationId }) => {
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    const { addMessage } = useMessage();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!message.trim() || !conversationId) {
            return;
        }

        try {
            setSending(true);

            const response =
                await messageService.sendMessage(
                    conversationId,
                    message.trim()
                );

            console.log(
                "Message sent:",
                response.data
            );

            /*
             * Add the message returned by Laravel
             * to the shared MessageContext.
             */
            if (response.data?.data) {
                addMessage(response.data.data);
            }

            setMessage("");

        } catch (error) {
            console.error(
                "Send message failed:",
                error.response?.data || error
            );
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="card-footer bg-white border-top p-3">
            <form
                onSubmit={handleSubmit}
                className="d-flex align-items-center gap-2"
            >
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control border rounded-start-3"
                        placeholder="Write a message..."
                        value={message}
                        disabled={sending}
                        onChange={(event) =>
                            setMessage(event.target.value)
                        }
                    />

                    <button
                        type="button"
                        className="btn btn-light border"
                    >
                        <i className="bi bi-emoji-smile"></i>
                    </button>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary rounded-circle flex-shrink-0"
                    style={{
                        width: "42px",
                        height: "42px",
                    }}
                    disabled={
                        sending ||
                        !message.trim() ||
                        !conversationId
                    }
                >
                    {sending ? (
                        <span className="spinner-border spinner-border-sm" />
                    ) : (
                        <i className="bi bi-send"></i>
                    )}
                </button>
            </form>
        </div>
    );
};

export default MessageInput;