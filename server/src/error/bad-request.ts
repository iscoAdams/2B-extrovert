import customErr from "./customErr";
export default class badRequestErr extends customErr {
  constructor(message: string) {
    super(message);
    this.statusCode = 400;
  }
}
export const handleBadRequestErr = (message: string) => {
  return new badRequestErr(message);
};
