
"use client"

import Link from "next/link"
import { useState } from "react"

function LoginPage() {

  const [error, setError] = useState("")

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // আগের error clear
    setError("")

    const formData = new FormData(event.currentTarget)

    const email = formData.get("email")
    const password = formData.get("password")

    // Empty field check
    if (!email || !password) {
      setError("Please enter your email and password.")
      return
    }

    // Password length check
    if (String(password).length < 6) {
      setError("Password must be at least 6 characters.")
      return
    }

    // সব ঠিক থাকলে console
    console.log("Login Data:", {
      email,
      password,
    })
  }

  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center px-4">

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="text-center md:text-left">

          <h1 className="text-5xl font-bold text-primary">
            facebook
          </h1>

          <p className="text-xl md:text-2xl mt-4">
            Connect with friends and the world around you.
          </p>

        </div>

        {/* Login Card */}
        <div className="card bg-base-100 shadow-xl">

          <div className="card-body">

            <h2 className="text-2xl font-bold text-center mb-2">
              Login
            </h2>

            {/* Login Form */}
            <form onSubmit={handleLogin}>

              {/* Email */}
              <fieldset className="fieldset">
                <label className="fieldset-label">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />
              </fieldset>

              {/* Password */}
              <fieldset className="fieldset">
                <label className="fieldset-label">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                  minLength={6}
                  required
                />
              </fieldset>

              {/* Error */}
              {error && (
                <p className="text-error text-sm mt-3">
                  {error}
                </p>
              )}

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-primary w-full mt-3"
              >
                Log In
              </button>

            </form>

            {/* Forgot Password */}
            <button className="btn btn-link text-primary">
              Forgot password?
            </button>

            <div className="divider">
              OR
            </div>

            {/* Create Account */}
            <Link
              href="/register"
              className="btn btn-success text-white mx-auto"
            >
              Create New Account
            </Link>

          </div>

        </div>

      </div>

    </main>
  )
}

export default LoginPage
