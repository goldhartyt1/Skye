module.exports = {
    name: 'alternatives',
    cooldown: 10,
    description: 'alternatives command',
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#B9C500')
        .setTitle('Alternatives')
        .setAuthor('Midnight Wolves')
        .setDescription('This command is to give you alternatives to ||Self Harm||')
        .addFields(
            {name: '1', value: 'Snap a rubber band against your wrist'},
            {name: '2', value: 'Slap a hard surface – such as a wall or tabletop'},
            {name: '3', value: 'Find somewhere isolated and scream as loudly as you possibly can (alternatively do it into a cushion).'},
            {name: '4', value: 'Use a red marker pen to draw or write words on the place where you want to cut'},
            {name: '5', value: 'Squeeze ice in your hands really hard'},
            {name: '6', value: 'Squeeze the ‘pores’ in the skin of an orange / satsuma / clementine (take care to avoid getting juice in your eyes)'},
            {name: '7', value: 'Punch a cushion or punching bag – consider learning martial arts'},
            {name: '8', value: 'Find an old magazine or newspaper and tear it up'},
            {name: '9', value: 'Write down exactly how you are feeling in a diary – or if you’d prefer to, just scribble everything out'},
            {name: '10', value: 'Take part in high-intensity exercise; like circuit training, boxing, running or swimming'},
            {name: '11', value: 'Flatten aluminum cans for recycling – see how fast you can do it'},
            {name: '12', value: 'Take a cold bath'},
            {name: '13', value: 'Play music really loudly'},
            {name: '14', value: 'Try squeezing a stress ball'},
            {name: '15', value: 'Find a lake or ocean and throw stones into the water as hard and as far as you can'},
            {name: '16', value: 'Look after and be kind to yourself; it doesn’t have to be something active. You could try meditation, aromatherapy oil, yoga..e.t.c.'}
        )
        .setFooter('This is to help you')
        message.channel.send(newEmbed);
    }
}
