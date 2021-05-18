import { Client, Message } from 'discord.js';
const client = new Client()

client.on('ready', () => {
  console.log('Bot started!')
})

client.on('message', (msg: Message) => {
  if(msg.content === '!ping') {
    msg.reply('pong!')
  }
})

client.login(process.env.TOKEN)