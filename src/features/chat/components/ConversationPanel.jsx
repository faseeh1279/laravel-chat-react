import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const ConversationPanel = ({ conversation }) => {

    if (!conversation) {

        return (
            <div className="h-100 d-flex align-items-center justify-content-center bg-light">

                <div className="text-center text-muted px-4">

                    <div
                        className="rounded-circle bg-white shadow-sm d-flex align-items-center justify-content-center mx-auto"
                        style={{
                            width: "80px",
                            height: "80px",
                        }}
                    >
                        <i className="bi bi-chat-square-text fs-2 text-primary"></i>
                    </div>

                    <h5 className="mt-4 fw-bold text-dark">
                        Select a conversation
                    </h5>

                    <p className="mb-0">
                        Choose someone from the list to start chatting.
                    </p>

                </div>

            </div>
        );
    }

    return (
        <div className="d-flex flex-column h-100">

            <ChatHeader
                user={conversation.user}
                online={conversation.online}
            />

            <MessageList
                conversationId={conversation.id}
            />

            <MessageInput
                conversationId={conversation.id}
            />

        </div>
    );
};

export default ConversationPanel;