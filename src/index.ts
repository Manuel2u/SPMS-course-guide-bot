require("dotenv").config();
import { Context, Telegraf, session } from "telegraf";
import options from "./options";

const {
  levelOptions,
  courseOptionsL100,
  programOption,
  continuingStudentsSingleMajorOptions,
  continuingStudentsCombinedMajorOptions,
  continuingStudentsMajorMinorOptions,
  semesterOptions,
  physicalScienceForPhysicsAndCompSciFirstSemester,
  physicalScienceForPhysicsAndCompSciSecondSemester,
  physicalScienceforChemsitryAndBioScienceFirstSemester,
  physicalScienceforChemsitryAndBioScienceSecondSemester,
  physicalScienceforGeophysicsFirstSem,
  physicalScienceforGeophysicsSecondSem,
  physicalScienceforMathsAndPhysicsFirstSemester,
  physicalScienceforMathsAndPhysicsSecondSemester,
  physicalScienceforPhysicsAndStatisticsFirstSemester,
  physicalScienceforPhysicsAndStatisticsSecondSemester,
  mathematicalScienceforActurialScienceFirstSem,
  mathematicalScienceforActurialScienceSecondSem,
  mathematicalScienceforBioMathFirstSem,
  mathematicalScienceforBioMathSecondSem,
  mathematicalScienceforComputerScienceFirstSem,
  mathematicalScienceforComputerScienceSecondSem,
} = options;

interface SessionData {
  userOptions: string[];
}

interface BotContext extends Context {
  session: SessionData;
  userOptions?: any;
}

const bot = new Telegraf<BotContext>(process.env.BOT_TOKEN as string);

bot.use(session());

//add session for each user using userOptions array
bot.use((ctx, next) => {
  const userOptions = ctx.session?.userOptions || [];
  ctx.session.userOptions = userOptions;
  return next();
});

/****************************************************************************************************************************/
/******************start command with ReplyKeyboardMarkup telegram send message**********************************************/
/****************************************************************************************************************************/
bot.start((ctx) => {
  ctx.session.userOptions = [];
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Hello my name is Manuel Jnr,\n I am here to guide you select the right subjects\n for your course provided you belong to the \n School of Physical and Mathematical Sciences\n I may not have all the question to your answers,\n but you can contact my author @manuel_dev_1 for more enquiries\n to continue please select your level",
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
  ctx.session.userOptions.push(ctx.message?.text as string as string);
  console.log(ctx.session.userOptions);
});

bot.hears("Start Over", (ctx) => {
  ctx.session.userOptions = [];
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
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

/****************************************************************************************************************************/
/***************************************************** Level 100 admitted course ************************************************************/
/****************************************************************************************************************************/
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
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

/****************************************************************************************************************************/
/************************************ Level 100 Physical Science program option *********************************************/
/****************************************************************************************************************************/

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
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

/****************************************************************************************************************************/
/************************************ L100 Mathematical Science program option **********************************************/
/****************************************************************************************************************************/

bot.hears(courseOptionsL100.mathematicalScience, (ctx) => {
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
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

/****************************************************************************************************************************/
/******************************************* L100 Earth Science program option **********************************************/
/****************************************************************************************************************************/

bot.hears(courseOptionsL100.earthScience, (ctx) => {
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
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

/****************************************************************************************************************************/
/*********************************** Rendering different Courses for L100 program option ************************************/
/****************************************************************************************************************************/

/****************************************************************************************************************************/
/************************************************** Single Major ************************************************************/
/****************************************************************************************************************************/

bot.hears(programOption.option1, (ctx) => {
  /****************************************************************************************************************************/
  /******************************** check if user options includes physical science *******************************************/
  /****************************************************************************************************************************/
  if (ctx.session.userOptions.includes(courseOptionsL100.physicalScience)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "Please select what you want in Level 200",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsSingleMajorOptions.option5,
              },
              {
                text: continuingStudentsSingleMajorOptions.option6,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option8,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience)
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "Please select what you want in Level 200",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsSingleMajorOptions.option1,
              },
              {
                text: continuingStudentsSingleMajorOptions.option2,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option3,
              },
              {
                text: continuingStudentsSingleMajorOptions.option4,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option10,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (ctx.session.userOptions.includes(courseOptionsL100.earthScience)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "Please select what you want in Level 200",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsSingleMajorOptions.option7,
              },
              {
                text: continuingStudentsSingleMajorOptions.option9,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option12,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (ctx.session.userOptions.includes(levelOptions.secondYear)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "which course are you offering",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsSingleMajorOptions.option1,
              },
              {
                text: continuingStudentsSingleMajorOptions.option2,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option3,
              },
              {
                text: continuingStudentsSingleMajorOptions.option4,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option5,
              },
              {
                text: continuingStudentsSingleMajorOptions.option6,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option7,
              },
              {
                text: continuingStudentsSingleMajorOptions.option8,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option9,
              },
              {
                text: continuingStudentsSingleMajorOptions.option10,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option11,
              },
              {
                text: continuingStudentsSingleMajorOptions.option12,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (ctx.session.userOptions.includes(levelOptions.thirdYear)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "which course are you offering",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsSingleMajorOptions.option1,
              },
              {
                text: continuingStudentsSingleMajorOptions.option2,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option3,
              },
              {
                text: continuingStudentsSingleMajorOptions.option4,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option5,
              },
              {
                text: continuingStudentsSingleMajorOptions.option6,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option7,
              },
              {
                text: continuingStudentsSingleMajorOptions.option8,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option9,
              },
              {
                text: continuingStudentsSingleMajorOptions.option10,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option11,
              },
              {
                text: continuingStudentsSingleMajorOptions.option12,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (ctx.session.userOptions.includes(levelOptions.fourthYear)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "which course are you offering",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsSingleMajorOptions.option1,
              },
              {
                text: continuingStudentsSingleMajorOptions.option2,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option3,
              },
              {
                text: continuingStudentsSingleMajorOptions.option4,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option5,
              },
              {
                text: continuingStudentsSingleMajorOptions.option6,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option7,
              },
              {
                text: continuingStudentsSingleMajorOptions.option8,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option9,
              },
              {
                text: continuingStudentsSingleMajorOptions.option10,
              },
            ],
            [
              {
                text: continuingStudentsSingleMajorOptions.option11,
              },
              {
                text: continuingStudentsSingleMajorOptions.option12,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  }
});

/****************************************************************************************************************************/
/************************************************** Combined Major **********************************************************/
/****************************************************************************************************************************/

bot.hears(programOption.option2, (ctx) => {
  /****************************************************************************************************************************/
  /**************************************** check if user options includes physical science ***********************************/
  /****************************************************************************************************************************/

  if (ctx.session.userOptions.includes(courseOptionsL100.physicalScience)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "Please select what you want in Level 200",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsCombinedMajorOptions.option1,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option2,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option8,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option9,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience)
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "Please select what you want in Level 200",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsCombinedMajorOptions.option3,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option4,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option5,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option7,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (ctx.session.userOptions.includes(courseOptionsL100.earthScience)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "Please select what you want in Level 200",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "No combined major option available for Earth Science",
              },
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (ctx.session.userOptions.includes(levelOptions.secondYear)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "which course are you offering",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsCombinedMajorOptions.option1,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option2,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option3,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option4,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option5,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option6,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option7,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option8,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option9,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (ctx.session.userOptions.includes(levelOptions.thirdYear)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "which course are you offering",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsCombinedMajorOptions.option1,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option2,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option3,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option4,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option5,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option6,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option7,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option8,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option9,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (ctx.session.userOptions.includes(levelOptions.fourthYear)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "which course are you offering",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsCombinedMajorOptions.option1,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option2,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option3,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option4,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option5,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option6,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option7,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option8,
              },
            ],
            [
              {
                text: continuingStudentsCombinedMajorOptions.option9,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  }
});

/****************************************************************************************************************************/
/************************************************** Major Minor *************************************************************/
/****************************************************************************************************************************/
bot.hears(programOption.option3, (ctx) => {
  /****************************************************************************************************************************/
  /**************************************** check if user options includes physical science ***********************************/
  /****************************************************************************************************************************/
  if (ctx.session.userOptions.includes(courseOptionsL100.physicalScience)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "Please select what you want in Level 200",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsMajorMinorOptions.option8,
              },
              {
                text: continuingStudentsMajorMinorOptions.option9,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option13,
              },
              {
                text: continuingStudentsMajorMinorOptions.option10,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience)
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "Please select what you want in Level 200",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsMajorMinorOptions.option4,
              },
              {
                text: continuingStudentsMajorMinorOptions.option5,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option6,
              },
              {
                text: continuingStudentsMajorMinorOptions.option7,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option11,
              },
              {
                text: continuingStudentsMajorMinorOptions.option12,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (ctx.session.userOptions.includes(courseOptionsL100.earthScience)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "Please select what you want in Level 200",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsMajorMinorOptions.option1,
              },
              {
                text: continuingStudentsMajorMinorOptions.option2,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option3,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (ctx.session.userOptions.includes(levelOptions.secondYear)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "which course are you offering",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsMajorMinorOptions.option1,
              },
              {
                text: continuingStudentsMajorMinorOptions.option2,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option3,
              },
              {
                text: continuingStudentsMajorMinorOptions.option4,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option5,
              },
              {
                text: continuingStudentsMajorMinorOptions.option6,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option7,
              },
              {
                text: continuingStudentsMajorMinorOptions.option8,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option9,
              },
              {
                text: continuingStudentsMajorMinorOptions.option10,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option11,
              },
              {
                text: continuingStudentsMajorMinorOptions.option12,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option13,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (ctx.session.userOptions.includes(levelOptions.thirdYear)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "which course are you offering",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsMajorMinorOptions.option1,
              },
              {
                text: continuingStudentsMajorMinorOptions.option2,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option3,
              },
              {
                text: continuingStudentsMajorMinorOptions.option4,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option5,
              },
              {
                text: continuingStudentsMajorMinorOptions.option6,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option7,
              },
              {
                text: continuingStudentsMajorMinorOptions.option8,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option9,
              },
              {
                text: continuingStudentsMajorMinorOptions.option10,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option11,
              },
              {
                text: continuingStudentsMajorMinorOptions.option12,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option13,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (ctx.session.userOptions.includes(levelOptions.fourthYear)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "which course are you offering",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsMajorMinorOptions.option1,
              },
              {
                text: continuingStudentsMajorMinorOptions.option2,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option3,
              },
              {
                text: continuingStudentsMajorMinorOptions.option4,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option5,
              },
              {
                text: continuingStudentsMajorMinorOptions.option6,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option7,
              },
              {
                text: continuingStudentsMajorMinorOptions.option8,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option9,
              },
              {
                text: continuingStudentsMajorMinorOptions.option10,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option11,
              },
              {
                text: continuingStudentsMajorMinorOptions.option12,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option13,
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  }
});

/****************************************************************************************************************************/
/**************************************** showing semesters if course is chosen *********************************************/
/****************************************************************************************************************************/

bot.hears(continuingStudentsSingleMajorOptions.option1, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsSingleMajorOptions.option2, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsSingleMajorOptions.option3, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsSingleMajorOptions.option4, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsSingleMajorOptions.option5, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsSingleMajorOptions.option6, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsSingleMajorOptions.option7, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsSingleMajorOptions.option8, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsSingleMajorOptions.option9, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsSingleMajorOptions.option10, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsSingleMajorOptions.option11, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsSingleMajorOptions.option12, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsCombinedMajorOptions.option1, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsCombinedMajorOptions.option2, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsCombinedMajorOptions.option3, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsCombinedMajorOptions.option4, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsCombinedMajorOptions.option5, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsCombinedMajorOptions.option6, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsCombinedMajorOptions.option7, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsCombinedMajorOptions.option8, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsCombinedMajorOptions.option9, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option1, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option2, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option3, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option4, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option5, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option6, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option7, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option8, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option9, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option10, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option11, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option12, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option13, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Please Select the semester you want to register for",
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: semesterOptions.firstSemester,
            },
            {
              text: semesterOptions.secondSemester,
            },
          ],
        ],
      },
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(levelOptions.secondYear, (ctx) => {
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
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(levelOptions.thirdYear, (ctx) => {
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
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(levelOptions.fourthYear, (ctx) => {
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
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

/****************************************************************************************************************************/
/************************************* Rendering subjects for semester based on user options ********************************/
/****************************************************************************************************************************/

bot.hears("First Semester", (ctx) => {
  if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject1 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject2 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject3 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject4 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject5 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject6 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject1 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject2 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject3 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject4 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject5 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject6 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option3 &&
        continuingStudentsCombinedMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option13
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option1 &&
        continuingStudentsMajorMinorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.earthScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.earthScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.earthScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.earthScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.earthScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.earthScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option13
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  }
  //L300
  else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option13
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  }
  //L400
  else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option13
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  }
});

bot.hears("Second Semester", (ctx) => {
  if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject1 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject2 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject3 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject4 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject5 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject6 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject1 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject2 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject3 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject4 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject5 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject6 +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option3 &&
        continuingStudentsCombinedMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.physicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option13
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option1 &&
        continuingStudentsMajorMinorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.mathematicalScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.earthScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.earthScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.earthScience &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.earthScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.earthScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      courseOptionsL100.earthScience &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.secondYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option13
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  }
  //L300
  else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.thirdYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option13
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  }
  //L400
  else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option1 &&
        continuingStudentsSingleMajorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option2 &&
        continuingStudentsCombinedMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(
      levelOptions.fourthYear &&
        programOption.option3 &&
        continuingStudentsMajorMinorOptions.option13
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  }
});

bot.launch();
