export const selectCars = (state) => state.cars.cars;

export const selectFilteredCars = ({ cars }) => {
    // console.log("selektors", cars);

    const carsList = cars.cars;
    const searched = cars.searchedItem;
    console.log("trazeno", searched);

    const filtered = carsList.filter((car) => car.brand.includes(searched))
    console.log("Filtrirano" , filtered);
    return filtered;
};