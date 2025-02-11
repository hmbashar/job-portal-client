import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContent";
import Swal from "sweetalert2";
import logo from "../../assets/logo.png";
const Navbar = () => {

  const {user, signOutUser} = useContext(AuthContext);

  const handleLogout = () => {
    signOutUser()
    .then(() => {
      Swal.fire({
        title: "Logged out!",
        text: "You have been logged out.",
        icon: "success",
        confirmButtonText: "Okay",
      });

    }).catch((error) => {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Okay",
      });
    });
  }

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addjob">Add Job</NavLink>
      </li>
      <li>
        <NavLink to="/my-application">My Application</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Signin</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl hover:none"><img className="w-[50px] hover:none" src={logo} alt="Job portal" /><h4 className="text-2xl">Job Portal</h4></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {
            user ? <>
            <Link to="/dashboard" className="btn">Dashboard</Link>
            <button className="btn" onClick={handleLogout}>Logout</button>
            </> : <>
            <Link to="/register" className="btn">Register</Link>
            <Link to="/signin" className="btn">Signin</Link>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
