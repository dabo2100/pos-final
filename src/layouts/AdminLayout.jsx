import { Outlet, useNavigate } from 'react-router-dom';
import AdminMenu from '../componenets/AdminMenu';
import { useEffect } from 'react';

export default function AdminLayout() {
  const navigate = useNavigate();
  
  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem('user')) || {};
    if (user.system_role != 'admin') {
      navigate('/login');
    }
  }, []);

  return (
    <div className="w-full h-full overflow-hidden flex">
      <AdminMenu />
      <div className="grow h-full overflow-auto bg-[#f8fafc]">
        <Outlet />
      </div>
    </div>
  );
}
