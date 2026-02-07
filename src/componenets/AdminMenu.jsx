import Logo from '../assets/Background+Shadow1.svg';
import { MdOutlineDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { FiBookOpen } from "react-icons/fi";
import { LuChartPie } from "react-icons/lu";
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export default function AdminMenu() {
  const categories = [
      { name: 'Dashboard', path: '/', icon: <MdOutlineDashboard /> },
      { name: 'Staff Mangement', path: '/staff', icon: <GoPeople /> },
      { name: 'Menu Editor', path: '/menu', icon: <FiBookOpen /> },
      { name: 'Sales Reports', path: '/sales', icon: <LuChartPie /> },
    ];
  
  return (
    <div className="w-71.75 bg-white border-r border-r-border flex flex-col">
      <div className="w-full h-26 pt-5 px-5 flex gap-1">
        <img src={Logo} />
        <div className='font-lexend font-semibold text-[24px] py-3.5 flex'>
          <div className='text-black'>Gusto</div>
          <div className='text-mainGreen'>POS</div>
        </div>
      </div>
      <div className="w-full h-2.5 grow flex flex-col px-4 gap-2">
        {categories.map((el, index) => (
          <NavLink to={el.path} key={index} className={({ isActive }) => (isActive && 'bg-mainGreen/10 text-mainGreen ') + ' activeGreen'}>
            <div className='flex gap-4 px-4'>
              <span className='text-[24px]'>{el.icon}</span> 
            <p className="text-[16px] font-semibold capitalize ">{el.name}</p>
            </div>
            
          </NavLink>
        ))}
      </div>
      <div className="w-full h-20 flex px-10 py-3 gap-4 ">
        <span className='text-[24px] text-[#FF2056]'><FiLogOut /></span> 
            <p className="text-[16px] font-semibold text-[#FF2056]">Log Out</p>
      </div>
    </div>
  )
}