const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms')
exports.run = (client,message,args) => {
  let timeout = 604800000;
	let user = message.mentions.users.first() || message.author;

  let haftalık =  db.fetch(`haftalık_${user.id}`);

  if (haftalık !== null && timeout - (Date.now() - haftalık) > 0) {
    let time = ms(timeout - (Date.now() - haftalık));
  
    let timeEmbed = new Discord.RichEmbed()
     .setColor("YELLOW")
.setTitle('Hata :x:')
    .setDescription(`Haftalık puanını tekrar almak için 1 hafta beklemelisin! `);
    message.channel.send(timeEmbed)
  } else {



const ENDLESSCODECİK = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Başarıyla haftalık `500` puanını aldın!')
message.channel.send(ENDLESSCODECİK)
db.add(`puan_${user.id}`, 500)
     db.set(`haftalık_${user.id}`, Date.now())
  }
}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}


exports.help = {
name: 'haftalık'	
}