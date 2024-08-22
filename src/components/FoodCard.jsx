import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduc/Slices/CartSlice";
import { toast } from "react-hot-toast";

const FoodCard = ({ id, name, price, desc, img, rating, onClick }) => {
  const dispatch = useDispatch();
  const handleToast = (name) => toast.success(`Added ${name} `);

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg shadow-md gap-2 dark:bg-black dark:text-white">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] rounded-sm hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out"
        onClick={onClick}
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 dark:text-green-300">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400 dark:text-yellow-200" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating, price, img, qty: 1 })
            );
            handleToast(name);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;