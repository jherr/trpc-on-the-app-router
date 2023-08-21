import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
  id: integer("id").primaryKey(),
  content: text("content"),
  done: integer("done"),
});
