const playModule = require('./play.js');
const { VoiceConnectionStatus } = require('@discordjs/voice');
module.exports = {
  name: 'كمل',
  description: 'Resume the paused music playback',
  execute: (message, args) => {
    const currentConnection = playModule.getCurrentConnection();
    if (currentConnection && currentConnection.state.status === VoiceConnectionStatus.Ready) {
      playModule.resume();
    } else {
      message.reply('❌ يبو البوت مو قاعد يشغل اغاني عشان يكمل بعقلك انت؟.');
    }
  },
};
