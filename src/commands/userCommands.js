import { Markup } from "telegraf";
const userSteps = new Map();

export const askContact = (ctx) => {
  return ctx.reply(
    "Please share your contact",
    Markup.keyboard([Markup.button.contactRequest("Share contact")])
      .oneTime()
      .resize()
  );
};

export const askTodo = async (ctx) => {
  await ctx.reply("Input title for ToDo");
  userSteps.set(ctx.from.id, "awaiting_todo_title");
  return ctx.reply(`You said ${input}`);
};
