"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const http_1 = __importDefault(require("../http"));
const utils_1 = require("../utils/utils");
const temperature = () => {
    return {
        chronique: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.temperature, `/chronique?${formattedParams}`);
            return datas;
        }),
        chroniqueCsv: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.temperature, `/chronique.csv?${formattedParams}`);
            return datas;
        }),
        station: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.temperature, `/station?${formattedParams}`);
            return datas;
        }),
        stationCsv: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.temperature, `/station.csv?${formattedParams}`);
            return datas;
        }),
    };
};
exports.default = temperature;
