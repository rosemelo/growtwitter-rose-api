import { prisma } from "../database/prisma";
import bcrypt from "bcrypt";

export async function createUserService(data: any) {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const userExists = await prisma.user.findFirst({
    where: {
      OR: [
        { username: data.username },
        { email: data.email },
      ],
    },
  });

  if (userExists) {
    throw new Error("Username ou email já existe");
  }

 const user = await prisma.user.create({
  data: {
    ...data,
    password: hashedPassword,
  },
});

  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
}