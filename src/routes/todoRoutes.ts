import * as todocontroller from "../controllers/todoController.js"
import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();


router.post("/createtodo",authMiddleware,  todocontroller.createTodo);


export default router;