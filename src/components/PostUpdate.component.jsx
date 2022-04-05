import React from "react";

function PostUpdate(props) {
  const {
    urlImgProfile,
    timeTrans,
    urlVerMas,
    urlOferta,
    nombre,
    nameTitle,
    especialidad,
    servicio,
    presupuesto,
    descripcion,
  } = props;

  return (
    <article className="max-h-700 -w-full md:w-1/2 px-3 py-3">
      <div className="rounded-lg bg-white overflow-hidden shadow py-8 px-5">
        <div className="flex flex-row justify-between mb-2 leading-none">
          <span className="text-frilea-text-grey"> {timeTrans}</span>
          <a
            className="mb-4 inline-block font-bold text-cyan-800 px-5 md:order-2 focus:outline-none"
            href={urlVerMas}
          >
            Ver más
          </a>
        </div>
        <div className="avatar">
          <div className="rounded-full w-12 h-12">
            <img src={urlImgProfile} alt="Profile" />
          </div>
        </div>
        <h2>{nombre}</h2>

        <h3 className="font-bold text-2xl mb-6">{nameTitle}</h3>
        <div className="flex flex-col mb-4">
          <table className="md:table-fixed">
            <tbody>
              <tr>
                <td>Especialidad:</td>
                <td className="font-bold">{especialidad}</td>
              </tr>
              <tr>
                <td>Servicios:</td>
                <td className="font-bold">{servicio}</td>
              </tr>
              <tr>
                <td>Presupuesto:</td>
                <td className="font-bold">{presupuesto}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-5">
          <p>{descripcion}</p>
        </div>
      </div>
    </article>
  );
}

export default PostUpdate;
