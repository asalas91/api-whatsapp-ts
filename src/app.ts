import {
  addKeyword,
  createBot,
  createFlow,
  createProvider,
  MemoryDB
} from '@bot-whatsapp/bot'
import { BaileysProvider, handleCtx } from '@bot-whatsapp/provider-baileys'

const flowWelcome = addKeyword('hola').addAnswer(
  'https://55jlqmvv-4200.usw3.devtunnels.ms/1'
)

const main = async () => {
  const provider = createProvider(BaileysProvider)

  provider.initHttpServer(3002)

  provider.http?.server.post(
    'send-message',
    handleCtx(async (bot, req, res) => {
      const { message, phone, mediaUrl } = req.body
      console.log('message', message, mediaUrl)

      await bot.sendMessage(phone, message, {
        // media: mediaUrl
      })
      res.end('Mensaje desde el server')
    })
  )

  await createBot({
    flow: createFlow([flowWelcome]),
    database: new MemoryDB(),
    provider
  })
}

main()
