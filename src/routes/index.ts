import { Router } from 'express'
import diaryRouter from './diaries.routes'
// import { VERSION } from '../config/config'
// import { VERSION } from '../config/config'

// export { diaryRouter, paymentRouter, oauthRouter, mailRouter }
export const routes = Router()

// routes.use('/api', Number(VERSION))
// routes.use('/api/1.0', multi-tenant)
routes.use('/api', diaryRouter)
