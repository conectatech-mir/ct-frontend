import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfessionalHead from "../head/profesional/ProfesionalHead.component";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { fetchUser } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import UserHead from "../head/user/UserHead.component";

const EditAccountPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const EditProfileSchema = yup.object().shape({
    firstName: yup.string().required("Ingrese nombre"),
    lastName: yup.string().required("Ingrese apellidos"),
  });
  const { token } = JSON.parse(
    window.localStorage.getItem("ConectedLoggedApp")
  );
  const { id } = JSON.parse(window.localStorage.getItem("ConectedLoggedApp"));
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(EditProfileSchema) });
  const baseURL = `http://localhost:8000/api/users/getUserById/${id}`;

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);
  useEffect(() => {
    reset({
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
    });
  }, [user]);
  const resultRegistration = async (res) => {
    if (res.ok) {
      const response = await MySwal.fire({
        title: <strong>Buen trabajo!</strong>,
        html: <i>Usuario Actualizada!</i>,
        icon: "success",
      });
      navigate("/MyrequestResolved");
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
  const onSubmit = async ({ firstName, lastName, password, phone }) => {
    try {
      const newFormAccount = {
        firstName,
        lastName,
        ...(password === 0 ? "" : { password: password }),
        phone,
      };

      const res = await patchUser(newFormAccount, id);
      console.log(
        "🚀 ~ file: EditAccount.component.jsx ~ line 79 ~ onSubmit ~ res",
        res.ok
      );
      resultRegistration(res);
    } catch (error) {
      console.log(error);
      return await MySwal.fire({
        title: <strong>Algo ha sucedido</strong>,
        html: <i>{`Alguno de los campos es innválido. ${error}`}</i>,
        icon: "error",
      });
    }
  };
  const patchUser = async (newFormAccount, id) => {
    const url = `${process.env.REACT_APP_API_URL_BASE}/api/users/editUserById/${id}`;
    const responseProduct = await axios.put(url, newFormAccount, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(
      "🚀 ~ file: EditAccount.component.jsx ~ line 95 ~ patchUser ~ responseProduct",
      responseProduct.data
    );
    return responseProduct.data;
  };
  return (
    <div className="content-center">
      {user.rol === "PROFESSIONAL" ? (
        <ProfessionalHead name="Profesional" />
      ) : (
        <UserHead name="Usuario" />
      )}
      <section className="py-10 bg-gray-100  bg-opacity-50 h-screen">
        <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
                <img
                  className="w-10 h-12 object-cover rounded-full"
                  alt="avatar"
                  src="/resources/img/blank-profile-.webp"
                />
                <h1 className="text-gray-900">
                  Hola! {user.firstName + " " + user.lastName}
                </h1>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white space-y-8">
              <div className="md:inline-flex space-y-8 md:space-y-0 w-full p-8 text-gray-900 items-center">
                <h2 className="md:w-1/3 max-w-sm mx-auto">Account</h2>
                <div className="md:w-2/3 max-w-sm mx-auto">
                  <label className="text-sm text-gray-400">Email</label>
                  <div className="w-full inline-flex border">
                    <div className="p-2 w-1/12 bg-gray-100 bg-opacity-50">
                      <svg
                        fill="none"
                        className="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.24 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      value={`${user.email}`}
                      disabled
                    />
                  </div>
                </div>
              </div>

              <hr />
              <div className="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                <h2 className="md:w-4/12 max-w-sm mx-auto">
                  Personal information
                </h2>
                <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <label className="text-sm text-gray-400">First Name:</label>
                    <div className="w-full inline-flex border">
                      <div className="w-1/12 pt-2 bg-gray-100">
                        <svg
                          fill="none"
                          className="w-6 text-gray-400 mx-auto"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        className="w-11/12 focus:outline-none focus:text-gray-900 p-2"
                        name="firstName"
                        id="firstName"
                        {...register("firstName", { value: user.firstName })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400">Last Name:</label>
                    <div className="w-full inline-flex border">
                      <div className="w-1/12 pt-2 bg-gray-100">
                        <svg
                          fill="none"
                          className="w-6 text-gray-400 mx-auto"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        className="w-11/12 focus:outline-none focus:text-gray-900 p-2"
                        name="lastName"
                        id="lastName"
                        {...register("lastName")}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400">
                      Phone number
                    </label>
                    <div className="w-full inline-flex border">
                      <div className="pt-2 w-1/12 bg-gray-100">
                        <svg
                          fill="none"
                          className="w-6 text-gray-400 mx-auto"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        name="phone"
                        id="phone"
                        required={false}
                        {...register("phone")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div className="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                <h2 className="md:w-4/12 max-w-sm mx-auto">Change password</h2>

                <div className="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-12">
                  <div className="w-full inline-flex border-b">
                    <div className="w-1/12 pt-2">
                      <svg
                        fill="none"
                        className="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <input
                      type="password"
                      className="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                      name="password"
                      id="password"
                      autoComplete="false"
                      {...register("password")}
                    />
                  </div>
                </div>

                <div className="md:w-3/12 text-center md:pl-6">
                  <button
                    type="submit"
                    className="text-white w-full hover:bg-green-600 mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                  >
                    <svg
                      fill="none"
                      className="w-4 text-white mr-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Update
                  </button>
                </div>
              </div>

              <hr />
              <div className="w-full p-4 text-right text-gray-500">
                <button className="inline-flex items-center focus:outline-none mr-4">
                  <svg
                    fill="none"
                    className="w-4 mr-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete account- {user.firstName}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EditAccountPage;
