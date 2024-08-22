import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3  dark:bg-black dark:text-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3 ">
          <span className="text-xl font-bold text-gray-800 dark:bg-black dark:text-white">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer dark:border-white dark:text-white dark:hover:text-red-300 dark:hover:border-red-300"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800 dark:text-white">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800 dark:text-white">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800 dark:text-white">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <div className="fixed bottom-16 right-4">
        <FaShoppingCart
          onClick={() => setActiveCart(!activeCart)}
          className={`rounded-full bg-white shadow-md text-5xl p-3 dark:bg-black dark:text-white ${
            totalQty > 0 && `animate-bounce delay-500 transition-all`
          }`}
        />
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
            {totalQty}
          </span>
        )}
      </div>
    </>
  );
};

export default Cart;