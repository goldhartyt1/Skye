module.exports = {
    name: 'helplines',
    cooldown: 10,
    description: 'Helplines command',
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#B9C500')
        .setTitle('Helplines')
        .setAuthor('Midnight Wolves')
        .setDescription('This is the helplines command')
        .addFields(
            {name: 'Coming Soon', value: 'This command is in the works. The Devs are collecting helplines so that they can have helplines for all countries. They want the best for everyone.'}
        )
        .setImage('https://images-ext-2.discordapp.net/external/ebG5nHz9GRXyAYK_5iexWBmXh3aDHwm1S8Z3keSmjPU/%3Fwidth%3D256%26height%3D256/https/media.discordapp.net/attachments/783945484829589536/818356484554752010/Angel.jpg')
        .setFooter('This is to help you')
        message.channel.send(newEmbed);
    }
}