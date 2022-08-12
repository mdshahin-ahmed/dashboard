import React from "react";
import SideMenu from "./SideMenu/SideMenu";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-2 d-none d-lg-block"
            style={{ backgroundColor: "#010422" }}
          >
            <SideMenu></SideMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
