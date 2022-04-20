import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { fetchAllPost } from "../../../../../store/actions/postActions";
import withReactContent from "sweetalert2-react-content";

const PostModal = (props) => {
  const dispatch = useDispatch();
  const postSchema = yup.object().shape({
    title: yup.string().required("Ingrese un titulo para el post"),
    body: yup.string().required("Ingrese una descripcion para el post"),
    price: yup.number().required("Ingrese un Precio"),
    tags: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({ resolver: yupResolver(postSchema) });
  const [tags, setTags] = useState([]);
  const MySwal = withReactContent(Swal);
  const fetchPost = async (formValues, url) => {
    const { token } = JSON.parse(localStorage.getItem("ConectedLoggedApp"));
    const config = {
      method: "post",
      url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: formValues,
    };
    try {
      const res = await axios(config);
      return res;
    } catch (error) {
      return error.response;
    }
  };
  const isDuplicateSkill = (tag) => {
    if (tag) {
      return tags.includes(tag);
    } else {
      return true;
    }
  };
  const addTags = (e) => {
    e.preventDefault();
    if (!isDuplicateSkill(getValues("tag"))) {
      setTags([...tags, getValues("tag")]);
      setValue("tag", "");
    } else {
      alert("Skill duplicado");
    }
  };
  const deleteTags = (tagD) => {
    const updateSkills = tags.filter((tag) => tag !== tagD);
    setTags(updateSkills);
  };
  const resultRegistrationPost = async (res) => {
    if (res.data?.ok) {
      const response = await MySwal.fire({
        title: <strong>Buen trabajo!</strong>,
        html: <i>Post Creada!</i>,
        icon: "success",
      });
      setValue("title", "");
      setValue("body", "");
      setValue("price", "");
      setTags([]);
      return response;
    } else if (res.status === 400) {
      return await MySwal.fire({
        title: <strong>Algo ha sucedido</strong>,
        html: (
          <i>{`Alguno de los campos es innválido. ${res.data.errors.map(
            (error) => error.msg
          )}`}</i>
        ),
        icon: "error",
      });
    }
  };
  const onSubmit = async ({ title, body, price }) => {
    try {
      const { id } = JSON.parse(localStorage.getItem("ConectedLoggedApp"));
      const newFormAccount = {
        title,
        body,
        price,
        tags,
        user: id,
      };
      const url = `${process.env.REACT_APP_API_URL_BASE}/api/posts`;
      const res = await fetchPost(newFormAccount, url);
      resultRegistrationPost(res);
      dispatch(fetchAllPost(id));
    } catch (error) {
      console.log(error);
      return await MySwal.fire({
        title: <strong>Algo ha sucedido</strong>,
        html: <i>{`Alguno de los campos es innválido. ${error}`}</i>,
        icon: "error",
      });
    }
  };
  return (
    <div className="m-4">
      <label
        htmlFor="my-modal-2"
        className="btn btn-block btn-primary modal-button"
      >
        Publicar Petición
      </label>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <form className="modal-box">
          <h3 className="text-lg font-bold">Nueva Petición:</h3>
          <div className="divider"></div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Titulo del post:</span>
            </label>
            <input
              type="text"
              placeholder="Titulo Post"
              className="input input-bordered"
              {...register("title")}
            />
            {errors.title && (
              <p className="text-red-700 mt-1">{errors.title.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Descripcion del post:</span>
            </label>
            <textarea
              className="textarea h-24 textarea-bordered"
              placeholder="Necesito ayuda con..."
              {...register("body")}
            ></textarea>
            {errors.body && (
              <p className="text-red-700 mt-1">{errors.body.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Precio (US$):</span>
            </label>
            <input
              type="number"
              placeholder="25.00"
              className="input input-bordered"
              {...register("price")}
              defaultValue={0}
            />
            {errors.price && (
              <p className="text-red-700 mt-1">{errors.price.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Etiquetas:</span>
            </label>
            <div className="input-group">
              <input
                type="text"
                className="input input-bordered"
                {...register("tag")}
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={addTags}
              >
                Agregar
              </button>
            </div>
            <div className="flex gap-x-1 mt-2">
              {tags?.map((tag) => (
                <button
                  className="badge badge-outline"
                  key={tag}
                  onClick={() => deleteTags(tag)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="modal-action">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit(onSubmit)}
            >
              Accept
            </button>
            <label htmlFor="my-modal-2" className="btn">
              Close
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
