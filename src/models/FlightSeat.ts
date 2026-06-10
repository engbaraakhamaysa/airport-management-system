import type { SeatClass } from "../enums/SeatClass.js";
import type { SeatType } from "../enums/SeatType.js";
import { Seat } from "./Seat.js";

export class FlightSeat extends Seat {
  constructor(
    seatNumber: string,
    type: SeatType,
    seatClass: SeatClass,
    private fare: number,
    private reservationNumber: string,
  ) {
    super(seatNumber, type, seatClass);
  }

  getFare(): number {
    return this.fare;
  }
}
