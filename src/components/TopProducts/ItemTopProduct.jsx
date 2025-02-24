import React from "react";
import { FaStar } from "react-icons/fa";
function ItemTopProduct({ data }) {
  return (
    <div className="hover:bg-black/80 group hover:text-white  grid grid-col-1 gap-3 mb-10 shadow-xl bg-white rounded-lg ">
      {/* image */}
      <div className="flex justify-center items-center ">
        <img src={data.img} alt="" className="max-w-[160px] mx-auto " />
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
        <p className="text-gray-500 group-hover:text-white">{data.description}</p>
        <button className="bg-primary hover:scale-100 text-white text-xl py-1 px-5 mt-4 rounded-full">Order now</button>
      </div>
    </div>
  );
}

export default ItemTopProduct;
