import { Request, Response } from "express";

export async function getExampleString(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    return res.json({ message: `hello ${req.user.name}` });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}
