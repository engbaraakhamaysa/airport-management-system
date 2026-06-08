export class Address {
  //Constructor Injection
  constructor(
    private streetAddress: string,
    private city: string,
    private state: string,
    private zipCode: string,
    private country: string,
  ) {}
}
