import "./Registro.css";
// import useForm from "../../hooks/useForm";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Registro = () => {
  const SignupSchema = yup.object().shape({
    firstName: yup.string().required("Ingrese nombre"),
    lastName: yup.string().required("Ingrese apellidos"),
    email: yup
      .string()
      .email()
      .required("Ingrese un correo electronico valido"),
    password: yup.string().required("rellene el campo contraseña"),
    rol: yup.string().required("Elija un rol"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    setValue,
  } = useForm({ resolver: yupResolver(SignupSchema) });
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();
  const watchShow = watch();
  const MySwal = withReactContent(Swal);
  const fetchUserRegister = async (formValues, url) => {
    const config = {
      method: "post",
      url,
      headers: {
        "Content-Type": "application/json",
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
  const isDuplicateSkill = (skill) => {
    return skills.includes(skill);
  };
  const addSkills = (e) => {
    e.preventDefault();
    if (!isDuplicateSkill(getValues("skills"))) {
      setSkills([...skills, getValues("skills")]);
      setValue("skills", "");
    } else {
      alert("Skill duplicado");
    }
  };
  const deleteSkills = (skillD) => {
    const updateSkills = skills.filter((skill) => skill !== skillD);
    setSkills(updateSkills);
  };
  const resultRegistration = async (res) => {
    if (res.data?.ok) {
      return await MySwal.fire({
        title: <strong>Buen trabajo!</strong>,
        html: <i>Cuenta Creada!</i>,
        icon: "success",
      });
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
  const onSubmit = async ({
    firstName,
    lastName,
    email,
    password,
    phone,
    rol,
    about,
  }) => {
    try {
      const newFormAccount = {
        firstName,
        lastName,
        email,
        password,
        phone,
        rol,
      };
      if (rol === "PROFESSIONAL") {
        newFormAccount.skills = skills;
        newFormAccount.about = about;
        const url = `${process.env.REACT_APP_API_URL_BASE}/api/auth/p/register`;
        const res = await fetchUserRegister(newFormAccount, url);
        resultRegistration(res);
      } else if (rol === "USER") {
        const url = `${process.env.REACT_APP_API_URL_BASE}/api/auth/register`;
        const res = await fetchUserRegister(newFormAccount, url);
        resultRegistration(res);
      }
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
    <div className="w-7/12 mx-auto">
      <form className="p-8 pb-0" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="tituloRegistro font-black">
          Regístrate, y así podrás ser parte de nuestra comunidad.
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Nombres*</span>
          </label>
          <input
            placeholder="Ingrese sus nombres"
            className="input input-lg input-bordered"
            type="text"
            name="firstName"
            id="firstName"
            {...register("firstName")}
          ></input>
          {errors.firstName && (
            <p className="text-red-700 mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Apellidos*</span>
          </label>
          <input
            placeholder="Ingrese sus apellidos"
            className="input input-lg input-bordered"
            type="text"
            name="lastName"
            id="lastName"
            {...register("lastName")}
          ></input>
          {errors.lastName && (
            <p className="text-red-700 mt-1">{errors.lastName.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Correo*</span>
          </label>
          <input
            placeholder="Ingrese su correo"
            className="input input-lg input-bordered"
            type="email"
            name="email"
            id="email"
            {...register("email")}
          ></input>
          {errors.email && (
            <p className="text-red-700 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">
              Contraseña*
            </span>
          </label>
          <input
            placeholder="Ingrese su contraseña"
            className="input input-lg input-bordered"
            type="password"
            name="password"
            id="password"
            {...register("password")}
            autoComplete="true"
          ></input>
          {errors.password && (
            <p className="text-red-700 mt-1">{errors.password.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Celular</span>
          </label>
          <input
            placeholder="Ingrese su celular"
            className="input input-lg input-bordered"
            type="text"
            name="phone"
            id="phone"
            {...register("phone")}
          ></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">
              Tipo de Usuario*
            </span>
          </label>
          <select
            className="select select-bordered select-lg w-full max-w-xs"
            name="rol"
            id="rol"
            {...register("rol")}
            defaultValue=""
          >
            <option className="text-lg" disabled="disabled" value="">
              Seleccione Tipo de Usuario
            </option>
            <option className="text-lg" value="USER">
              Usuario
            </option>
            <option className="text-lg" value="PROFESSIONAL">
              Profesional
            </option>
          </select>
          {errors.rol && (
            <p className="text-red-700 mt-1">{errors.rol.message}</p>
          )}
        </div>
        {watchShow.rol === "PROFESSIONAL" ? (
          <>
            <div className="form control mb-10">
              <label className="label">
                <span className="label-text labelSpan font-medium">
                  Registra tus Skills
                </span>
              </label>
              <div>
                <input
                  placeholder="Ingrese tus Skills"
                  className="input input-lg input-bordered"
                  type="text"
                  id="skills"
                  {...register("skills")}
                ></input>
                <input
                  type="button"
                  className="btn w-2/5 mx-5 bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white border border-gray-300 hover:border-transparent"
                  value="Agregar"
                  onClick={addSkills}
                ></input>
              </div>
              <div>
                {skills?.map((skill) => (
                  <div key={skill}>
                    <h1>{skill}</h1>
                    <button
                      type="button"
                      className="btn w-2/5 m-1"
                      onClick={() => deleteSkills(skill)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text labelSpan font-medium">
                  Cuéntanos más sobre ti
                </span>
              </label>
              <textarea
                className="textarea h-64 textarea-bordered input-lg"
                placeholder="Puedes describirte como también contarnos sobre los proyectos en los que has trabajado"
                id="about"
                {...register("about")}
              ></textarea>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="flex justify-center">
          <input
            type="button"
            className="btn w-2/5 m-5"
            value="Cancelar"
            onClick={() => navigate("/")}
          ></input>
          <input
            type="submit"
            className="btn btn-info w-2/5 m-5"
            value="Registrar"
          ></input>
        </div>
      </form>
    </div>
  );
};
export default Registro;
