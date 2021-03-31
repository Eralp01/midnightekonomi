const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client,message,args) => {
let user = message.mentions.users.first() || message.author;
let puan = db.get(`puan_${user.id}`)
let araba = db.get(`araba_${user.id}`)
let ev = db.get(`ev_${user.id}`)
let telefon = db.get(`telefon_${user.id}`)
let televizyon = db.get(`televizyon_${user.id}`)
let silah = db.get(`silah_${user.id}`)


const ENDLESSCODECİK = new Discord.RichEmbed()
.setColor('BLUE')
.setThumbnail(`${message.author.avatarURL}`)
.setTitle(`${user.tag} adlı kişinin profili:`)
.setDescription(`\n\nPuanı : ${puan || 'Puanı yok'} \n\nAraba : ${araba || 'Yok'} \n\nEv : ${ev || 'Yok'} \n\nSilah : ${silah || 'Yok'} \n\nTelefon : ${telefon || 'Yok'} \n\nTelevizyon : ${televizyon || 'Yok'}`)
message.channel.send(ENDLESSCODECİK)
}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}


exports.help = {
name: 'profilim'	
} 