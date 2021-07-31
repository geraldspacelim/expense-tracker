const Telegraf = require('telegraf')

const bot = new Telegraf("1939243495:AAFUFsqmT5fxyb6Ds6fvvLvChsRduuqn0Iw")

bot.start((ctx) => {
    ctx.telegram.sendPhoto(ctx.chat.id,
        {source: "images/image_1.jpg"}, 
        {caption: "Welcome to the bot!\nWe are here to help you focus on cashflow management!\nKindly enter your monthly salary using /salary XXXXX"})

})

bot.command('salary', (ctx)=> {
    const salary = ctx.message.text.slice(8, )
    const savings = 0.4*salary
    const expense = 0.3*salary
    const retire = 0.2*salary
    const insurance = 0.1*salary 
    ctx.telegram.sendMessage(ctx.chat.id, 
        "Cash Savings & Loans: $" + savings + "\nExpenses: $" + expense + "\nRetirement Planning: $" + retire + "\nInsurance: $" + insurance)
    
    ctx.telegram.sendMessage(ctx.chat.id, "Let's start tracking!", {
        reply_markup: {
            keyboard: [
                [
                    {text: "Work Food"},
                    {text: "Good Food"},
                    {text: "Coffee"},
                    {text: "Alcohol"},
                    {text: "Necessities"},
                    {text: "Shopping & Leisure"},
                    {text: "Ciggs"},
                    {text: "Private Transport"},
                    {text: "Groceries"}
                ]
            ],
            resize_keyboard: true
        }
    })
})

bot.launch()