export class Passenger {
  constructor(
    private name: string,
    private passportNumber: string,
    private dateOfBirth: Date,
  ) {}

  public getPassportNumber(): string {
    return this.passportNumber;
  }
}
