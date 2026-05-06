import { prisma } from "../database/prisma";

export async function followUserService(followerId: string, followingId: string) {
  // 1. não pode seguir a si mesmo
  if (followerId === followingId) {
    throw new Error("Você não pode seguir a si mesmo");
  }

  // 2. verificar se usuário alvo existe
  const userToFollow = await prisma.user.findUnique({
    where: { id: followingId },
  });

  if (!userToFollow) {
    throw new Error("Usuário não encontrado");
  }

  // 3. verificar se já segue
  const alreadyFollowing = await prisma.follow.findFirst({
    where: {
      followerId,
      followingId,
    },
  });

  if (alreadyFollowing) {
    throw new Error("Você já segue esse usuário");
  }

  // 4. criar follow
  return await prisma.follow.create({
    data: {
      followerId,
      followingId,
    },
  });
}

export async function unfollowUserService(followerId: string, followingId: string) {
  // 1. verificar se relação existe
  const followRelation = await prisma.follow.findFirst({
    where: {
      followerId,
      followingId,
    },
  });

  if (!followRelation) {
    throw new Error("Você não segue esse usuário");
  }

  // 2. deletar follow
  return await prisma.follow.delete({
    where: {
      id: followRelation.id,
    },
  });
}