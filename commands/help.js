module.exports = {
    name: 'help',
    cooldown: 10,
    description: 'Help command',
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#B9C500')
        .setTitle('Help')
        .setAuthor('Midnight Wolves')
        .setDescription('This is the help command')
        .addFields(
            {name: 'Bot Prefix', value: 'Prefix is "$"'},
            {name: 'about', value: 'This command give you information about Skye.'},
            {name: 'ping', value: 'A useless command to see if the bot is even responding'},
            {name: 'breathe', value: 'A command to help you take deep breaths.'},
            {name: 'alternatives', value: 'a command to give you alternatives to self harm'},
            {name: 'ground', value: 'Some ways to help with a panic attack'},
            {name: 'helplines', value: 'Coming Soon'}
        )
        .setImage('https://images-ext-2.discordapp.net/external/ebG5nHz9GRXyAYK_5iexWBmXh3aDHwm1S8Z3keSmjPU/%3Fwidth%3D256%26height%3D256/https/media.discordapp.net/attachments/783945484829589536/818356484554752010/Angel.jpg')
        .setFooter('This is to help you')
        message.channel.send(newEmbed);
    }
}