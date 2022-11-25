import { useQuery } from "react-query";
import Layout from "../../components/Layout";
import { getAllCartProduct } from "../../library/helper";

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
  return (
    <Layout>
      <div>
        <h1>total buy:{data.length}</h1>
        <div>
          {data?.map((item) => {
            const { _id, name, image, des, quantity, size } = item;
            console.log(item);
            return <div key={_id}>{name}</div>;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default index;
