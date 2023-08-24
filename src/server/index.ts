import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { db } from "../db/database";
import { NewTodo, Todo, TodoUpdate } from "../db/schema";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    const todos = await db.selectFrom('todo').selectAll().execute();
    return todos
  }),
  addTodo: publicProcedure.input(z.custom<NewTodo>()).mutation(async (opts) => {
    await db.insertInto("todo").values(opts.input).executeTakeFirstOrThrow();
    return true;
  }),
  setDone: publicProcedure
    .input(z.custom<TodoUpdate>())
    .mutation(async (opts) => {
      if(opts.input.id)
      await db.updateTable("todo").where("todo.id",'=',opts.input.id).set(opts.input).execute()
      return true;
    }),
});

export type AppRouter = typeof appRouter;
