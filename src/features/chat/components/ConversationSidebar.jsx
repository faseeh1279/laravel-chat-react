import { useEffect, useState } from "react";
import conversationService from "../../../services/conversationService";

const ConversationSidebar = ({
    selectedConversation,
    onSelectConversation,
}) => {

    const [search, setSearch] = useState("");
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadConversations();
    }, []);

    const loadConversations = async () => {

        try {

            const response =
                await conversationService.getConversations();

            console.log(
                "Conversations:",
                response.data
            );

            // API Resource returns { data: [...] }
            setConversations(response.data.data);

        } catch (error) {

            console.error(
                "Failed to load conversations:",
                error.response?.data || error
            );

        } finally {

            setLoading(false);

        }
    };

    /*
     * Filter conversations based on recipient name.
     */
    const filteredConversations =
        conversations.filter((conversation) =>
            conversation.recipient?.name
                ?.toLowerCase()
                .includes(search.toLowerCase())
        );

    return (
        <div className="d-flex flex-column h-100 bg-white">

            {/* Header */}
            <div className="p-3 border-bottom">

                <div className="d-flex align-items-center justify-content-between mb-3">

                    <h5 className="mb-0 fw-bold">
                        Messages
                    </h5>

                    <button
                        type="button"
                        className="btn btn-light rounded-circle"
                        style={{
                            width: "38px",
                            height: "38px",
                        }}
                    >
                        <i className="bi bi-pencil-square"></i>
                    </button>

                </div>

                {/* Search */}
                <div className="input-group">

                    <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-search"></i>
                    </span>

                    <input
                        type="text"
                        className="form-control bg-light border-start-0"
                        placeholder="Search conversations..."
                        value={search}
                        onChange={(event) =>
                            setSearch(event.target.value)
                        }
                    />

                </div>

            </div>

            {/* Conversations */}
            <div className="flex-grow-1 overflow-auto">

                {loading ? (

                    <div className="d-flex justify-content-center p-4">

                        <div className="spinner-border text-primary" />

                    </div>

                ) : filteredConversations.length === 0 ? (

                    <div className="p-4 text-center text-muted">

                        <i className="bi bi-chat-square-text fs-2"></i>

                        <div className="mt-2">
                            {search
                                ? "No conversations found"
                                : "No conversations yet"}
                        </div>

                    </div>

                ) : (

                    filteredConversations.map(
                        (conversation) => {

                            const user =
                                conversation.recipient;

                            const isSelected =
                                selectedConversation?.id ===
                                conversation.id;

                            return (
                                <button
                                    key={conversation.id}
                                    type="button"
                                    className={`w-100 border-0 text-start p-3 ${
                                        isSelected
                                            ? "bg-light"
                                            : "bg-white"
                                    }`}
                                    onClick={() =>
                                        onSelectConversation(
                                            conversation
                                        )
                                    }
                                >

                                    <div className="d-flex align-items-center">

                                        {/* Avatar */}
                                        <div className="position-relative flex-shrink-0">

                                            <div
                                                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-semibold"
                                                style={{
                                                    width: "48px",
                                                    height: "48px",
                                                }}
                                            >
                                                {user?.name
                                                    ?.charAt(0)
                                                    .toUpperCase()}
                                            </div>

                                        </div>

                                        {/* User information */}
                                        <div className="ms-3 flex-grow-1 overflow-hidden">

                                            <div className="d-flex justify-content-between align-items-center">

                                                <strong className="text-truncate">
                                                    {user?.name}
                                                </strong>

                                            </div>

                                            <div className="small text-muted text-truncate">
                                                {conversation.last_message
                                                    ?.message ??
                                                    "Start a conversation"}
                                            </div>

                                        </div>

                                    </div>

                                </button>
                            );
                        }
                    )

                )}

            </div>

        </div>
    );
};

export default ConversationSidebar;