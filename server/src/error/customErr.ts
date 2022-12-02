export default class customErr extends Error {
  public statusCode: number;
  constructor(message: string) {
    super(message);
    // this.statusCode = statuscode;
  }
}
