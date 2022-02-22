import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return <aside className='col-span-4 md:col-span-1 py-5 space-y-4 border h-fit shadow-md'>
    <div className="avatar flex flex-col items-center">
      <div className="rounded-full w-24 h-24">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" alt='Profile' />
      </div>
      <h2 className='text-lg font-semibold'>John Doe</h2>
      <Link to='/user/dcyar' className='text-sm link link-primary'>Editar Perfil</Link>
    </div>
    <ul className="menu w-full p-3 bg-base-100">
      <li className="menu-title">
        <span>
          Peticiones
        </span>
      </li>
      <li>
        <Link to="/user/dcyar/feed">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          En curso
        </Link>
      </li>
      <li>
        <Link to="/user/dcyar/feed">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Resueltas
        </Link>
      </li>
    </ul>
    <div className="menu w-full px-4 bg-base-100">
      <div className="menu-title">
        <span className='px-4'>
          Intereses
        </span>
      </div>
      <div className='px-4 space-x-1'>
        <span className='badge badge-outline badge-sm'>ReacJs</span>
        <span className='badge badge-outline badge-sm'>NodeJs</span>
        <span className='badge badge-outline badge-sm'>HTML5</span>
        <span className='badge badge-outline badge-sm'>CSS3</span>
        <span className='badge badge-outline badge-sm'>TailwindCSS</span>
        <span className='badge badge-outline badge-sm'>DaisyUI</span>
      </div>
    </div>
    <div className="menu w-full px-4 bg-base-100">
      <div className="menu-title">
        <span className='px-4'>
          Nivel Usuario:
        </span>
      </div>
      <div className='flex justify-evenly'>
        {
          [1,2,3,4,5].map((item, index) => (
            <svg xmlns="http://www.w3.org/2000/svg" key={index} className="h-10 w-10 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))
        }
      </div>
    </div>
  </aside>;
};

export default Sidebar;
