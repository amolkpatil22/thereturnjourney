"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const logger = (req, res, next) => {
    fs_1.default.appendFileSync('logger.txt', `TimeStamp: ${new Date()} HTTPMethod: ${req.method} URL: ${req.url}\n`);
    next();
};
exports.default = logger;
