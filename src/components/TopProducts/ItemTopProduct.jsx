import React from "react";
import { FaStar } from "react-icons/fa";
function ItemTopProduct({ data }) {
  return (
    <div className=" grid grid-col-1 gap-3 mb-10 shadow-lg bg-white rounded-lg ">
      {/* image */}
      <div className="flex justify-center items-center ">
        <img src={data.img} alt="" className="max-w-[160px] mx-auto" />
      </div>
      {/* information */}
      <div className="text-center p-4 space-y-2">
        {/* rating */}
        <div className="flex justify-center items-center gap-2 w-full ">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
        </div>
        {/* tile */}
        <h1 className="text-xl font-bold">{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default ItemTopProduct;
