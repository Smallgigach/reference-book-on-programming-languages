import { InlineKeyboard } from 'grammy';
export const menuKeyBoard = new InlineKeyboard().text(
  "Выбрать направление",
  "direction"
);
export const submenuKeyBoard = new InlineKeyboard()
  .text("Frontend", "front")
  .text("Backend", "backend");
export const frontendLangKeyBoard = new InlineKeyboard()
  .text("JavaScript", "javaScriptForFrontend")
  .text("HTML", "html")
  .text("CSS", "css")
  .row()
  .text("Главное меню", "back");
export const jsframeworkKeyBoard = new InlineKeyboard()
  .text("React.js", "react")
  .text("Vue.js", "vue")
  .text("Angular.js", "angular")
  .text("Next.js", "next")
  .row()
  .text("< Назад", "backToFrontendText");
export const backendLangKeyBoard = new InlineKeyboard()
  .text("JavaScript", "javaScriptForBackend")
  .text("PHP", "php")
  .text("C#", "c#")
  .text("Ruby", "ruby")
  .row()
  .text("Java", "java")
  .text("Scala", "scala")
  .text("Kotlin", "kotlin")
  .text("Python", "python")
  .row()
  .text("Rust", "rust")
  .text("Golang", "go").row().text('Главное меню', 'back')
export const nodeJsFrames = new InlineKeyboard()
  .text("Express.js", "express js")
  .text("Nest.js", "nest JS")
  .text("Koa.js", "koa Js").row()
  .text("Socket.io", "socket.io")
  .text("Adonis.js", "adonis.js").row()
  .text("Sails.js", "sails.js").text('< Назад', 'backToBackendLanguages')
