import { Markup } from "telegraf";
import { askTodo } from "../commands/userCommands.js";

export const todoController = {
  create: async (ctx) => {
    askTodo(ctx);
  },
};
