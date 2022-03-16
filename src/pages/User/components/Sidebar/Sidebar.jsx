import React from "react";
import Sidbar from "../../../../components/SideBar.component";

const Sidebar = (props) => {
  return (
    <div className="mx-10 my-10">
      <Sidbar nombre={props.nombre} email={props.email} />
    </div>
  );
};

export default Sidebar;
