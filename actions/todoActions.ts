"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getUserTodoListAction = async ({ userId }: { userId: string | null }) => {
  try {
    const userTodos = await prisma.todo.findMany({
      where: {
        userId: userId || "",
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return userTodos;
  } catch (error) {
    throw new Error("Something went wrong" + error);
  }
};

export const createTodoAction = async ({ title, body, completed, userId }: ITodo) => {
  try {
    await prisma.todo.create({
      data: {
        title,
        body,
        completed,
        userId: userId || "",
      },
    });
    revalidatePath("/");
  } catch (error) {
    throw new Error("Something went wrong" + error);
  }
};

export const updateTodoAction = async ({ id, title, body, completed }: ITodo) => {
  try {
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
  } catch (error) {
    throw new Error("Something went wrong" + error);
  }
};

export const deleteTodoAction = async ({ id }: { id: string | undefined }) => {
  try {
    await prisma.todo.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
  } catch (error) {
    throw new Error("Something went wrong" + error);
  }
};
