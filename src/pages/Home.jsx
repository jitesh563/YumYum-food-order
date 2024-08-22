import React, { useState } from "react";

import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import Footer from "./Footer";
import SingleFoodCard from "../components/SingleFoodCard";

const Home = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodClick = (food) => {
    setSelectedFood(food);
  };

  const handleCloseModal = () => {
    setSelectedFood(null);
  };

  return (
    <>
      <CategoryMenu />
      <FoodItems onFoodClick={handleFoodClick} />
      <Cart />
      {selectedFood && (
        <SingleFoodCard food={selectedFood} onClose={handleCloseModal} />
      )}
      <Footer/>
    </>
  );
};

export default Home;