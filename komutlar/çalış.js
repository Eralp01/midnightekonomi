const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms')
exports.run = (client,message,args) => {


const ENDLESSCODECİK = args.slice(0).join(' ')
if(!ENDLESSCODECİK) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Hata :x:')
.setDescription('Lütfen bir iş belirt!! \n**İşler :** `madenci`,`demirci`,`tamirci`'))


 if(args[0] == "madenci") {
  let timeout = 300000;
	let user = message.mentions.users.first() || message.author;

  let süre =  db.fetch(`süre_${user.id}`);

  if (süre !== null && timeout - (Date.now() - süre) > 0) {
    let time = ms(timeout - (Date.now() - süre));
  
    let timeEmbed = new Discord.RichEmbed()
     .setColor("BLUE")
.setTitle('Hata :x:')
    .setDescription(`Zaten çalışmışsın! tekrar çalışmak için 10 dk bekle!`);
    message.channel.send(timeEmbed)
  } else {

let amount = Math.floor(Math.random() * 100) + 1;

const ENDLESSCODE = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Başarıyla çalıştın :white_check_mark:')
.setDescription(`Başarıyla madenci olarak çalıştın ve ${amount} puan kazandın!`)
message.channel.send(ENDLESSCODE)
db.add(`puan_${user.id}`, amount)
     db.set(`süre_${user.id}`, Date.now())

 }
 }

 if(args[0] == "demirci") {
  let timeout = 300000;
	let user = message.mentions.users.first() || message.author;

  let süre =  db.fetch(`süre_${user.id}`);

  if (süre !== null && timeout - (Date.now() - süre) > 0) {
    let time = ms(timeout - (Date.now() - süre));
  
    let timeEmbed = new Discord.RichEmbed()
     .setColor("BLUE")
.setTitle('Hata :x:')
    .setDescription(`Zaten çalışmışsın! tekrar çalışmak için 10 dk bekle!`);
    message.channel.send(timeEmbed)
  } else {
let amount = Math.floor(Math.random() * 100) + 1;
const ENDLESSCODE = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Başarıyla çalıştın :white_check_mark:')
.setDescription(`Başarıyla demirci olarak çalıştın ve ${amount} puan kazandın!`)
message.channel.send(ENDLESSCODE)
db.add(`puan_${user.id}`, amount)
     db.set(`süre_${user.id}`, Date.now())

 }
 }
 if(args[0] == "tamirci") {
  let timeout = 300000;
	let user = message.mentions.users.first() || message.author;

  let süre =  db.fetch(`süre_${user.id}`);

  if (süre !== null && timeout - (Date.now() - süre) > 0) {
    let time = ms(timeout - (Date.now() - süre));
  
    let timeEmbed = new Discord.RichEmbed()
     .setColor("BLUE")
.setTitle('Hata :x:')
    .setDescription(`Zaten çalışmışsın! tekrar çalışmak için 10 dk bekle!`);
    message.channel.send(timeEmbed)
  } else {

let amount = Math.floor(Math.random() * 100) + 1;
const ENDLESSCODE = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Başarıyla çalıştın :white_check_mark:')
.setDescription(`Başarıyla tamirci olarak çalıştın ve ${amount} puan kazandın!`)
message.channel.send(ENDLESSCODE)
  
db.add(`puan_${user.id}`, amount)
     db.set(`süre_${user.id}`, Date.now())
}
 }
  }
 


exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}


exports.help = {
name: 'çalış'	
}