import { Aircraft } from "./Aircraft.js";
import type { Flight } from "./Flight.js";

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
