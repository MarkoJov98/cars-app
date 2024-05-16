import React from "react";
import { Car } from "./AppCars";

interface CarProps {
  car: Car;
}

const SingleCarComponent: React.FC<CarProps> = ({ car }) => {
  return (
    <li key={car.id} className="car-info">
      <p>Brend: {car.brand}</p>
      <p>Model: {car.model}</p>
      <p>Max Speed: {car.maxSpeed}</p>
      <p>Engine: {car.engine}</p>
      <p>Number of Doors: {car.numberOfDoors}</p>
      <p>Year: {car.year}</p>
      <p>Automatic: {car.isAutomatic ? "yes" : "no"}</p>
    </li>
  );
};


export default SingleCarComponent;