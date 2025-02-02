import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./Darkmode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
function Navbar() {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relatve z-40">
      {/* upper navbar*/}
      <div className="bg-primary/40 py-2 ">
        <div className=" container flex justify-between items-center ">
          {/*logo  */}
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10 uppercase" />
              Shopsy
            </a>
          </div>
          {/*search bar and order btn */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] 
                sm:w-[200px] group-hover:w-[300px]
                transition-all duration-300 rounded-full 
                border border-gray-300 px-2 py-1 focus:outline-none
                 focus:border-1 focus:border-primary"
              />
              <IoMdSearch className="group-hover:text-primary text-gray-500 absolute  top-1/2    -translate-y-1/2 right-3" />
            </div>
            <button className="bg-gradient-to-r from bg-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group ">
              <span className="group-hover:block hidden transition-all duration-200">
                Order{" "}
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
          {/*order btn */}
        </div>
      </div>
      {/*lower nav bar */}
      <div className="flex justify-center">
        <ul className="sm:flex  items-center gap-5">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="px-4 hover:text-primary duration-200"
              >
                {" "}
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="" className="flex items-center gap-[5px] py-2">
              {" "}
              Treading
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id} className="hover:bg-primary/20 rounded-lg">
                    <a href={data.link} className="inline-block w-full">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
