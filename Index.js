const Discord = require("discord.js")

const intents = new Discord.Intents(32767)

const client = new Discord.Client({ intents })

client.on('messageCreate', async (message) => {

    client.queue = new Set()
   
     let prefix = '!'

     if(message.channel.type === 'dm') return; 
     if(message.author.bot) return; 
     if(!message.content.startsWith(prefix)) return; 

     const args = message.content.slice(prefix.length).trim().split(/ +/g); 
     const command = args.shift().toLowerCase()

     if(command === 'Huaso'){
         message.channel.send("HuasoDios")
     }
     if(command === 'Responde'){
         message.channel.send("que pasa larva")
     }
     if(command === 'dani'){
         message.channel.send("marihuanero piteado")
     }
     if(command === 'help'){
         message.channel.send("Comandos Actuales !help, !Huaso, !Responde, !Dani")
     }     
})


client.login("ODg3OTE3OTE4OTU0ODY0NjUx.YULIAA.fnPsOfOlZDbuXsE_mkENP-lPCJM")
