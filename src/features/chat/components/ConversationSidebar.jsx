import { useEffect, useState } from "react";
import userService from "../../../services/userService";

const ConversationSidebar = ({
    selectedConversation,
    onSelectConversation,
}) => {

    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]); 
    useEffect(() => { 
        fetchAllUsers(); 
    },[]); 

    const fetchAllUsers = async () => {
        try {
            const response = await userService.getAllUsers();
            setUsers(response.data.users);
            console.log(response.data.users);
        } catch (error) {
            console.error(error);
        }
    };
    // Temporary data.
    // Later this will come from Laravel.
    const conversations = [
        {
            id: 1,
            user: {
                id: 2,
                name: "Ahmed",
            },
            lastMessage: "Hey, how are you?",
            time: "10:32 AM",
            unread: 2,
            online: true,
        },
        {
            id: 2,
            user: {
                id: 3,
                name: "Ali",
            },
            lastMessage: "See you tomorrow.",
            time: "09:15 AM",
            unread: 0,
            online: false,
        },
        {
            id: 3,
            user: {
                id: 4,
                name: "Usman",
            },
            lastMessage: "Thanks!",
            time: "Yesterday",
            unread: 5,
            online: true,
        },
        {
            id: 4,
            user: {
                id: 5,
                name: "Hassan",
            },
            lastMessage: "Okay, sounds good.",
            time: "Yesterday",
            unread: 0,
            online: false,
        },
    ];

    const filteredConversations = conversations.filter(
        (conversation) =>
            conversation.user.name
                .toLowerCase()
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

                {filteredConversations.length === 0 ? (

                    <div className="p-4 text-center text-muted">

                        <i className="bi bi-chat-square-text fs-2"></i>

                        <div className="mt-2">
                            No conversations found
                        </div>

                    </div>

                ) : (

                    filteredConversations.map((conversation) => {

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
                                            {conversation.user.name
                                                .charAt(0)
                                                .toUpperCase()}
                                        </div>

                                        {conversation.online && (
                                            <span
                                                className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle"
                                                style={{
                                                    width: "12px",
                                                    height: "12px",
                                                }}
                                            />
                                        )}

                                    </div>

                                    {/* User information */}
                                    <div className="ms-3 flex-grow-1 overflow-hidden">

                                        <div className="d-flex justify-content-between align-items-center">

                                            <strong className="text-truncate">
                                                {conversation.user.name}
                                            </strong>

                                            <small className="text-muted ms-2 flex-shrink-0">
                                                {conversation.time}
                                            </small>

                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">

                                            <div className="small text-muted text-truncate">
                                                {conversation.lastMessage}
                                            </div>

                                            {conversation.unread > 0 && (
                                                <span className="badge bg-primary rounded-pill ms-2">
                                                    {conversation.unread}
                                                </span>
                                            )}

                                        </div>

                                    </div>

                                </div>

                            </button>
                        );
                    })

                )}

            </div>

        </div>
    );
};

export default ConversationSidebar;