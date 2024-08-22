import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../reduc/Slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 dark:bg-gray-800 dark:text-white">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed! `, {
            icon: "👋",
          } );
        }}
        className="absolute right-7 text-gray-600 cursor-pointer dark:text-white "
      />
      <img src={img} alt="" className="w-[50px] h-[50px] rounded-sm " />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800 dark:text-white">{name}</h2>
        <div className="flex justify-between ">
          <span className="text-green-500 font-bold dark:text-white dark:hover:text-green-500">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer dark:text-white dark:hover:bg-green-500 dark:hover:text-white"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer dark:text-white dark:hover:bg-green-500 dark:hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;