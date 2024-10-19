import { Bot, InlineKeyboard } from "grammy";
import { hydrate } from "@grammyjs/hydrate";
import sequelize from "./db.js";
async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("подкулючение к бд успешно");
  } catch (err) {
    console.log(err, "ошибка к подключении бд");
  }
}
start()
const bot = new Bot("8126076028:AAHISprsKeh2Hj-kq-WMFTr0JHfYdDP7QYk");
const startText =
  "Привет, Это бот по Языкам программирования, здесь ты сможешь точно определиться с своим направлением и выбрать для себя подходящий язык, а также ты сможешь узнать,какие языки програмирования используют в тех или иных сферах. Также тебе нужно подписаться на мой телеграмм канал - @Gigachedcool.";
const subText =
  "Для начала определимся,какие на данный момент есть востребованные направления. Frontend-разработчик (frontend developer) — это специалист, который отвечает за создание пользовательского интерфейса сайта, приложения или ПО.Бэкенд-разработчик — это программист, который работает над внутренней частью веб-ресурсов. Он пишет код, разрабатывает бизнес-логику веб-приложений, задает им алгоритм работы и обеспечивает корректное выполнение пользовательских запросов.";
const menuKeyBoard = new InlineKeyboard().text(
  "Выбрать направление",
  "direction"
);
const submenuKeyBoard = new InlineKeyboard()
  .text("Frontend", "front")
  .text("Backend", "back");
const frontendLangKeyBoard = new InlineKeyboard()
  .text("JavaScript", "js")
  .text("HTML", "html")
  .text("CSS", "css")
  .row()
  .text("Главное меню", "back");
const jsframeworkKeyBoard = new InlineKeyboard()
  .text("React.js")
  .text("Vue.js")
  .text("Angular.js")
  .text("Next.js")
  .row()
  .text("< Назад", "backToFrontend");
bot.use(hydrate());
bot.api.setMyCommands([
  { command: "start", description: "Запустить бота" },
  { command: "help", description: "Поддержка" },
]);
bot.command("start", async (ctx) => {
  await ctx.reply(startText, {
    reply_markup: menuKeyBoard,
  });
});
bot.callbackQuery("direction", async (ctx) => {
  try {
    await ctx.callbackQuery.message.editText(subText, {
      reply_markup: submenuKeyBoard,
    });
    await ctx.answerCallbackQuery();
  } catch (err) {
    console.log(err, "direction error");
  }
});
bot.callbackQuery("front", async (ctx) => {
  try {
    await ctx.callbackQuery.message.editText(
      "Итак, базовый набор инструментов для разработки фронтенда четко определен: HTML, CSS и JavaScript. Однако этот набор может быть значительно расширен, включив в себя диспетчеры пакетов, CSS-препроцессоры, фреймворки и многое другое.",
      {
        reply_markup: frontendLangKeyBoard,
      }
    );
    await ctx.answerCallbackQuery();
  } catch (err) {
    console.log(err, "front error");
  }
});
bot.callbackQuery("back", async (ctx) => {
  try {
    await ctx.callbackQuery.message.editText(startText, {
      reply_markup: submenuKeyBoard,
    });
    await ctx.answerCallbackQuery();
  } catch (err) {
    console.log(err, "back err");
  }
});
bot.callbackQuery("js", async (ctx) => {
  try {
    await ctx.callbackQuery.message.editText(
      "JavaScript — это язык скриптов, на котором держится весь frontend веб-разработки. Он позволяет перехватывать события и выполнять различные действия. Например, пользователь кликнул по какой-нибудь кнопке — сработало событие click. И, связав с ним, мы можем выполнить нужную нам функцию — открыть модальное окно или изменить цвет элемента. JavaScript используется для того, чтобы делать страницы интерактивными, то есть дать пользователю возможность взаимодействовать с элементами. Когда страницы могут реагировать на какие-то действия, это делает их интереснее. Если, конечно, не намешано много безвкусицы.",
      {
        reply_markup: jsframeworkKeyBoard,
      }
    );
  } catch (err) {
    console.log(err, "js error");
  }
});
bot.callbackQuery("html", async (ctx) => {
  try {
    await ctx.callbackQuery.message.editText(
      `HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.`,
      {
        reply_markup: frontendLangKeyBoard,
      }
    );
    await ctx.answerCallbackQuery();
  } catch (err) {
    console.log(err, "html err");
  }
});

bot.start();
