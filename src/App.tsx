import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AppCars from "./components/AppCars";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={"/cars"}>Cars</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/cars" element={<AppCars /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
