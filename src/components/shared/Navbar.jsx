import { AiOutlineHome } from 'react-icons/ai';
import logoImg from '../../assets/images/logo.png'
import { TfiStatsUp } from 'react-icons/tfi';
import { RiTimeLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
  return (
//     <div className="navbar bg-base-100 shadow-sm">
//   <div className="container mx-auto">
//     <div className='flex justify-between'>
//       <img src={logoImg} alt="logo" />
//     <ul className="flex justify-around gap-4 text-[#64748B]">
//      <NavLink to={"/"} className= 'btn btn-ghost flex justify-center items-center gap-1'><AiOutlineHome />Home</NavLink>
//       <NavLink to={"/timeline"} className= 'btn btn-ghost flex justify-center items-center gap-1'><RiTimeLine />Timeline</NavLink>
//       <NavLink to={"/stats"} className= 'btn btn-ghost flex justify-center items-center gap-1'><TfiStatsUp />
// Stats</NavLink>
//     </ul>

//     </div>
  
//   </div>
// </div>






<div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto flex justify-between">
        <div className="navbar-start  ">
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
              <li><Link to="/timeline">Timeline</Link></li>
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
                className="btn btn-ghost flex items-center gap-1"
              >
                <AiOutlineHome /> Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/timeline"
                className="btn btn-ghost flex items-center gap-1"
              >
                <RiTimeLine /> Timeline
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/stats"
                className="btn btn-ghost flex items-center gap-1"
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