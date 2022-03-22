import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import BASE_URL from '../../api/urls';

import swal from 'sweetalert';
import './Registro.css'


const REGISTER_URL = '/auth/register';

const Registro = ()=> {

  const navigate = useNavigate()

  const initialValues = {firstName: "", lastName: "", email:"", password:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues({...formValues, [name]: value});
    console.log(formValues);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Presiono boton registrar")
    setFormErrors(validate(formValues))
    //setIsSubmit(true)
    //console.log(formValues);
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios({
          method: 'post',
          baseURL: BASE_URL,
          url:REGISTER_URL,
          data: formValues
        });
        if (response) {
          console.log(response);
          swal("Usuario creado correctamente!", "Ingrese con su usuario y clave!", "success");
          // To navigate
          navigate("/")  
        }
      } catch (err) {
        console.log(err);
        swal("Error!", err.message, "error");
      }    
    }
  }

  useEffect(async ()=> {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.firstName) {
      errors.firstName = "El nombre es requerido"
    }
    if (!values.lastName) {
      errors.lastName = "El apellido es requerido"
    }
    if (!values.email) {
      errors.email = "El email es requerido";
    } else if (!regex.test(values.email)) {
      errors.email = "No es un email valido";
    }
    if (!values.password) {
      errors.password = "La contraseña es requerida"
    }
    return errors;
  }

  return(
    <div className="w-7/12 mx-auto">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='text-center border-solid border-2 bg-sky'>Usuario registrado correctamente</div>) : (<div></div>) } */}

      <form className='p-8 pb-0' onSubmit={handleSubmit}>
        <h2 className='tituloRegistro font-black'>Regístrate, y así podrás ser parte de nuestra comunidad.</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Nombres</span>
          </label> 
          <input
            name="firstName" 
            placeholder="Ingrese sus nombres" 
            className="input input-lg input-bordered" 
            type="text"
            defaultValue={formValues.firstName}
            onChange={handleChange}
            ></input>
            <p>{ formErrors.firstName } </p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Apellidos</span>
          </label> 
          <input
            name="lastName" 
            placeholder="Ingrese sus apellidos" 
            className="input input-lg input-bordered" 
            type="text"
            defaultValue={formValues.lastName}
            onChange={handleChange}
            ></input>
            <p>{ formErrors.lastName } </p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Correo</span>
          </label> 
          <input
            name="email" 
            placeholder="Ingrese su correo" 
            className="input input-lg input-bordered" 
            type="text"
            defaultValue={formValues.email}
            onChange={handleChange}
            ></input>
            <p>{ formErrors.email } </p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Contraseña</span>
          </label> 
          <input
            name="password" 
            placeholder="Ingrese su contraseña" 
            className="input input-lg input-bordered" 
            type="password"
            defaultValue={formValues.password}
            onChange={handleChange}
            ></input>
            <p>{ formErrors.password } </p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Celular</span>
          </label> 
          <input placeholder="Ingrese su celular" className="input input-lg input-bordered" type="text"></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Tipo de Usuario</span>
          </label>
          <select className="select select-bordered select-lg w-full max-w-xs">
            <option className='text-lg' disabled="disabled" selected="selected">Seleccione Tipo de Usuario</option> 
            <option className='text-lg'>Usuario</option> 
            <option className='text-lg'>Profesional</option>
          </select>
        </div>
        <div className="flex justify-center">
          <input type="submit" className="btn w-2/5 m-5" value="Cancelar"></input>
          <input type="submit" className="btn btn-info w-2/5 m-5" value="Registrar"></input>
        </div>
      </form>
    </div>
  );
}
export default Registro;