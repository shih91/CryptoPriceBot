require('dotenv').config();

const coins = require("./constant/coins.js");
coins.invoke()

const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

const serviceFactory = require("./factories/ServiceFactory.js");

bot.on("message", async ctx => {
  const regexPattern = /\/[\w\s-]+$/;
  if (!regexPattern.test(ctx.message.text)) {
    return;
  } 
  var text = ctx.message.text.split(' ');
  console.log(text);
  const message = await serviceFactory.getService(text[0])?.getMessage(ctx);
  if (message != undefined) {
    bot.telegram.sendMessage(ctx.chat.id, message, {parse_mode: 'MarkdownV2'});
  }
})


bot.launch()