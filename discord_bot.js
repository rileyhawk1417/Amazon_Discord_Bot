const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    //log discord bot client tag
    console.log(`Connected as ${client.user.tag}`);
    client.user.setActivity("Waiting for instructions");

    console.log("Servers:");
    client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name)
        
        // List all channels
        guild.channels.cache.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })


});

const bot_loginToken = "Nzc0MzQxOTc3MzE5Mjc2NjE0.X6WYKQ.X65L1Sqx8MKMfEkyNM3amT7uvEI";

client.login(bot_loginToken);

/* client.guilds.forEach((guild) => {
    console.log(" - " + guild.name);      
    //list channels
    guild.channels.forEach((channel) => {
        console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
    });
}); */