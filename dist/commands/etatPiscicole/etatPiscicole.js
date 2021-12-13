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
const constants_1 = require("../../constants");
const http_1 = __importDefault(require("../../http"));
const utils_1 = require("../../utils/utils");
const etatPiscicole = () => {
    return {
        codeEspecePoisson: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.etatPiscicole, `/code_espece_poisson?${formattedParams}`);
            return datas;
        }),
        codeEspecePoissonCsv: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.etatPiscicole, `/code_espece_poisson.csv?${formattedParams}`);
            return datas;
        }),
        lieuxPeche: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.etatPiscicole, `/lieux_peche?${formattedParams}`);
            return datas;
        }),
        lieuxPecheCsv: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.etatPiscicole, `/lieux_peche.csv?${formattedParams}`);
            return datas;
        }),
        poissons: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.etatPiscicole, `/poissons?${formattedParams}`);
            return datas;
        }),
        poissonsCsv: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.etatPiscicole, `/poissons.csv?${formattedParams}`);
            return datas;
        }),
    };
};
exports.default = etatPiscicole;
