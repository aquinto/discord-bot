const Discord = require('discord.js');
const client = new Discord.Client();

//holds the discord bot token, located in json file 
const config = require('./configure.json');
const { type } = require('os');

/* links to resources for class in an external file  */
var myModule = require('./index.js');
var cmsc216 = myModule.link1;
var cmsc250 = myModule.link2;
var cmsc330 = myModule.link3;
var cmsc351 = myModule.link4;

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
/* function displays all the avaiable commands that the user
can input */
function displayCommands(input){
        return input.reply("The following commands you can use are: " +
            "\n"+
            "!216"+
            "\n"+
            "!250"+
            "\n"+
            "!330"+
            "\n"+
            "!351"+
            "\n"+
            "!clear"
            );
}
/* function handles the deletion of the last 50 messages inside a text channel*/
function deleteChatHistory(input){
    async function deleteCollection(){
        await input.channel.messages.fetch({
            limit: 50
        }).then(messages =>{
            input.channel.bulkDelete(messages);
        })
    }
    deleteCollection();
}
/* event listener for commands */
client.on('message', message => {
    if(!validateCommand(message)){ return ; }
        if(message.content === "!216"){
           return message.reply("this is the link for the 216 folder: " + cmsc216);
        }else if(message.content === "!250"){
            return message.reply("this is the link for the 250 folder: "+ cmsc250);
        } else if(message.content === "!330"){
            return message.reply("this is a link for the 330 folder: " + cmsc330);
        }else if(message.content === "!351"){
            return message.reply("this is a link for the 351 folder: " + cmsc351);
        }else if(message.content === "!help"){
            displayCommands(message);
        }else if(message.content === "!clear"){
            deleteChatHistory(message);
        }
});


client.login(config.token);
