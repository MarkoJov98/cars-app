import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { setSearchCars } from "../store/cars/slice";

const CarSearch: React.FC = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchCars(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Model or brand"
      />
    </div>
  );
};

export default CarSearch;
