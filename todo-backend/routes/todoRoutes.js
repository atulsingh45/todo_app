const express = require("express")
const {getTodos, addTodo} = require("../controllers/todoController")

const router = express.Router()

router.get("/get-todos", getTodos)

router.post("/add-todo", addTodo)

// Todo: Implement the logic for handling deletion of todos
// router.delete("/:id",)

module.exports = router;