import React, { Children } from "react";
import { Link } from "react-router-dom";

const Button = ({ children, title }) => {
  return (
    <Link
      to={`/order/${title}`}
      className="bg-transparent bg-black bg-opacity-30 border-b-4 rounded-lg  font-bold flex justify-center my-5 w-60 md:w-[300px] mx-auto btn-outline p-3 text-black"
    >
      {children}
    </Link>
  );
};

export default Button;
