import React from "react";
import RatingIcon from "./RatingIcon.components";

function OfferUpdate(props) {
  const {
    urlImgProfile,
    timeTrans,
    urlVerMas,
    urlOferta,
    name,
    nameTitle,
    especialidad,
    servicio,
    fechaInicio,
    fechaEntrega,
    presupuesto,
    descripcion,
  } = props;
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };

  return (
    <article className="max-h-500 -w-full md:w-1/2 px-2 py-2">
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
        <h2>{name}</h2>
        <div className="box flex">
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <RatingIcon
                key={index}
                index={index}
                rating={rating}
                hoverRating={hoverRating}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onSaveRating={onSaveRating}
              />
            );
          })}
        </div>

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
                <td>Inicio:</td>
                <td className="font-bold">{fechaInicio}</td>
              </tr>
              <tr>
                <td>Entrega:</td>
                <td className="font-bold">{fechaEntrega}</td>
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
        <div className="text-center ">
          <a
            title=" Ofertar Ahora!"
            href={urlOferta}
            className="btn-blue inline-block w-full text-white cursor-pointer hover:bg-yellow-300 rounded-lg py-2 px-6 font-semibold text-lg text-center"
          >
            Ofertar Ahora!
          </a>
        </div>
      </div>
    </article>
  );
}

export default OfferUpdate;
