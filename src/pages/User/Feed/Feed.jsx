import React from "react";
import PostCard from "../components/PostCard/PostCard";
import PostModal from "./components/PostModal/PostModal";

const Feed = (props) => {
  return (
    <>
      <PostModal />
      <div className="space-y-4">
        <h3 className="text-xl font-bold uppercase">
          Historial de peticiones:
        </h3>
        {[1, 2, 3, 4, 5].map((item) => (
          <PostCard key={item} />
        ))}
      </div>
    </>
  );
};

export default Feed;
