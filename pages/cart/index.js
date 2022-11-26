import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Layout from "../../components/Layout";
import { deleteCartProduct, getAllCartProduct } from "../../library/helper";

const index = () => {
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

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/buyproduct")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const queryClient = useQueryClient();
  const handleRemove = async (productId) => {
    if (productId) {
      await deleteCartProduct(productId);
      await queryClient.prefetchQuery("buyproduct", getAllCartProduct);
    }
  };
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
      </div>
    </Layout>
  );
};

export default index;
