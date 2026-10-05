// Post-এর data কেমন হবে সেটা TypeScript-কে বলে দিচ্ছি
type Post = {
  id: number
  user: string
  text: string
  likes: number
  comments: number
}

// PostCard কী data গ্রহণ করবে
type PostCardProps = {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  return (
    <div className="card bg-base-100 shadow-md border border-base-300">

      {/* User Info */}
      <div className="flex items-center gap-3 p-4">

        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src={`https://i.pravatar.cc/150?img=${post.id + 10}`}
              alt={post.user}
            />
          </div>
        </div>

        <div>
          <h2 className="font-semibold">
            {post.user}
          </h2>

          <p className="text-sm text-gray-500">
            2 hours ago
          </p>
        </div>

      </div>

      {/* Post Text */}
      <div className="px-4 pb-4">
        <p>
          {post.text}
        </p>
      </div>

      {/* Post Image */}
      <img
        src={`https://picsum.photos/800/500?random=${post.id}`}
        alt="Post image"
        className="w-full"
      />

      {/* Like & Comment Count */}
      <div className="flex justify-between px-4 py-3 text-sm text-gray-500">

        <span>
          👍 {post.likes} Likes
        </span>

        <span>
          {post.comments} Comments
        </span>

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