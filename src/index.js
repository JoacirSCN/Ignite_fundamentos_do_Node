const express = require("express");

const app = express();

app.use(express.json()) // Permite que recebamos o JSON de Body params
/**
 * GET - Buscar uma informação no servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação específica
 * DELETE - Deletar uma informação no servidor
 */

// no insomnia em rotas depois de courses ?page=1&order=asc ou em query
app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

// A alteração é feita apenas se eu passar o id do curso na rota
app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

// A alteração é feita apenas se eu passar o id do curso na rota
app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

// Delete apenas o curso com o id especificado
app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});

const PORT = 3333;
app.listen(PORT); //Vou passar a porta
