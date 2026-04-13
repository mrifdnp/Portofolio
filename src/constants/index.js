import { image } from "framer-motion/client";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project5.jpg";

export const HERO_CONTENT = `Lulusan Informatika dari Universitas Amikom Yogyakarta dengan pengalaman kuat dalam pengembangan aplikasi web dan mobile. Memiliki keahlian dalam membangun aplikasi yang skalabel menggunakan teknologi seperti Kotlin, Flutter, Laravel, dan Next.js. Berpengalaman melalui program magang, asisten dosen, serta memenangkan berbagai proyek penghargaan.`;

export const ABOUT_TEXT = `Lulusan Informatika dari Universitas Amikom Yogyakarta dengan pengalaman kuat dalam pengembangan aplikasi web dan mobile. Memiliki keahlian dalam membangun aplikasi yang skalabel menggunakan teknologi seperti Kotlin, Flutter, Laravel, dan Next.js. Berpengalaman melalui program magang, asisten dosen, serta memenangkan berbagai proyek penghargaan.`;

export const EXPERIENCES = [
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

export const PROJECTS = [
  {
    title: "Kalana Pantry",
    image: project1,
    description: "Website manajemen dapur pintar yang meraih Juara 1 AMICTA 2025.",
    technologies: ["Nest.js", "React", "PostgreSQL"],
  },
  {
    title: "Kalana Commerce",
    image: project2,
    description: "Aplikasi E-commerce mobile dengan integrasi AI yang meraih Juara 1 Hackathon Refactory x Amikom.",
    technologies: ["Kotlin", "Express.js"],
  },
  {
    title: "Econara",
    image: project3,
    description: "Ekosistem digital untuk manajemen limbah makanan berkelanjutan.",
    technologies: ["Next.js", "MongoDB"],
  },
  {
    title: "Dermatologist Care",
    image: project4,
    description: "Aplikasi Android untuk deteksi penyakit kulit menggunakan TensorFlow Lite dan Kotlin.",
    technologies: ["TensorFlow Lite", "Kotlin"],
  },
  {
    title: "BukuERP & BukuPOS",
    image: project5,
    description: "Pemeliharaan sistem ERP internal dan pengembangan aplikasi Point-of-Sale mobile yang terintegrasi secara real-time.",
    technologies: ["ERP", "POS Mobile"],
  }
];

export const CONTACT = {
  address: "Sleman, Yogyakarta",
  phoneNo: "+62-851-5692-5923",
  email: "rifqidani23@gmail.com",
};
