import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div>
      <div className="md:flex align-middle items-center gap-3">
        <div>
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-[120px] mx-auto"
            src={image}
            alt="food"
          />
        </div>
        <div>
          <h3 className="md:uppercase md:font-bold text-center">
            <span className="w-5"> ~~~~~~~</span>
            <span className="md:border-4 border-stone-500 md:text-lg p-1">
              {name}
            </span>
            <span className="w-2">~~~~~~~</span>
          </h3>
          <p
            className="
          text-center"
          >
            Recipe:- {recipe}
          </p>
        </div>
        <p className="text-yellow-600 text-center">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
