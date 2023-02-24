import TelegramBot from 'node-telegram-bot-api';
import constants from './src/config/constants.js';
import { controller } from './src/controller/index.js';

const bot = new TelegramBot(constants.telegram.HTTP_TOKEN, { polling: true });

bot.on('message', controller);