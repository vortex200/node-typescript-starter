import { Response, NextFunction, Request } from "express";

async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    req.user = {
      id: 1,
      name: "test",
    };
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

export default authMiddleware;
