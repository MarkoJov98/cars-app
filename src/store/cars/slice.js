import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    searchedItem: "",
    selectedCar: [],
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setSearchCars: (state, action) => {
      state.searchedItem = action.payload;
    },
    setDeselectCar: (state, action) => {
      const selected =
        state.selectedCar.filter((car) => car.id === action.payload.id).length >
        0;
      if (!selected) {
        state.selectedCar = [...state.selectedCar, action.payload];
      } else {
        state.selectedCar = state.selectedCar.filter(
          (car) => car.id !== action.payload.id
        );
      }
    },
    selectAll: (state) => {
        state.selectedCar = state.cars;
    },
    deselectAll: (state) => {
        state.selectedCar = [];
    }
  },
});

export const { setCars, setSearchCars, setDeselectCar, selectAll, deselectAll } = carSlice.actions;

export default carSlice.reducer;
