import { Request, Response } from "express";
import { loginUserService } from "../services/auth.service";
import { AuthRequest } from "../types/auth";

export async function loginController(req: AuthRequest, res: Response) {
  try {
    const { login, password } = req.body;

    const result = await loginUserService({ login, password });

    return res.json(result);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}