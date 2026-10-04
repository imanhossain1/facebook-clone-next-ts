
import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">

      {/* ================= LEFT SIDE ================= */}
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

          {/* Mobile Links */}
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

            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>

        {/* Facebook Logo */}
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


      {/* ================= CENTER SIDE ================= */}
      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal gap-2">

          {/* Home */}
          <li>
            <Link
              href="/"
              className="text-xl tooltip"
              data-tip="Home"
            >
              🏠
            </Link>
          </li>

          {/* Friends */}
          <li>
            <Link
              href="/friends"
              className="text-xl tooltip"
              data-tip="Friends"
            >
              👥
            </Link>
          </li>

          {/* Messages */}
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


      {/* ================= RIGHT SIDE ================= */}
      <div className="navbar-end gap-1">

        {/* Messenger */}
        <Link
          href="/messages"
          className="btn btn-circle btn-ghost text-xl tooltip"
          data-tip="Messenger"
        >
          💬
        </Link>


        {/* Notifications */}
        <button
          className="btn btn-circle btn-ghost text-xl tooltip"
          data-tip="Notifications"
        >
          🔔
        </button>


        {/* Profile */}
        <Link
          href="/profile"
          className="btn btn-circle btn-ghost text-xl tooltip"
          data-tip="Profile"
        >
          👤
        </Link>


        {/* Login */}
        <Link
          href="/login"
          className="btn btn-primary hidden sm:flex"
        >
          Login
        </Link>

      </div>

    </div>
  );
}

export default Navbar;
