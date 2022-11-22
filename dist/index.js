"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogType = exports.Logger = void 0;
const LogType_1 = require("./enums/LogType");
Object.defineProperty(exports, "LogType", { enumerable: true, get: function () { return LogType_1.LogType; } });
const Logger_1 = __importDefault(require("./utils/Logger"));
exports.Logger = Logger_1.default;
