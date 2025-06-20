import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodosTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between p-24">
      <AddTodoForm />
      <div>
        <TodosTable />
      </div>
    </main>
  );
}
