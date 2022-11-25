require("dotenv").config();
import { Telegraf } from "telegraf";
import options from "./options";

const { levelOptions, courseOptionsL100, programOption } = options;

const bot = new Telegraf(process.env.BOT_TOKEN || "");

// start command with ReplyKeyboardMarkup telegram send message
bot.start((ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Welcome to the SPMS Bot course Registration Guide , Please select your Level",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: levelOptions.firstYear,
            },
            {
              text: levelOptions.secondYear,
            },
          ],
          [
            {
              text: levelOptions.thirdYear,
            },
            {
              text: levelOptions.fourthYear,
            },
          ],
        ],
      },
    }
  );
});

bot.launch();
