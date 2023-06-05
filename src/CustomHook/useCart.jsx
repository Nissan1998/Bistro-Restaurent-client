import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = (email) => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const {
    refetch,
    isLoading,
    isError,
    data: cart = [],
    error,
  } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure(`/carts?email=${user?.email}`);
      return response.data;
    },
  });
  return [cart, isLoading, refetch];
};

export default useCart;
