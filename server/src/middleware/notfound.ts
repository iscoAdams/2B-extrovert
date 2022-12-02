import { Request, Response, NextFunction } from "express";
export default (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send(
    "<h1 style = color:BurlyWood;font-family:verdana;text-align:center>not found!</h1>\
        <a href = 'http://localhost:8000/' style = color:BurlyWood;font-family:verdana;text-align:center;>go back</a>"
  );
};
