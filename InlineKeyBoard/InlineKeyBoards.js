import { InlineKeyboard } from "grammy";
export const menuKeyBoard = new InlineKeyboard().text(
  "Выбрать направление",
  "direction"
);
export const submenuKeyBoard = new InlineKeyboard()
  .text("Frontend", "front")
  .text("Backend", "back");
export const frontendLangKeyBoard = new InlineKeyboard()
  .text("JavaScript", "js")
  .text("HTML", "html")
  .text("CSS", "css")
  .row()
  .text("Главное меню", "back");
export const jsframeworkKeyBoard = new InlineKeyboard()
  .text("React.js")
  .text("Vue.js")
  .text("Angular.js")
  .text("Next.js")
  .row()
  .text("< Назад", "back");