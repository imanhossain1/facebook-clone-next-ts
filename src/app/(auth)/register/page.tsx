"use client";

import Link from "next/link";
import { useState } from "react";
import { signUp } from "../../../lib/auth-client";

function RegisterPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Form reference আগে save করে রাখছি
    const form = event.currentTarget;

    // আগের message clear
    setError("");
    setSuccess("");

    // Loading শুরু
    setIsLoading(true);

    // Form থেকে data নেওয়া
    const formData = new FormData(form);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    // সব field আছে কিনা check
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    // Password match check
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    // First name + Last name একসাথে
    const name = `${firstName} ${lastName}`;

    // Better Auth signup
    const { data, error } = await signUp.email({
      name: name,
      email: String(email),
      password: String(password),
    });

    // Signup error
    if (error) {
      console.log("Signup Error:", error);

      setError(error.message || "Registration failed.");
      setIsLoading(false);
      return;
    }

    // Signup success
    console.log("Signup Success:", data);

    setSuccess("Account created successfully! 🎉");

    // Form clear
    form.reset();

    // Loading শেষ
    setIsLoading(false);
  };

  if(isLoading){
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg"></span>
          <p className="mt-2 text-gray-500">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">

          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-blue-600">
            Facebook
          </h1>

          <p className="text-center text-gray-500 mb-4">
            Create a new account
          </p>

          {/* Error Message */}
          {error && (
            <div className="alert alert-error mb-3">
              <span>{error}</span>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="alert alert-success mb-3">
              <span>{success}</span>
            </div>
          )}

          {/* Register Form */}
          <form onSubmit={handleRegister}>

            {/* First Name */}
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="input input-bordered w-full mb-3"
            />

            {/* Last Name */}
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="input input-bordered w-full mb-3"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full mb-3"
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              minLength={6}
              className="input input-bordered w-full mb-3"
            />

            {/* Confirm Password */}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              minLength={6}
              className="input input-bordered w-full"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-success text-white w-full mt-4"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 font-semibold"
            >
              Log in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default RegisterPage;