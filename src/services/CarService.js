import HttpService from "./HttpService";

class CarService extends HttpService {
  async getAll() {
    try {
      const { data } = await this.client.get("/cars");
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
  async addCar(newCar) {
    try {
        const { data } = await this.client.post("/cars", newCar);
        return data;
    } catch (error) {
        console.log(error);
    }
  }
}


const carService = new CarService;

export default carService;
