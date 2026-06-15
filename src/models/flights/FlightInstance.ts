import type { FlightStatus } from "../../enums/FlightStatus.js";
import type { Aircraft } from "../aircraft/Aircraft.js";
import type { FlightSeat } from "../aircraft/FlightSeat.js";

export class FlightInstance {
  constructor(
    private departureTime: Date,
    private gate: string,
    private status: FlightStatus,
    private seats: FlightSeat[], //Composition
    private aircraft: Aircraft,
  ) {}

  cancel(): boolean {
    return true;
  }

  updateStatus(): void {}
}
