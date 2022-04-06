const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true});

const noEmojis = /\P{Extended_Pictographic}/u

bot.on('message', (msg) => {
    const text = msg.text
    const chatId = msg.chat.id
    // console.log(msg.text)
    // console.log([...msg.text])
    //if the text 
    const tester = noEmojis.test(text)
    // console.log(tester)
    const splitted = [...msg.text].filter(item => item !== "‍")
    tester === true ? bot.sendMessage(chatId, `Sorry, can't do that :(`) 
        : bot.sendMessage(chatId, splitted.join(','))
    
    // bot.sendMessage(chatId, splitted.join(','))
    // console.log(splitted.join(' '))
   
})


//take the emoji 
//return the dismantled emoji