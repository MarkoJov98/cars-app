import React from "react";
import { useState, useEffect } from "react";
import carService from "../services/CarService";
import SingleCarComponent from "./SingleCarComponent";

export interface Car {
  brand: string;
  model: string;
  year: number;
  maxSpeed: number;
  isAutomatic: boolean;
  engine: string;
  numberOfDoors: number;
  id: number;
}

const AppCars: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
        const fetchedCars = await carService.getAll();
        setCars(fetchedCars);
    }
    fetchCars();
  }, []);

  return (
    <div>
      <h2>Cars</h2>
      <ul>
        {cars.map((car) => (
            <SingleCarComponent key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
};

export default AppCars;
