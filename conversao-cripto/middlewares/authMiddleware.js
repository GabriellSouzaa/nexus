const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });

  const token = authHeader.split(' ')[1]; // Remove o prefixo 'Bearer'
  if (!token) return res.status(401).json({ error: 'Token não fornecido' });

  jwt.verify(token, 'secreta', (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.userId = decoded.userId;
    next();
  });
};
module.exports = authMiddleware;
