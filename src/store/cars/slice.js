import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: "cars",
    initialState: {
        cars: [],
        searchedItem: "",
    },
    reducers: {
        setCars: ( state, action) => {
            state.cars = action.payload;
        },
        setSearchCars: (state, action) => {
            state.searchedItem = action.payload;
        }
    },
})

export const { setCars, setSearchCars} = carSlice.actions;


export default carSlice.reducer;