"use client"
import Link from "next/link";


// User-এর Type
type User = {
    _id: string;
  name: string;
  email: string;
  image?: string | null;
};


// API থেকে users আনা
const getUsers = async (): Promise<User[]> => {

  const response = await fetch("http://localhost:3000/api/users");

  const users = await response.json();

  return users;
};

async function RightSidebar() {

  // MongoDB users পাওয়া
  const users = await getUsers();
 
  // console.log("user me ", users)

  return (
    <aside className="card bg-base-100 shadow-md">

      <div className="card-body p-4">

        {/* Contacts Title */}
        <h2 className="font-bold text-lg mb-2">
          Contacts
        </h2>


        {/* MongoDB-এর সব User */}
        {users.map((user) => (

          <Link
            key={user._id}
            href={`/profile/${user._id}`}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200"
          >

            {/* Profile Image */}
            <div className="avatar">

              <div className="w-10 rounded-full">

                {user.image ? (

                  <img
                    src={user.image}
                    alt={user.name}
                  />

                ) : (

                  <div className="w-10 h-10 bg-gray-300 flex items-center justify-center">
                    👤
                  </div>

                )}

              </div>

            </div>


            {/* User Info */}
            <div>

              <p className="font-medium">
                {user.name}
              </p>

              <p className="text-xs text-gray-500">
                {user.email}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </aside>
  );
}


export default RightSidebar;