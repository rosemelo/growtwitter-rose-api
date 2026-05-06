import { Response } from "express";
import { AuthRequest } from "../types/auth";
import { createTweetService } from "../services/tweet.service";
import { getFeedService } from "../services/tweet.service";

export async function createTweetController(req: AuthRequest, res: Response) {
  try {
    const { content } = req.body;

    const userId = req.user!.userId;

    const tweet = await createTweetService(userId, content);

    return res.status(201).json(tweet);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function getFeedController(req: AuthRequest, res: Response) {
  try {
    const userId = req.user!.userId;

    const feed = await getFeedService(userId);

    return res.json(feed);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}