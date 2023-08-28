import { serverClient } from "./_trpc/serverClient";

import TodoList from "./_components/TodoList";

export const dynamic = "force-dynamic";

export default async function Home() {
  const todos = await serverClient.getTodos();
  return (
    <main className="max-w-3xl mx-auto mt-5">
      <TodoList initialTodos={todos} />
    </main>
  );
}
