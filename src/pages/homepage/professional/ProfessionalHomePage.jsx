import React from "react";
import ProfessionalHead from "../../head/profesional/ProfesionalHead.component";
import OfferUpdate from "../../../components/OfferUpdate.component";
import SideBar from "../../../components/SideBar.component";

const ProfessionalHomePage = (props) => {
  return (
    <div className="bg-gray-200">
      <ProfessionalHead name={props.name} />
      <div className="content-center grid grid-cols-3 mt-2 my-auto">
        <div className="mx-6">
          <SideBar nombre={props.nombre} email={props.email} />
        </div>
        <div className="col-span-2 my-10 ">
          <h3 className=" text-center text-3xl font-extrabold text-yellow-500">
            Proyectos Abiertos:
          </h3>
          <div className="flex flex-col flex-wrap md:flex-row ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
              <OfferUpdate
                key={item}
                urlImgProfile="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                urlVerMas="http://localhost:3000/"
                timeTrans="2 horas"
                nombre={props.nombre}
                nameTitle="Pagina Web"
                especialidad="Diseño"
                servicio="Diseño WEB"
                fechaInicio="02/02/2022"
                fechaEntrega="05/02/2022"
                presupuesto="150.50"
                descripcion="Hacer pagina web"
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
