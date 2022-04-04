const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {

    console.log(msg.text)
    console.log(msg.from.id)
})