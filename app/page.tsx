import { getUserTodoListAction } from "@/actions/todoActions";
import AddTodoForm from "@/components/todos/AddTodoForm";
import TodosTable from "@/components/todos/TodosTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const todos = await getUserTodoListAction({ userId });
  console.log(userId);

  return (
    <main className="flex min-h-screen flex-col gap-2 p-24">
      <div className="self-end">
        <AddTodoForm userId={userId} />
      </div>
        <TodosTable todos={todos} />
    </main>
  );
}
