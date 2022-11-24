import { useState, useEffect } from "react";
import datas from "../database/data.json";

const AllFruits = () => {
  // const [datas, setDatas] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/users")
  //     .then((res) => res.json())
  //     .then((data) => setDatas(data));
  // }, []);

  return (
    <div>
      <div className="text-center">
        <h3>Get All Fruits : {datas.length}</h3>
        <p>We are delivering any kind of fruit</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {datas.map((data) => {
          console.log(data);
          return (
            <div
              key={data.id}
              className="flex flex-col items-center text-center gap-3 p-6"
            >
              <img src={data.image} alt="fruit" width={200} height={200} />
              <p>${data.price[1]}</p>
              <p>{data.name}</p>
              <p>
                {data.des.length > 100
                  ? data.des.slice(0, 100) + " . . ."
                  : data.des}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllFruits;
