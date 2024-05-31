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
        iconURL: 'https://cdn.discordapp.com/attachments/1136249134882492506/1244312786918445199/4bd3271a276fe6293ceaf5e748a40dd6.jpg?ex=665a96d6&is=66594556&hm=1a22d32198cfaa5b40c92db2cb574c9bec1f4050263016230dbfc68cd66def4b&', 
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
      .setImage(`https://cdn.discordapp.com/attachments/1136249134882492506/1244312786918445199/4bd3271a276fe6293ceaf5e748a40dd6.jpg?ex=665a96d6&is=66594556&hm=1a22d32198cfaa5b40c92db2cb574c9bec1f4050263016230dbfc68cd66def4b&`);

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
