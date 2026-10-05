function PostCard() {
  return (
    <div className="card bg-base-100 shadow-md border border-base-300">

      {/* User Info */}
      <div className="flex items-center gap-3 p-4">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="User"
            />
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Imran Hossain</h2>
          <p className="text-sm text-gray-500">2 hours ago</p>
        </div>
      </div>

      {/* Post Text */}
      <div className="px-4 pb-4">
        <p>
          Today I learned something new with Next.js 🚀
        </p>
      </div>

      {/* Post Image */}
      <img
        src="https://picsum.photos/800/500"
        alt="Post image"
        className="w-full"
      />

      {/* Like & Comment Count */}
      <div className="flex justify-between px-4 py-3 text-sm text-gray-500">
        <span>👍 120 Likes</span>
        <span>24 Comments</span>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 border-t border-base-300">

        <button className="btn btn-ghost rounded-none">
          👍 Like
        </button>

        <button className="btn btn-ghost rounded-none">
          💬 Comment
        </button>

        <button className="btn btn-ghost rounded-none">
          ↗️ Share
        </button>

      </div>

    </div>
  )
}

export default PostCard