const Telegraf = require('telegraf')

const bot = new Telegraf("1939243495:AAFUFsqmT5fxyb6Ds6fvvLvChsRduuqn0Iw")

bot.start((ctx) => {
    ctx.reply("Hi i am Echo Bot");
})

bot.launch()