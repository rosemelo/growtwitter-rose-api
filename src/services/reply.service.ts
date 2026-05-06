import { prisma } from "../database/prisma";

export async function createReplyService(
  userId: string,
  content: string,
  replyToId: string
) {
  return prisma.post.create({
    data: {
      content,
      userId,
      replyToId
    }
  });
}