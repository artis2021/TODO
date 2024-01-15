import { Router } from "express";
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from "../controllers/todos.controllers.js";

const todoRouter = Router()

todoRouter.get("/", getAllTodos);

todoRouter.get("/:todoId", getTodoById)

todoRouter.post("/", createTodo);

todoRouter.delete("/:todoId", deleteTodo)

todoRouter.patch("/:todoId", updateTodo)

export default todoRouter;