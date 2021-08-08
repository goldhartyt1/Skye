module.exports={
    name:'ping',
    description: "Command to get the ping of the bot",
    execute(client, message, args, Discord){
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms`);
        }
      };
