"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogType_1 = require("./enums/LogType");
const Logger_1 = __importDefault(require("./utils/Logger"));
exports.default = { Logger: Logger_1.default, LogType: LogType_1.LogType };
