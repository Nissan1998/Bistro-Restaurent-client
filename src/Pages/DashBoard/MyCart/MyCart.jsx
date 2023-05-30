import React from "react";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import useCart from "../../../CustomHook/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, isLoading, refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | My Cart</title>
      </Helmet>
      <SectionHeader
        title={"WANNA ADD MORE?"}
        title1={"MY Cart"}
      ></SectionHeader>
      <div className="uppercase flex justify-evenly gap-5 text-2xl font-semibold h-10 align-middle items-center">
        <h3>Total Foods: {cart.length}</h3>
        <h3>Total Price: ${totalPrice}</h3>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Food Name</th>
                <th>Price</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="w-full">
              {cart.map((foodRow, index) => (
                <tr key={foodRow._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={foodRow.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{foodRow.name}</td>
                  <td>${foodRow.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(foodRow)}
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

export default MyCart;
