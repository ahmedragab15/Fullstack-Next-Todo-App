import { getTodoListAction } from "@/actions/todoActions";
import React from "react";

const TodosList = async () => {
  const todos = await getTodoListAction();
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <p>{todo.body}</p>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
