import { Telegraf } from "telegraf";
import dotnev from "dotenv";
import { askContact, askTodo } from "./commands/userCommands.js";
import { userController } from "./controllers/userController.js";
import { todoController } from "./controllers/todoController.js";

dotnev.config();
const token = process.env.BOT_TOKEN;

const bot = new Telegraf(token);

bot.start((ctx) => {
  askContact(ctx);
});

bot.on("contact", userController.create);
bot.hears("Create", (ctx) => {
  askTodo(ctx);
});

export default bot;
