import { Outlet } from "react-router-dom";
import AdminMenu from "../componenets/AdminMenu";

export default function AdminLayout() {
  return (
    <div className="w-full h-full overflow-hidden flex">
        <AdminMenu />
      <div className="grow h-full overflow-auto bg-[#f8fafc]">
      <Outlet/>
      </div>
    </div>
  )
}
