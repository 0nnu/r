const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'الدعم',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = 'https://discord.gg/srz';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle('Support server')
            .setDescription(`Click [here](${supportServerLink}) to join our server.\nWe will be there for you anytime ❤️`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/1136249134882492506/1244312786918445199/4bd3271a276fe6293ceaf5e748a40dd6.jpg?ex=665a96d6&is=66594556&hm=1a22d32198cfaa5b40c92db2cb574c9bec1f4050263016230dbfc68cd66def4b&`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};


/*

   MADE BY LUX!!    

   FOR EMOJIS EITHER YOU CAN EDIT OR JOIN OUR DISCORD SERVER 
   SO WE ADD BOT TO OUR SERVER SO YOU GET ANIMATED EMOJIS.

   DISCORD SERVER : https://discord.gg/B2zTsRv5
   YOUTUBE : https://www.youtube.com/@ylb_u

   FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/B2zTsRv5 ]
*/
