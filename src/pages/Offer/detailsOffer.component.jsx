import React from "react";
import ProfessionalHead from "../head/profesional/ProfesionalHead.component";
export default function detailsOffer(props) {
  const {
    urlImgProfile,
    timeTrans,
    nameTitle,
    especialidad,
    servicio,
    fechaInicio,
    fechaEntrega,
    presupuesto,
    descripcion,
  } = props;
  return (
    <div className="content-center">
      <ProfessionalHead name={props.name} />
      <section className="py-10 bg-gray-100  bg-opacity-50 h-screen">
        <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t"></div>
        </div>
      </section>
    </div>
  );
}
