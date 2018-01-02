const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
else
client.on('message', message => {
    if (message.content === 'pling') {
    	message.reply('plong');
  	}
        
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
