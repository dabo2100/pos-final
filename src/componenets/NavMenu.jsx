import Logo from '../assets/Background+Shadow.svg';
import icon1 from '../assets/food_icon.svg';
import icon2 from '../assets/drink_icon.svg';
import icon3 from '../assets/dessert_icon.svg';
import icon4 from '../assets/side_icon.svg';
import { Link, NavLink } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

export default function NavMenu() {
  const categories = [
    { name: 'Food', path: '/food', icon: icon1 },
    { name: 'Drinks', path: '/drinks', icon: icon2 },
    { name: 'Dessert', path: '/dessert', icon: icon3 },
    { name: 'Sides', path: '/sides', icon: icon4 },
  ];

  return (
    <div className="w-24 bg-white border-r border-r-border py-8 flex flex-col">
      <img className="w-23.75" src={Logo} />

      <div className="w-full px-2 flex flex-col grow h-2.5  items-center gap-4 ">
        {categories.map((el, index) => (
          <NavLink to={el.path} key={index} className={({ isActive }) => (isActive && 'bg-mainGreen/10 text-mainGreen ') + ' activeGreen items-center'}>
            <img className="w-6" src={el.icon} />
            <p className="text-[10px] uppercase ">{el.name}</p>
          </NavLink>
        ))}
      </div>
      <div className="w-full flex justify-center py-3">
        <FiLogOut />
      </div>
    </div>
  );
}
