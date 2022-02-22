import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../pages/login/Login.component'
import ProfessionalHeader from '../pages/header/professional/ProfessionalHeader.component'
import UserHeader from '../pages/header/user/UserHeader.component'
// import RegistroProfesional from '../pages/registro/profesional/RegistroProfesional.component'
// import Registro from '../pages/registro/Registro.component'
import User from '../pages/User'
import Feed from '../pages/User/Feed'
import UserPost from '../pages/User/Post'
import IndexRegistro from '../pages/registro/IndexRegistro.component'
import IndexRegistroProfesional from '../pages/registro/profesional/IndexRegistroProfesional.component'
import ProfessionalHomePage from '../pages/homepage/professional/ProfessionalHomePage'

const Router = () => {
  const [userName] = useState('Usuario')
  const [professionaName] = useState('Profesional')

  return <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/registro' element={<IndexRegistro/>} />
    <Route path='/registroProfesional' element={<IndexRegistroProfesional />} />
    <Route path='/userHeader' element={<UserHeader  name={ userName }/>} />
    <Route path='/profesionalHeader' element={<ProfessionalHeader  name = { professionaName }/>} />
    <Route path='/profesionalHomePage' element={<ProfessionalHomePage  name = { professionaName }/>} />
    <Route path='user/:username' element={<User />}>
      <Route path='feed' element={<Feed />} />
      <Route path='post/:id' element={<UserPost />} />
      <Route path='*' element={<h2>Page Not Found</h2>} />
    </Route>
  </Routes>;
};

export default Router;
