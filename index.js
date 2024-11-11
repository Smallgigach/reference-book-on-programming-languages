import { Bot} from "grammy";
import { hydrate } from "@grammyjs/hydrate";
import sequelize from "./db.js";
import { InlineQueryStateText, language } from "./models.js";
import { Op } from "sequelize";
import { config } from "dotenv";
import {
    backendLangKeyBoard,
    menuKeyBoard,
    nodeJsFrames,
} from "./InlineKeyBoard/InlineKeyBoards.js";
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
start()
const bot = new Bot(process.env.BOT_TOKEN);
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
bot.command("help", async (ctx) => {
    try {
        const helpText = await fetchInlineText(11);
        await ctx.reply(helpText);
    } catch (err) {
        console.log(err, "ошибка при вызове команды /help");
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
bot.callbackQuery("javaScriptForFrontend", async (ctx) => {
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
bot.callbackQuery("css", async (ctx) => {
    try {
        const cssText = await fetchInlineText(10);
        await ctx.callbackQuery.message.editText(cssText, {
            reply_markup: frontendLangKeyBoard,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err, "html err");
    }
});
bot.callbackQuery("react", async (ctx) => {
    try {
        const reactText = await fetchInlineText(24);
        await ctx.callbackQuery.message.editText(reactText, {
            reply_markup: jsframeworkKeyBoard,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err, "react err");
    }
});
bot.callbackQuery("vue", async (ctx) => {
    try {
        const vueText = await fetchInlineText(29);
        await ctx.callbackQuery.message.editText(vueText, {
            reply_markup: jsframeworkKeyBoard,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err, "vue err");
    }
});
bot.callbackQuery("angular", async (ctx) => {
    try {
        const angularText = await fetchInlineText(30);
        await ctx.callbackQuery.message.editText(angularText, {
            reply_markup: jsframeworkKeyBoard,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err, "vue err");
    }
});
bot.callbackQuery("next", async (ctx) => {
    try {
        const nextText = await fetchInlineText(31);
        await ctx.callbackQuery.message.editText(nextText, {
            reply_markup: jsframeworkKeyBoard,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err, "vue err");
    }
});
bot.callbackQuery("backToFrontendText", async (ctx) => {
    try {
        const backToFrontend = await fetchInlineText(3);
        await ctx.callbackQuery.message.editText(backToFrontend, {
            reply_markup: frontendLangKeyBoard,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err, "back err");
    }
});
bot.callbackQuery("backend", async (ctx) => {
    try {
        const backendText = await fetchInlineText(32);
        await ctx.callbackQuery.message.editText(backendText, {
            reply_markup: backendLangKeyBoard,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("javaScriptForBackend", async (ctx) => {
    try {
        const jsBackendText = await fetchInlineText(37);
        await ctx.callbackQuery.message.editText(jsBackendText, {
            reply_markup: nodeJsFrames,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("express js", async (ctx) => {
    try {
        const expressText = await fetchInlineText(39);
        await ctx.callbackQuery.message.editText(expressText, {
            reply_markup: nodeJsFrames,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("nest JS", async (ctx) => {
    try {
        const nestText = await fetchInlineText(40);
        await ctx.callbackQuery.message.editText(nestText, {
            reply_markup: nodeJsFrames,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("koa Js", async (ctx) => {
    try {
        const koaText = await fetchInlineText(41);
        await ctx.callbackQuery.message.editText(koaText, {
            reply_markup: nodeJsFrames,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("socket.io", async (ctx) => {
    try {
        const socketIoText = await fetchInlineText(42);
        await ctx.callbackQuery.message.editText(socketIoText, {
            reply_markup: nodeJsFrames,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("adonis.js", async (ctx) => {
    try {
        const adonisText = await fetchInlineText(43);
        await ctx.callbackQuery.message.editText(adonisText, {
            reply_markup: nodeJsFrames,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("sails.js", async (ctx) => {
    try {
        const sailsText = await fetchInlineText(44);
        await ctx.callbackQuery.message.editText(sailsText, {
            reply_markup: nodeJsFrames,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("backToBackendLanguages", async (ctx) => {
    try {
        const back = await fetchInlineText(37);
        await ctx.callbackQuery.message.editText(back, {
            reply_markup: backendLangKeyBoard,
        });
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("php", async (ctx) => {
    try {
        let languages = await language.findOne({
            where: {
                id: 11,
            },
        });
        await ctx.callbackQuery.message.editText(
            languages.textLink.toString("utf-8"),
            {
                reply_markup: backendLangKeyBoard,
            }
        );
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("c#", async (ctx) => {
    try {
        let languages = await language.findOne({
            where: {
                id: 9,
            },
        });
        await ctx.callbackQuery.message.editText(
            languages.textLink.toString("utf-8"),
            {
                reply_markup: backendLangKeyBoard,
            }
        );
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("ruby", async (ctx) => {
    try {
        let languages = await language.findOne({
            where: {
                id: 16,
            },
        });
        await ctx.callbackQuery.message.editText(
            languages.textLink.toString("utf-8"),
            {
                reply_markup: backendLangKeyBoard,
            }
        );
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("java", async (ctx) => {
    try {
        let languages = await language.findOne({
            where: {
                id: 7,
            },
        });
        await ctx.callbackQuery.message.editText(
            languages.textLink.toString("utf-8"),
            {
                reply_markup: backendLangKeyBoard,
            }
        );
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("scala", async (ctx) => {
    try {
        let languages = await language.findOne({
            where: {
                id: 21,
            },
        });
        await ctx.callbackQuery.message.editText(
            languages.textLink.toString("utf-8"),
            {
                reply_markup: backendLangKeyBoard,
            }
        );
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("kotlin", async (ctx) => {
    try {
        let languages = await language.findOne({
            where: {
                id: 12,
            },
        });
        await ctx.callbackQuery.message.editText(
            languages.textLink.toString("utf-8"),
            {
                reply_markup: backendLangKeyBoard,
            }
        );
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("python", async (ctx) => {
    try {
        let languages = await language.findOne({
            where: {
                id: 8,
            },
        });
        await ctx.callbackQuery.message.editText(
            languages.textLink.toString("utf-8"),
            {
                reply_markup: backendLangKeyBoard,
            }
        );
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("rust", async (ctx) => {
    try {
        let languages = await language.findOne({
            where: {
                id: 24,
            },
        });
        await ctx.callbackQuery.message.editText(
            languages.textLink.toString("utf-8"),
            {
                reply_markup: backendLangKeyBoard,
            }
        );
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
    }
});
bot.callbackQuery("go", async (ctx) => {
    try {
        let languages = await language.findOne({
            where: {
                id: 15,
            },
        });
        await ctx.callbackQuery.message.editText(
            languages.textLink.toString("utf-8"),
            {
                reply_markup: backendLangKeyBoard,
            }
        );
        await ctx.answerCallbackQuery();
    } catch (err) {
        console.log(err);
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