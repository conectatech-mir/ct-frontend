import React, { useEffect } from "react";
import ProfessionalHead from "../../head/profesional/ProfesionalHead.component";
import OfferUpdate from "../../../components/OfferUpdate.component";
import SideBar from "../../../components/SideBar.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../store/actions/userActions";
import { fetchAllPostProfessional } from "../../../store/actions/postActions";

const ProfessionalHomePage = (props) => {
  const { id } = JSON.parse(localStorage.getItem("ConectedLoggedApp"));
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { posts } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(fetchAllPostProfessional());
  }, []);
  return (
    <div className="bg-gray-200">
      <ProfessionalHead name={props.name} />
      <div className="content-center grid grid-cols-3 mt-2 my-auto">
        <div className="mx-6">
          <SideBar
            nombre={`${user.firstName} ${user.lastName}`}
            email={user.email}
            rol={user.rol}
            skills={user.skills}
          />
        </div>
        <div className="col-span-2 my-10 ">
          <h3 className=" text-center text-3xl font-extrabold text-yellow-500">
            Proyectos Abiertos:
          </h3>
          <div className="flex flex-col flex-wrap md:flex-row ">
            {posts.map((post) => (
              <OfferUpdate
                key={post._id}
                idPost={post._id}
                urlImgProfile="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                urlVerMas="http://localhost:3000/"
                timeTrans="2 horas"
                nombre={`${user.firstName} ${user.lastName}`}
                nameTitle={post.title}
                presupuesto={post.price}
                descripcion={post.body}
                tags={post.tags}
                userId={user._id}
                urlOferta="http://localhost:3000/"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalHomePage;
