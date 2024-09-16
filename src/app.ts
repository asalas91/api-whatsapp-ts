import {
  addKeyword,
  createBot,
  createFlow,
  createProvider,
  MemoryDB
} from '@bot-whatsapp/bot'
import { BaileysProvider, handleCtx } from '@bot-whatsapp/provider-baileys'

const flowWelcome = addKeyword('hola').addAnswer('Bienvenido!!')

const main = async () => {
  const provider = createProvider(BaileysProvider)

  provider.initHttpServer(3002)

  provider.http?.server.post(
    'send-message',
    handleCtx(async (bot, req, res) => {
      const { message, mediaUrl } = req.body
      await bot.sendMessage('9981815054', message, {
        media: mediaUrl
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
