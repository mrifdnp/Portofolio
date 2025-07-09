import { image } from "framer-motion/client";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project5.jpg";

export const HERO_CONTENT = `Junior Web and Mobile Developer with experience in building responsive web applications using PHP, MySQL, Laravel, and React, as well as developing Android applications with Kotlin. Skilled in UI/UX design, API integration, and database management. A graduate of Bangkit 2024 Android Development cohort, passionate about creating efficient and user-friendly digital solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile junior web and mobile developer with a passion for creating efficient and user-friendly applications. With experience in web development using PHP, MySQL, Laravel, and React, as well as mobile development with Kotlin, I continuously strive to learn and adapt to new challenges. A graduate of Bangkit 2024's Android Development cohort, I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I stay curious about new technologies and continuously seek opportunities to grow.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Android Development Cohort",
    company: "Bangkit Academy 2024 Batch 2",
    description: `As a Bangkit 2024 graduate in the Android Development cohort, I built and optimized mobile applications using Kotlin and modern Android tools. I developed features like event reminders, favorite management, and Google Maps integration, utilizing ViewModel, WorkManager, and bottom navigation for efficient state management and user experience. Collaborating in a team, I gained skills in debugging, optimizing performance, and implementing scalable solutions. Additionally, I contributed ideas for program improvements, including a web development track and an incubation fund for capstone projects, further enhancing my problem-solving and innovation skills.`,
    technologies: ["Kotlin", "Jetpack Compose", "Figma", "Firebase"],
  },
  {
    year: "September 2024 - July 2025",
    role: "Computer Lab Assistant for Advanced Programming, Database System, Mobile Programming, and Web Programming",
    company: "Forum Asisten - Universitas Amikom Yogyakarta",
    description: `I served as a Computer Lab Assistant at Forum Asisten from September 2024 to January 2025 in Sleman, Yogyakarta. My role involved assisting students with programming concepts, debugging code, and guiding them through database design and implementation. I provided hands-on support, facilitated lab sessions, and helped troubleshoot technical issues to enhance students' learning experiences. This experience strengthened my expertise in software development, database management, and technical mentoring, while also improving my problem-solving and communication skills.`,
    technologies: ["C#", "C++", "Laragon", "mySQL", "Kotlin", "Javascript", "HTML", "CSS"],
  },
  {
    year: "2025",
    role: "Website Optimization – BAZNAS Kota Yogyakarta Volunteer",
    company: "BAZNAS Kota Yogyakarta",
    description: `As a volunteer for BAZNAS Kota Yogyakarta, I focused on optimizing the organization's website to improve user experience and accessibility. I conducted usability testing, gathered feedback from users, and implemented changes to enhance navigation and content presentation. This experience allowed me to apply my web development skills in a real-world context while contributing to a meaningful cause.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  }
];

export const PROJECTS = [
  {
    title: "Dermatologist Care - AI Powered Skin Disease Detection App",
    image: project1,
    description:
      "An AI-driven mobile application that detects skin diseases using TensorFlow Lite, provides dermatologist recommendations via Google Maps, and includes journal sources for medical references.",
    technologies: ["Kotlin", "TensorFlow Lite", "Google Maps API"],
  },
  
  {
    title: "Pasar Tradisi - Traditional Market E-Commerce Platform",
    image: project2,
    description:
      "An e-commerce platform for traditional markets, enabling vendors to create online stores, manage inventory, and receive orders from customers.",
    technologies: ["HTML", "CSS", "Laravel",  "mySQL"],
  },

  {    title: "Microsite",
    image: project3,
    description:
      "A Link in Bio website is a platform that allows users to manage and share multiple links through a single, customizable landing page. This project is designed to help content creators, businesses, and influencers direct their audience to various platforms, such as social media, online stores, portfolios, and other important links, using just one URL.",
    technologies: ["Laravel Breeze , Filament"],
  },
  {    title: "Etalase Kita - UMKM Platform",
    image: project4,
    description:
      "EtalaseKita is a digital marketplace that showcases and promotes high-quality products from Indonesian SMEs (Small and Medium Enterprises). We provide a platform where local businesses can reach a wider audience, grow their brand, and compete in the digital economy. Our mission is to empower local entrepreneurs through technology by offering easy-to-use tools for product listing, promotion, and customer engagement. With EtalaseKita, buyers can discover authentic, locally-made goods while supporting community-driven growth. Whether you're looking for handmade crafts, local food, fashion, or household products, EtalaseKita brings the best of Indonesia to your fingertips.",
    technologies: ["Laravel Breeze , Filament"],
  },
  {title: "Bulupedia - Web & Mobile Pet Shop E-commerce Platform",
    image: project5,
    description:"Designed and developed a responsive pet shop marketplace available on both web and mobile platforms. The system supports browsing, purchasing, and managing pet-related products. Developed using Flutter for the mobile app and integrated with a web admin panel built with Laravel. Implemented user authentication, real-time notifications, and transaction tracking.",
    technologies: ["Flutter", "Laravel", "Supabase"],
  
  }


];

export const CONTACT = {
  address: "Sleman Regency, Special Region of Yogyakarta",
  phoneNo: "+62 851 5692 5923",
  email: "rifqidani23@gmail.com",
};
