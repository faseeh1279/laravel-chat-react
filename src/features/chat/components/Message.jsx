const Message = ({ message }) => {

    const userName = message.user?.name ?? "Unknown User";

    return (
        <div
            className={`d-flex ${
                message.isMine
                    ? "justify-content-end"
                    : "justify-content-start"
            }`}
        >

            <div
                className={`d-flex ${
                    message.isMine
                        ? "flex-row-reverse"
                        : ""
                } align-items-end gap-2`}
                style={{ maxWidth: "80%" }}
            >

                {/* Avatar */}
                <div
                    className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ${
                        message.isMine
                            ? "bg-primary text-white"
                            : "bg-white border"
                    }`}
                    style={{
                        width: "38px",
                        height: "38px",
                    }}
                >
                    {userName
                        .charAt(0)
                        .toUpperCase()}
                </div>

                {/* Message */}
                <div>

                    {/* Username */}
                    <div
                        className={`small text-muted mb-1 ${
                            message.isMine
                                ? "text-end"
                                : ""
                        }`}
                    >
                        {userName}
                    </div>

                    {/* Message bubble */}
                    <div
                        className={`px-3 py-2 shadow-sm ${
                            message.isMine
                                ? "bg-primary text-white rounded-3 rounded-end-0"
                                : "bg-white border rounded-3 rounded-start-0"
                        }`}
                    >

                        <div className="lh-base">
                            {message.message}
                        </div>

                        {/* Time */}
                        <div
                            className={`small mt-1 ${
                                message.isMine
                                    ? "text-white-50"
                                    : "text-muted"
                            }`}
                        >
                            {message.time ??
                                new Date(
                                    message.created_at
                                ).toLocaleTimeString(
                                    [],
                                    {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    }
                                )}
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Message;