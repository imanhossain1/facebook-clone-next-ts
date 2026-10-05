"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "../../../lib/auth-client";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Form reference
    const form = event.currentTarget;

    // আগের error clear
    setError("");

    // Loading শুরু
    setIsLoading(true);

    // Form থেকে data নেওয়া
    const formData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");

    // Login
    const { data, error } = await signIn.email({
      email: String(email),
      password: String(password),
    });

    // Login error
    if (error) {
      console.log("Login Error:", error);

      setError(error.message || "Invalid email or password.");
      setIsLoading(false);
      return;
    }

    // Login success
    console.log("Login Success:", data);

    // Form reset
    form.reset();

    // Loading শেষ
    setIsLoading(false);

    // Home page
    router.push("/");
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
    <main className="min-h-screen bg-[#f0f2f5] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[980px] flex flex-col md:flex-row items-center justify-center gap-10">

        {/* Left Side */}
        <div className="w-full md:w-[500px] text-center md:text-left">
          <h1 className="text-[#1877f2] text-5xl md:text-6xl font-bold">
            facebook
          </h1>

          <p className="text-xl md:text-2xl text-gray-800 mt-4">
            Connect with friends and the world around you.
          </p>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-[396px]">

          <div className="bg-white rounded-lg shadow-md p-4">

            {/* Error */}
            {error && (
              <div className="alert alert-error mb-3 py-2">
                <span>{error}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin}>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="input input-bordered w-full mb-3 bg-white text-gray-900"
                required
              />

              {/* Password */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                minLength={6}
                className="input input-bordered w-full bg-white text-gray-900"
                required
              />

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn w-full bg-[#1877f2] hover:bg-[#166fe5] border-none text-white text-lg font-bold mt-4"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Logging in...
                  </>
                ) : (
                  "Log In"
                )}
              </button>
            </form>

            {/* Forgot Password */}
            <div className="text-center mt-4">
              <button className="text-[#1877f2] hover:underline text-sm">
                Forgot password?
              </button>
            </div>

            {/* Divider */}
            <div className="divider my-5"></div>

            {/* Create Account */}
            <Link
              href="/register"
              className="btn bg-[#42b72a] hover:bg-[#36a420] border-none text-white font-bold mx-auto block w-fit"
            >
              Create new account
            </Link>
          </div>

          {/* Bottom Text */}
          <p className="text-center text-sm text-gray-700 mt-6">
            <span className="font-semibold">Create a Page</span> for a
            celebrity, brand or business.
          </p>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;