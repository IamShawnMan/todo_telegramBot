import { Telegraf } from "telegraf";
import dotnev from "dotenv";
import { askContact } from "./commands/userCommands.js";
import { userController } from "./controllers/userController.js";

dotnev.config();
const token = process.env.BOT_TOKEN;

const bot = new Telegraf(token);

bot.start((ctx) => {
  askContact(ctx);
});

bot.on("contact", userController.create);

export default bot;
