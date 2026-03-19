import express from 'express';
import type { Request, Response } from 'express';

import * as AuthService from "../services/authServier.js"


export const signup = async(req:Request, res: Response)=>{
    try{
        const {name, email, password} = req.body;
        const result = await AuthService.signup(name,email,password);
        res.status(201).json({
            msg:"User signed up successfully",
            data: result
        });
    }catch(Err: any){
        return res.status(400).json({
            msg:"Unexpeced error in signup",
            error: Err.message
        })
    }
}

export const login = async(req: Request, res: Response) =>{
    try{
        const {email, password} = req.body;
        const result = await AuthService.login(email, password);
        res.status(200).json({
            msg:"user logged in successfully",
            data: result
        })

    }catch(err: any){
        return res.status(400).json({
            msg:"Unexpected error in login",
            error: err.message
        })
    }
}