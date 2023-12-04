import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const navItems = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn">
            Dashboard
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </>
    );
  
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl">JOB Career</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {
                      !user?
                      <div>
                          
                          <button className="btn"><Link to='/login'>LogIn</Link></button>
  
                      </div>
                      
                      :
                      <div className="flex items-center">
                          <div>
                              <img className="w-10 rounded-full mr-3" src={user?.photoURL} alt="" />
                              <p>{user?.displayName}</p>
                          </div>
                          <button onClick={logOut} className="btn">Log Out</button>
                      </div>  
                  }
          </div>
      </div>
    );
  };
  

export default Navbar;