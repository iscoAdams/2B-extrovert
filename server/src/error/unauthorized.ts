import customErr from "./customErr";
export default class unauthorizedErr extends customErr {
  constructor(message: string) {
    super(message);
    this.statusCode = 401;
  }
}
export const handleUnauthorizedErr = (message: string) => {
  return new unauthorizedErr(message);
};
