import { Response } from "express";
import { AuthRequest } from "../types/auth";
import { likePostService } from "../services/like.service";

export async function likeController(req: AuthRequest, res: Response) {
  try {
    const userId = req.user!.userId;
    const { postId } = req.body;

    const like = await likePostService(userId, postId);

    return res.json(like);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}