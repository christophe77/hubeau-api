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
const qualiteRivieres = () => {
    return {
        analysePc: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.qualiteRivieres, `/analyse_pc?${formattedParams}`);
            return datas;
        }),
        analysePcCsv: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.qualiteRivieres, `/analyse_pc.csv?${formattedParams}`);
            return datas;
        }),
        stationPc: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.qualiteRivieres, `/station_pc?${formattedParams}`);
            return datas;
        }),
        stationPcCsv: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.qualiteRivieres, `/station_pc.csv?${formattedParams}`);
            return datas;
        }),
        operationPc: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.qualiteRivieres, `/operation_pc?${formattedParams}`);
            return datas;
        }),
        operationPcCsv: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.qualiteRivieres, `/operation_pc.csv?${formattedParams}`);
            return datas;
        }),
        conditionEnvironnementalePc: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.qualiteRivieres, `/condition_environnementale_pc?${formattedParams}`);
            return datas;
        }),
        conditionEnvironnementalePcCsv: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.qualiteRivieres, `/condition_environnementale_pc.csv?${formattedParams}`);
            return datas;
        }),
    };
};
exports.default = qualiteRivieres;
