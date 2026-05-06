import { Response } from "express";
import { AuthRequest } from "../types/auth";
import { createReplyService } from "../services/reply.service";

export async function replyController(req: AuthRequest, res: Response) {
  try {
    const userId = req.user!.userId;
    const { content, replyToId } = req.body;

    const reply = await createReplyService(userId, content, replyToId);

    return res.json(reply);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}