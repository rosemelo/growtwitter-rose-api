import express from "express";
import cors from "cors";
import "dotenv/config";
import { prisma } from "./database/prisma";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("API Growtwitter rodando");
});

app.post("/users", async (req, res) => {
  const { name, username, password } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      username,
      password,
    },
  });

  return res.status(201).json(user);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});