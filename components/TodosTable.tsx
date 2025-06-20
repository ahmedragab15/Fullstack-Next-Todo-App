import { getTodoListAction } from "@/actions/todoActions";
import React from "react";

import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";

const TodosTable = async () => {
  const todos = await getTodoListAction();
  return (
    <Table>
      <TableCaption>A list of your Todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>{todo.completed ? "Completed" : "Incompleted"}</TableCell>
            <TableCell className="flex items-center justify-end space-x-2">
              <Button size={"icon"} variant={"secondary"}>
                <Pen />
              </Button>
              <Button size={"icon"} variant={"destructive"}>
                <Trash />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TodosTable;
