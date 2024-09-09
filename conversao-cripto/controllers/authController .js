const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const register = (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: 'Erro ao registrar usuário' });
    User.createUser(username, hashedPassword, (err) => {
      if (err) return res.status(500).json({ error: 'Erro ao registrar' });
      res.status(201).json({ message: 'Usuário registrado com sucesso' });
    });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;
  User.findUserByUsername(username, (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ error: 'Usuário não encontrado' });
    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) return res.status(401).json({ error: 'Senha incorreta' });
      const token = jwt.sign({ userId: user.id }, 'secreta', { expiresIn: '1h' });
      res.json({ token });
    });
  });
};

module.exports = { register, login };
