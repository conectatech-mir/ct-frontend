
const RegistroProfesional = ()=> {
  return(
    <div className="w-7/12 mx-auto">
      <form className='p-8 pb-0 '>
        <h2 className="tituloRegistro font-black">Regístrate, y así podrás ser parte de nuestra comunidad.</h2>
        <div className="form control mb-10">
          <label className="label">
            <span className="label-text labelSpan font-medium">Registra tus Skills</span>
          </label>
          <div>
            <input placeholder="Ingrese tus Skills" className="input input-lg input-bordered" type="text"></input>
            <input type="button" 
            className="btn w-2/5 mx-5 bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white border border-gray-300 hover:border-transparent" 
            value="Agregar"></input>
          </div>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text labelSpan font-medium">Cuéntanos más sobre ti</span>
          </label> 
          <textarea class="textarea h-64 textarea-bordered input-lg" 
          placeholder="Puedes describirte como también contarnos sobre los proyectos en los que has trabajado"></textarea>
        </div> 
        <div className="flex justify-center">
          <input type="submit" className="btn w-2/5 m-5" value="Cancelar"></input>
          <input type="submit" className="btn btn-info w-2/5 m-5" value="Registrar"></input>
        </div>
      </form>
    </div>
    );
  }
export default RegistroProfesional;