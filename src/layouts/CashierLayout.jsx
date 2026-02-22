import { Outlet, useNavigate } from 'react-router-dom';
import NavMenu from '../componenets/NavMenu';
import SearchBar from '../componenets/SearchBar';
import SideCart from '../componenets/SideCart';
import { useEffect } from 'react';

export default function CashierLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem('user')) || {};
    if (user.system_role != 'cashier') {
      navigate('/login');
    }
  }, []);

  return (
    <div className="w-full h-full overflow-hidden flex">
      <NavMenu />
      <div className="h-full w-2 grow flex flex-col">
        <SearchBar />
        <div className="w-full h-2 grow overflow-auto">
          <Outlet />
        </div>
      </div>
      <div className="w-104.75 h-full">
        <SideCart />
      </div>
    </div>
  );
}
