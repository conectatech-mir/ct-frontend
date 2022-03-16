import React from "react";

const PostModal = (props) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="my-modal-2"
        className="btn btn-block btn-primary modal-button"
      >
        Publicar Petición
      </label>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Nueva Petición:</h3>
          <div className="divider"></div>
          <div className="form-control">
            <textarea
              className="textarea h-24 textarea-bordered"
              placeholder="Necesito ayuda con..."
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Precio (US$):</span>
            </label>
            <input
              type="number"
              placeholder="25.00"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Fecha de finalización:</span>
            </label>
            <input type="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Etiquetas:</span>
            </label>
            <input type="text" className="input input-bordered" />
            <div className="flex gap-x-1 mt-2">
              <div className="badge badge-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                ReactJs
              </div>
              <div className="badge badge-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                NodeJs
              </div>
              <div className="badge badge-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Javascript
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-2" className="btn btn-primary">
              Accept
            </label>
            <label htmlFor="my-modal-2" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
