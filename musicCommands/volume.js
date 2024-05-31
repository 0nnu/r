
const { EmbedBuilder } = require('discord.js');
const { getPlayer } = require('./play');

module.exports = {
  name: 'الصوت',
  description: 'Adjust the volume of the bot',
  execute: async (message, args) => {
    const volume = parseFloat(args[0]);

    if (isNaN(volume) || volume < 0 || volume > 100) {
      return message.reply('❌ يرحم اهلك حط مستوى صوت صالح بين 0 و100.');
    }
    const player = getPlayer();

    if (!player) {
      return message.reply('❌ لا يتم تشغيل أي موسيقى حاليًا.');
    }
    const resource = player.state.resource;

    if (!resource) {
      return message.reply('❌ لم يتم العثور على أي مصدر صوتي.');
    }
    resource.volume.setVolume(volume / 100);

    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
     .setAuthor({
          name: 'تحكم الصوت!',
          iconURL: 'https://cdn.discordapp.com/attachments/1175488636033175602/1175488721546645624/volume.png?ex=656b6a2e&is=6558f52e&hm=8215d2f88ab073db1f3b6438c28fd73315ad7e581bb54000dbb06fca387cecf7&',
          url: 'https://discord.gg/srz'
        })
      .setDescription(`**volume engaged to ${volume}%**`);

    message.reply({ embeds: [embed] });
  },
};
