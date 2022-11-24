import Link from "next/link";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
// import datas from "../database/data.json";
import { getAllProduct } from "../library/helper";

const AllFruits = () => {
  const { isLoading, isError, data, error } = useQuery(
    "products",
    getAllProduct
  );

  if (isLoading) {
    return (
      <h1 className="text-center py-5 text-3xl text-red-500">
        Employee Loading...
      </h1>
    );
  } else if (isError) {
    return <p>Got Error {error}</p>;
  }

  /*   const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []); */

  return (
    <div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">Get All Fruits : {data.length}</h3>
        <p className="text-slate-500 my-2 font-bold">
          We are delivering any kind of fruit
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.map((dt) => {
          return (
            <div
              key={dt.id}
              className="flex flex-col items-center text-center gap-3 p-6"
            >
              <Link href={`./fruit/${dt._id}`}>
                {" "}
                <img
                  className="cursor-pointer"
                  src={dt.image}
                  alt="fruit"
                  width={200}
                  height={200}
                />
              </Link>
              <p>${dt.price[1]}</p>
              <p>{dt.name}</p>
              <p>
                {dt.des.length > 100 ? dt.des.slice(0, 100) + " . . ." : dt.des}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllFruits;
