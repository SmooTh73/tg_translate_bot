import * as dotenv from 'dotenv';

dotenv.config();

export default {
    telegram: {
        HTTP_TOKEN: process.env.TG_TOKEN
    }
}