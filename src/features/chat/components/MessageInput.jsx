import { useState } from "react";
import messageService from "../../../services/messageService";

const MessageInput = () => {

    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        if (!message.trim()) {
            return;
        }

        console.log(message);

        setMessage("");

        messageService.sendMessage(message); 
    };

    return (
        <div className="card-footer bg-white border-top p-3">

            <form
                onSubmit={handleSubmit}
                className="d-flex align-items-center gap-2"
            >

                {/* Attachment */}
                <button
                    type="button"
                    className="btn btn-light rounded-circle flex-shrink-0"
                    style={{
                        width: "42px",
                        height: "42px",
                    }}
                >
                    <i className="bi bi-paperclip"></i>
                </button>

                {/* Input */}
                <div className="input-group">

                    <input
                        type="text"
                        className="form-control border rounded-start-3"
                        placeholder="Write a message..."
                        value={message}
                        onChange={(event) =>
                            setMessage(event.target.value)
                        }
                    />

                    {/* Emoji */}
                    <button
                        type="button"
                        className="btn btn-light border"
                    >
                        <i className="bi bi-emoji-smile"></i>
                    </button>

                </div>

                {/* Send */}
                <button
                    type="submit"
                    className="btn btn-primary rounded-circle flex-shrink-0"
                    style={{
                        width: "42px",
                        height: "42px",
                    }}
                >
                    <i className="bi bi-send"></i>
                </button>

            </form>

        </div>
    );
};

export default MessageInput;