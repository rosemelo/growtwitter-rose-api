import { prisma } from "../database/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function loginUserService(data: { login: string; password: string }) {
  const user = await prisma.user.findFirst({
     where: {
      OR: [
        { email: data.login },
        { username: data.login },
      ],
    },
  });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  const passwordMatch = await bcrypt.compare(data.password, user.password);

  if (!passwordMatch) {
    throw new Error("Senha inválida");
  }

 if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET não configurado");
 }

 const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
 );

  return {
    user: {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      avatarUrl: user.avatarUrl,
    },
    token,
  };
}