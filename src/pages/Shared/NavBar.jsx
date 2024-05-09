import { Link } from "react-router-dom";

const NavBar = () => {
    const navLink = <>
     <li>Home</li>
     <li>Shop</li>
     <li>My Queries</li>
    </>
    return (
<div className="navbar bg-[#2b2a29] text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu gap-y-3 menu-sm mt-3 dropdown-content z-[1]  shadow bg-[#2b2a29] rounded-md text-white  w-52">
        {navLink}
      </ul>
    </div>
    <a className=" ml-11 text-2xl">Teck Bazar </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-x-12">
     {navLink}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3  p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-50">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link to='/register'>Settings</Link></li>
        <li><Link to='/login'>LogIn</Link></li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default NavBar;