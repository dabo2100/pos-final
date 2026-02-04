import { IoSearch } from 'react-icons/io5';

export default function SearchBar() {
  return (
    <div className="w-full  border-b py-4.25 px-10 border-b-border">
      <div className="relative">
        <IoSearch className="absolute text-[#90A1B9] w-5 top-[50%] left-4 translate-y-[-50%]" />
        <input className="input w-md" placeholder="Search dishes, drinks, extras..." />
      </div>
    </div>
  );
}
