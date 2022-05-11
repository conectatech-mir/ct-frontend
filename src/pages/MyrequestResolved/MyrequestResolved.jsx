import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/actions/userActions";
import {
  fetchAllAccepted,
  fetchAllAcceptedProfessional,
} from "../../store/actions/postActions";
import UserHead from "../head/user/UserHead.component";
import SideBar from "../../components/SideBar.component";
import PostUpdate from "../../components/PostUpdate.component";
import ProfessionalHead from "../head/profesional/ProfesionalHead.component";

const MyrequestResolved = (props) => {
  const { id } = JSON.parse(localStorage.getItem("ConectedLoggedApp"));
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { postsAccepted } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(fetchUser(id));
    user.rol === "PROFESSIONAL"
      ? dispatch(fetchAllAcceptedProfessional(id))
      : dispatch(fetchAllAccepted(id));
  }, []);

  return (
    <div className="bg-gray-200">
      {user.rol === "PROFESSIONAL" ? (
        <ProfessionalHead name="Profesional" />
      ) : (
        <UserHead name="Usuario" />
      )}
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
            Mis Peticiones Resueltas:
          </h3>
          <div className="flex flex-col flex-wrap md:flex-row ">
            {postsAccepted.map((post) => (
              <PostUpdate
                key={post?._id}
                urlImgProfile="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                urlVerMas="http://localhost:3000/"
                nombre={
                  user.rol === "PROFESSIONAL"
                    ? `${post.user.firstName} ${post.user.lastName}`
                    : `${user.firstName} ${user.lastName}`
                }
                nameTitle={post.title}
                presupuesto={post.price}
                descripcion={post.body}
                accepted={post.accepted}
                tags={post.tags}
                professionalName={`${post.accepted.firstName} ${post.accepted.lastName} - ${post.accepted.email}`}
                urlOferta="http://localhost:3000/"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyrequestResolved;
