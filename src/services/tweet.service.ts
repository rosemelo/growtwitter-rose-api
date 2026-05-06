import { prisma } from "../database/prisma";

export async function createTweetService(userId: string, content: string) {
  if (!content) {
    throw new Error("Content is required");
  }

  const tweet = await prisma.post.create({
    data: {
      content,
      userId,
    },
  });

  return tweet;
}

export async function getFeedService(userId: string) {
  const following = await prisma.follow.findMany({
    where: {
      followerId: userId
    },
    select: {
      followingId: true
    }
  });

  const followingIds = following.map(f => f.followingId);

  const feed = await prisma.post.findMany({
    where: {
      userId: {
        in: [...followingIds, userId]
      }
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      user: true
    }
  });

  return feed;
}
