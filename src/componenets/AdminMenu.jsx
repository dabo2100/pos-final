import Logo from '../assets/Container.svg';
import { MdOutlineDashboard } from 'react-icons/md';
import { GoPeople } from 'react-icons/go';
import { FiBookOpen } from 'react-icons/fi';
import { LuChartPie } from 'react-icons/lu';
import { FiLogOut } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';

export default function AdminMenu() {
  const navigate = useNavigate();
  const categories = [
    { name: 'Dashboard', path: '.', icon: <MdOutlineDashboard /> },
    { name: 'Staff Mangement', path: 'staff', icon: <GoPeople /> },
    { name: 'Menu Editor', path: 'menu', icon: <FiBookOpen /> },
    { name: 'Sales Reports', path: 'sales', icon: <LuChartPie /> },
  ];

  const handleLogOut = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('jwt');
    navigate('/login');
  };
  return (
    <div className="w-71.75 bg-white border-r border-r-border flex flex-col">
      <img className="py-1" src={Logo} />
      <div className="w-full h-2.5 grow flex flex-col px-4 gap-2">
        {categories.map((el, index) => (
          <NavLink end to={el.path} key={index} className={({ isActive }) => (isActive && 'bg-mainGreen/10 text-mainGreen ') + ' activeGreen'}>
            <div className="flex gap-4 px-4">
              <span className="text-[24px]">{el.icon}</span>
              <p className="text-[16px] font-semibold capitalize ">{el.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="w-full h-20 flex px-10 py-3 gap-4 " onClick={handleLogOut}>
        <span className="text-[24px] text-[#FF2056]">
          <FiLogOut />
        </span>
        <p className="text-[16px] font-semibold text-[#FF2056]">Log Out</p>
      </div>
    </div>
  );
}
