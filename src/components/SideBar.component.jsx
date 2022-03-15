import React from "react";

const SideBar = (props) => {
  return (
    <div className="my-10">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6  border-b">
          <img
            className="h-24 w-24 rounded-full mx-auto"
            src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
            alt="Profile"
          />
          <p className="pt-2 text-lg font-semibold">{props.nombre}</p>
          <p className="text-sm text-gray-600">{props.email}</p>
          <div className="mt-5">
            <a
              href="/EditAccountPage"
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700 hover:bg-indigo-400"
            >
              Editar Perfil
            </a>
          </div>
        </div>
        <div className="border-b">
          <p className="px-4 mt-2 text-sm font-medium text-gray-800 leading-none">
            Peticiones:
          </p>
          <a
            href="/user/dcyar/feed"
            className="px-4 mt-2 py-2 hover:bg-indigo-400 flex"
          >
            <div className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                En curso
              </p>
              <p className="text-xs text-gray-500">Google, slack, mail</p>
            </div>
          </a>
          <a
            href="/user/dcyar/feed"
            className="px-4 py-2 hover:bg-indigo-400 flex"
          >
            <div className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Resueltas
              </p>
              <p className="text-xs text-gray-500">
                Paginas web, Edición de videos,..
              </p>
            </div>
          </a>
        </div>
        <div className=" border-b w-full px-4 mt-2 bg-base-100">
          <span className="text-sm font-medium text-gray-800 leading-none">
            Especialidades:
          </span>
          <div className="grid grid-cols-3 mt-2 my-auto">
            <span
              className="inline-block rounded-full text-white 
                            bg-blue-400 hover:bg-blue-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
            >
              ReacJs
            </span>
            <span
              className="inline-block rounded-full text-white 
                            bg-red-400 hover:bg-red-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
            >
              NodeJs
            </span>
            <span
              className="inline-block rounded-full text-white 
                            bg-slate-400 hover:bg-slate-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
            >
              HTML5
            </span>
            <span
              className="inline-block rounded-full text-white 
                            bg-green-400 hover:bg-green-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
            >
              CSS3
            </span>
            <span
              className="inline-block rounded-full text-white 
                            bg-blue-400 hover:bg-blue-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
            >
              TailwindCSS
            </span>
            <span
              className="inline-block rounded-full text-white 
              bg-purple-400 hover:bg-purple-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
            >
              DaisyUI
            </span>
          </div>
        </div>
        <div className="mt-2 text-sm font-medium text-gray-800 leading-none">
          <span className="px-4 ">Rating:</span>
        </div>
        <div className="border-b flex justify-evenly">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              key={index}
              className="h-10 w-10 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="">
          <a href="/" className="px-4 py-2 pb-4 hover:bg-indigo-400 flex">
            <p className="text-sm font-medium text-gray-800 leading-none">
              Logout
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
