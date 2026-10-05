
"use client";

import { useState } from "react";

function CreatePost() {
  const [postText, setPostText] = useState("");
  

  const handlePost = () => {
    console.log("Post:", postText);

    // পরে এখানে API call হবে
    // Backend → MongoDB → Post save

    setPostText("");
  };

  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">

        {/* Post input */}
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="What's on your mind?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />

        {/* Actions */}
        <div className="flex justify-between items-center">
          <button className="btn btn-ghost">
            📷 Photo
          </button>

          <button
            onClick={handlePost}
            // disabled={!postText.trim()} 
            className="btn btn-primary"
          >
            Post
          </button>
        </div>

      </div>
    </div>
  );
}

export default CreatePost;