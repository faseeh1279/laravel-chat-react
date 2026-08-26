import { useState } from "react";

function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] =
        useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Registration data:", formData);

        // Later:
        // register(formData);
    };

    return (
        <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="mb-3">
                <label
                    htmlFor="name"
                    className="form-label fw-semibold"
                >
                    Name
                </label>

                <div className="input-group">
                    <span className="input-group-text bg-white">
                        <i className="bi bi-person"></i>
                    </span>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>


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
            <div className="mb-3">
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
                        placeholder="Create a password"
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


            {/* Confirm Password */}
            <div className="mb-4">
                <label
                    htmlFor="password_confirmation"
                    className="form-label fw-semibold"
                >
                    Confirm Password
                </label>

                <div className="input-group">
                    <span className="input-group-text bg-white">
                        <i className="bi bi-shield-lock"></i>
                    </span>

                    <input
                        type={
                            showPasswordConfirmation
                                ? "text"
                                : "password"
                        }
                        id="password_confirmation"
                        name="password_confirmation"
                        className="form-control"
                        placeholder="Confirm your password"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() =>
                            setShowPasswordConfirmation(
                                !showPasswordConfirmation
                            )
                        }
                    >
                        <i
                            className={
                                showPasswordConfirmation
                                    ? "bi bi-eye-slash"
                                    : "bi bi-eye"
                            }
                        ></i>
                    </button>
                </div>
            </div>


            {/* Register */}
            <button
                type="submit"
                className="btn btn-orange w-100 py-2 fw-semibold"
            >
                Create Account
            </button>


            {/* Login */}
            <div className="text-center mt-4">
                <span className="text-secondary">
                    Already have an account?
                </span>

                <a
                    href="/login"
                    className="text-decoration-none fw-semibold login-link ms-1"
                >
                    Login
                </a>
            </div>

        </form>
    );
}

export default RegisterForm;