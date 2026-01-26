import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

const UserLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default UserLayout;
