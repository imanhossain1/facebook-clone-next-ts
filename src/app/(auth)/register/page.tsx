"use client";

import Link from "next/link";
import {useState} from "react";

function RegisterPage() {
    const [error, setError] = useState("");

    const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // আগের error clear
        setError("");

        const formData = new FormData(event.currentTarget);

        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        // Empty field check
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }

        // Password length check
        if (String(password).length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        // Password match check
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // সব ঠিক থাকলে console
        console.log("Register Data:", {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        });
    };

    return (
        <main className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side */}
                <div className="text-center md:text-left">
                    <h1 className="text-5xl font-bold text-primary">facebook</h1>

                    <p className="text-xl md:text-2xl mt-4">Create an account and connect with friends.</p>
                </div>

                {/* Register Card */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center">Create New Account</h2>

                        <p className="text-center text-base-content/60 mb-3">It's quick and easy.</p>

                        {/* Register Form */}
                        <form onSubmit={handleRegister}>
                            {/* Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">First Name</label>

                                    <input
                                        type="text"
                                        name="firstName"
                                        className="input w-full"
                                        placeholder="First name"
                                        required
                                    />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Last Name</label>

                                    <input
                                        type="text"
                                        name="lastName"
                                        className="input w-full"
                                        placeholder="Last name"
                                        required
                                    />
                                </fieldset>
                            </div>

                            {/* Email */}
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>

                                <input
                                    type="email"
                                    name="email"
                                    className="input w-full"
                                    placeholder="Email address"
                                    required
                                />
                            </fieldset>

                            {/* Password */}
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Password</label>

                                <input
                                    type="password"
                                    name="password"
                                    className="input w-full"
                                    placeholder="New password"
                                    minLength={6}
                                    required
                                />
                            </fieldset>

                            {/* Confirm Password */}
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Confirm Password</label>

                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className="input w-full"
                                    placeholder="Confirm password"
                                    required
                                />
                            </fieldset>

                            {/* Error Message */}
                            {error && <p className="text-error text-sm mt-2">{error}</p>}

                            {/* Register Button */}
                            <button type="submit" className="btn btn-success text-white w-full mt-4">
                                Sign Up
                            </button>
                        </form>

                        <div className="divider">OR</div>

                        {/* Login */}
                        <p className="text-center text-sm">Already have an account?</p>

                        <Link href="/login" className="btn btn-outline btn-primary mx-auto">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default RegisterPage;
