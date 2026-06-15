import type { SeatClass } from "../enums/SeatClass.js";
import { SeatType } from "../enums/SeatType.js";

export class Seat {
  constructor(
    private seatNumber: string,
    private type: SeatType,
    private seatClass: SeatClass,
  ) {}

  getSeatType(): SeatType {
    return 0;
  }
}
