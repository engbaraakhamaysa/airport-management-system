import type { Address } from "../../enums/Address.js";
import type { Flight } from "../flights/Flight.js";

export class Airport {
  constructor(
    private name: string,
    private address: Address,
    private code: string,
  ) {}

  getFilghts(): Flight[] {
    return [];
  }
}
