"use client"

import Link from "next/link";

import {
  useSession,
  signOut,
} from "../lib/auth-client";

function Navbar() {

  // =========================================
  // Better Auth থেকে current session
  // =========================================

  const {
    data: session,
    isPending,
  } = useSession();

  // Session থেকে user
  const user = session?.user;


  // =========================================
  // Logout
  // =========================================

  const handleLogout = async () => {
    await signOut();

    window.location.href = "/login";
  };


  // =========================================
  // Loading
  // =========================================

  if (isPending) {
    return (
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">

        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 px-2"
        >
          facebook
        </Link>

      </div>
    );
  }


  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">


      {/* ================= LEFT ================= */}

      <div className="navbar-start">

        {/* Mobile Menu */}

        <div className="dropdown">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            ☰
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/friends">Friends</Link>
            </li>

            <li>
              <Link href="/messages">Messages</Link>
            </li>

            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>

        </div>


        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 px-2"
        >
          facebook
        </Link>


        {/* Search */}

        <div className="hidden sm:flex">

          <input
            type="text"
            placeholder="Search Facebook"
            className="input input-bordered rounded-full w-40 md:w-56"
          />

        </div>

      </div>


      {/* ================= CENTER ================= */}

      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal gap-2">

          <li>
            <Link
              href="/"
              className="text-xl tooltip"
              data-tip="Home"
            >
              🏠
            </Link>
          </li>

          <li>
            <Link
              href="/friends"
              className="text-xl tooltip"
              data-tip="Friends"
            >
              👥
            </Link>
          </li>

          <li>
            <Link
              href="/messages"
              className="text-xl tooltip"
              data-tip="Messages"
            >
              💬
            </Link>
          </li>

        </ul>

      </div>


      {/* ================= RIGHT ================= */}

      <div className="navbar-end gap-1">

        {/* Messenger */}

        <Link
          href="/messages"
          className="btn btn-circle btn-ghost text-xl tooltip"
          data-tip="Messenger"
        >
          💬
        </Link>


        {/* Notification */}

        <button
          className="btn btn-circle btn-ghost text-xl tooltip"
          data-tip="Notifications"
        >
          🔔
        </button>


        {/* ================= USER ================= */}

        {user ? (

          <div className="dropdown dropdown-end">

            {/* User Button */}

            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 cursor-pointer px-2"
            >

              {/* User Image */}

              {user.image ? (

                <img
                  src={user.image}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

              ) : (

                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>

              )}


              {/* User Name */}

              <span className="hidden md:block font-semibold lg:hidden">
              
                {user.name}
              </span>

            </div>


            {/* ================= DROPDOWN ================= */}

            <ul
              tabIndex={-1}
              className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-72 p-2 shadow"
            >

              {/* User Info */}

              <li>

                <div className="flex items-center gap-3">

                  {user.image ? (

                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                  ) : (

                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>

                  )}

                  <div>

                    <p className="font-bold">
                      {user.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {user.email}
                    </p>

                  </div>

                </div>

              </li>


              <div className="divider my-1"></div>


              {/* Profile */}

              <li>
                <Link href="/profile">
                  👤 Profile
                </Link>
              </li>


              {/* Logout */}

              <li>
                <button onClick={handleLogout}>
                  🚪 Logout
                </button>
              </li>

            </ul>

          </div>

        ) : (

          /* ================= NOT LOGGED IN ================= */

          <Link
            href="/login"
            className="btn btn-primary hidden sm:flex"
          >
            Login
          </Link>

        )}

      </div>

    </div>
  );
}

export default Navbar;
