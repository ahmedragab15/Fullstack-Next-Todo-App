"use client";
import React, { useState } from "react";
import { deleteTodoAction } from "@/actions/todoActions";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import Spinner from "../Spinner";
import EditTodoForm from "./EditTodoForm";

const TodosTableActions = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id: todo.id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash />}
      </Button>
    </>
  );
};

export default TodosTableActions;
