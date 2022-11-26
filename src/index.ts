require("dotenv").config();
import { Telegraf } from "telegraf";
import options from "./options";

const {
  levelOptions,
  courseOptionsL100,
  courseOptionsL200PhysicalSci,
  programOption,
} = options;

const bot = new Telegraf(process.env.BOT_TOKEN || "");

const usersOptions: (string | undefined)[] = [];

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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

bot.hears("Start Over", (ctx) => {
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

// Level 100
bot.hears(levelOptions.firstYear, (ctx) => {
  bot.telegram.sendMessage(ctx.chat?.id || "", "Please select your course", {
    reply_markup: {
      keyboard: [
        [
          {
            text: courseOptionsL100.physicalScience,
          },
          {
            text: courseOptionsL100.mathematicalScience,
          },
        ],
        [
          {
            text: courseOptionsL100.earthScience,
          },
          {
            text: courseOptionsL100.informationTechnology,
          },
        ],
      ],
    },
  });
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

//Level 100 Physical Science program option
bot.hears(courseOptionsL100.physicalScience, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please select your program option",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: programOption.option1,
            },
            {
              text: programOption.option2,
            },
          ],
          [
            {
              text: programOption.option3,
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

//Level 100 Physical Science Single Major
bot.hears(programOption.option1, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please select what you want in Level 200",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: courseOptionsL200PhysicalSci.singleMajor.option1,
            },
            {
              text: courseOptionsL200PhysicalSci.singleMajor.option2,
            },
          ],
          [
            {
              text: courseOptionsL200PhysicalSci.singleMajor.option3,
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

bot.hears(courseOptionsL200PhysicalSci.singleMajor.option1, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Which semester do you want to register for?",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "First Semester",
            },
            {
              text: "Second Semester",
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

bot.hears(courseOptionsL200PhysicalSci.singleMajor.option2, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Which semester do you want to register for?",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "First Semester",
            },
            {
              text: "Second Semester",
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

bot.hears(courseOptionsL200PhysicalSci.singleMajor.option3, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Which semester do you want to register for?",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "First Semester",
            },
            {
              text: "Second Semester",
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

//Level 100 Physical Science Combined Major
bot.hears(programOption.option2, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please select what you want in Level 200",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: courseOptionsL200PhysicalSci.combinedMajor.option1,
            },
            {
              text: courseOptionsL200PhysicalSci.combinedMajor.option2,
            },
          ],
          [
            {
              text: courseOptionsL200PhysicalSci.combinedMajor.option2,
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

bot.hears(courseOptionsL200PhysicalSci.combinedMajor.option1, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Which semester do you want to register for?",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "First Semester",
            },
            {
              text: "Second Semester",
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

bot.hears(courseOptionsL200PhysicalSci.combinedMajor.option2, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Which semester do you want to register for?",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "First Semester",
            },
            {
              text: "Second Semester",
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

//Level 100 Physical Science Major-Minor
bot.hears(programOption.option3, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please select what you want in Level 200",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: courseOptionsL200PhysicalSci.majorMinor.option1,
            },
            {
              text: courseOptionsL200PhysicalSci.majorMinor.option2,
            },
          ],
          [
            {
              text: courseOptionsL200PhysicalSci.majorMinor.option3,
            },
            {
              text: courseOptionsL200PhysicalSci.majorMinor.option4,
            },
          ],
          [
            {
              text: courseOptionsL200PhysicalSci.majorMinor.option5,
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

bot.hears(courseOptionsL200PhysicalSci.majorMinor.option1, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Which semester do you want to register for?",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "First Semester",
            },
            {
              text: "Second Semester",
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

bot.hears(courseOptionsL200PhysicalSci.majorMinor.option2, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Which semester do you want to register for?",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "First Semester",
            },
            {
              text: "Second Semester",
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

bot.hears(courseOptionsL200PhysicalSci.majorMinor.option3, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Which semester do you want to register for?",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "First Semester",
            },
            {
              text: "Second Semester",
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

bot.hears(courseOptionsL200PhysicalSci.majorMinor.option4, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Which semester do you want to register for?",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "First Semester",
            },
            {
              text: "Second Semester",
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

bot.hears(courseOptionsL200PhysicalSci.majorMinor.option5, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Which semester do you want to register for?",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "First Semester",
            },
            {
              text: "Second Semester",
            },
          ],
        ],
      },
    }
  );
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

// L100 Mathematical Science

// //check for Semester and Render the courses
// bot.hears("First Semester", (ctx) => {
//   if (usersOptions[4] === courseOptionsL200PhysicalSci.singleMajor.option1) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "You courses for the first semester are: \n\n 1. PHY 201 \n 2. PHY 202 \n 3. PHY 203 \n 4. PHY 204 \n 5. PHY 205 \n 6. PHY 206 \n 7. PHY 207 ",
//       {
//         reply_markup: {
//           keyboard: [
//             [
//               {
//                 text: "Start Over",
//               },
//             ],
//           ],
//         },
//       }
//     );
//   }
// });

// bot.hears("Second Semester", (ctx) => {
//   if (usersOptions[4] === courseOptionsL200PhysicalSci.singleMajor.option1) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "You courses for the second semester are: \n\n 1. PHY 208 \n 2. PHY 209 \n 3. PHY 210 \n 4. PHY 211 \n 5. PHY 212 \n 6. PHY 213 \n 7. PHY 214 ",
//       {
//         reply_markup: {
//           keyboard: [
//             [
//               {
//                 text: "Start Over",
//               },
//             ],
//           ],
//         },
//       }
//     );
//   } else if (
//     usersOptions[4] === courseOptionsL200PhysicalSci.singleMajor.option2
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "You courses for the second semester are: \n\n 1. CHEM 208 \n 2. CHEM 209 \n 3. CHEM 210 \n 4. CHEM 211 \n 5. CHEM 212 \n 6. CHEM 213 \n 7. CHEM 214 ",
//       {
//         reply_markup: {
//           keyboard: [
//             [
//               {
//                 text: "Start Over",
//               },
//             ],
//           ],
//         },
//       }
//     );
//   }
// });

bot.launch();
