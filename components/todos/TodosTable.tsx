import React from "react";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "../ui/badge";
import TodosTableActions from "./TodosTableActions";

const TodosTable = ({ todos }: { todos: ITodo[] }) => {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos?.length > 0 ? (
          todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.body || ""}</TableCell>
              <TableCell>{todo.completed ? <Badge>Completed</Badge> : <Badge variant="secondary">Incomplete</Badge>}</TableCell>
              <TableCell>{todo.createdAt?.toLocaleString()}</TableCell>
              <TableCell className="flex items-center justify-end space-x-2">
                <TodosTableActions todo={todo} />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              No Todos Yet.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">{todos.length || 0}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TodosTable;
