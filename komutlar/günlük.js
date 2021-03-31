const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms')
exports.run = (client,message,args) => {
  let timeout = 86400000;
	let user = message.mentions.users.first() || message.author;

  let günlük =  db.fetch(`günlük_${user.id}`);

  if (günlük !== null && timeout - (Date.now() - günlük) > 0) {
    let time = ms(timeout - (Date.now() - günlük));
  
    let timeEmbed = new Discord.RichEmbed()
     .setColor("YELLOW")
.setTitle('Hata :x:')
    .setDescription(`Günlük puanını zaten almışsın! birdaha almak için 1 gün beklemelisin! `);
    message.channel.send(timeEmbed)
  } else {



const ENDLESSCODECİK = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Başarıyla günlük `150` puanını aldın!')
message.channel.send(ENDLESSCODECİK)
db.add(`puan_${user.id}`, 150)
     db.set(`günlük_${user.id}`, Date.now())
  }
}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}


exports.help = {
name: 'günlük'	
}