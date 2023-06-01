import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleDelete = (user) => {};
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro-Boss | Users</title>
      </Helmet>
      <div className="flex flex-col justify-center align-middle items-center md:mt-28">
        <h3 className="text-3xl font-semibold my-5">
          Total Users: {users.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className=" mx-auto border-2 mt-1 border-yellow-600 w-12 flex justify-center align-middle items-center text-yellow-600">
                    {user.role === "admin" ? "Admin" : <FaUserShield />}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn text-red-600 btn-ghost btn-xs"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
