// import mongoose from 'mongoose'
import { config } from 'dotenv'
config()

export const VERSION = 1.1

// export const prisma = new PrismaClient()

// if (process.env.NODE_ENV === 'production' ){
export const { PORT, BASE_URL } = process.env
// } else {

// }
// console.log(
//   'Config',
//   MYSQL_HOST,
//   MYSQL_ROOT_USER,
//   MYSQL_ROOT_PASSWORD,
//   MYSQL_DOCKER_PORT
// )

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const connectDB = async () => {
  try {
    console.log('With out conecction DB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
