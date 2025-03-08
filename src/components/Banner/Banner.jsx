import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
function Banner() {
  return (
    <div className="min-h-[550px] flex justify-center items-center">
      <div className="container">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10  items-center">
          <div>
            <img
              src={BannerImg}
              alt=""
              className=" ] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] "
            />
          </div>
          <div className=" flex flex-col justify-ceneter gap-5 sm:pt-0">
            <h1 className="text-3xl sm:text-3xl font-bold">
              Winter Sale upto 50% Off
            </h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
