import React from "react";

function TesItem({ data }) {
  return (
    <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
      <div className="">
        <img src={data.img} alt="" className="rounded-full w-20 mb-6 h-20" />
      </div>
      <div className=" flex flex-col space-y-5">
        <p className="text-gray-400 text-md"> {data.text}</p>
        <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
      </div>
    </div>
  );
}

export default TesItem;
