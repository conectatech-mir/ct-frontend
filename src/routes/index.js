import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/login/Login.component";
import ProfessionalHead from "../pages/head/profesional/ProfesionalHead.component";
import UserHead from "../pages/head/user/UserHead.component";
// import RegistroProfesional from '../pages/registro/profesional/RegistroProfesional.component'
// import Registro from '../pages/registro/Registro.component'
import User from "../pages/User";
import Feed from "../pages/User/Feed";
import UserPost from "../pages/User/Post";
import IndexRegistro from "../pages/registro/IndexRegistro.component";
import IndexRegistroProfesional from "../pages/registro/profesional/IndexRegistroProfesional.component";
import ProfessionalHomePage from "../pages/homepage/professional/ProfessionalHomePage";
import UserHomePage from "../pages/homepage/user/UserHomePage";

import MyRequests from "../pages/myrequests/MyRequests";
import MyrequestResolved from "../pages/MyrequestResolved/MyrequestResolved";
import EditAccountPage from "../pages/account/EditAccount.component";

const Router = () => {
  const [userName] = useState("Usuario");
  const [professionaName] = useState("Profesional");

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<IndexRegistro />} />
      <Route
        path="/profesionalHead"
        element={<ProfessionalHead name={professionaName} />}
      />
      <Route path="/userHead" element={<UserHead name={userName} />} />
      <Route
        path="/EditAccountPage"
        element={<EditAccountPage name={professionaName} />}
      />
      <Route
        path="/registroProfesional"
        element={<IndexRegistroProfesional />}
      />
      <Route
        path="/profesionalHomePage"
        element={<ProfessionalHomePage name={professionaName} />}
      />
      <Route path="/userHomePage" element={<UserHomePage name={userName} />} />
      <Route path="/MyRequests" element={<MyRequests name={userName} />} />
      <Route path="/MyrequestResolved" element={<MyrequestResolved />} />

      <Route path="user/:username" element={<User />}>
        <Route path="feed" element={<Feed />} />
        <Route path="post/:id" element={<UserPost />} />
        <Route path="*" element={`${(<h2>Page Not Found</h2>)}`} />
      </Route>
    </Routes>
  );
};

export default Router;
