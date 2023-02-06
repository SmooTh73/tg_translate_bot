import TelegramBot from 'node-telegram-bot-api';
import constants from './src/config/constants.js';


const bot = new TelegramBot(constants.telegram.HTTP_TOKEN, { polling: true });

bot.on('message', async (message) => {
    console.log(message);
});