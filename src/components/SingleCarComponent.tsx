import React from "react";
import { Car } from "./AppCars";

interface CarProps {
  car: Car;
  onSelect: (car: Car) => void;
  selectAll: (car: Car) => void;
  deselectAll: (car: Car) => void;
}

const SingleCarComponent: React.FC<CarProps> = ({ car, onSelect, selectAll, deselectAll }) => {
  return (
    <li key={car.id} className="car-info">
      <p>Brend: {car.brand}</p>
      <p>Model: {car.model}</p>
      <p>Max Speed: {car.maxSpeed}</p>
      <p>Engine: {car.engine}</p>
      <p>Number of Doors: {car.numberOfDoors}</p>
      <p>Year: {car.year}</p>
      <p>Automatic: {car.isAutomatic ? "yes" : "no"}</p>
      <button onClick={() =>onSelect(car)}>Select Car</button>
      <button onClick={() =>selectAll(car)}>Select All</button>
      <button onClick={() => deselectAll(car)}>Deselect All</button>
    </li>
  );
};


export default SingleCarComponent;