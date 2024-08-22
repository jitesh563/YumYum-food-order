import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../reduc/Slices/SearchSlice";
import DarkModeToggle from "./DarkModeToggle";


const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10 bg-gray-800 dark:bg-green-500 rounded-md transition-colors duration-200 ">
      <div>
        <h3 className="text-sm font-bold pl-5 text-gray-300 dark:text-gray-700">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold pl-5 text-white dark:text-gray-900 ">YumYum</h1>
      </div>
      
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] bg-white dark:bg-gray-700 text-gray-800 dark:text-white dark:border-gray-600 transition-colors duration-200"
        />
      
      </div>
      <div className="my-4 lg:my-0 pr-5">
        <DarkModeToggle />
      </div>
      
    </nav>
  );
};

export default Navbar;