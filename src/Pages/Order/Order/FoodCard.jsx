import React from "react";

const FoodCard = ({ item }) => {
  return (
    <div className="container mx-auto">
      <div className="card w-96 bg-base-200 h-full shadow-xl relative">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <p className="px-5 py-2 bg-black text-white w-24 rounded-lg absolute right-2 top-2">
          ${item.price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.recipe}</p>
          <div className="card-actions justify-center">
            <button className="px-5 btn border-x-0 border-t-0  py-2 bg-base-300 border-b-4 border-yellow-600 text-yellow-600 ">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
