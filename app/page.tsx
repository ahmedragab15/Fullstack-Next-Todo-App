import AddTodoForm from "@/components/AddTodoForm";
import TodosList from "@/components/TodosList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddTodoForm />
      <div>
        <TodosList />
      </div>
    </main>
  );
}
