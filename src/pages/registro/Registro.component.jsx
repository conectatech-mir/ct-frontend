import "./Registro.css";
import useForm from "../../hooks/useForm";

const Registro = () => {
  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cellphone: "",
    typeUser: "",
  };
  const [formValues, handleInputChange, reset] = useForm(initialForm);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(
      "🚀 ~ file: Registro.component.jsx ~ line 14 ~ Registro ~ formValues",
      formValues
    );
  };
  return (
    <div className="w-7/12 mx-auto">
      <form className="p-8 pb-0" onSubmit={handlerSubmit}>
        <h2 className="tituloRegistro font-black">
          Regístrate, y así podrás ser parte de nuestra comunidad.
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Nombres</span>
          </label>
          <input
            placeholder="Ingrese sus nombres"
            className="input input-lg input-bordered"
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Apellidos</span>
          </label>
          <input
            placeholder="Ingrese sus apellidos"
            className="input input-lg input-bordered"
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Correo</span>
          </label>
          <input
            placeholder="Ingrese su correo"
            className="input input-lg input-bordered"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Contraseña</span>
          </label>
          <input
            placeholder="Ingrese su contraseña"
            className="input input-lg input-bordered"
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            autoComplete="true"
          ></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Celular</span>
          </label>
          <input
            placeholder="Ingrese su celular"
            className="input input-lg input-bordered"
            type="text"
            name="cellphone"
            value={formValues.cellphone}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">
              Tipo de Usuario
            </span>
          </label>
          <select
            className="select select-bordered select-lg w-full max-w-xs"
            name="typeUser"
            onChange={handleInputChange}
            defaultValue=""
          >
            <option className="text-lg" disabled="disabled">
              Seleccione Tipo de Usuario
            </option>
            <option className="text-lg">Usuario</option>
            <option className="text-lg">Profesional</option>
          </select>
        </div>
        <div className="flex justify-center">
          <input
            type="button"
            className="btn w-2/5 m-5"
            value="Cancelar"
            onClick={() => console.log("cancelar")}
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
