import Image from "next/image";
import React from "react";

const SingleService = ({ imgs, p }) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-6 md:p-14">
      <Image src={imgs} alt="services img" width={200} />
      <h4 className="font-bold text-xl">Easy To Order</h4>
      <p className="text-slate-500">{p}</p>
    </div>
  );
};

export default SingleService;
