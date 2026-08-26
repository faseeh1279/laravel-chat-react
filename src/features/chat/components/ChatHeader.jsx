const ChatHeader = ({ user, online }) => {

    return (
        <div className="bg-white border-bottom py-3 px-3">

            <div className="d-flex align-items-center">

                {/* Avatar */}
                <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3 fw-semibold"
                    style={{
                        width: "48px",
                        height: "48px",
                    }}
                >
                    {user.name.charAt(0).toUpperCase()}
                </div>

                {/* User information */}
                <div className="flex-grow-1">

                    <h5 className="mb-0 fw-bold">
                        {user.name}
                    </h5>

                    <div className="d-flex align-items-center gap-2">

                        <span
                            className={`rounded-circle ${
                                online
                                    ? "bg-success"
                                    : "bg-secondary"
                            }`}
                            style={{
                                width: "8px",
                                height: "8px",
                            }}
                        />

                        <small className="text-muted">
                            {online ? "Online" : "Offline"}
                        </small>

                    </div>

                </div>

                {/* Actions */}
                <div className="d-flex align-items-center gap-1">

                    <button
                        type="button"
                        className="btn btn-light rounded-circle"
                    >
                        <i className="bi bi-telephone"></i>
                    </button>

                    <button
                        type="button"
                        className="btn btn-light rounded-circle"
                    >
                        <i className="bi bi-camera-video"></i>
                    </button>

                    <button
                        type="button"
                        className="btn btn-light rounded-circle"
                    >
                        <i className="bi bi-three-dots-vertical"></i>
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ChatHeader;