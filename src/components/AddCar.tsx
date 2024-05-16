import React, { FC } from "react";
import { useState } from "react";
import carService from "../services/CarService";
import { Car } from "./AppCars";
import { useNavigate } from "react-router-dom";

interface AddCarProps {
    onAddCar: (newCar: Car) => void;
}

const AddCar: React.FC<AddCarProps> = ( {onAddCar}) => {
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: 0,
    maxSpeed: 0,
    numberOfDoors: 0,
    isAutomatic: false,
    engine: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const values = type === "checkbox" ? checked : value;
    setNewCar((previousValue) => ({ ...previousValue, [name]: values }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const addedCar = await carService.addCar(newCar);
    onAddCar(addedCar);
    navigate("/cars");
    
  };

  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Brend:
        <input
          type="text"
          name="brand"
          value={newCar.brand}
          onChange={handleChange}
        />
      </label>
      <label>
        Model:
        <input
          type="text"
          name="model"
          value={newCar.model}
          onChange={handleChange}
        />
      </label>
      <label>
        Year:
        <input
          type="number"
          name="year"
          value={newCar.year}
          onChange={handleChange}
        />
      </label>
      <label>
        Max Speed:
        <input
          type="number"
          name="maxSpeed"
          value={newCar.maxSpeed}
          onChange={handleChange}
        />
      </label>
      <label>
        Number of Doors:
        <input
          type="number"
          name="numberOfDoors"
          value={newCar.numberOfDoors}
          onChange={handleChange}
        />
      </label>
      <label>
        Automatic:
        <input
          type="checkbox"
          name="isAutomatic"
          checked={newCar.isAutomatic}
          onChange={handleChange}
        />
      </label>
      <label>
        Engine:
        <div>
          <label>
            Diesel
            <input
              type="radio"
              name="engine"
              value="diesel"
              checked={newCar.engine === "diesel"}
              onChange={handleChange}
            />
          </label>
          <label>
            Petrol
            <input
              type="radio"
              name="engine"
              value="petrol"
              checked={newCar.engine === "petrol"}
              onChange={handleChange}
            />
          </label>
          <label>
            Electric
            <input
              type="radio"
              name="engine"
              value="electric"
              checked={newCar.engine === "electric"}
              onChange={handleChange}
            />
          </label>
          <label>
            Hybrid
            <input
              type="radio"
              name="engine"
              value="hybrid"
              checked={newCar.engine === "hybrid"}
              onChange={handleChange}
            />
          </label>
        </div>
      </label>

      <button type="submit">Add Car</button>
    </form>
  );
};

export default AddCar;
