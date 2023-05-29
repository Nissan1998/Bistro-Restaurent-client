import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useCart = (email) => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    isError,
    data: cart = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [cart, isLoading, refetch];
};

export default useCart;
