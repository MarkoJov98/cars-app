import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AppCars, { Car } from "./components/AppCars";
import AddCar from "./components/AddCar";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { Navigate } from "react-router-dom";
import CarSearch from "./components/CarSearch";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <header>
        <CarSearch />
      </header>
        <nav>
          <ul>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/cars/add">Add Car</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/cars" /> } />
          <Route path="/cars" element={<AppCars />} />
          <Route path="/cars/add" element={<AddCar />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
