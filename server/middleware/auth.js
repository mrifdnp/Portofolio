import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // The header format should be "Bearer <token>"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Akses ditolak. Token tidak ditemukan.' });
  }

  // We should ideally use an env variable for the secret key
  const secretKey = process.env.JWT_SECRET || 'secret_key_admin_portofolio_super_aman';

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token tidak valid atau sudah kedaluwarsa.' });
    }
    req.user = user;
    next();
  });
};
