/* eslint-disable react/prop-types */

import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../CustomHook/useCart";

const FoodCard = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [, , refetch] = useCart();

  const { user } = useContext(AuthContext);
  const handleAddToCart = (item) => {
    console.log(item);
    const { name, image, price, recipe, _id } = item;
    if (user && user.email) {
      const orderItem = { foodId: _id, name, image, price, email: user.email };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "The Food added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          console.log(data);
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="container mx-auto">
      <div className="card w-96 bg-base-200 h-full shadow-xl relative">
        <figure>
          <img src={item?.image} alt="Shoes" />
        </figure>
        <p className="px-5 py-2 bg-black text-white w-24 rounded-lg absolute right-2 top-2">
          ${item?.price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{item?.name}</h2>
          <p>{item?.recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="px-5 btn border-x-0 border-t-0  py-2 bg-base-300 border-b-4 border-yellow-600 text-yellow-600 hover:border-2 hover:border-yellow-500"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
