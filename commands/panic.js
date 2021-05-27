module.exports = {
    name: 'ground',
    cooldown: 10,
    description: 'Help command',
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#B9C500')
        .setTitle('Grounding')
        .setAuthor('Midnight Wolves')
        .setDescription('Grounding exercises.')
        .addFields(
            {name: '1', value: 'Take a few deep breaths. In and out. If it helps, you can count to ten in your head. Start at a steady pace and try to match your breathing, slowing down the count at your own tempo.'},
            {name: '2', value: 'Take a moment to notice the environment you are in. List five things you can see.'},
            {name: '3', value: 'Remember, there is no rush. Take as much time as you need. :yellow_heart:'},
            {name: '4', value: 'Now list four things you can feel. This can be a wall, the floor, a blanket...'},
            {name: '5', value: 'Youre doing great. Try finding three things you can hear. Close your eyes if it helps.'},
            {name: '6', value: 'Two things you can taste. This one is a bit tricky...'},
            {name: '7', value: 'Lastly, one thing you can smell.'},
            {name: '8', value: 'Now that you are finished, return back to focusing on your breathing. In and out. Already, you should be feeling a bit calmer. :grinning:'},
            {name: '9', value: 'If you are still feeling a bit shaky, that is okay. Try finding a calming activity to do. Below is a list of ideas'},
            {name: 'More', value: 'Going for a walk, Knitting, Baking/Cooking, Journaling, Poetry, Painting/Colouring, Listening to Music, Taking a warm skower/bath.'}
        )
        .addFields(
            {name: 'A little message', value: 'I hope you feel better. These are not the only ways to calm down from a panic attack. If you need more, please go look them up'}
        )
        .setImage('https://images-ext-2.discordapp.net/external/ebG5nHz9GRXyAYK_5iexWBmXh3aDHwm1S8Z3keSmjPU/%3Fwidth%3D256%26height%3D256/https/media.discordapp.net/attachments/783945484829589536/818356484554752010/Angel.jpg')
        .setFooter('This is to help you')
        message.channel.send(newEmbed);
    }
}