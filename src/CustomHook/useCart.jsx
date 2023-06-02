import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useCart = (email) => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const {
    refetch,
    isLoading,
    isError,
    data: cart = [],
    error,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return response.json();
    },
  });
  return [cart, isLoading, refetch];
};

export default useCart;
