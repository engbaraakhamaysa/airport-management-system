import type { Address } from "../enums/Address.js";
import { Account } from "./Account.js";

export abstract class Person {
  constructor(
    protected name: string,
    protected phone: string,
    protected address: Address,
    protected account: Account, // Composition(HAS-A Relationship) : Everyone Person has an account
  ) {}
}
