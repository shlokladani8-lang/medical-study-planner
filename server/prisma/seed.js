import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Subjects
  const pharma = await prisma.subject.create({ data: { name: "Pharmacology" } });
  const patho = await prisma.subject.create({ data: { name: "Pathology" } });
  const micro = await prisma.subject.create({ data: { name: "Microbiology" } });

  // Chapters
  const genMicro = await prisma.chapter.create({
    data: { name: "General Microbiology", order: 1, subjectId: micro.id },
  });

  const genPharma = await prisma.chapter.create({
    data: { name: "General Pharmacology", order: 1, subjectId: pharma.id },
  });

  const cellInjury = await prisma.chapter.create({
    data: { name: "Cell Injury & Adaptation", order: 1, subjectId: patho.id },
  });

  // Topics
  await prisma.topic.createMany({
    data: [
      { name: "Bacterial cell wall", importance: "HIGH", chapterId: genMicro.id },
      { name: "PCR", importance: "HIGH", chapterId: genMicro.id },
      { name: "Pharmacokinetics", importance: "HIGH", chapterId: genPharma.id },
      { name: "Necrosis", importance: "HIGH", chapterId: cellInjury.id },
    ],
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
