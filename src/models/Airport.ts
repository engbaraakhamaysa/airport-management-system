import type { Address } from "../enums/Address.js";
import { Flight } from "./Flight.js";

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
