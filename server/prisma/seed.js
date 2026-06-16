import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const HERO_CONTENT = `Lulusan Informatika dari Universitas Amikom Yogyakarta dengan pengalaman kuat dalam pengembangan aplikasi web dan mobile. Memiliki keahlian dalam membangun aplikasi yang skalabel menggunakan teknologi seperti Kotlin, Flutter, Laravel, dan Next.js. Berpengalaman melalui program magang, asisten dosen, serta memenangkan berbagai proyek penghargaan.`;

const ABOUT_TEXT = `Lulusan Informatika dari Universitas Amikom Yogyakarta dengan pengalaman kuat dalam pengembangan aplikasi web dan mobile. Memiliki keahlian dalam membangun aplikasi yang skalabel menggunakan teknologi seperti Kotlin, Flutter, Laravel, dan Next.js. Berpengalaman melalui program magang, asisten dosen, serta memenangkan berbagai proyek penghargaan.`;

const EXPERIENCES = [
  {
    year: "Maret 2026 - Sekarang",
    role: "Junior FullStack Programmer",
    company: "Seken Living",
    description: `Mengembangkan dan memelihara sistem web internal menggunakan Laravel dan PostgreSQL. Membangun aplikasi mobile dengan Flutter yang terintegrasi dengan REST API. Mengelola infrastruktur server menggunakan Docker dan Nginx.`,
    technologies: ["Laravel", "PostgreSQL", "Flutter", "REST API", "Docker", "Nginx"],
  },
  {
    year: "Nov 2025 - Mar 2026",
    role: "Magang Junior FullStack Programmer",
    company: "PT Jendela Digital Indonesia",
    description: `Berkontribusi pada pengembangan sistem ERP berbasis web. Mengoptimalkan fungsi aplikasi dan melakukan perbaikan bug untuk meningkatkan performa sistem.`,
    technologies: ["Web", "ERP"],
  },
  {
    year: "Feb 2025 - Juli 2025",
    role: "Asisten Dosen",
    company: "Universitas Amikom Yogyakarta",
    description: `Membimbing mahasiswa dalam mata kuliah Pemrograman Mobile, Web, Algoritma, dan Basis Data.`,
    technologies: ["Pemrograman Mobile", "Web", "Algoritma", "Basis Data"],
  },
  {
    year: "2022 - 2026",
    role: "Sarjana Informatika (IPK 3.82)",
    company: "Universitas Amikom Yogyakarta",
    description: `Program S1 Informatika dengan fokus pada pengembangan perangkat lunak dan keahlian teknis terkait.`,
    technologies: ["Informatika", "Software Engineering"],
  },
  {
    year: "2024",
    role: "Mobile Developer",
    company: "Bangkit Academy 2024",
    description: `Program studi independen oleh Google, GoTo, dan Traveloka yang berfokus pada pengembangan Android (Kotlin, Jetpack, MVVM).`,
    technologies: ["Kotlin", "Jetpack", "MVVM"],
  }
];

const PROJECTS = [
  {
    title: "Kalana Pantry",
    description: "Website manajemen dapur pintar yang meraih Juara 1 AMICTA 2025.",
    imageUrl: "project-1.jpg",
  },
  {
    title: "Kalana Commerce",
    description: "Aplikasi E-commerce mobile dengan integrasi AI yang meraih Juara 1 Hackathon Refactory x Amikom.",
    imageUrl: "project-2.jpg",
  },
  {
    title: "Econara",
    description: "Ekosistem digital untuk manajemen limbah makanan berkelanjutan.",
    imageUrl: "project-3.jpg",
  },
  {
    title: "Dermatologist Care",
    description: "Aplikasi Android untuk deteksi penyakit kulit menggunakan TensorFlow Lite dan Kotlin.",
    imageUrl: "project-4.jpg",
  },
  {
    title: "BukuERP & BukuPOS",
    description: "Pemeliharaan sistem ERP internal dan pengembangan aplikasi Point-of-Sale mobile yang terintegrasi secara real-time.",
    imageUrl: "project-5.jpg",
  }
];

const CONTACT = {
  address: "Sleman, Yogyakarta",
  phoneNo: "+62-851-5692-5923",
  email: "rifqidani23@gmail.com",
};

async function main() {
  console.log("Mulai melakukan seeding data...");

  // Seed Admin User (password: admin123, jangan lupa diganti nanti!)
  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: 'admin123' // Dalam praktiknya harus di-hash (misal pakai bcrypt)
    }
  });

  // Seed Hero
  const heroCount = await prisma.heroSection.count();
  if (heroCount === 0) {
    await prisma.heroSection.create({
      data: {
        title: "Rifqi Dani",
        description: HERO_CONTENT,
      }
    });
  }

  // Seed About
  const aboutCount = await prisma.aboutSection.count();
  if (aboutCount === 0) {
    await prisma.aboutSection.create({
      data: {
        content: ABOUT_TEXT,
      }
    });
  }

  // Seed Profile (Contact)
  const profileCount = await prisma.profile.count();
  if (profileCount === 0) {
    await prisma.profile.create({
      data: CONTACT
    });
  }

  // Seed Experiences
  const expCount = await prisma.experience.count();
  if (expCount === 0) {
    for (const exp of EXPERIENCES) {
      await prisma.experience.create({ data: exp });
    }
  }

  // Seed Projects
  const projCount = await prisma.project.count();
  if (projCount === 0) {
    for (const proj of PROJECTS) {
      await prisma.project.create({ data: proj });
    }
  }

  console.log("Seeding selesai!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
