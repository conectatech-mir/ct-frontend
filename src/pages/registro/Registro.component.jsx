import './Registro.css'

const Registro = ()=> {
  return(
    <div className="w-7/12 mx-auto">
      <form className='p-8 pb-0'>
        <h2 className='tituloRegistro font-black'>Regístrate, y así podrás ser parte de nuestra comunidad.</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Nombres</span>
          </label> 
          <input placeholder="Ingrese sus nombres" className="input input-lg input-bordered" type="text"></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Apellidos</span>
          </label> 
          <input placeholder="Ingrese sus apellidos" className="input input-lg input-bordered" type="text"></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Correo</span>
          </label> 
          <input placeholder="Ingrese su correo" className="input input-lg input-bordered" type="text"></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text labelSpan font-medium">Contraseña</span>
          </label> 
          <input placeholder="Ingrese su contraseña" className="input input-lg input-bordered" type="password"></input>
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