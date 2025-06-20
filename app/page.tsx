import { getTodoListAction } from "@/actions/todoActions";
import AddTodoForm from "@/components/todos/AddTodoForm";
import TodosTable from "@/components/todos/TodosTable";

export default async function Home() {
  const todos = await getTodoListAction();

  return (
    <main className="flex min-h-screen flex-col  justify-between p-24">
      <AddTodoForm />
      <div>
        <TodosTable todos={todos} />
      </div>
    </main>
  );
}
