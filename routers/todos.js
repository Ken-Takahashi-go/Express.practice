const express = require("express");
const router = express.Router();
const controller = require("../controllers/todos.js");

router
  .route("/")
  .get(controller.getTodos)
  .post(controller.postTodo);

module.exports = router;
