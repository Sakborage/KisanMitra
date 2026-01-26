import { Outlet } from "react-router-dom";
import NavBarAdmin from "./Admin/NavBarAdmin";

const AdminLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminLayout;
