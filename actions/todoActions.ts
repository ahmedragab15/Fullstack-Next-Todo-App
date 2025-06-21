"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getUserTodoListAction = async ({ userId }: { userId: string | null }) => {
  const userTodos = await prisma.todo.findMany({
    where: {
      userId: userId || "",
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return userTodos;
};

export const createTodoAction = async ({ title, body, completed, userId }: ITodo) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
      userId: userId || "",
    },
  });
  revalidatePath("/");
};

export const updateTodoAction = async ({ id, title, body, completed }: ITodo) => {
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
  revalidatePath("/");
};

export const deleteTodoAction = async ({ id }: { id: string | undefined }) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};
