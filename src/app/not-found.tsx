import Link from "next/link";

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-base-200">
      <div className="text-center">

        {/* 404 Number */}
        <h1 className="text-7xl sm:text-8xl font-bold text-primary">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-base-content/60 mt-3 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or may have
          been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link href="/" className="btn btn-primary">
            🏠 Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}

export default NotFound;