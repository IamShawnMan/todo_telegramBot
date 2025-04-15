import bot from "./app.js";
import { connectionDB } from "./utils/db.js";

const start = () => {
  try {
    connectionDB();
    console.log("Bot is running...");
    bot.launch();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
