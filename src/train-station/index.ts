import { ITrainStation } from "../common";

class TrainStation implements ITrainStation {
    public city: string;
    public name: string;
    public kilometricPoint: number;
  
    constructor(city: string, name: string, kilometricPoint: number) {
      this.city = city;
      this.name = name;
      this.kilometricPoint = kilometricPoint;
    }
  }
  