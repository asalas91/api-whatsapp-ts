import express, { Application, json } from 'express'
// import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
import { routes } from './routes'
import { PORT } from './config/config'
// import mongoose from 'mongoose'
import {
  addKeyword,
  createBot,
  createFlow,
  createProvider,
  MemoryDB
} from '@bot-whatsapp/bot'
import { BaileysProvider } from '@bot-whatsapp/provider-baileys'

class Server {
  app: Application

  constructor() {
    this.app = express()
    this.config()
    this.middlewares()
    this.routes()
  }

  config(): void {
    // mongoose.connect(MONGODB_URI)
    // this.app.set('port', PORT)
    // void connectDB()
    // Middlewares
    // this.app.use(morgan('dev'))
    // this.app.use(cors())
    this.app.use(
      express.static(path.resolve('src/public'), {
        extensions: ['html', 'css']
      })
    )
    this.app.use('/assets', express.static('build'))
    // this.app.use(json())
  }

  middlewares(): void {
    // this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use(json())
  }

  routes(): void {
    // console.log('routes')
    this.app.use('/', routes)
  }

  start(): void {
    // console.log('Start ', this.app.get('port'))
    this.app.listen(PORT, () => {
      console.log(
        `[server]: Server is Fire at http://localhost:${Number(PORT)}`
      )

      const flowWelcome = addKeyword('hola').addAnswer(
        'https://55jlqmvv-4200.usw3.devtunnels.ms/1'
      )

      const main = async () => {
        const provider = createProvider(BaileysProvider)

        // provider.initHttpServer(PORT)

        // provider.http?.server.post(
        //   'send-message',
        //   handleCtx(async (bot, req, res) => {
        //     const { message, phone, mediaUrl } = req.body
        //     console.log('message', message, mediaUrl)

        //     await bot.sendMessage(phone, message, {
        //       // media: mediaUrl
        //     })
        //     res.end('Mensaje desde el server')
        //   })
        // )

        await createBot({
          flow: createFlow([flowWelcome]),
          database: new MemoryDB(),
          provider
        })
      }

      main()
    })
  }
}

const server = new Server()
server.start()
