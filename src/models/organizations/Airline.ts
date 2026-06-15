import { Aircraft } from "../aircraft/Aircraft.js";
import type { Flight } from "../flights/Flight.js";

export class Airline {
  constructor(
    private name: string,
    private code: string,
    private aircrafts: Aircraft[],
  ) {}

  getFlights(): Flight[] {
    return [];
  }
}
