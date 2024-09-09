const express = require('express');
const authRoutes = require('./conversao-cripto/routes/authRoutes');
const conversionRoutes = require('./conversao-cripto/routes/conversionRoutes');
const favoriteRoutes = require('./conversao-cripto/routes/favoriteRoutes');
const app = express();

// Middleware para tratar JSON no corpo da requisição
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/conversion', conversionRoutes);
app.use('/api/favorite', favoriteRoutes);

// Porta para o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
