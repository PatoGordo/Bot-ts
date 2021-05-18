"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client();
client.on('ready', () => {
    console.log('Bot started!');
});
client.on('message', (msg) => {
    if (msg.content === '!ping') {
        msg.reply('pong!');
    }
});
client.login(process.env.TOKEN);
//# sourceMappingURL=index.js.map