import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/NavBar"; 
import SingleFoodCard from "./components/SingleFoodCard";// Make sure to import your Navbar component

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <Navbar /> {/* Add the Navbar component here */}
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<SingleFoodCard />} />
            <Route
              path="/success"
              element={<ProtectedRoute element={<Success />} />}
            />
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;