import React from "react";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../CustomHook/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div>
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <div className="w-[1000px] mx-auto">
            <Outlet></Outlet>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu bg-[#D1A054] text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to="/">
                <FaHome />
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard/reservation">
                <FaCalendarAlt />
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/history">
                <FaWallet />
                Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mycart">
                <FaShoppingCart />
                My Cart{" "}
                <div className="badge badge-secondary ">
                  +{cart?.length || 0}
                </div>
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink to="/menu">
                <FiMenu />
                MENU
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/Salad">ORDER FOOD</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
