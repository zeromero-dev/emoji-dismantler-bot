const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true});

const noEmojis = /\P{Extended_Pictographic}/u

bot.on('message', (msg) => {
    
    console.log(msg.text)
    console.log([...msg.text])
    const splitted = [...msg.text].filter(item => item !== "‍")
    bot.sendMessage('hello')
    console.log(splitted.join(' '))
   
})


//take the emoji 
//return the dismantled emoji