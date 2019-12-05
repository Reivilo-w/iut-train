import { ITrainStation } from "../common";

class FareCalculator {

    public static getFare (departureStation: ITrainStation, arrivalStation: ITrainStation, costPerKilometer: number) {
        const deltaBetweenStations = arrivalStation.kilometricPoint - departureStation.kilometricPoint;
        return deltaBetweenStations * costPerKilometer;
    }
} 