import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { authenticateToken } from './middleware/auth.js';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// --- PUBLIC ROUTES ---
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Mengambil semua data untuk halaman Landing Page
app.get('/api/portfolio', async (req, res) => {
  try {
    const hero = await prisma.heroSection.findFirst();
    const about = await prisma.aboutSection.findFirst();
    const profile = await prisma.profile.findFirst();
    // Urutkan experience berdasarkan ID agar urutannya konsisten
    const experiences = await prisma.experience.findMany({ orderBy: { id: 'asc' } });
    const projects = await prisma.project.findMany({ orderBy: { id: 'asc' } });
    const skills = await prisma.skill.findMany();

    res.json({ hero, about, profile, experiences, projects, skills });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- AUTH ROUTE ---
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) return res.status(401).json({ message: 'Username atau password salah' });
    
    // Cek password (mendukung plain text dari seed sementara, idealnya semua bcrypt)
    const isValid = bcrypt.compareSync(password, user.password) || password === user.password;
    if (!isValid) return res.status(401).json({ message: 'Username atau password salah' });

    const secretKey = process.env.JWT_SECRET || 'secret_key_admin_portofolio_super_aman';
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1d' });
    
    res.json({ token, message: 'Login sukses' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- ADMIN PROTECTED ROUTES ---

// Update Hero
app.put('/api/admin/hero', authenticateToken, async (req, res) => {
  try {
    const { id, title, subtitle, description, imageUrl } = req.body;
    const updated = await prisma.heroSection.update({
      where: { id: id || 1 },
      data: { title, subtitle, description, imageUrl }
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update About
app.put('/api/admin/about', authenticateToken, async (req, res) => {
  try {
    const { id, content, imageUrl } = req.body;
    const updated = await prisma.aboutSection.update({
      where: { id: id || 1 },
      data: { content, imageUrl }
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
