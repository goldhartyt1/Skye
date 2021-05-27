const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
});
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on("ready", () => {
    client.user.setPresence({
        game: { 
            name: 'Discord',
            type: 'WATCHING'
        },
        status: 'online'
    })
})
client.login(process.env.DISOCRD_TOKEN);