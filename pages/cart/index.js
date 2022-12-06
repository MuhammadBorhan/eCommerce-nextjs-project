import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Layout from "../../components/Layout";
import { deleteCartProduct, getAllCartProduct } from "../../library/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Delete, Remove } from "@mui/icons-material";
import Link from "next/link";

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

  const price = [120, 150, 190];
  return (
    <Layout>
      <div className="p-12 grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="col-span-4">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th className="text-1xl">Name</th>
                  <th className="text-1xl">Size</th>
                  <th className="text-1xl">Price</th>
                  <th className="text-1xl">Quantity</th>
                  <th className="text-1xl">Total</th>
                  <th className="text-1xl">Cancel</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => {
                  const { _id, name, image, des, quantity, size } = item;
                  return (
                    <tr key={_id}>
                      <th>
                        <img src={image} height={50} width={50} />
                      </th>
                      <td>{name}</td>
                      <td>
                        {size === "0" ? (
                          <p className="text-1xl text-indigo-600 font-bold font-mono">
                            small
                          </p>
                        ) : size === "1" ? (
                          <p className="text-1xl text-indigo-600 font-bold font-mono">
                            Medium
                          </p>
                        ) : (
                          <p className="text-1xl text-indigo-600 font-bold font-mono">
                            Large
                          </p>
                        )}
                      </td>
                      <td>
                        <p className="text-1xl font-mono">
                          <span className="text-orange-600">Tk</span>
                          {size === "0"
                            ? price[0]
                            : size === "1"
                            ? price[1]
                            : price[2]}
                        </p>
                      </td>
                      <td>
                        <p className="text-1xl ">{quantity}</p>
                      </td>
                      <td>
                        <p className="text-1xl  font-mono">
                          <span className="text-orange-600">Tk</span>
                          {size === "0"
                            ? parseInt(quantity) * parseFloat(price[0])
                            : size === "1"
                            ? parseInt(quantity) * parseFloat(price[1])
                            : parseInt(quantity) * parseFloat(price[2])}
                        </p>
                      </td>
                      <td
                        onClick={() => handleRemove(_id)}
                        className=" text-red-500 font-bold cursor-pointer"
                      >
                        <Delete />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* right side */}
        <div className="col-span-2">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Cart Total</h2>
              <p>Sub Total: Tk</p>
              <p>Discount: Tk</p>
              <p>Total: Tk</p>
              <div className="card-actions justify-end mt-2">
                <Link href={"/order/id"}>
                  <button className="btn bg-light w-full">Checkout Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
      {/*  <div className="grid md:grid-cols-2 gap-x-16">
        <div>
          {data?.map((item) => {
            const { _id, name, image, des, quantity, size } = item;
            return (
              <div key={_id}>
                <div className="p-12 flex flex-col md:flex-row items-center justify-center shadow-lg mx-0 md:mx-12">
                  <div className="mb-2 md:mb-0">
                    <img src={image} height={150} width={150} />
                  </div>
                  <div className="px-12">
                    <h2 className="text-2xl font-bold">{name}</h2>
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
                      <span className="text-orange-600">Tk</span>
                      {size === "0"
                        ? price[0]
                        : size === "1"
                        ? price[1]
                        : price[2]}
                    </p>
                    <p className="text-xl font-bold">Quantity: {quantity}</p>
                    <p className="text-2xl font-bold font-mono">
                      Total: <span className="text-orange-600">Tk</span>
                      {size === "0"
                        ? parseInt(quantity) * parseFloat(price[0])
                        : size === "1"
                        ? parseInt(quantity) * parseFloat(price[1])
                        : parseInt(quantity) * parseFloat(price[2])}
                    </p>

                    <button
                      onClick={() => handleRemove(_id)}
                      className="flex items-center mt-4 text-red-500 font-bold"
                    >
                      Remove
                      <Delete />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="fixed right-1/4 top-24 z-10 hidden lg:block">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div> */}
    </Layout>
  );
};

export default index;
