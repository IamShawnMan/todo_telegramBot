import { Markup } from "telegraf";
import { User } from "../models/index.js";

export const userController = {
  create: async (ctx) => {
    const contact = ctx.message.contact;
    const { phone_number, first_name, user_id } = contact;
    const user = await User.findOne(
      {
        phoneNumber: phone_number,
      },
      "phoneNumber _id"
    ).exec();
    if (!user) {
      const newUser = new User({
        name: first_name,
        phoneNumber: phone_number,
        userId: user_id,
      });

      await newUser.save();

      await ctx.reply(
        `${first_name}, welcome to ToDo application`,
        Markup.removeKeyboard()
      );
      return ctx.reply(
        "Lets create ToDo",
        Markup.keyboard([
          [Markup.button.text("Create"), Markup.button.text("Find all")],
        ])
          .resize()
          .oneTime()
      );
    }
    await ctx.reply(
      `${first_name}, welcome to ToDo application`,
      Markup.removeKeyboard()
    );
    return ctx.reply(
      "Lets create ToDo",
      Markup.keyboard([
        [Markup.button.text("Create"), Markup.button.text("Find all")],
      ])
        .resize()
        .oneTime()
    );
  },
};
