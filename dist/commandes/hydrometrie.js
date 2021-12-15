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
const hydrometrie = () => {
    return {
        obsElab: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.hydrometrie, `/obs_elab?${formattedParams}`);
            return datas;
        }),
        obsElabCsv: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.hydrometrie, `/obs_elab.csv?${formattedParams}`);
            return datas;
        }),
        observationsTr: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.hydrometrie, `/observations_tr?${formattedParams}`);
            return datas;
        }),
        observationsTrCsv: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.hydrometrie, `/observations_tr.csv?${formattedParams}`);
            return datas;
        }),
        observationsTrXml: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.hydrometrie, `/observations_tr.xml?${formattedParams}`);
            return datas;
        }),
        referentielSites: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.hydrometrie, `/referentiel/sites?${formattedParams}`);
            return datas;
        }),
        referentielSitesCsv: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.hydrometrie, `/referentiel/sites.csv?${formattedParams}`);
            return datas;
        }),
        referentielSitesXml: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.hydrometrie, `/referentiel/sites.xml?${formattedParams}`);
            return datas;
        }),
        referentielStations: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.hydrometrie, `/referentiel/sites?${formattedParams}`);
            return datas;
        }),
        referentielStationsCsv: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.hydrometrie, `/referentiel/sites.csv?${formattedParams}`);
            return datas;
        }),
        referentielStationsXml: (params) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedParams = params ? (0, utils_1.objectToStringParameters)(params) : '';
            const datas = yield (0, http_1.default)(constants_1.entryPoints.hydrometrie, `/referentiel/sites.xml?${formattedParams}`);
            return datas;
        }),
    };
};
exports.default = hydrometrie;
