"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
// import morgan from 'morgan'
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const config_1 = require("./config/config");
// import mongoose from 'mongoose'
const bot_1 = require("@bot-whatsapp/bot");
const provider_baileys_1 = require("@bot-whatsapp/provider-baileys");
class Server {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.middlewares();
        this.routes();
    }
    config() {
        // mongoose.connect(MONGODB_URI)
        // this.app.set('port', PORT)
        // void connectDB()
        // Middlewares
        // this.app.use(morgan('dev'))
        // this.app.use(cors())
        this.app.use(express_1.default.static(path_1.default.resolve('src/public'), {
            extensions: ['html', 'css']
        }));
        this.app.use('/assets', express_1.default.static('build'));
        // this.app.use(json())
    }
    middlewares() {
        // this.app.use(morgan('dev'))
        this.app.use((0, cors_1.default)());
        this.app.use((0, express_1.json)());
    }
    routes() {
        // console.log('routes')
        this.app.use('/', routes_1.routes);
    }
    start() {
        // console.log('Start ', this.app.get('port'))
        this.app.listen(config_1.PORT, () => {
            console.log(`[server]: Server is Fire at http://localhost:${Number(config_1.PORT)}`);
            const flowWelcome = (0, bot_1.addKeyword)('hola').addAnswer('https://55jlqmvv-4200.usw3.devtunnels.ms/1');
            const main = async () => {
                const provider = (0, bot_1.createProvider)(provider_baileys_1.BaileysProvider);
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
                await (0, bot_1.createBot)({
                    flow: (0, bot_1.createFlow)([flowWelcome]),
                    database: new bot_1.MemoryDB(),
                    provider
                });
            };
            main();
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=app.js.map