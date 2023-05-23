const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <a>HOME</a>
      </li>
      <li tabIndex={0}>
        <a>ABOUT</a>
      </li>
      <li>
        <a>CONTACT US</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white max-w-screen-2xl mx-auto">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
