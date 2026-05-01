import { AiOutlineHome } from 'react-icons/ai';
import logoImg from '../../assets/images/logo.png'
import { TfiStatsUp } from 'react-icons/tfi';
import { RiTimeLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';
import { useContext } from 'react';
import { TimelineContext } from '../context/context';


const Navbar = () => {
  const {timelineData } = useContext(TimelineContext)
  return (


<div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto flex justify-between">
        <div className="navbar-start w-full md:w-auto flex justify-between items-center">
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm gap-1.5 dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/timeline">Timeline   {timelineData.length > 0 && (
               <span className=" ml-1">
                 {timelineData.length}
               </span>
                )}</Link></li>
              <li><Link to="/stats">Stats</Link></li>
            </ul>
          </div>
          <Link><img src={logoImg} alt="Logo" className="w-32" /></Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="flex gap-4 text-[#64748B]">
            <li>
              <NavLink
                to="/"
                 className={({ isActive }) =>
      `btn btn-ghost flex items-center gap-1 ${
        isActive ? "text-white border-b bg-[#244D3F]" : ""
      }`
    }
              >
                <AiOutlineHome /> Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/timeline"
                 className={({ isActive }) =>
      `btn btn-ghost flex items-center gap-1 ${
        isActive ? "text-white border-b bg-[#244D3F]" : ""
      }`
    }
              >
                <RiTimeLine /> Timeline {timelineData.length > 0 && (
               <span className="  ml-1">
                {timelineData.length}
               </span>
               )}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/stats"
                className={({ isActive }) =>
      `btn btn-ghost flex items-center gap-1 ${
        isActive ? "text-white border-b bg-[#244D3F]" : ""
      }`
    }
              >
                <TfiStatsUp /> Stats
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;