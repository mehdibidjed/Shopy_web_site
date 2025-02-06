import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import TopItemProduct from "./ItemTopProduct";
function TopProducts() {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Img2,
      title: "Printed shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Img3,
      title: "Women shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div>
      <div className="container ">
        {/* Header Section */}
        <div className="text-left mb-10 ">
          <p className="text-primary text-sm">Top Rated Products for you</p>
          <h1 className="text-3xl font-bold">Best Products</h1>
          <p className="text-sm text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illo
            officia! Id nobis
          </p>
        </div>
        {/* Body Section*/}
        <div className="grid grid-col-1 sm:grid-col-2 md:grid-cols-3 gap-20">
        {ProductsData.map((data) => (
          <TopItemProduct data={data} />
        ))}

        </div>
      </div>
    </div>
  );
}

export default TopProducts;
