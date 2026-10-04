
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-6 mt-10">

      {/* Facebook Name */}
      <div>
        <Link
          href="/"
          className="text-lg font-bold text-blue-600"
        >
          facebook
        </Link>

        <p className="text-sm">
          © 2026 Facebook Clone
        </p>
      </div>

      {/* Footer Links */}
      <nav className="flex flex-wrap justify-center gap-4 text-sm">

        <Link
          href="/"
          className="link link-hover"
        >
          About
        </Link>

        <Link
          href="/"
          className="link link-hover"
        >
          Privacy
        </Link>

        <Link
          href="/"
          className="link link-hover"
        >
          Terms
        </Link>

        <Link
          href="/"
          className="link link-hover"
        >
          Help
        </Link>

        <Link
          href="/"
          className="link link-hover"
        >
          Cookies
        </Link>

      </nav>

    </footer>
  );
}

export default Footer;

