module.exports = {
    name: 'ping',
    cooldown: 10,
    description: "a ping command",
    execute(message, args, cmd, client, Discord){
        message.channel.send(':ping_pong: useless command.')
    }
}