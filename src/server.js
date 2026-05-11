const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let users = [
  { id: 1, name: "Usuário Exemplo", email: "usuario@example.com" }
];

app.get("/", (req, res) => {
  res.json({
    message: "API de Gerenciamento de Usuários",
    status: "online"
  });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Nome e email são obrigatórios." });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);
  return res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
