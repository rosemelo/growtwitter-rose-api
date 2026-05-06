import { Router } from "express";
import { createUserController } from "../controllers/user.controller";
import { loginController } from "../controllers/auth.controller";
import { followUserController, unfollowUserController } from "../controllers/follow.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createTweetController } from "../controllers/tweet.controller";


export const router = Router();

router.get("/", (req, res) => {
  res.send("API Growtwitter rodando");
});

router.post("/users", createUserController);
router.post("/login", loginController);

router.post("/follow", authMiddleware, followUserController);
router.delete("/unfollow", authMiddleware, unfollowUserController);

router.post("/tweets", authMiddleware, createTweetController);