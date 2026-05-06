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