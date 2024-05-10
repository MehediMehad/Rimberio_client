import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {

  const { logOut, user  } = useContext(AuthContext)

  const navLink = <>
    <Link to='/'>Home</Link>
    <Link to='/shop'>Shop</Link>
    <Link to='/addProduct'>Add</Link>
    <Link to='/'>Home</Link>
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

      <div className="navbar-end ">
      <div className="dropdown dropdown-end ">
                {
                    user ? <>

                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar lg:mr-10 bg-slate-900 ">
                            <div title={user?.displayName} className="rounded-full ">
                                <img className="w-full" alt="Tailwind CSS Navbar component " src={user?.photoURL || 'https://i.ibb.co/p0T8mRj/Superhero-Cartoon-Design-2.jpg'} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-40 p-2 shadow bg-slate-900   rounded-box w-40 text-center">
                            <button onClick={logOut} className="items-center gap-y-4 text-white bg-slate-900" >Sign Out</button>
                        </ul>
                    </> :
                        <>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar lg:mr-10 bg-slate-700  ">
                                <div className=" rounded-full  ">
                                    <img className="" alt="" src='https://i.ibb.co/p0T8mRj/Superhero-Cartoon-Design-2.jpg' />
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