import { Request, Response, NextFunction } from "express";
export const asyncWrapper = (fn: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      if (error.name == "SequelizeUniqueConstraintError") {
        //I'm handling this on my controllers but just in case.
        if (error.parent.code === "23505") {
          res.status(400).send({
            message: "duplicated email",
            error,
          });
        }
      }
      next(error);
    }
  };
};
