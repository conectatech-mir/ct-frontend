import React from 'react';
import { useRef, useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';

import BASE_URL from '../../api/urls';

import axios from 'axios';

const LOGIN_URL = '/auth/login';

const Login = () => {

  const { setAuth } = useContext(AuthContext);

  let navigate = useNavigate();

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(()=> {
    setErrMsg('');
  }, [email, password]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Presionando el botón de Login");
    console.log("usuario: " + email + "Password: " + password);

    try {
      //TODO: Valide parameters require from backend
      const response = await axios({
        method: 'post',
        baseURL: BASE_URL,
        url:LOGIN_URL,
        data:{
          email,
          password
        }
      });
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;

      setAuth({ email, password, accessToken })

      setEmail('');
      setPassword('');
      setSuccess(true);      
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server Response');
      } else if (err.response?.status === 400){
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401){
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }


    // TODO: Delete later
    navigate("/profesionalHomePage");
  };

  return (
    <div className="bg-primary grid grid-cols-1 md:grid-cols-3 items-center justify-center py-12 px-4 sm:px-6 lg:px-8 gap-8 h-screen">
      <div className="space-y-8 hidden md:block col-span-2 text-xl xl:text-base">
        <h1 className="text-center">Conectatech</h1>
        <img
          src="https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          alt="Technology imagen"
        />
        <figure className="quote text-center">
         sasd
        </figure>
      </div>
      <div className="space-y-8 mx-8 md:mx-4">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200">
            Login to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-400 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>
        <section>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  ref={emailRef}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-200"
                >
                  Remember me
                </label>
              </div>

                <p className="mt-2 text-center text-sm text-gray-200">
                  O{' '}
                  <Link to="/registro">Crea tu cuenta</Link>
                </p>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Login
              </button>
            </div>

            <p className="mt-2 text-center text-sm text-gray-200">
              O{" "}
              <Link to="/registro">Crea tu cuenta</Link>
            </p>
          </form>

        </section>
      </div>
    </div>
  );
};

export default Login;
