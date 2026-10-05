import CreatePost from '../components/CreatePost'
import PostCard from '../components/PostCard'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import posts from '../data/posts'

function HomePage() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4">

      {/* Left Sidebar */}
      <aside>
        <LeftSidebar />
      </aside>

      {/* Center Feed */}
      <section className="lg:col-span-2 space-y-6">

        <h1 className="text-2xl font-bold">
          Facebook Home
        </h1>

        <CreatePost />

        {/* Dummy Posts */}
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}

      </section>

      {/* Right Sidebar */}
      <aside>
        <RightSidebar />
      </aside>

    </main>
  )
}

export default HomePage