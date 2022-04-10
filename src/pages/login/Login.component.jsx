import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthProvider";

import BASE_URL from "../../api/urls";

import axios from "axios";

const LOGIN_URL = "/auth/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  let navigate = useNavigate();

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Presionando el botón de Login");
    //console.log("usuario: " + email + "Password: " + password);

    try {
      //TODO: Valide parameters require from backend
      const response = await axios({
        method: "post",
        baseURL: BASE_URL,
        url: LOGIN_URL,
        data: {
          email,
          password,
        },
      });
      //console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;

      setAuth({ email, password, accessToken });

      setEmail("");
      setPassword("");
      setSuccess(true);
      window.localStorage.setItem(
        "ConectedLoggedApp",
        JSON.stringify(response)
      );
      // TODO: Delete later
      toast.success("¡Bienvenido! " + email);
      toast("¡🦄 Bienvenido! " + response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      toast.success();
      navigate("/profesionalHomePage");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server Response");
        toast.error("No server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
        err.response?.data?.errors.forEach((element) =>
          toast.error(element.msg, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        );
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
        toast.error("Unauthorized");
      } else {
        setErrMsg("Login Failed");
        toast.error("Unauthorized");
      }
      errRef.current.focus();
      setTimeout(() => {
        setErrMsg(null);
      }, 5000);
    }
  };

  return (
    <div className="divide-y-8 divide-cyan-900 md:divide-indigo-500 grid grid-cols-1 md:grid-cols-3 items-center justify-center sm:px-6 lg:px-8 gap-2 h-screen">
      <div className="space-y-8 hidden md:block col-span-2">
        <img
          src="https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          alt="Technology imagen"
        />
      </div>
      <div className="space-y-8 mx-8 smx-12 md:mx-12 text-sm xl:text-base">
        <div>
          <h1 className="mx-auto py-5 text-center text-3xl font-extrabold text-gray-800">
            ConectaTech
          </h1>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <p className="text-gray-500 py-3 dark:text-gray-900 text-center">
            Sign in to access your account
          </p>
        </div>
        <div>
          {/* mostrar errores de message */}
          <span
            ref={errRef}
            className={
              errMsg ? "errmsg text-xs tracking-wide text-red-600" : "offscreen"
            }
          >
            {errMsg}
          </span>
          <form className="mt-4" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="flex items-center border-2 py-2 px-3 rounded-t-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                required
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                ref={emailRef}
                className="pl-2 outline-none border-none w-full bg-transparent"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                data-cy="email-address"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-t-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="pl-2 outline-none border-none w-full bg-transparent"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                data-cy="password"
              />
            </div>

            <div className="flex px-4 items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  data-cy="checkbox-terminos"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-500"
                >
                  Remember me
                </label>
              </div>

              <p className=" no-underline hover:underline py-2 text-center text-sm text-gray-500">
                O <Link to="/registro">Crea tu cuenta</Link>
              </p>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                data-cy="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y- flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-white group-hover:text-gray-200/20"
                    aria-hidden="true"
                  />
                </span>
                Login
              </button>
            </div>

            <p className="no-underline hover:underline-offset-1 py-4 text-center text-sm text-gray-900">
              O <Link to="/registro">Crea tu cuenta</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
