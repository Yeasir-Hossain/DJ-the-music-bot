// Import external modules
import dotenv from 'dotenv';
dotenv.config();

import Discord from './class/discord';

// Load environment variables
const token = process.env.BOT_TOKEN || '';
const clientId = process.env.CLIENT_ID || '';

const LOAD_SLASH = process.argv[2] && process.argv[2].toLowerCase() == 'load' || false;

const discord = new Discord(token, clientId, LOAD_SLASH);
discord.init();
