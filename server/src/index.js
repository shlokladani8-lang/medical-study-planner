import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  res.json({ status: "Backend with Prisma ready" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
