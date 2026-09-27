import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DEFAULT_CATEGORIES = [
  {
    slug: "academic",
    name: "Academic",
    description: "Tugas kuliah, soal, Tugas akhir, dan ujian.",
  },
  {
    slug: "work",
    name: "Work",
    description: "Pekerjaan, proyek kantor, dan reuni tim.",
  },
  {
    slug: "personal",
    name: "Personal",
    description: "Kehidupan sehari-hari dan urusan pribadi.",
  },
  {
    slug: "health",
    name: "Health",
    description: "Olahraga, pola makan, dan kesehatan.",
  },
  {
    slug: "learning",
    name: "Learning",
    description: "Belajar skill baru, kursus, dan referensi bacaan.",
  },
  {
    slug: "finance",
    name: "Finance",
    description: "Uang, tagihan, dan perencanaan keuangan.",
  },
];

async function main() {
  for (const category of DEFAULT_CATEGORIES) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: { name: category.name, description: category.description },
      create: { ...category, isDefault: true },
    });
  }

  console.log(`Seed selesai: ${DEFAULT_CATEGORIES.length} kategori dasar.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
