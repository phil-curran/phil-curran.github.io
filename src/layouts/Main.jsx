import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Main = () => {
  return (
    <>
      <Sidebar />
      <div className="main">{Outlet}</div>
    </>
  );
};

export default Main;
