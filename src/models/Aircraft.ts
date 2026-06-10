import type { Flight } from "./Flight.js";

import { Seat } from "./Seat.js";

export class Aircraft {
  constructor(
    private name: string,
    private model: string,
    private manufacturingYear: number,
    private seats: Seat[],
    // private flightInstance: FlightInstance //circular dependency
  ) {}

  getFlights(): Flight[] {
    return [];
  }
}
