import type { Airport } from "./Airport.js";

export class Flight {
  constructor(
    private flightNumber: string,
    private departure: Airport,
    private arrival: Airport,
    duratinnInMinutes: number,
  ) {}

  cancel(): boolean {
    return true;
  }

  addFlightSchedule(): boolean {
    return false;
  }

  getInstances() {}
}
