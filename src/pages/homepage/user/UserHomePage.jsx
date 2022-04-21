import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserHead from "../../head/user/UserHead.component";
import PostUpdate from "../../../components/PostUpdate.component";
import SideBar from "../../../components/SideBar.component";
import { fetchUser } from "../../../store/actions/userActions";
import { fetchAllPost } from "../../../store/actions/postActions";

const UserHomePage = (props) => {
  const { id } = JSON.parse(localStorage.getItem("ConectedLoggedApp"));

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { posts } = useSelector((state) => state.postReducer);
  console.log(
    "🚀 ~ file: UserHomePage.jsx ~ line 15 ~ UserHomePage ~ posts",
    posts
  );
  useEffect(() => {
    dispatch(fetchAllPost(id));
    dispatch(fetchUser(id));
  }, []);

  return (
    <div className="bg-gray-200">
      <UserHead name={props.name} />
      <div className="content-center grid grid-cols-3 mt-2 my-auto">
        <div className="mx-6">
          <SideBar
            nombre={`${user.firstName} ${user.lastName}`}
            email={user.email}
            rol={user.rol}
            skill={user.skills}
          />
        </div>
        <div className="col-span-2 my-10 ">
          <h3 className=" text-center text-3xl font-extrabold text-yellow-500">
            Posts Creados:
          </h3>
          <div className="flex flex-col flex-wrap md:flex-row ">
            {posts.map((post) => (
              <PostUpdate
                key={post?._id}
                urlImgProfile="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                urlVerMas="http://localhost:3000/"
                nombre={`${user.firstName} ${user.lastName}`}
                nameTitle={post.title}
                presupuesto={post.price}
                descripcion={post.body}
                tags={post.tags}
                accepted={post.accepted}
                professionalName={`${post.accepted?.firstName} ${post.accepted?.lastName} - ${post.accepted?.email}`}
                urlOferta="http://localhost:3000/"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
