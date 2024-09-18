"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("@bot-whatsapp/bot");
const provider_baileys_1 = require("@bot-whatsapp/provider-baileys");
const flowWelcome = (0, bot_1.addKeyword)('hola').addAnswer('https://55jlqmvv-4200.usw3.devtunnels.ms/1');
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const provider = (0, bot_1.createProvider)(provider_baileys_1.BaileysProvider);
    provider.initHttpServer(3002);
    (_a = provider.http) === null || _a === void 0 ? void 0 : _a.server.post('send-message', (0, provider_baileys_1.handleCtx)((bot, req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { message, phone, mediaUrl } = req.body;
        console.log('message', message, mediaUrl);
        yield bot.sendMessage(phone, message, {
        // media: mediaUrl
        });
        res.end('Mensaje desde el server');
    })));
    yield (0, bot_1.createBot)({
        flow: (0, bot_1.createFlow)([flowWelcome]),
        database: new bot_1.MemoryDB(),
        provider
    });
});
main();
//# sourceMappingURL=app.js.map