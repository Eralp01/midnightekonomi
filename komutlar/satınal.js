const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client,message,args) => {
let user = message.mentions.users.first() || message.author;
const Endlesscode = args.slice(0).join(' ')
if(!Endlesscode) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Hata :x:')
.setDescription('Lütfen almak istediğin şeyi yaz! \n**Dükkandakiler**: `araba 1000 puan`,`silah 100 puan`,`ev 5000 puan`,`telefon 500 puan`,`televizyon 450 puan`'))	


	  if(args[0] == "araba") {
	  let endlesscode1 = db.get(`puan_${user.id}`)
  
  if(endlesscode1 < 1000) return message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Hata :x:')
.setDescription("Araba almaya paran yetmiyor!!"))
 
message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Başarıyla araba aldın!'))
db.set(`araba_${user.id}`, 'Var')
db.add(`puan_${user.id}`, -1000)
    }


	  if(args[0] == "silah") {
	  let endlesscode1 = db.get(`puan_${user.id}`)
  
  if(endlesscode1 < 100) return message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Hata :x:')
.setDescription("Silah almaya paran yetmiyor!!"))
 
message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Başarıyla silah aldın!'))
db.set(`silah_${user.id}`, 'Var')
db.add(`puan_${user.id}`, -100)
    }

  	  if(args[0] == "ev") {
	  let endlesscode1 = db.get(`puan_${user.id}`)
  
  if(endlesscode1 < 5000) return message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Hata :x:')
.setDescription("Ev almaya paran yetmiyor!!"))
 
message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Başarıyla ev aldın!'))
db.set(`ev_${user.id}`, 'Var')
db.add(`puan_${user.id}`, -5000)
    }

	  if(args[0] == "telefon") {
	  let endlesscode1 = db.get(`puan_${user.id}`)
  
  if(endlesscode1 < 500) return message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Hata :x:')
.setDescription("Telefon almaya paran yetmiyor!!"))
 
message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Başarıyla telefon aldın!'))
db.set(`telefon_${user.id}`, 'Var')
db.add(`puan_${user.id}`, -500)
    }

	  if(args[0] == "televizyon") {
	  let endlesscode1 = db.get(`puan_${user.id}`)
  
  if(endlesscode1 < 450) return message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Hata :x:')
.setDescription("Televizyon almaya paran yetmiyor!!"))
 
message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Başarıyla televizyon aldın!'))
db.set(`televizyon_${user.id}`, 'Var')
db.add(`puan_${user.id}`, -450)
    }
}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}


exports.help = {
name:'satın-al'	
}