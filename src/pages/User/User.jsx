import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const User = () => {
  return <div className='container m-auto grid grid-cols-4 gap-x-4'>
    <Sidebar />
    <section className='col-span-4 md:col-span-3 columns-1 p-4 space-y-4'>
      <Outlet />
    </section>
  </div>;
};

export default User;
