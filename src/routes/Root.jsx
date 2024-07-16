import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Root = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
