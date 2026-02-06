import { Outlet } from "react-router-dom";
import NavMenu from "../componenets/NavMenu";
import SearchBar from "../componenets/SearchBar";

export default function CashierLayout() {
  return (
    <div className="w-full h-full overflow-hidden flex">
      <NavMenu />
      <div className="h-full grow  flex flex-col">
        <SearchBar />
        <div className="w-full h-2.5 grow overflow-auto">
          <Outlet />
        </div>
      </div>
      <div className="w-104.75 h-full bg-blue-500"></div>
    </div>
  );
}
