"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
    const allTodos = await prisma.todo.findMany();
    return allTodos;
};

export const createTodoAction = async ({ title, body, completed }: { title: string; body?: string | undefined; completed?: boolean }) => {
    await prisma.todo.create({
        data: {
            title,
            body,
            completed,
        },
    });
};

export const updateTodoAction = async ({
    id,
    title,
    body,
    completed,
}: {
    id: string;
    title: string;
    body?: string | undefined;
    completed?: boolean;
}) => {
    await prisma.todo.update({
        where: {
            id,
        },
        data: {
            title,
            body,
            completed,
        },
    });
};

export const deleteTodoAction = async ({ id }: { id: string }) => {
    await prisma.todo.delete({
        where: {
            id,
        },
    });
};
