import { NavLink } from 'react-router-dom';
import logoNav from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  px-4 py-2">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        <img className='w-12' src={logoNav} alt="logo" />
      </div>
      <div className="flex items-center justify-between gap-16">
        <ul className="flex items-center justify-between gap-10">
          <NavLink to={'/'} className="group flex  cursor-pointer flex-col">
            Home{" "}
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to={'/news'} className="group flex  cursor-pointer flex-col">
          News{" "}
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to={'/destination'} className="group flex  cursor-pointer flex-col">
          Destination{" "}
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to={'/blog'} className="group flex  cursor-pointer flex-col">
          Blog{" "}
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to={'/contact'} className="group flex  cursor-pointer flex-col">
          Contact{" "}
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </ul>
        <div className="flex items-center justify-between gap-5">
          <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">
            Log In
          </button>
          <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
