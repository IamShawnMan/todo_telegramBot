import { Markup } from "telegraf";

export const askContact = (ctx) => {
  return ctx.reply(
    "Please share your contact",
    Markup.keyboard([Markup.button.contactRequest("Share contact")])
      .oneTime()
      .resize()
  );
};
