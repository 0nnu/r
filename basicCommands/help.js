const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'اغاني',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: '**مرحباً انا هنا للمساعدة!**',
        iconURL: 'https://cdn.discordapp.com/attachments/1136249134882492506/1244312786918445199/4bd3271a276fe6293ceaf5e748a40dd6.jpg?ex=6654a816&is=66535696&hm=07e560f9af8e6f7898b4c8bd5574dc0922ca8444d537bef8b820ff9d869f47c0&&', 
        url: 'https://discord.gg/B2zTsRv5'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [لوكس](https://www.youtube.com/@SxbKick)**\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        {
          name: '▶️  اوامر عامة',
          value: '`الأفتار`, `اونر`, `الدعم`, `دعوة `, `معلومات`',
          inline: true,
        },
        // Music commands category
        {
          name: '▶️  أوامر الأغاني',
          value: '`شغل`, `وقف`, `السجل`,`الصوت`,`انهاء`,`كمل`,`247`',
          inline: true,
        },
        //fun category
        {
          name: '▶️  الأوامر المضحكة',
          value: ' `ascii`, `joke`, `meme`, `roll`',
          inline: true,
        },
        //image category
        {
          name: '▶️  أوامر الصور',
          value: '`cat`, `dog`',
          inline: true,
        },
        //anime category
        {
          name: '▶️  أوامر الأنمي',
          value: '`<prefix>animecommands for more info`',
          inline: true,
        },
        // Utility commands category
        {
          name: '▶️  اوامر خارجة عن السيطرة (::',
          value: '`طرد`, `باند`, `سيرفر`,`معلومات`, `حذف`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1170652474563117138/1224660177039396876/MULTI_MUSIC_v1.5.png?ex=661e4cab&is=660bd7ab&hm=f7a542462fabaf9c1530ece5aa72597cff3ac032876bba46df5ddba7e122ea99&`);

    const button1 = new ButtonBuilder()
      .setLabel('قناة البثوث')
      .setURL('https://www.youtube.com/@ylb_u')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('سيرفر المطور بالدسكورد')
      .setURL('https://discord.gg/srz')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('قناة المقاطع')
      .setURL('https://www.youtube.com/@ylb__u')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
