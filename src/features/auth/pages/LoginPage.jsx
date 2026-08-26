import LoginForm from "../components/Login/Login";
import "../components/auth.css"

function LoginPage() {
    return (
        <div className="auth-page min-vh-100 d-flex align-items-center py-5">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">

                        <div className="card border-0 shadow-lg">

                            <div className="card-body p-4 p-md-5">

                                {/* Header */}
                                <div className="text-center mb-4">

                                    <div className="auth-icon mx-auto mb-3">
                                        <i className="bi bi-chat-dots-fill"></i>
                                    </div>

                                    <h2 className="fw-bold mb-2">
                                        Welcome Back
                                    </h2>

                                    <p className="text-secondary mb-0">
                                        Login to continue chatting with your friends.
                                    </p>

                                </div>


                                {/* Login Form */}
                                <LoginForm />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default LoginPage;