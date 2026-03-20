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
    console.error("CREATE TODO ERROR:", err); // 🔥 MUST
    res.status(500).json({ error: err.message });
}
}