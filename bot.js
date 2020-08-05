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
    if(input.startsWith("!")){
        return true;
    }
    return false;
}
/* function displays all the avaiable commands that the user
can input */
function displayCommands(input){
        return input.reply("The following commands you can use are: " +
            "\n"+
            "!216 : will display 216 google drive link"+
            "\n"+
            "!250 : will display 250 google drive link"+
            "\n"+
            "!330 : will display 330 google drive link"+
            "\n"+
            "!351 : will display 351 google drive link"+
            "\n"+
            "!clear limit : will delete as many messages as the provided limit, \n if no limit is provided then the last 100 messages will be deleted"
            );
}
/* function handles the deletion of the last 50 messages inside a text channel*/
function deleteChatHistory(input, limitValue){
    if(limitValue == null){
        var total = 100;
        limitValue = total;
    }else{
        if(limitValue < 0 || limitValue == 0){
            return input.reply("Please enter a value greater than 0")
        }else if(limitValue > 100){
            return input.reply("Please enter a value less than or equal to 100");
        }
    }

    async function deleteCollection(){
        await input.channel.messages.fetch({
            limit: limitValue
        }).then(messages =>{
            input.channel.bulkDelete(messages);
        })
    }
    deleteCollection();
}

/* event listener for commands */
client.on('message', message => {
    let substrings = message.content.split(" ");
    if(!validateCommand(substrings[0])){ 
        return ; 
    }
    
    if(substrings[0] === "!216"){
        return message.reply("this is the link for the 216 folder: " + cmsc216);
    }else if(substrings[0] === "!250"){
        return message.reply("this is the link for the 250 folder: "+ cmsc250);
    } else if(substrings[0] === "!330"){
        return message.reply("this is a link for the 330 folder: " + cmsc330);
    }else if(substrings[0] === "!351"){
        return message.reply("this is a link for the 351 folder: " + cmsc351);
    }else if(substrings[0] === "!help"){
        displayCommands(message);
    }else if(substrings[0] === "!clear"){
        deleteChatHistory(message, substrings[1]);
    }
});


client.login(config.token);
