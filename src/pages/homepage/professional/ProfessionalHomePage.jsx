import React from "react";
import ProfessionalHeader from "../../header/professional/ProfessionalHeader.component";
import OfferUpdate from "../../../components/OfferUpdate.component";
import SideBar from "../../../components/SideBar.component";

const ProfessionalHomePage = () => {
  return (
    <div className="bg-primary">
      <ProfessionalHeader />

      <div className="main grid grid-cols-3 gap-4 mx-4">
        <div className="mx-16">
          <SideBar />
        </div>
        <div className="y-4 col-span-2 mx-8">
          <h3 className="mt-10 mb-12 text-center text-3xl font-extrabold text-yellow-500">
            Proyectos Abiertos:
          </h3>
          <div className="flex flex-col flex-wrap md:flex-row md:-m-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <OfferUpdate
                key={item}
                urlImgProfile="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                urlVerMas="http://localhost:3000/"
                timeTrans="2 horas"
                name="Mariana Díaz"
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
