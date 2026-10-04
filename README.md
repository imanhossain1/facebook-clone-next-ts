# 📘 Facebook Clone — Full Roadmap

## 🚀 Project Goal

এই project-এর লক্ষ্য হলো একটি practical Facebook-style social media application তৈরি করা।

### Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* DaisyUI
* MongoDB
* Mongoose
* Authentication
* API Routes
* পরে Realtime / Advanced Features

---

# 🟢 VERSION 1 — Basic Facebook

## 🎯 Goal

প্রথমে Facebook-এর basic usable version তৈরি করব।

### User Flow

```text
Register
   ↓
Login
   ↓
Home / News Feed
   ↓
See Posts
   ↓
Create Post
   ↓
Profile
   ↓
Friends
   ↓
Messages
```

---

## 📁 Version 1 Folder Structure

```text
facebook-clone/
│
├── src/
│   ├── app/
│   │   │
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   │
│   │   ├── page.tsx
│   │   │
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   │
│   │   ├── friends/
│   │   │   └── page.tsx
│   │   │
│   │   ├── messages/
│   │   │   └── page.tsx
│   │   │
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── CreatePost.tsx
│   │   ├── PostCard.tsx
│   │   └── UserCard.tsx
│   │
│   ├── data/
│   │   └── users.ts
│   │
│   └── types/
│       └── index.ts
│
├── public/
│   └── images/
│
├── .env.local
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧩 Version 1 — কোন file কী করবে?

### `src/app/page.tsx`

Facebook-এর main Home / News Feed।

```text
Navbar
   ↓
Create Post
   ↓
Posts
   ↓
PostCard
```

### `src/components/Navbar.tsx`

উপরের navigation:

```text
Facebook
Home
Friends
Messages
Profile
Logout
```

### `src/components/CreatePost.tsx`

User নতুন post লিখবে।

### `src/components/PostCard.tsx`

একটি post দেখাবে:

```text
User
Profile Picture
Post Text
Image
Like
Comment
Share
```

### `src/components/UserCard.tsx`

User/Friend information দেখাবে।

### `src/data/users.ts`

Version 1-এ temporary/dummy user data রাখব।

### `src/types/index.ts`

সব common TypeScript type রাখব।

উদাহরণ:

```text
User
Post
Comment
Message
```

---

# 🟡 VERSION 2 — Real Authentication + Database

## 🎯 Goal

Version 1-এর dummy data বাদ দিয়ে real application বানানো।

### Features

* Register
* Login
* Logout
* Password security
* MongoDB
* User database
* Real posts
* Create post
* Edit post
* Delete post
* Like
* Comment
* Profile update
* Friend request

---

# 📁 Version 2 Folder Structure

```text
src/
│
├── app/
│   │
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   │
│   ├── page.tsx
│   │
│   ├── profile/
│   │   └── page.tsx
│   │
│   ├── friends/
│   │   └── page.tsx
│   │
│   ├── messages/
│   │   └── page.tsx
│   │
│   └── api/
│       │
│       ├── auth/
│       │   └── route.ts
│       │
│       ├── users/
│       │   └── route.ts
│       │
│       ├── posts/
│       │   └── route.ts
│       │
│       ├── likes/
│       │   └── route.ts
│       │
│       └── comments/
│           └── route.ts
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CreatePost.tsx
│   ├── PostCard.tsx
│   ├── CommentBox.tsx
│   ├── UserCard.tsx
│   └── FriendRequest.tsx
│
├── lib/
│   ├── mongodb.ts
│   └── auth.ts
│
├── models/
│   ├── User.ts
│   ├── Post.ts
│   ├── Comment.ts
│   └── Friend.ts
│
├── types/
│   └── index.ts
│
└── data/
    └── users.ts
```

---

# 🗄️ MongoDB Structure

### User

```text
User
├── name
├── email
├── password
├── avatar
├── bio
└── createdAt
```

### Post

```text
Post
├── author
├── content
├── image
├── likes
├── comments
└── createdAt
```

### Comment

```text
Comment
├── author
├── post
├── text
└── createdAt
```

### Friend

```text
Friend
├── sender
├── receiver
├── status
└── createdAt
```

---

# 🔵 VERSION 3 — Advanced Facebook

## 🎯 Goal

এখন application-কে আরও realistic এবং professional করা।

### Features

* Realtime messaging
* Online / Offline status
* Typing indicator
* Message seen
* Image messages
* Notifications
* Friend request notifications
* Like notifications
* Comment notifications
* Search users
* Search posts
* Edit profile
* Profile picture
* Cover photo
* Dark mode
* Responsive mobile UI
* Infinite scrolling
* Better loading states
* Error handling

---

# 📁 Version 3 Additional Structure

```text
src/
│
├── app/
│   ├── chat/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── notifications/
│   │   └── page.tsx
│   │
│   ├── search/
│   │   └── page.tsx
│   │
│   └── settings/
│       └── page.tsx
│
├── components/
│   ├── ChatBox.tsx
│   ├── MessageCard.tsx
│   ├── NotificationCard.tsx
│   ├── SearchBox.tsx
│   ├── ProfileHeader.tsx
│   └── ImageUpload.tsx
│
├── lib/
│   ├── mongodb.ts
│   ├── auth.ts
│   └── socket.ts
│
├── models/
│   ├── User.ts
│   ├── Post.ts
│   ├── Comment.ts
│   ├── Friend.ts
│   ├── Message.ts
│   └── Notification.ts
│
├── hooks/
│   ├── useAuth.ts
│   ├── useMessages.ts
│   └── useDebounce.ts
│
├── utils/
│   ├── formatDate.ts
│   └── validation.ts
│
└── types/
    └── index.ts
```

---

# 🧠 Complete Development Sequence

আমরা সবকিছু একসাথে করব না।

## Phase 1 — Project Setup

```text
Next.js
↓
TypeScript
↓
Tailwind
↓
DaisyUI
↓
src/
↓
App Router
```

---

## Phase 2 — Basic UI

```text
Navbar
↓
Footer
↓
Home
↓
CreatePost
↓
PostCard
↓
UserCard
```

---

## Phase 3 — Pages

```text
Home
↓
Login
↓
Register
↓
Profile
↓
Friends
↓
Messages
```

---

## Phase 4 — Authentication

```text
Register
↓
Save User
↓
Login
↓
Session
↓
Protected Pages
↓
Logout
```

---

## Phase 5 — MongoDB

```text
MongoDB Connection
↓
User Model
↓
Post Model
↓
Comment Model
↓
Friend Model
```

---

## Phase 6 — CRUD

```text
Create Post
↓
Read Posts
↓
Edit Post
↓
Delete Post
```

---

## Phase 7 — Social Features

```text
Like
↓
Comment
↓
Friend Request
↓
Accept / Reject
↓
Profile
```

---

## Phase 8 — Messaging

```text
Select User
↓
Chat
↓
Send Message
↓
Edit Message
↓
Delete Message
↓
Seen
↓
Realtime
```

---

## Phase 9 — Advanced

```text
Notifications
↓
Search
↓
Image Upload
↓
Online Status
↓
Typing Indicator
↓
Dark Mode
↓
Mobile Optimization
```

---

# 📌 Important Rule

এই project-এ আমরা **আগে UI → তারপর functionality → তারপর database → তারপর advanced feature** করব।

একসাথে MongoDB + Auth + Chat + Notification শুরু করব না।

### আমাদের মূল rule:

```text
Don't make everything at once.

Learn → Build → Test → Fix → Continue
```

---

# 🏁 Final Version

শেষে application-এর flow হবে:

```text
                FACEBOOK CLONE
                      │
          ┌───────────┴───────────┐
          ↓                       ↓
       Register                  Login
          │                       │
          └───────────┬───────────┘
                      ↓
                    Home
                      │
       ┌──────────────┼──────────────┐
       ↓              ↓              ↓
     Posts          Friends        Messages
       │              │              │
       ↓              ↓              ↓
    Like/Comment   Requests        Realtime
       │              │              │
       └──────────────┼──────────────┘
                      ↓
                   Profile
                      ↓
                 Settings
```

---

# 🎯 Learning Goal

এই single project-এর মাধ্যমে শেখা হবে:

* Next.js App Router
* TypeScript
* React Components
* Props
* State
* Forms
* API
* Authentication
* MongoDB
* Mongoose
* CRUD
* Dynamic Routes
* Server / Client Components
* Context / Hooks
* Realtime concepts
* Responsive UI
* Deployment
* Git & GitHub

---

# 🔥 Development Rule for This Project

প্রথমে:

**Version 1 complete**

তারপর:

**Version 2 complete**

তারপর:

**Version 3 complete**

প্রতিটি Version শেষ হওয়ার আগে নতুন বড় feature শুরু করব না।

---

## Current Target

### 🟢 VERSION 1

```text
Project Setup
↓
Folder Structure
↓
Navbar
↓
Footer
↓
Home
↓
Create Post
↓
Post Card
↓
Profile
↓
Friends
↓
Messages
↓
Login
↓
Register
```

**Version 1 শেষ = একটি basic usable Facebook UI.**

তারপর Version 2-তে **Real Auth + MongoDB** শুরু হবে।
