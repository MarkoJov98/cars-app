import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AppCars, { Car } from "./components/AppCars";
import AddCar from "./components/AddCar";
import "./App.css"

function App() {
  const handleAddCar = (newCar: Car) => {
    console.log("New car added:", newCar);
  };
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
          <li>
            <Link to="/add">Add Car</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/cars" element={<AppCars /> } />
        <Route path="/add" element= {<AddCar onAddCar={handleAddCar}/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
