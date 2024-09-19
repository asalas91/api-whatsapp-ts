"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.BASE_URL = exports.PORT = exports.VERSION = void 0;
// import mongoose from 'mongoose'
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.VERSION = 1.1;
// export const prisma = new PrismaClient()
// if (process.env.NODE_ENV === 'production' ){
_a = process.env, exports.PORT = _a.PORT, exports.BASE_URL = _a.BASE_URL;
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
const connectDB = async () => {
    try {
        console.log('With out conecction DB');
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=config.js.map