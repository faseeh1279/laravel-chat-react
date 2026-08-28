import Pusher from "pusher-js";

const pusher = new Pusher(
    import.meta.env.VITE_PUSHER_APP_KEY,
    {
        cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,

        forceTLS: true,

        enabledTransports: ["ws"],

        authEndpoint:
            import.meta.env.VITE_BROADCAST_AUTH_URL,

        auth: {
            headers: {
                Authorization:
                    `Bearer ${localStorage.getItem("access_token")}`,

                Accept: "application/json",
            },
        },
    }
);

export default pusher;