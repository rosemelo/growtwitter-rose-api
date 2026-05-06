import { Request, Response } from "express";
import { followUserService, unfollowUserService } from "../services/follow.service";
import { AuthRequest } from "../types/auth";

export async function followUserController(req: AuthRequest, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const followerId = req.user.userId;
    const { followingId } = req.body;

    const result = await followUserService(followerId, followingId);

    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function unfollowUserController(req: AuthRequest, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const followerId = req.user.userId;
    const { followingId } = req.body;

    const result = await unfollowUserService(followerId, followingId);

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}