import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Layout from "../../components/Layout";
import { deleteCartProduct, getAllCartProduct } from "../../library/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  // fetch cart item in the Add-To-Cart page
  const { isLoading, isError, data, error } = useQuery(
    "buyproduct",
    getAllCartProduct
  );

  if (isLoading) {
    return (
      <h1 className="text-center py-5 font-bold text-3xl text-blue-500">
        Loading...
      </h1>
    );
  } else if (isError) {
    return <p>Got Error {error}</p>;
  }

  // Remove cart item from Add-To-Cart page
  const queryClient = useQueryClient();
  const handleRemove = async (productId) => {
    if (productId) {
      await deleteCartProduct(productId);
      await queryClient.prefetchQuery("buyproduct", getAllCartProduct);
    }
    toast.success("Delete success...!!!");
  };

  const price = [2, 2.4, 2.7];
  return (
    <Layout>
      <div>
        {data?.map((item) => {
          const { _id, name, image, des, quantity, size } = item;
          return (
            <div key={_id}>
              <div className="p-12 flex flex-col md:flex-row items-center shadow-lg mx-0 md:mx-12">
                <div>
                  <img src={image} height={150} width={150} />
                </div>
                <div className="px-12">
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <p className="text-slate-500 font-bold my-2">
                    {des?.length > 100 ? des.slice(0, 100) + " . . ." : des}
                  </p>
                  {size === "0" ? (
                    <p className="text-xl text-indigo-600 font-bold font-mono">
                      small
                    </p>
                  ) : size === "1" ? (
                    <p className="text-xl text-indigo-600 font-bold font-mono">
                      Medium
                    </p>
                  ) : (
                    <p className="text-xl text-indigo-600 font-bold font-mono">
                      Large
                    </p>
                  )}
                  <p className="text-2xl font-bold font-mono">
                    <span className="text-orange-600">$</span>
                    {size === "0"
                      ? price[0]
                      : size === "1"
                      ? price[1]
                      : price[2]}
                  </p>
                  <p className="text-xl font-bold">Quantity: {quantity}</p>

                  <button
                    onClick={() => handleRemove(_id)}
                    className="flex mt-6 text-orange-600 font-bold text-xl"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default index;
