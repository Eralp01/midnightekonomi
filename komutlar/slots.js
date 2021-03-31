const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = ['🍇', '🍊', '🍐', '🍒', '🍋'];
const db = require('quick.db')
exports.run = function(client, message) {

let user = message.mentions.users.first() || message.author;
	var slot1 = slots[Math.floor(Math.random() * slots.length)];
	var slot2 = slots[Math.floor(Math.random() * slots.length)];
    var slot3 = slots[Math.floor(Math.random() * slots.length)];
    var slot4 = slots[Math.floor(Math.random() * slots.length)];
    var slot5 = slots[Math.floor(Math.random() * slots.length)];
    var slot6 = slots[Math.floor(Math.random() * slots.length)];
    var slot7 = slots[Math.floor(Math.random() * slots.length)];
    var slot8 = slots[Math.floor(Math.random() * slots.length)];
    var slot9 = slots[Math.floor(Math.random() * slots.length)];
	
  	  let endlesscode1 = db.get(`puan_${user.id}`)
  
  if(endlesscode1 < 150) return message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Hata :x:')
.setDescription("Slot oyununu oynamaya puanın yetmiyor!!"))

	if (slot1 === slot2 && slot1 === slot3) {
        message.channel.send(stripIndents`
        **[  :slot_machine: l SLOTS ]**
        ------------------
        ${slot4} : ${slot5} : ${slot6}
        ${slot1} : ${slot2} : ${slot3} **<**
        ${slot7} : ${slot8} : ${slot9}
        ------------------
		 **Kazandın** 
		`); 
db.add(`puan_${user.id}`, 200)
	} else {

		message.channel.send(stripIndents`
		**[  :slot_machine: l SLOTS ]**
        ------------------
        ${slot1} : ${slot2} : ${slot3}
        ${slot4} : ${slot5} : ${slot6} **<**
        ${slot7} : ${slot8} : ${slot9}
        ------------------
		  **Kaybettin** 
		`);	
db.add(`puan_${user.id}`, -150)
	}

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["slot"],
  permLevel: 0
};

exports.help = {
  name: 'slots', 
  description: 'Slots oyunu oynatır',
  usage: 'slots'
};