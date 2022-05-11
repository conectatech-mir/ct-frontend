import React from "react";

function PostUpdate({
  urlImgProfile,
  accepted,
  urlVerMas,
  urlOferta,
  nombre,
  nameTitle,
  especialidad,
  servicio,
  presupuesto,
  descripcion,
  tags,
  professionalName,
}) {
  const colors = [
    "blue",
    "red",
    "slate",
    "green",
    "blue",
    "purple",
    "blue",
    "red",
    "slate",
    "green",
    "blue",
    "purple",
  ];
  return (
    <article className="max-h-700 -w-full md:w-1/2 px-3 py-3">
      <div className="rounded-lg bg-white overflow-hidden shadow py-8 px-5">
        <div className="flex flex-row justify-between mb-2 leading-none">
          <div className="avatar">
            <div className="rounded-full w-12 h-12">
              <img src={urlImgProfile} alt="Profile" />
            </div>
          </div>
          {accepted && (
            <p
              className={`inline-block rounded-full text-white 
            bg-green-400 hover:bg-green-500 duration-300 
            text-xs font-bold text-center
            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-3 
            opacity-90 hover:opacity-100`}
            >
              Resuelto
            </p>
          )}
        </div>

        <h2>{nombre}</h2>

        <h3 className="font-bold text-2xl mb-6">{nameTitle}</h3>
        <div className="flex flex-col mb-4">
          <table className="md:table-fixed">
            <tbody>
              {/* <tr>
                <td>Especialidad:</td>
                <td className="font-bold">{especialidad}</td>
              </tr>
              <tr>
                <td>Servicios:</td>
                <td className="font-bold">{servicio}</td>
              </tr> */}
              <tr>
                <td className="text-lg">Presupuesto:</td>
                <td className="font-bold">{presupuesto}$</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-5">
          <h1 className="text-lg">descripcion:</h1>
          <p>{descripcion}</p>
        </div>
        <div className=" border-b w-full  mt-2 bg-base-100">
          <span className="text-sm font-medium text-gray-800 leading-none">
            Tags:
          </span>
          <div className="grid grid-cols-3 mt-2 my-auto">
            {tags.map((tag, index) => {
              return (
                <span
                  key={tag}
                  className={`inline-block rounded-full text-white
                            bg-slate-700 hover:bg-slate-800 duration-300
                            text-xs font-bold text-center
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1
                            opacity-90 hover:opacity-100`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <span className="text-sm font-medium text-gray-800 leading-none">
            {professionalName?.includes("undefined") ||
            professionalName === undefined
              ? ""
              : `Resuelto Por: ${professionalName}`}
          </span>
        </div>
      </div>
    </article>
  );
}

export default PostUpdate;
