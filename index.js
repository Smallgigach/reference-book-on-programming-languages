import { Bot, InlineKeyboard } from "grammy";
import { hydrate } from "@grammyjs/hydrate";
import sequelize from "./db.js";
import { InlineQueryStateText, language } from "./models.js";
import { Op, Sequelize, where } from "sequelize";
import { config } from "dotenv";
import { menuKeyBoard } from "./InlineKeyBoard/InlineKeyBoards.js";
import { submenuKeyBoard } from "./InlineKeyBoard/InlineKeyBoards.js";
import { frontendLangKeyBoard } from "./InlineKeyBoard/InlineKeyBoards.js";
import { jsframeworkKeyBoard } from "./InlineKeyBoard/InlineKeyBoards.js";
config();
async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
start();
const bot = new Bot(process.env.BOT_TOKEN);
async function findTextUsingKeywords(ctx) {
  let res = await language.findOne({
    where: {
      keywords: {
        [Op.contains]: keywords,
      },
    },
  });
  let startText = res.textLink.toString("utf-8");
}
async function fetchInlineText(id) {
  let res = await InlineQueryStateText.findOne({
    where: {
      id: id,
    },
  });
  return res.inlineTextStatic.toString("utf-8");
}
bot.use(hydrate());
bot.api.setMyCommands([
  { command: "start", description: "Запустить бота" },
  { command: "help", description: "Поддержка" },
]);
bot.command("start", async (ctx) => {
  try {
    const startText = await fetchInlineText(2);
    await ctx.reply(startText, {
      reply_markup: menuKeyBoard,
    });
  } catch (err) {
    console.log(err);
  }
});
bot.callbackQuery("direction", async (ctx) => {
  try {
    const directionText = await fetchInlineText(3);
    await ctx.callbackQuery.message.editText(directionText, {
      reply_markup: submenuKeyBoard,
    });
    await ctx.answerCallbackQuery();
  } catch (err) {
    console.log(err, "direction error");
  }
});
bot.callbackQuery("front", async (ctx) => {
  try {
    const frontText = await fetchInlineText(5);
    await ctx.callbackQuery.message.editText(frontText, {
      reply_markup: frontendLangKeyBoard,
    });
    await ctx.answerCallbackQuery();
  } catch (err) {
    console.log(err, "front error");
  }
});
bot.callbackQuery("back", async (ctx) => {
  try {
    const back = await fetchInlineText(2);
    await ctx.callbackQuery.message.editText(back, {
      reply_markup: submenuKeyBoard,
    });
    await ctx.answerCallbackQuery();
  } catch (err) {
    console.log(err, "back err");
  }
});
bot.callbackQuery("js", async (ctx) => {
  try {
    const jsText = await fetchInlineText(7);
    await ctx.callbackQuery.message.editText(jsText, {
      reply_markup: jsframeworkKeyBoard,
    });
  } catch (err) {
    console.log(err, "js error");
  }
});

bot.callbackQuery("html", async (ctx) => {
  try {
    const htmlText = await fetchInlineText(8);
    await ctx.callbackQuery.message.editText(htmlText, {
      reply_markup: frontendLangKeyBoard,
    });
    await ctx.answerCallbackQuery();
  } catch (err) {
    console.log(err, "html err");
  }
});
bot.on("msg", async (ctx) => {
  try {
    let keywords = ctx.message.text
      .split(" , ")
      .map((keyword) => keyword.trim());
    console.log("Ключевые слова:", keywords);

    let conditions = {
      keywords: {
        [Op.iLike]: `%${keywords}%`,
      },
    };
    console.log(conditions);

    let res = await language.findAll({
      where: {
        [Op.or]: conditions,
      },
      order: [
        [
          sequelize.fn("similarity", sequelize.col("keywords"), keywords[0]),
          "DESC",
        ],
      ],
    });
    if (res.length > 0) {
      let tex = res[0].textLink.toString("utf-8");
      await ctx.reply(tex);
    } else {
      await ctx.reply(`возможно вы имели другие языки программирования`);
    }
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
    await ctx.reply("Произошла ошибка при выполнении запроса.");
  }
});
bot.start();
