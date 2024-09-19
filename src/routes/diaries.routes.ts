import { Router } from 'express'
import { handleCtx } from '@bot-whatsapp/provider-baileys'
// import * as diaryServices from '../services/diary'

const diaryRouter = Router()

// diaryRouter.get('/', (_req, res) => {
//   res.send(diaryServices.getEntriesWithOutSensitiveInfo())
// })

// diaryRouter.get('/:id', (req, res) => {
//   const diary = diaryServices.findById(+req.params.id)
//   res.send(diary?.weather)
// })

diaryRouter.post(
  '/send-message',
  handleCtx(async (bot, req, res) => {
    const { message, phone, mediaUrl } = req.body
    console.log('message', message, mediaUrl)

    await bot.sendMessage(phone, message, {
      // media: mediaUrl
    })
    res.end('Mensaje desde el server')
  })
)

export default diaryRouter
