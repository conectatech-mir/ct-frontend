import React from "react";

const Proposal = (props) => {
  return (
    <div className="card w-full p-4 border space-y-3">
      <div className="flex items-center gap-x-3">
        <div className="avatar">
          <div className="rounded-full w-12 h-12">
            <img
              src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
              alt="Profile"
            />
          </div>
        </div>
        <div className="grow">
          <h2 className="text-lg font-semibold">Usuario anónimo</h2>
          <div className="flex items-center gap-x-2">
            <span className="text-sm">17/12/2021</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  key={index}
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xl font-bold">US$ 150</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus
        accusantium molestiae earum repellat ea nihil quasi cumque. Architecto
        sint odit odio blanditiis harum similique fuga corporis doloribus minima
        beatae!
      </p>
      <button className="btn btn-sm btn-accent">Aceptar Oferta</button>
    </div>
  );
};

export default Proposal;
