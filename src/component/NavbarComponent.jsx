import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
const NavbarComponent = () => {
  return (
    <div className="flex justify-between items-center p-5 w-[90%] md:w-[70%] mx-auto text-slate-50 max-sm:flex-col max-sm:gap-5">
      <figure className="cursor-pointer bg-green-600 w-14 flex justify-center">
        H.D.R.
      </figure>
      <figure className="relative group:">
        <ul className="flex gap-1 cursor-pointer hover:text-green-400">
          <li className="hover:text-slate-50 relative group bg-green-600 w-full flex justify-center rounded-t-sm shadow-2xl items-center gap-1 pr-2 pl-2">
            <FaHome />
            Home
            <span className="absolute left-0 top-6 w-full h-1 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
          </li>
          <li className="hover:text-slate-50 relative group w-full flex justify-center rounded-t-sm shadow-2xl items-center gap-1 pr-2 pl-2">
            <FaInfoCircle />
            About
            <span className="absolute left-0 top-6 w-full h-1 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
          </li>
          <li className="hover:text-slate-50 relative group w-full flex justify-center rounded-t-sm shadow-2xl items-center gap-1 pr-2 pl-2">
            <GrProjects />
            Projects
            <span className="absolute left-0 top-6 w-full h-1 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
          </li>
        </ul>
      </figure>
    </div>
  );
};

export default NavbarComponent;
