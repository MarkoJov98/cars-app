import React from "react";
import { useState, useEffect } from "react";
import carService from "../services/CarService";
import SingleCarComponent from "./SingleCarComponent";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFilteredCars } from "../store/cars/selector";
import { setCars } from "../store/cars/slice";

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
  const dispatch = useDispatch();
  const cars: Car[] = useSelector(selectCars);
  const filteredCars: Car[] = useSelector(selectFilteredCars);

  useEffect(() => {
    const fetchCars = async () => {
        const fetchedCars = await carService.getAll();
        dispatch(setCars(fetchedCars));
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
