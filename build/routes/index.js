"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const diaries_routes_1 = __importDefault(require("./diaries.routes"));
// import { VERSION } from '../config/config'
// import { VERSION } from '../config/config'
// export { diaryRouter, paymentRouter, oauthRouter, mailRouter }
exports.routes = (0, express_1.Router)();
// routes.use('/api', Number(VERSION))
// routes.use('/api/1.0', multi-tenant)
exports.routes.use('/api', diaries_routes_1.default);
//# sourceMappingURL=index.js.map