require("dotenv").config();
import { Telegraf } from "telegraf";
import options from "./options";

const {
  levelOptions,
  courseOptionsL100,
  programOption,
  continuingStudentsSingleMajorOptions,
  continuingStudentsCombinedMajorOptions,
  continuingStudentsMajorMinorOptions,
  semesterOptions,
} = options;

const bot = new Telegraf(process.env.BOT_TOKEN || "");

let usersOptions: (string | undefined)[] = [];

/****************************************************************************************************************************/
/******************start command with ReplyKeyboardMarkup telegram send message**********************************************/
/****************************************************************************************************************************/
bot.start((ctx) => {
  usersOptions = [];
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
  usersOptions = [];
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  if (usersOptions.includes(courseOptionsL100.physicalScience)) {
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
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(courseOptionsL100.mathematicalScience)) {
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
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(courseOptionsL100.earthScience)) {
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
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(levelOptions.secondYear)) {
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
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(levelOptions.thirdYear)) {
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
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(levelOptions.fourthYear)) {
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
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  }
});

/****************************************************************************************************************************/
/************************************************** Combined Major **********************************************************/
/****************************************************************************************************************************/

bot.hears(programOption.option2, (ctx) => {
  /****************************************************************************************************************************/
  /**************************************** check if user options includes physical science ***********************************/
  /****************************************************************************************************************************/

  if (usersOptions.includes(courseOptionsL100.physicalScience)) {
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
                text: continuingStudentsCombinedMajorOptions.option6,
              },
              {
                text: continuingStudentsCombinedMajorOptions.option8,
              },
            ],
          ],
        },
      }
    );
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(courseOptionsL100.mathematicalScience)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "Please select what you want in Level 200",
      {
        reply_markup: {
          keyboard: [
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
                text: continuingStudentsSingleMajorOptions.option7,
              },
            ],
          ],
        },
      }
    );
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(courseOptionsL100.earthScience)) {
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
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(levelOptions.secondYear)) {
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
          ],
        },
      }
    );
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(levelOptions.thirdYear)) {
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
          ],
        },
      }
    );
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(levelOptions.fourthYear)) {
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
          ],
        },
      }
    );
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  }
});

/****************************************************************************************************************************/
/************************************************** Major Minor *************************************************************/
/****************************************************************************************************************************/
bot.hears(programOption.option3, (ctx) => {
  /****************************************************************************************************************************/
  /**************************************** check if user options includes physical science ***********************************/
  /****************************************************************************************************************************/
  if (usersOptions.includes(courseOptionsL100.physicalScience)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "Please select what you want in Level 200",
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: continuingStudentsMajorMinorOptions.option10,
              },
              {
                text: continuingStudentsMajorMinorOptions.option12,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option15,
              },
            ],
          ],
        },
      }
    );
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(courseOptionsL100.mathematicalScience)) {
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
              {
                text: continuingStudentsMajorMinorOptions.option4,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option5,
              },
            ],
          ],
        },
      }
    );
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(courseOptionsL100.earthScience)) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "Please select what you want in Level 200",
      {
        reply_markup: {
          keyboard: [
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
                text: continuingStudentsMajorMinorOptions.option8,
              },
            ],
          ],
        },
      }
    );
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(levelOptions.secondYear)) {
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
              {
                text: continuingStudentsMajorMinorOptions.option14,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option15,
              },
            ],
          ],
        },
      }
    );
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(levelOptions.thirdYear)) {
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
              {
                text: continuingStudentsMajorMinorOptions.option14,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option15,
              },
            ],
          ],
        },
      }
    );
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
  } else if (usersOptions.includes(levelOptions.fourthYear)) {
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
              {
                text: continuingStudentsMajorMinorOptions.option14,
              },
            ],
            [
              {
                text: continuingStudentsMajorMinorOptions.option15,
              },
            ],
          ],
        },
      }
    );
    usersOptions.push(ctx.message?.text);
    console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option14, (ctx) => {
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

bot.hears(continuingStudentsMajorMinorOptions.option15, (ctx) => {
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
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
  usersOptions.push(ctx.message?.text);
  console.log(usersOptions);
});

/****************************************************************************************************************************/
/************************************* Rendering subjects for semester based on user options ********************************/
/****************************************************************************************************************************/

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
