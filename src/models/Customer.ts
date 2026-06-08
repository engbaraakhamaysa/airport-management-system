import { Address } from "../enums/Address.js";
import { Account } from "./Account.js";
import { Person } from "./Person.js";

export class Customer extends Person {
  constructor(
    name: string,
    phone: string,
    account: Account,
    address: Address,
    private frequentFlyerNumber: string,
  ) {
    super(name, phone, address, account);
  }

  // Add get Itineraries
}
