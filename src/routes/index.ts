import { Router } from "express";
import { createUserController } from "../controllers/user.controller";
import { loginController } from "../controllers/auth.controller";
import { followUserController, unfollowUserController } from "../controllers/follow.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createTweetController, getFeedController } from "../controllers/tweet.controller";
import { likeController } from "../controllers/like.controller";
import { replyController } from "../controllers/reply.controller";


export const router = Router();

router.get("/", (req, res) => {
  res.send("API Growtwitter rodando");
});

router.post("/users", createUserController);
router.post("/login", loginController);

router.post("/follow", authMiddleware, followUserController);
router.delete("/unfollow", authMiddleware, unfollowUserController);

router.post("/tweets", authMiddleware, createTweetController);
router.get("/feed", authMiddleware, getFeedController);

router.post("/like", authMiddleware, likeController);
router.post("/reply", authMiddleware, replyController);