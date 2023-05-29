import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import useCart from "../../../CustomHook/useCart";

const NavBar = () => {
  const { user, logOUt } = useContext(AuthContext);
  const [cart] = useCart();
  const navOptions = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li tabIndex={0}>
        <Link to="/menu">MENU</Link>
      </li>
      <li>
        <Link to="/order/Salad">ORDER FOOD</Link>
      </li>
      <li>
        <a>CONTACT US</a>
      </li>
      <li>
        <Link to="/">
          <button className="btn bg-transparent border-0 gap-2">
            <FaShoppingCart />
            <div className="badge badge-secondary ">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <li onClick={logOUt}>
          <Link to="/">LOGOUT</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      )}
      {user ? (
        <li className="mt-6 text-yellow-300">{user?.displayName}</li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div>
      <div className="navbar container mx-auto max-w-sm fixed z-10 bg-opacity-40 bg-black text-white md:max-w-screen-2xl md:mx-auto">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box md:w-52"
            >
              <div className="text-black"> {navOptions}</div>
            </ul>
          </div>
          <a className="text-center normal-case text-xl font-extrabold">
            Bistro Boss <br />
            <p className="tracking-widest text-center">Restaurant</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="md:font-bold text-yellow-300 md:text-xl text-center  bg-gradient-to-r  from-slate-950 to-sky-400 border-e-8 border-s-8 btn  rounded-3xl">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
