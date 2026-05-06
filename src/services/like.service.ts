import { prisma } from "../database/prisma";

export async function likePostService(userId: string, postId: string) {
  return prisma.like.create({
    data: {
      userId,
      postId
    }
  });
}