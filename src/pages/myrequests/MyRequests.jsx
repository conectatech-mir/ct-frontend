import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostUpdate from "../../components/PostUpdate.component";
import { fetchAllPostPending } from "../../store/actions/postActions";
import { fetchUser } from "../../store/actions/userActions";
import UserHead from "../head/user/UserHead.component";
import Sidebar from "../../components/SideBar.component";

const MyRequests = (props) => {
  const { id } = JSON.parse(localStorage.getItem("ConectedLoggedApp"));

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  console.log("🚀 ~ file: MyRequests.jsx ~ line 14 ~ MyRequests ~ user", user);
  const { postsPending } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(fetchAllPostPending(id));
    dispatch(fetchUser(id));
  }, []);

  return (
    <div className="bg-gray-200">
      <UserHead name={props.name} />
      <div className="content-center grid grid-cols-3 mt-2 my-auto">
        <div className="mx-6">
          <Sidebar
            nombre={`${user.firstName} ${user.lastName}`}
            email={user.email}
            rol={user.rol}
            skill={user.skills}
          />
        </div>
        <div className="col-span-2 my-10 ">
          <h3 className=" text-center text-3xl font-extrabold text-yellow-500">
            Mis Peticiones Pendientes:
          </h3>
          <div className="flex flex-col flex-wrap md:flex-row ">
            {postsPending.map((post) => (
              <PostUpdate
                key={post?._id}
                urlImgProfile="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                urlVerMas="http://localhost:3000/"
                timeTrans="2 horas"
                nombre={`${user.firstName} ${user.lastName}`}
                nameTitle={post.title}
                presupuesto={post.price}
                descripcion={post.body}
                tags={post.tags}
                urlOferta="http://localhost:3000/"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequests;
