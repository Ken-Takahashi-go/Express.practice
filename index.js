const express = require("express");
const todosRouter = require("./controllers/todos.js");
const app = express();
const PORT = 8080;

app.use("/api/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`example app listening on port ${PORT} `);
});
