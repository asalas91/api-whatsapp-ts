"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("@bot-whatsapp/bot");
const provider_baileys_1 = require("@bot-whatsapp/provider-baileys");
const flowWelcome = (0, bot_1.addKeyword)('hola').addAnswer('https://55jlqmvv-4200.usw3.devtunnels.ms/1');
const main = async () => {
    const provider = (0, bot_1.createProvider)(provider_baileys_1.BaileysProvider);
    provider.initHttpServer(3002);
    provider.http?.server.post('send-message', (0, provider_baileys_1.handleCtx)(async (bot, req, res) => {
        const { message, phone, mediaUrl } = req.body;
        console.log('message', message, mediaUrl);
        await bot.sendMessage(phone, message, {
        // media: mediaUrl
        });
        res.end('Mensaje desde el server');
    }));
    await (0, bot_1.createBot)({
        flow: (0, bot_1.createFlow)([flowWelcome]),
        database: new bot_1.MemoryDB(),
        provider
    });
};
main();
//# sourceMappingURL=app.js.map