import * as todocontroller from "../controllers/todoController.js"
import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();


router.post("/createtodo",authMiddleware,  todocontroller.createTodo);

router.get("/todos", authMiddleware, todocontroller.getTodos);

router.put("/toggle/:id",authMiddleware,todocontroller.updateTodo);

router.delete("/delete/:id",authMiddleware,todocontroller.deleteTodo);

export default router;