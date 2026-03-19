import bcrypt from "bcrypt";
import prisma from "../config/dbConfig.js";
import jwt from "jsonwebtoken";

const jwt_secret = process.env.JWT_SECRET as string;



export const signup = async(name:string, email:string, password: string)=>{
    const existingUser = await prisma.user.findUnique({where:{email}});
    if(existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {name, email, password:hashedPassword},
    });

    const token = jwt.sign({userId: newUser.id}, jwt_secret, {expiresIn: "7d"});

    return {user:{
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
    },token};
};

export const login = async(email:string, password: string)=>{
    const user = await prisma.user.findUnique({where: {email}});
    if(!user){
        throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        throw new Error("invalid password");
    }

    const token = jwt.sign({userId: user.id}, jwt_secret, {expiresIn:"7d"});

    return {
        user:{
            id: user.id,
            name: user.name,
            email: user.email,
        },
        token
    };
}
