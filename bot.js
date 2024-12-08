require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new bot client with intents
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,            // Allows bot to join and interact in guilds
        GatewayIntentBits.GuildMessages,     // Allows bot to read messages in channels
        GatewayIntentBits.MessageContent,    // Allows bot to read message content
        GatewayIntentBits.GuildMembers       // Allows bot to access member data
    ] 
});

// When the bot is logged in
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// When a new message is received
client.on('messageCreate', (message) => {
    if (message.author.bot) return; // Ignore bot messages

    if (message.content === '!ping') {
        message.reply('Pong!');
    }

    if (message.content === '!hello') {
        message.reply(`Hello, ${message.author.username}!`);
    }
});

// Log in using the bot's token
client.login(process.env.TOKEN);
