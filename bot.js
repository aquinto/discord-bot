const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', ()=>{
    console.log('Logged in as $(client.user.tag}!');
});

client.on('message', msg =>{
    if(msg.content === 'ping'){
        msg.reply('pong');
    }
});

client.login('NzM5NzA2NzM2NzEzMTM4MTk2.XyeXlQ.eyqD0RK6NVrunTrGS3LN7wt9MrY');