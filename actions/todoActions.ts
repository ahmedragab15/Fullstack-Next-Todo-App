"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  const allTodos = await prisma.todo.findMany();
  return allTodos;
};

export const createTodoAction = async (title: string, body: string) => {
  await prisma.todo.create({
    data: {
      title,
      body,
    },
  });
};

export const updateTodoAction = async (id: string, title: string, body: string) => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      body,
    },
  });
};

export const deleteTodoAction = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
};
