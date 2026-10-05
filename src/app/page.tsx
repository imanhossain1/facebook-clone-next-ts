import CreatePost from '../components/CreatePost'
import PostCard from '../components/PostCard'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'

function HomePage() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4">

      {/* Left Sidebar */}
      <aside>
        <LeftSidebar />
      </aside>

      {/* Center Feed */}
      <section className="col-span-2 space-y-6">
        <h1 className="text-2xl font-bold">
          Facebook Home
        </h1>

        <CreatePost />

        <PostCard />
        <PostCard />
        <PostCard />
      </section>

      {/* Right Sidebar */}
      <aside>
        <RightSidebar />
      </aside>

    </main>
  )
}

export default HomePage



// ┌─────────────┬──────────────────────┬─────────────┐
// │             │                      │             │
// │    LEFT     │       CENTER         │    RIGHT    │
// │             │                      │             │
// │  Profile    │    CreatePost        │  Contacts   │
// │  Home       │         ↓            │  🟢 Rahim   │
// │  Friends    │    PostCard          │  🟢 Karim   │
// │  Messages   │         ↓            │  🟢 Sakib   │
// │  Saved      │    PostCard          │             │
// │  Settings   │                      │             │
// │             │                      │             │
// └─────────────┴──────────────────────┴─────────────┘