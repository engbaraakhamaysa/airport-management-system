import type { AccountStatus } from "../../enums/AccountStatus.js";

export class Account {
  constructor(
    private id: string,
    private password: string,
    private status: AccountStatus,
  ) {}
  public resetPassword(oldPassword: string, newPassword: string): boolean {
    if (this.password !== oldPassword) {
      return false; // old password incorrect
    }

    if (newPassword.length < 6) {
      return false; // weak password
    }

    this.password = newPassword;
    return true;
  }
}
