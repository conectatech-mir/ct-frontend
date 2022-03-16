import React from "react";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <div className="w-full card p-4 space-y-4 bg-gray-200">
      <div>
        <Link to="/user/dcyar/post/1254">
          <h2 className="text-lg font-bold">Titulo de la peticion...</h2>
        </Link>
        <span className="text-sm">17/12/2021</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        autem? Obcaecati aut soluta, laudantium accusantium error doloremque
        accusamus. Itaque, ducimus molestias? Quod et minima facilis, hic neque
        quibusdam corporis? Hic.
      </p>
      <div className="flex justify-between">
        <div className="flex">
          <h4 className="font-semibold mr-2">Tags:</h4>
          <div className="space-x-1">
            <span className="badge badge-outline">javascript</span>
            <span className="badge badge-outline">nodejs</span>
            <span className="badge badge-outline">reactjs</span>
            <span className="badge badge-outline">vuejs</span>
            <span className="badge badge-outline">css</span>
            <span className="badge badge-outline">html</span>
          </div>
        </div>
        <div className="flex">
          <h4 className="font-semibold mr-2">Ofertas:</h4>
          <span>8</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
