const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client,message,args) => {
const ENDLESSCODE = message.mentions.users.first() || args.slice(0).join(' ')
if(!ENDLESSCODE) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Hata :x:')
.setDescription('Lütfen birisini etiketle!')
)
const ENDLESSCODE2 = args.slice(1).join(' ')
if(!ENDLESSCODE2) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Hata :x:')
.setDescription('Lütfen kaç puan verileceğini yaz!!')
)
  if (isNaN(args[1])) return;
 	const ENDLESSCODECİK = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Puan verildi :white_check_mark:')
.setDescription(`Başarıyla ${ENDLESSCODE} adlı kişiye **${ENDLESSCODE2}** puan verildi.`)
message.channel.send(ENDLESSCODECİK)
db.add(`puan_${ENDLESSCODE.id}`, args[1])
}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 4,
aliases: []
}


exports.help = {
name: 'puan-ekle'	
}