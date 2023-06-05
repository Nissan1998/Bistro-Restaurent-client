import React, { useState } from "react";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../CustomHook/useCart";
import useAdmin from "../CustomHook/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // ToDo:Load from the server to have dynamic isAdmin based on Data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  return (
    <div>
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <div className="md:w-[1000px] mx-auto">
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
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/">
                    <FaHome />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="dashboard/reservation">
                    <FaUtensils />
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet />
                    Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaBook />
                    Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUsers />
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}

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
