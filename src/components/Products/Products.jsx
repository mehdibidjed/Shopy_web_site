import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import ItemProduct from "./ItemProduct";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },{
    id: 6,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },{
    id: 6,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },{
    id: 6,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  }
];
function Products() {
  return (
    <div className="mt-14 mb-12">
        <div className="container ">

      {/*header section */}
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p className="text-primary text-sm">Top Selling Products for you</p>
        <h1 className="text-3xl font-bold">Products</h1>
        <p className="text-sm text-gray-400 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illo
          officia! Id nobis
        </p>
      </div>
      {/*Body section */}
      <div>
        <div
        className="flex justify-between items-center overflow-x-auto scrollbar-hide place-items-center gap-20 "
        >
        {/*card section */}
        {ProductsData.map((item)=>(
            <ItemProduct data={item} />

        ))}
        </div>
      </div>
        </div>
    </div>
  );
}

export default Products;
