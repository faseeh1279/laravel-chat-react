import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../../../services/authService";

function LoginForm() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const response = await authService.login(formData);

            const token = response.data.access_token;

            localStorage.setItem("access_token", token);

            navigate("/chat");

        } catch (error) {

            console.error(
                error.response?.data || error
            );

        }
    };

    return (
        <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="mb-3">

                <label
                    htmlFor="email"
                    className="form-label fw-semibold"
                >
                    Email
                </label>

                <div className="input-group">

                    <span className="input-group-text bg-white">
                        <i className="bi bi-envelope"></i>
                    </span>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                </div>

            </div>

            {/* Password */}
            <div className="mb-2">

                <label
                    htmlFor="password"
                    className="form-label fw-semibold"
                >
                    Password
                </label>

                <div className="input-group">

                    <span className="input-group-text bg-white">
                        <i className="bi bi-lock"></i>
                    </span>

                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() =>
                            setShowPassword(!showPassword)
                        }
                    >
                        <i
                            className={
                                showPassword
                                    ? "bi bi-eye-slash"
                                    : "bi bi-eye"
                            }
                        ></i>
                    </button>

                </div>

            </div>

            {/* Forgot Password */}
            <div className="text-end mb-4">

                <Link
                    to="/forgot-password"
                    className="text-decoration-none login-link"
                >
                    Forgot password?
                </Link>

            </div>

            {/* Login */}
            <button
                type="submit"
                className="btn btn-orange w-100 py-2 fw-semibold"
            >
                Login
            </button>

            {/* Divider */}
            <div className="d-flex align-items-center gap-3 my-4">

                <hr className="flex-grow-1" />

                <span className="text-secondary small">
                    OR
                </span>

                <hr className="flex-grow-1" />

            </div>

            {/* Google */}
            <button
                type="button"
                className="btn btn-outline-secondary w-100 py-2"
            >
                <i className="bi bi-google me-2"></i>
                Continue with Google
            </button>

            {/* Register */}
            <div className="text-center mt-4">

                <span className="text-secondary">
                    Don't have an account?
                </span>

                <Link
                    to="/register"
                    className="text-decoration-none fw-semibold login-link ms-1"
                >
                    Sign up
                </Link>

            </div>

        </form>
    );
}

export default LoginForm;