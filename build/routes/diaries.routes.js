"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const provider_baileys_1 = require("@bot-whatsapp/provider-baileys");
// import * as diaryServices from '../services/diary'
const diaryRouter = (0, express_1.Router)();
// diaryRouter.get('/', (_req, res) => {
//   res.send(diaryServices.getEntriesWithOutSensitiveInfo())
// })
// diaryRouter.get('/:id', (req, res) => {
//   const diary = diaryServices.findById(+req.params.id)
//   res.send(diary?.weather)
// })
diaryRouter.post('/send-message', (0, provider_baileys_1.handleCtx)(async (bot, req, res) => {
    const { message, phone, mediaUrl } = req.body;
    console.log('message', message, mediaUrl);
    await bot.sendMessage(phone, message, {
    // media: mediaUrl
    });
    res.end('Mensaje desde el server');
}));
exports.default = diaryRouter;
//# sourceMappingURL=diaries.routes.js.map