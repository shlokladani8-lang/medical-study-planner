import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Get all subjects with chapters & topics
router.get("/syllabus", async (req, res) => {
  const data = await prisma.subject.findMany({
    include: {
      chapters: {
        include: {
          topics: true,
        },
      },
    },
  });
  res.json(data);
});

export default router;
