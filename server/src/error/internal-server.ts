import customErr from "./customErr";
export default class internalServerErr extends customErr {
  constructor(message: string) {
    super(message);
    this.statusCode = 500;
  }
}
export const handleInternalServerErr = (message: string) => {
  return new internalServerErr(message);
};
