import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AppCars, { Car } from "./components/AppCars";
import AddCar from "./components/AddCar";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
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
          <Route path="/cars" element={<AppCars />} />
          <Route path="/add" element={<AddCar />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
