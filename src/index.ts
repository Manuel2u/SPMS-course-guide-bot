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
  l200ActurialSciFirstSem,
  informationTechnologyFirstSem,
  informationTechnologySecondSem,
} = options;

interface SessionData {
  userOptions: string[];
}

interface BotContext extends Context {
  session: SessionData;
  userOptions?: Set<string>;
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
    "Hello my name is Manuel Jnr,\n I am here to guide you select the right subjects\n for your course provided you belong to the \n School of Physical and Mathematical Sciences\n I may not have all the answers to your questions,\n but you can contact my author @manuel_dev_1 for more enquiries,\n to continue please select your level.\n UNFORTUNATELY LEVEL 200 ,300 and 400 IS STILL UNDER DEVELOPMENT.\n IF YOU ARE A DEVELOPER AND YOU WISH TO CONTRIBUTE YOU CAN CONTACT MY AUTHOR.\n THANK YOU\n For Course Resources, use the /resources command",
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
    "Hello my name is Manuel Jnr,\n I am here to guide you select the right subjects\n for your course provided you belong to the \n School of Physical and Mathematical Sciences\n I may not have all the answers to your questions,\n but you can contact my author @manuel_dev_1 for more enquiries,\n to continue please select your level.\n UNFORTUNATELY LEVEL 200 ,300 and 400 IS STILL UNDER DEVELOPMENT.\n IF YOU ARE A DEVELOPER AND YOU WISH TO CONTRIBUTE YOU CAN CONTACT MY AUTHOR.\n THANK YOU For Course Resources, use the /resources command",
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

bot.command("resources", (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "https://drive.google.com/drive/folders/1_dsIgS21j5Tb8qFZ_qoFneQNDFwfP-6d?usp=sharing"
  );
});

/****************************************************************************************************************************/
/***************************************************** Level 100 admitted course ************************************************************/
/****************************************************************************************************************************/
bot.hears(levelOptions.firstYear, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "The School of Physical and Mathematical sciences\nconsists of the following courses :\ni) Physical Science\nii) Mathematical Science\niii) Earth Science\niv) Information Technology.\nPlease select the course you were admitted into.",
    {
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
    }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

/****************************************************************************************************************************/
/************************************ Level 100 Physical Science program option *********************************************/
/****************************************************************************************************************************/

bot.hears(courseOptionsL100.physicalScience, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "As you were told on your admission letter, In Level 200 you will be able\nto select one of the three courses :\ni) Physics\nii) Chemistry\niii) Geophysics.\nAll these are single Major courses, however\nyou can combine courses in 2 ways, either\nby Combined Major or Major-Minor.\nPlease select what you would like to do in L200.",
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
    "As you were told on your admission letter, In Level 200 you will be able\nto select one of the three courses :\ni) Mathematics\nii) Computer Science\niii) Statistics\niv) Biomathematics\nv) Acturial Science.\nAll these are single Major courses, however\nyou can combine courses in 2 ways, either\nby Combined Major or Major-Minor.\nPlease select what you would like to do in L200.",
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
    "As you were told on your admission letter, In Level 200 you will be able\nto select one of the three courses :\ni) Geology\nii) Applied Geology\niii) Applied Geophysics.\nAll these are single Major courses, however\nyou can combine courses in 2 ways, either\nby Combined Major or Major-Minor.\nPlease select what you would like to do in L200.",
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
/******************************************* L100 Info Tech program option **********************************************/
/****************************************************************************************************************************/

bot.hears(courseOptionsL100.informationTechnology, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "Information Technology Students don't have the option of combining courses.\nPlease select which semester you want to register for.",
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
      "Please select the course you want in Level 200",
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
      "Please select the course you want in Level 200",
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
      "Please select the course you want in Level 200",
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
    // } else if (ctx.session.userOptions.includes(levelOptions.secondYear)) {
    //   bot.telegram.sendMessage(
    //     ctx.chat?.id || "",
    //     "which course are you offering",
    //     {
    //       reply_markup: {
    //         keyboard: [
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option1,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option2,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option3,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option4,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option5,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option6,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option7,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option8,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option9,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option10,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option11,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option12,
    //             },
    //           ],
    //         ],
    //       },
    //     }
    //   );
    //   ctx.session.userOptions.push(ctx.message?.text as string);
    //   console.log(ctx.session.userOptions);
    // } else if (ctx.session.userOptions.includes(levelOptions.thirdYear)) {
    //   bot.telegram.sendMessage(
    //     ctx.chat?.id || "",
    //     "which course are you offering",
    //     {
    //       reply_markup: {
    //         keyboard: [
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option1,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option2,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option3,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option4,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option5,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option6,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option7,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option8,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option9,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option10,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option11,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option12,
    //             },
    //           ],
    //         ],
    //       },
    //     }
    //   );
    //   ctx.session.userOptions.push(ctx.message?.text as string);
    //   console.log(ctx.session.userOptions);
    // } else if (ctx.session.userOptions.includes(levelOptions.fourthYear)) {
    //   bot.telegram.sendMessage(
    //     ctx.chat?.id || "",
    //     "which course are you offering",
    //     {
    //       reply_markup: {
    //         keyboard: [
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option1,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option2,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option3,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option4,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option5,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option6,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option7,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option8,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option9,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option10,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsSingleMajorOptions.option11,
    //             },
    //             {
    //               text: continuingStudentsSingleMajorOptions.option12,
    //             },
    //           ],
    //         ],
    //       },
    //     }
    //   );
    //   ctx.session.userOptions.push(ctx.message?.text as string);
    //   console.log(ctx.session.userOptions);
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
    // } else if (ctx.session.userOptions.includes(levelOptions.secondYear)) {
    //   bot.telegram.sendMessage(
    //     ctx.chat?.id || "",
    //     "which course are you offering",
    //     {
    //       reply_markup: {
    //         keyboard: [
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option1,
    //             },
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option2,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option3,
    //             },
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option4,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option5,
    //             },
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option6,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option7,
    //             },
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option8,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option9,
    //             },
    //           ],
    //         ],
    //       },
    //     }
    //   );
    //   ctx.session.userOptions.push(ctx.message?.text as string);
    //   console.log(ctx.session.userOptions);
    // } else if (ctx.session.userOptions.includes(levelOptions.thirdYear)) {
    //   bot.telegram.sendMessage(
    //     ctx.chat?.id || "",
    //     "which course are you offering",
    //     {
    //       reply_markup: {
    //         keyboard: [
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option1,
    //             },
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option2,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option3,
    //             },
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option4,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option5,
    //             },
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option6,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option7,
    //             },
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option8,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option9,
    //             },
    //           ],
    //         ],
    //       },
    //     }
    //   );
    //   ctx.session.userOptions.push(ctx.message?.text as string);
    //   console.log(ctx.session.userOptions);
    // } else if (ctx.session.userOptions.includes(levelOptions.fourthYear)) {
    //   bot.telegram.sendMessage(
    //     ctx.chat?.id || "",
    //     "which course are you offering",
    //     {
    //       reply_markup: {
    //         keyboard: [
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option1,
    //             },
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option2,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option3,
    //             },
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option4,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option5,
    //             },
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option6,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option7,
    //             },
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option8,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsCombinedMajorOptions.option9,
    //             },
    //           ],
    //         ],
    //       },
    //     }
    //   );
    //   ctx.session.userOptions.push(ctx.message?.text as string);
    //   console.log(ctx.session.userOptions);
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
    // } else if (ctx.session.userOptions.includes(levelOptions.secondYear)) {
    //   bot.telegram.sendMessage(
    //     ctx.chat?.id || "",
    //     "which course are you offering",
    //     {
    //       reply_markup: {
    //         keyboard: [
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option1,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option2,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option3,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option4,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option5,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option6,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option7,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option8,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option9,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option10,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option11,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option12,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option13,
    //             },
    //           ],
    //         ],
    //       },
    //     }
    //   );
    //   ctx.session.userOptions.push(ctx.message?.text as string);
    //   console.log(ctx.session.userOptions);
    // } else if (ctx.session.userOptions.includes(levelOptions.thirdYear)) {
    //   bot.telegram.sendMessage(
    //     ctx.chat?.id || "",
    //     "which course are you offering",
    //     {
    //       reply_markup: {
    //         keyboard: [
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option1,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option2,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option3,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option4,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option5,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option6,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option7,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option8,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option9,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option10,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option11,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option12,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option13,
    //             },
    //           ],
    //         ],
    //       },
    //     }
    //   );
    //   ctx.session.userOptions.push(ctx.message?.text as string);
    //   console.log(ctx.session.userOptions);
    // } else if (ctx.session.userOptions.includes(levelOptions.fourthYear)) {
    //   bot.telegram.sendMessage(
    //     ctx.chat?.id || "",
    //     "which course are you offering",
    //     {
    //       reply_markup: {
    //         keyboard: [
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option1,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option2,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option3,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option4,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option5,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option6,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option7,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option8,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option9,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option10,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option11,
    //             },
    //             {
    //               text: continuingStudentsMajorMinorOptions.option12,
    //             },
    //           ],
    //           [
    //             {
    //               text: continuingStudentsMajorMinorOptions.option13,
    //             },
    //           ],
    //         ],
    //       },
    //     }
    //   );
    //   ctx.session.userOptions.push(ctx.message?.text as string);
    //   console.log(ctx.session.userOptions);
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
    "UNFORTUNATELY L200 IS NOT AVAILABLE AT THE MOMENT ITS STILL UNDER DEVELOPMENT"
    // {
    //   reply_markup: {
    //     keyboard: [
    //       [
    //         {
    //           text: programOption.option1,
    //         },
    //         {
    //           text: programOption.option2,
    //         },
    //       ],
    //       [
    //         {
    //           text: programOption.option3,
    //         },
    //       ],
    //     ],
    //   },
    // }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(levelOptions.thirdYear, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "UNFORTUNATELY L300 IS NOT AVAILABLE AT THE MOMENT ITS STILL UNDER DEVELOPMENT"
    // {
    //   reply_markup: {
    //     keyboard: [
    //       [
    //         {
    //           text: programOption.option1,
    //         },
    //         {
    //           text: programOption.option2,
    //         },
    //       ],
    //       [
    //         {
    //           text: programOption.option3,
    //         },
    //       ],
    //     ],
    //   },
    // }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

bot.hears(levelOptions.fourthYear, (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat?.id || "",
    "UNFORTUNATELY L400 IS NOT AVAILABLE AT THE MOMENT ITS STILL UNDER DEVELOPMENT",
    // {
    //   reply_markup: {
    //     keyboard: [
    //       [
    //         {
    //           text: programOption.option1,
    //         },
    //         {
    //           text: programOption.option2,
    //         },
    //       ],
    //       [
    //         {
    //           text: programOption.option3,
    //         },
    //       ],
    //     ],
    //   },
    // }
  );
  ctx.session.userOptions.push(ctx.message?.text as string);
  console.log(ctx.session.userOptions);
});

/****************************************************************************************************************************/
/************************************* Rendering subjects for semester based on user options ********************************/
/****************************************************************************************************************************/

bot.hears("First Semester", (ctx) => {
  if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject6 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject7 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceFirstSemester.subject1,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject6 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject7 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceFirstSemester.subject1,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceFirstSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceFirstSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceFirstSemester.subject3 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceFirstSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceFirstSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceFirstSemester.subject6 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceFirstSemester.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject6 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject7 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceFirstSemester.subject1,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject3 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject6 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject3 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject6 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject3 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject6 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject3 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject6 +
        "\n" +
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
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject3 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject6 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsFirstSemester.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option13
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject3 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject6 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsFirstSemester.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforActurialScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject2,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject2,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforBioMathFirstSem.subject1 +
        "\n" +
        mathematicalScienceforBioMathFirstSem.subject2 +
        "\n" +
        mathematicalScienceforBioMathFirstSem.subject3 +
        "\n" +
        mathematicalScienceforBioMathFirstSem.subject4 +
        "\n" +
        mathematicalScienceforBioMathFirstSem.subject5 +
        "\n" +
        mathematicalScienceforBioMathFirstSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject6 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject2,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject2,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject6 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject2,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        "The subjects for first semester are: \n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject2,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceFirstSem.subject2,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.earthScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
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
    ctx.session.userOptions.includes(courseOptionsL100.earthScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
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
    ctx.session.userOptions.includes(courseOptionsL100.earthScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
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
    ctx.session.userOptions.includes(courseOptionsL100.earthScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
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
    ctx.session.userOptions.includes(courseOptionsL100.earthScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
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
    ctx.session.userOptions.includes(courseOptionsL100.earthScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
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
    ctx.session.userOptions.includes(courseOptionsL100.informationTechnology)
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for first semester are: \n" +
        informationTechnologyFirstSem.subject1 +
        "\n" +
        "\n" +
        informationTechnologyFirstSem.subject2 +
        "\n" +
        "\n" +
        informationTechnologyFirstSem.subject3 +
        "\n" +
        "\n" +
        informationTechnologyFirstSem.subject6 +
        "\n" +
        "\n" +
        informationTechnologyFirstSem.subject8 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        informationTechnologyFirstSem.subject4 +
        "\n" +
        "\n" +
        informationTechnologyFirstSem.subject5 +
        "\n" +
        "\n" +
        informationTechnologyFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
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
//L200 L200 L200 L200 L200 L200
//   } else if (
//     ctx.session.userOptions.includes(levelOptions.secondYear) &&
//     ctx.session.userOptions.includes(programOption.option1) &&
//     ctx.session.userOptions.includes(
//       continuingStudentsSingleMajorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         l200ActurialSciFirstSem.subject1 +
//         "\n" +
//         "\n" +
//         l200ActurialSciFirstSem.subject2 +
//         "\n" +
//         "\n" +
//         l200ActurialSciFirstSem.subject3 +
//         "\n" +
//         "\n" +
//         l200ActurialSciFirstSem.subject4 +
//         "\n" +
//         "\n" +
//         l200ActurialSciFirstSem.subject5 +
//         "\n" +
//         "\n" +
//         l200ActurialSciFirstSem.subject6 +
//         "\n" +
//         "\n" +
//         l200ActurialSciFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option10
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option11
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option12
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option10
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option11
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option12
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option13
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   }
//   //L300
//   else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option10
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option11
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option12
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option10
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option11
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option12
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option13
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   }
//   //L400
//   else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option10
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option11
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option12
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option10
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option11
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option12
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option13
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   }
// });

bot.hears("Second Semester", (ctx) => {
  if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject6 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceSecondSemester.subject1,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject6 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceSecondSemester.subject1,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject1 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject2 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject5 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject6 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceSecondSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceSecondSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceSecondSemester.subject3 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceSecondSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceSecondSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceSecondSemester.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject6 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforChemsitryAndBioScienceFirstSemester.subject1,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsSecondSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsSecondSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsSecondSemester.subject3 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsSecondSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsSecondSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsSecondSemester.subject6 +
        {
          reply_markup: {
            keyboard: [
              [
                {
                  text: "Start Over",
                },
              ],
            ],
          },
        }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsSecondSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsSecondSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsSecondSemester.subject3 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsSecondSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsSecondSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsSecondSemester.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option8
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject3 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject1 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject2 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject5 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject6 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsSecondSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsSecondSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsSecondSemester.subject3 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsSecondSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsSecondSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsSecondSemester.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.physicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option13
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsSecondSemester.subject1 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsSecondSemester.subject2 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsSecondSemester.subject3 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsSecondSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsSecondSemester.subject5 +
        "\n" +
        "\n" +
        physicalScienceforPhysicsAndStatisticsSecondSemester.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceSecondSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceSecondSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceSecondSem.subject6 +
        {
          reply_markup: {
            keyboard: [
              [
                {
                  text: "Start Over",
                },
              ],
            ],
          },
        }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject6 +
        {
          reply_markup: {
            keyboard: [
              [
                {
                  text: "Start Over",
                },
              ],
            ],
          },
        }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject1 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject2 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject5 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject6 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsFirstSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject6 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        mathematicalScienceforActurialScienceSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforBioMathSecondSem.subject2,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option10
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforBioMathSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforBioMathSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforBioMathSecondSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforBioMathSecondSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforBioMathSecondSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforBioMathSecondSem.subject6 +
        {
          reply_markup: {
            keyboard: [
              [
                {
                  text: "Start Over",
                },
              ],
            ],
          },
        }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject6 +
        {
          reply_markup: {
            keyboard: [
              [
                {
                  text: "Start Over",
                },
              ],
            ],
          },
        }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciFirstSemester.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceFirstSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject6 +
        {
          reply_markup: {
            keyboard: [
              [
                {
                  text: "Start Over",
                },
              ],
            ],
          },
        }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option2) &&
    ctx.session.userOptions.includes(
      continuingStudentsCombinedMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option4
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject4 +
        "\n" +
        "\n" +
        physicalScienceForPhysicsAndCompSciSecondSemester.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option5
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject6 +
        {
          reply_markup: {
            keyboard: [
              [
                {
                  text: "Start Over",
                },
              ],
            ],
          },
        }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option6
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject6 +
        "\n" +
        "\n" +
        options.earthScienceSecondSem.subject5 +
        "\n" +
        "\n" +
        options.earthScienceSecondSem.subject4,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option11
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.mathematicalScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject1 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject2 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject3 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject4 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject5 +
        "\n" +
        "\n" +
        mathematicalScienceforComputerScienceSecondSem.subject6,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.earthScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option1
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject1 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject2 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject5 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject6 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.earthScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option2
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject1 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject2 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject5 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject6 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject7 +
        "\n" +
        "\n" +
        physicalScienceforMathsAndPhysicsSecondSemester.subject3,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.earthScience) &&
    ctx.session.userOptions.includes(programOption.option3) &&
    ctx.session.userOptions.includes(
      continuingStudentsMajorMinorOptions.option3
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject1 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject2 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject5 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject6 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.earthScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option7
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject1 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject2 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject5 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject6 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.earthScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option9
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject1 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject2 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject5 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject6 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.earthScience) &&
    ctx.session.userOptions.includes(programOption.option1) &&
    ctx.session.userOptions.includes(
      continuingStudentsSingleMajorOptions.option12
    )
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second semester are: \n" +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject1 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject2 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject3 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject4 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject5 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject6 +
        "\n" +
        "\n" +
        physicalScienceforGeophysicsSecondSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Start Over",
              },
            ],
          ],
        },
      }
    );
    ctx.session.userOptions.push(ctx.message?.text as string);
    console.log(ctx.session.userOptions);
  } else if (
    ctx.session.userOptions.includes(courseOptionsL100.informationTechnology)
  ) {
    bot.telegram.sendMessage(
      ctx.chat?.id || "",
      "The subjects for second  semester are: \n" +
        "\n" +
        "\n" +
        informationTechnologySecondSem.subject1 +
        "\n" +
        "\n" +
        informationTechnologySecondSem.subject2 +
        "\n" +
        "\n" +
        informationTechnologySecondSem.subject4 +
        "\n" +
        "\n" +
        informationTechnologySecondSem.subject6 +
        "\n" +
        "\n" +
        informationTechnologySecondSem.subject8 +
        "\n" +
        "\n" +
        "For your electives choose one of the following or do both\nif you can handle the pressure 💀, " +
        "\n" +
        "\n" +
        informationTechnologySecondSem.subject3 +
        "\n" +
        "\n" +
        informationTechnologySecondSem.subject5 +
        "\n" +
        "\n" +
        informationTechnologySecondSem.subject7,
      {
        reply_markup: {
          keyboard: [
            [
              {
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
// else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option10
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option11
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option12
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option10
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option11
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option12
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.secondYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option13
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   }
//   //L300
//   else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option10
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option11
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option12
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option10
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option11
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option12
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.thirdYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option13
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   }
//   //L400
//   else if (
//     ctx.session.userOptions.includes(levelOptions.fourthYear) &&
//     ctx.session.userOptions.includes(programOption.option1) &&
//     ctx.session.userOptions.includes(
//       continuingStudentsSingleMajorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         options.l400ActurialScienceSingleMajorFirstSem.subject1 +
//         "\n" +
//         options.l400ActurialScienceSingleMajorFirstSem.subject2 +
//         "\n" +
//         options.l400ActurialScienceSingleMajorFirstSem.subject12 +
//         "\n" +
//         options.l400ActurialScienceSingleMajorFirstSem.subject4 +
//         "\n" +
//         options.l400ActurialScienceSingleMajorFirstSem.subject5 +
//         "\n" +
//         options.l400ActurialScienceSingleMajorFirstSem.subject6 +
//         "\n" +
//         options.l400ActurialScienceSingleMajorFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option10
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option11
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option1 &&
//         continuingStudentsSingleMajorOptions.option12
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option2 &&
//         continuingStudentsCombinedMajorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option1
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option2
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option3
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option4
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option5
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option6
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option7
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option8
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option9
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option10
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option11
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option12
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   } else if (
//     ctx.session.userOptions.includes(
//       levelOptions.fourthYear &&
//         programOption.option3 &&
//         continuingStudentsMajorMinorOptions.option13
//     )
//   ) {
//     bot.telegram.sendMessage(
//       ctx.chat?.id || "",
//       "The subjects for first semester are: \n" +
//         physicalScienceforGeophysicsFirstSem.subject1 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject2 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject3 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject4 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject5 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject6 +
//         "\n" +
//         physicalScienceforGeophysicsFirstSem.subject7,
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
//     ctx.session.userOptions.push(ctx.message?.text as string);
//     console.log(ctx.session.userOptions);
//   }
// });

bot.launch({
  webhook: {
    domain: process.env.HEROKU_URL,
    port: Number(process.env.PORT) || 3000,
  },
});
