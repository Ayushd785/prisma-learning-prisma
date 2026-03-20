import prisma from "../config/dbConfig.js";

export const createTodo = async(title: string, userId: number, description: string)=>{
    return prisma.todo.create({
        data:{
            title,
            userId,
            description,
        }
    })
}

export const getTodosByUser = async (userId: number)=>{
    return await prisma.todo.findMany({
        where:{userId: userId},
    });
}

export const toggleTodoCompletion = async (todoId: number, isCompleted: boolean) =>{
    return await prisma.todo.update({
        where:{id: todoId},
        data:{isCompleted},
    });
};

export const deleteTodo  = async(todoId: number)=>{
    return await prisma.todo.delete({
        where:{id: todoId}
    })
}