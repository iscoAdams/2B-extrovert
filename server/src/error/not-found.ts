import customErr from "./customErr";
export default class notFoundErr extends customErr {
  constructor(message: string) {
    super(message);
    this.statusCode = 404;
  }
}
export const handlenotFoundErr = (message: string) => {
  return new notFoundErr(message);
};
