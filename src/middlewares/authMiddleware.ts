import jwt from "jsonwebtoken";
import express from "express"
import type { Request, Response, NextFunction } from "express";

const jwt_secret = process.env.JWT_SECRET;

export interface AuthRequest extends Request{
    userId?: number;
}

export const authMiddleware = async(req: AuthRequest, res: Response, next:NextFunction) =>{
    const token = req.headers.authorization
    if(!token){
        return res.status(300).json({
            msg:"Authentication failed token not found"
        })
    }
    try{
        const decoded = jwt.verify(token, jwt_secret as string) as {userId: number};
        req.userId = decoded.userId;
        next();
    }catch(err:any){
        return res.status(401).json({ msg: "Invalid or expired token", err: err.message });
    }

};