import React from "react";
import { useState, useEffect } from "react";
import carService from "../services/CarService";
import SingleCarComponent from "./SingleCarComponent";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFilteredCars, selectedDeselectedCar } from "../store/cars/selector";
import { setCars } from "../store/cars/slice";
import { setDeselectCar } from "../store/cars/slice";
import { selectAll } from "../store/cars/slice";
import { deselectAll } from "../store/cars/slice";

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
  const numberOfSelectedCars = useSelector(selectedDeselectedCar);

  

  useEffect(() => {
    const fetchCars = async () => {
      const fetchedCars = await carService.getAll();
      dispatch(setCars(fetchedCars));
    };
    fetchCars();
  }, [dispatch]);

  const handleSelectCar = (car: Car) => {
    dispatch(setDeselectCar(car))
  };

  const handleSelectAll = () => {
    dispatch(selectAll())
  };
  const handleDiselectAll = () => {
    dispatch(deselectAll())
  }

  return (
    <div>
      <h2>Cars</h2>
      <p>Number of selected {numberOfSelectedCars}</p>
      {filteredCars.length === 0 ? (
        <p>No cars found.</p>
      ) : (
        <ul>
          {filteredCars.map((car) => (
            <SingleCarComponent key={car.id} car={car} onSelect={handleSelectCar} selectAll={handleSelectAll} deselectAll={handleDiselectAll}/>
          ))}
        </ul>
      )}
      ;
    </div>
  );
};

export default AppCars;
