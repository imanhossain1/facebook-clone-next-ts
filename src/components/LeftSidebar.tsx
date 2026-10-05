
import Link from "next/link";

function LeftSidebar() {
  return (
    <aside className="card bg-base-100 shadow-md">

      {/* Profile */}
      <Link
        href="/profile"
        className="flex items-center gap-3 p-4 hover:bg-base-200 rounded-t-xl"
      >
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
            />
          </div>
        </div>

        <div>
          <h2 className="font-bold">Imran Hossain</h2>
          <p className="text-sm opacity-60">
            View Profile
          </p>
        </div>
      </Link>

      <div className="divider my-0"></div>

      {/* Menu */}
      <ul className="menu p-3">

        <li>
          <Link href="/">
            🏠 Home
          </Link>
        </li>

        <li>
          <Link href="/friends">
            👥 Friends
          </Link>
        </li>

        <li>
          <Link href="/messages">
            💬 Messages
          </Link>
        </li>

        <li>
          <Link href="/saved">
            🔖 Saved
          </Link>
        </li>

        <li>
          <Link href="/settings">
            ⚙️ Settings
          </Link>
        </li>

      </ul>

    </aside>
  );
}

export default LeftSidebar;

