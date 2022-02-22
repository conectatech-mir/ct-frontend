import './UserHeaderStyle.css';

const UserHeader = ({name}) => {
  return(
    <header className='userHeader'>
      <nav className="p-6">
        <ul className="flex justify-between items-center">
          <div>
            <li className="mx-8">icono</li>
          </div>
          <div className="flex items-center">
            <li className="mx-8 hover:animate-pulse">Crear Petición</li>
            <li className="mx-8 hover:animate-pulse">Peticiones Resueltas</li>
            <li className="mx-8 hover:animate-pulse">Mis Peticiones</li>
            <li className="mx-8"> 
              <div className="flex justify-between items-center">
                <div className="block h-9 w-9 rounded-full overflow-hidden  mr-2">
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                </div>
                <div className="dropdown dropdown-hover dropdown-end">
                  <div tabindex="0">
                    {name}
                  </div>
                  <ul tabindex="0" className="p-2 shadow menu dropdown-content rounded-box w-52 userDropdownBox">
                    <li>
                      <a className='hover:animate-pulse'>Editar Perfil</a>
                    </li> 
                    <li>
                      <a className='hover:animate-pulse'>Privacidad</a>
                    </li> 
                    <li>
                      <a className='hover:animate-pulse'>Cerrar Sesión</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
export default UserHeader;