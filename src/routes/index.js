import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../pages/login/Login.component'
import ProfessionalHead from '../pages/head/profesional/ProfesionalHead.component'
import UserHead from '../pages/head/user/UserHead.component'
// import RegistroProfesional from '../pages/registro/profesional/RegistroProfesional.component'
// import Registro from '../pages/registro/Registro.component'
import User from '../pages/User'
import Feed from '../pages/User/Feed'
import UserPost from '../pages/User/Post'
import IndexRegistro from '../pages/registro/IndexRegistro.component'
import IndexRegistroProfesional from '../pages/registro/profesional/IndexRegistroProfesional.component'
import ProfessionalHomePage from '../pages/homepage/professional/ProfessionalHomePage'
import EditAccountPage from '../pages/account/editAccount.component'
const Router = () => {
  const [userName] = useState('Usuario')
  const [professionaName] = useState('Profesional')

  const [nomb] = useState('Mariana Díaz')
  const [email] = useState('mariana.diaz@gmail.com')
  return <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/registro' element={<IndexRegistro />} />
    <Route path='/profesionalHead' element={<ProfessionalHead name={professionaName} />} />
    <Route path='/userHead' element={<UserHead name={userName} />} />
    <Route path='/EditAccountPage' element={<EditAccountPage name={professionaName} nombre={nomb} />} />
    <Route path='/registroProfesional' element={<IndexRegistroProfesional />} />
    <Route path='/profesionalHomePage' element={<ProfessionalHomePage name={professionaName} nombre={nomb} email={email} />} />
    <Route path='user/:username' element={<User nombre={nomb} email={email} />}>
      <Route path='feed' element={<Feed />} />
      <Route path='post/:id' element={<UserPost />} />
      <Route path='*' element={`${<h2>Page Not Found</h2>}`} />
    </Route>
  </Routes>;
};

export default Router;
