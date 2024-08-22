import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduc/Slices/CartSlice";
import { AiFillStar } from "react-icons/ai";
import {toast} from "react-hot-toast";



const SingleFoodCard = ({ food, onClose  }) => {
    const dispatch = useDispatch();
    const handleToast = (name) => toast.success(`Added ${name} `);

  if (!food) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 w-11/12 md:w-1/2 h-[65%] rounded-lg shadow-lg overflow-y-auto">
        <div className="p-4">
          <div className="flex  justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{food.name}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex gap-3">
          <img src={food.img} alt={food.name} className="w-full h-48 object-cover rounded-lg mb-4" />
          <div>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{food.desc}</p>
          <div className="flex justify-between">
          <p className="text-lg font-semibold text-green-500">Price: ${food.price}</p>
          <span className="flex mr-6 ">
          <AiFillStar className="mr-1 text-yellow-400 dark:text-yellow-200" /> {food.rating}
          </span>
          </div>
          </div>
          </div>
          
        </div>
        
        <button onClick={() => {dispatch(addToCart({ id: food.id,
                name: food.name,
                price: food.price,
                rating: food.rating,
                img: food.img,
                qty: 1, }));
                handleToast(food.name)} }
                  className="border  bg-green-500 text-white p-3 pl-10 pr-10 ml-56 text-lg rounded-lg text-center">Add to cart</button>
      </div>
      
    </div>
  );
};

export default SingleFoodCard;