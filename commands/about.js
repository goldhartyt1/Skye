module.exports = {
    name: 'about',
    cooldown: 10,
    description: 'about the bot',
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#B9C500')
        .setTitle('About')
        .setAuthor('Midnight Wolves')
        .setDescription('This command tells you about Skye')
        .addFields(
            {name: 'What is "Skye"?', value: 'Skye is a mental health bot that can give you alternatives to self harm. Skye can send a gif to help you take deep breaths if needed. Skye has helplines that can be send at anytime using "$helplines". '},
            {name: 'Does Skye have a gender/any pronouns?', value: 'Skye **DOES** have pronouns and a gender. Her pronouns are She/Her, They/Them, or He/She.'},
            {name: 'Does Skye have any non mental health commands?', value: 'As of right now, Skye does not have any non-mental health commands. She will soon have Music, Moderation, and economy as well. She will always be a work in progress but she is open for public use and suggestions for commands.'},
            {name: 'How do I invite her?', value: 'by clicking this hyperlink: [Invite Skye](https://discord.com/api/oauth2/authorize?client_id=843373991287848991&permissions=117760&scope=bot)'}
        )
        .setImage('https://images-ext-2.discordapp.net/external/ebG5nHz9GRXyAYK_5iexWBmXh3aDHwm1S8Z3keSmjPU/%3Fwidth%3D256%26height%3D256/https/media.discordapp.net/attachments/783945484829589536/818356484554752010/Angel.jpg')
        .setFooter('This is to help you')
        message.channel.send(newEmbed);
    }
}