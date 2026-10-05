
import Link from "next/link";

function RightSidebar() {
  return (
    <aside className="card bg-base-100 shadow-md">

      {/* Contacts Title */}
      <div className="card-body p-4">
        <h2 className="font-bold text-lg">
          Contacts
        </h2>

        {/* User 1 */}
        <Link
          href="/profile/1"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200"
        >
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="Rahim"
              />
            </div>
          </div>

          <div>
            <p className="font-medium">Rahim</p>
            <p className="text-xs text-success">
              ● Online
            </p>
          </div>
        </Link>

        {/* User 2 */}
        <Link
          href="/profile/2"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200"
        >
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://i.pravatar.cc/150?img=8"
                alt="Karim"
              />
            </div>
          </div>

          <div>
            <p className="font-medium">Karim</p>
            <p className="text-xs text-success">
              ● Online
            </p>
          </div>
        </Link>

        {/* User 3 */}
        <Link
          href="/profile/3"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200"
        >
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://i.pravatar.cc/150?img=9"
                alt="Sakib"
              />
            </div>
          </div>

          <div>
            <p className="font-medium">Sakib</p>
            <p className="text-xs text-success">
              ● Online
            </p>
          </div>
        </Link>

      </div>

    </aside>
  );
}
export default RightSidebar;