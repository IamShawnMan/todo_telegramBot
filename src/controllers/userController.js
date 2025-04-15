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

      ctx.reply(`Your name is ${first_name}, 
        Your contact is ${phone_number}, 
        Your userId is ${user_id}`);
      return;
    }
    ctx.reply("You have already used this bot");
    return;
  },
};
