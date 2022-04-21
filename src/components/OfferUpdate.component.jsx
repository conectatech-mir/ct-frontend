import React from "react";
import RatingIcon from "./RatingIcon.components";
import { useDispatch } from "react-redux";
import {
  fetchAllPostProfessional,
  patchPostOffered,
} from "../store/actions/postActions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
function OfferUpdate(props) {
  const {
    idPost,
    userId,
    urlImgProfile,

    urlVerMas,
    urlOferta,
    nombre,
    nameTitle,
    especialidad,
    servicio,
    fechaInicio,
    fechaEntrega,
    presupuesto,
    descripcion,
  } = props;
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
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
  const handleOffer = async (idPost) => {
    const UpdatePost = {
      accepted: userId,
    };
    await dispatch(patchPostOffered(idPost, UpdatePost));
    dispatch(fetchAllPostProfessional());
    return MySwal.fire({
      title: <strong>Exito</strong>,
      html: <i>Post Ofertado</i>,
      icon: "success",
    });
  };
  return (
    <article className="max-h-700 -w-full md:w-1/2 px-3 py-3">
      <div className="rounded-lg bg-white overflow-hidden shadow py-8 px-5">
        <div className="flex flex-row justify-between mb-2 leading-none">
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
                <td>Presupuesto:</td>
                <td className="font-bold">{presupuesto}$</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-5">
          <h1 className="text-lg">descripcion:</h1>
          <p>{descripcion}</p>
        </div>
        <div className="text-center ">
          <button
            title=" Ofertar Ahora!"
            onClick={() => handleOffer(idPost)}
            className="btn-blue inline-block w-full text-white cursor-pointer hover:bg-blue-600 rounded-lg py-2 px-6 font-semibold text-lg text-center"
          >
            Ofertar Ahora!
          </button>
        </div>
      </div>
    </article>
  );
}

export default OfferUpdate;
