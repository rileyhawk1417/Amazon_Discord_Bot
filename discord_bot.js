const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    //log discord bot client tag
    console.log(`Connected as ${client.user.tag}`);
    client.user.setActivity("Waiting for instructions");

    console.log("Servers:");
    //old syntax before v12 of discord.js
    //client.guilds.forEach //it doesnt work 
/*     client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name)
        
     //List all channels
        guild.channels.cache.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    }) */


});
//dont upload bot token it will get disabled automatically by discord bot


client.login(bot_loginToken);

/* client.guilds.forEach((guild) => {
    console.log(" - " + guild.name);      
    //list channels
    guild.channels.forEach((channel) => {
        console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
    });
}); */