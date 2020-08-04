const Discord = require('discord.js');
const client = new Discord.Client();

//holds the discord bot token, located in json file 
const config = require('./configure.json');
const { type } = require('os');


client.on('ready', ()=>{
    console.log('botBot is online!');
    client.user.setActivity('use !help', {type: "LISTENING"});
});

/* validates our command input by making sure 
that it starts with an exclamation point*/
function validateCommand(input){
    if(input.content.startsWith("!")){
        return true;
    }
    return false;
}
function displayCommands(input){
        return input.reply("The following commands you can use are: " +
            "\n"+
            "!216"+
            "\n"+
            "!250"+
            "\n"+
            "!330"+
            "\n"+
            "!351"
            );
}


client.on('message', message => {
    if(!validateCommand(message)){ return ; }
        if(message.content === "!216"){
           return message.reply("this is the link for the 216 folder: https://bit.ly/216folder");
        }else if(message.content === "!250"){
            return message.reply("this is the link for the 250 folder: https://bit.ly/250folder");
        } else if(message.content === "!330"){
            return message.reply("this is a link for the 330 folder: https://bit.ly/330folder");
        }else if(message.content === "!351"){
            return message.reply("this is a link for the 351 folder: https://bit.ly/351folder");
        }else if(message.content === "!help"){
            displayCommands(message);
        }
});


client.login(config.token);
