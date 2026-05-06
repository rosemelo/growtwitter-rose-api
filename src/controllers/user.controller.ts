import { Request, Response } from "express";
import { createUserService } from "../services/user.service";
import { AuthRequest } from "../types/auth";

export async function createUserController(req: AuthRequest, res: Response) {
  try {
    const { name, username, email, password, avatarUrl } = req.body;

    const user = await createUserService({
      name,
      username,
      email,
      password,
      avatarUrl,
    });

    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}