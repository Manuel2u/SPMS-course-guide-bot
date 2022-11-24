require("dotenv").config();
import { Telegraf } from "telegraf";

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
              text: "Level 100",
            },
            {
              text: "Level 200",
            },
          ],
          [
            {
              text: "Level 300",
            },
            {
              text: "Level 400",
            },
          ],
        ],
      },
    }
  );
});

bot.launch();
