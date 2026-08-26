import RegisterForm from "../components/Register/Register";
import "../components/auth.css"

function RegisterPage() {
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
                                        <i className="bi bi-person-plus-fill"></i>
                                    </div>

                                    <h2 className="fw-bold mb-2">
                                        Create Account
                                    </h2>

                                    <p className="text-secondary mb-0">
                                        Create your account to start chatting.
                                    </p>

                                </div>

                                <RegisterForm />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default RegisterPage;