import type { Request, Response } from "express";
import * as todoService from "../services/todoService.js";
import type { AuthRequest } from "../middlewares/authMiddleware.js";

export const createTodo = async(req:AuthRequest, res: Response)=>{
    try{
        const {title, description} = req.body;

        if(! title || !description){
            res.status(401).json({ error: 'invalid input' });
            return;
        }
        if(!req.userId){
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        const userId = req.userId;
        
        const newTodo = await todoService.createTodo(title, userId, description);
        res.status(200).json(newTodo);


    }catch (err: any) {
    console.error("CREATE TODO ERROR:", err);
    res.status(500).json({ error: err.message });
    }
}


export const getTodos = async(req:AuthRequest, res: Response) =>{
    try{
        const userId = req.userId;
        if(!userId){
            return res.status(301).json({
                msg:"User not found"
            })
        }
        const todos = await todoService.getTodosByUser(userId);
        return res.status(200).json(todos);
    }catch(err:any){
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
}


export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { isCompleted } = req.body;
    const updatedTodo = await todoService.toggleTodoCompletion(Number(id), isCompleted);
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
};


export const deleteTodo = async(req:AuthRequest, res: Response)=>{
    try{
        const {id} = req.params;
        if(!id){
            return res.status(300).json({
                msg:"Please provide the id of todo to delete"
            })
        }

        await todoService.deleteTodo(Number(id));
        res.status(204).send();
    }catch (error) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
}