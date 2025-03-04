import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {

  const { logOut, user } = useContext(AuthContext)
  const [theme, setTheme] = useState('light')
  console.log(theme);


  const navLink = <>

    {
      user ? <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-red-500' : 'font-normal'}>Home</NavLink>
        <NavLink to='/queries' className={({ isActive }) => isActive ? 'font-bold text-red-500' : 'font-normal'}>Queries</NavLink>
        <NavLink to='/forMe' className={({ isActive }) => isActive ? 'font-bold text-red-500' : 'font-normal'}>Recommendations For Me</NavLink>
        <NavLink to='/myQuary' className={({ isActive }) => isActive ? 'font-bold text-red-500' : 'font-normal'}>My Queries</NavLink>
        <NavLink to='/myRecommendations' className={({ isActive }) => isActive ? 'font-bold text-red-500' : 'font-normal'}>My recommendations</NavLink>

      </> :
        <>
          <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-red-500' : 'font-normal'}>Home</NavLink>
          <NavLink to='/queries' className={({ isActive }) => isActive ? 'font-bold text-red-500' : 'font-normal'}>Queries</NavLink>
          <NavLink to='/login' className={({ isActive }) => isActive ? 'font-bold text-red-500' : 'font-normal'}>Login</NavLink>
        </>
    }

  </>
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('synthwave')
    }
    else {
      setTheme('light')
    }
  }



  return (
    <div className="navbar flex bg-[#638aff] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu gap-y-3 menu-sm mt-3 dropdown-content  z-50 shadow bg-[#2b2a29] rounded-md text-white  w-52">
            {navLink}
          </ul>
        </div>
        <a className=" ml-11 text-2xl">Rimberio </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-12">
          {navLink}
        </ul>
      </div>

      <div className="navbar-end ">
        <div className="mr-5">
          <label className="swap swap-rotate">

            {/* this hidden checkbox controls the state */}
            <input onChange={handleToggle} type="checkbox" className="theme-controller" value="synthwave" />

            {/* sun icon */}
            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            {/* moon icon */}
            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

          </label>
        </div>
        <div className="dropdown dropdown-end ">
          {
            user ? <>

              <div title={user?.displayName} tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar lg:mr-10 bg-slate-900 ">
                <div title={user?.displayName} className="rounded-full ">
                  <img className="w-full" alt="User Img" src={user?.photoURL || 'https://i.stack.imgur.com/l60Hf.png'} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-40 p-2 shadow bg-slate-900   rounded-box w-40 text-center">
                <button onClick={logOut} className="items-center gap-y-4 text-white bg-slate-900" >Sign Out</button>
              </ul>
            </> :
              <>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar lg:mr-10 bg-slate-700  ">
                  <div className=" rounded-full  ">
                    <img className="" alt="" src='https://i.stack.imgur.com/l60Hf.png' />
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content text-white mt-3 bg-slate-900  z-40  p-2 shadow rounded-box text-center gap-y-3 w-40 ">
                  {/* <li><a>Logout</a></li> */}
                  <Link to='/login' className="items-center gap-y-4 text-white bg-slate-900">Log in</Link>
                  <Link to='/register' className="items-center gap-y-4 text-white bg-slate-900">Registration</Link>
                </ul>
              </>
          }


        </div>
      </div>
    </div>
  );
};

export default NavBar;