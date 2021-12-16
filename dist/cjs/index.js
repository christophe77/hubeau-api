"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var etatPiscicole_1 = __importDefault(require("./commandes/etatPiscicole"));
var indicateursServices_1 = __importDefault(require("./commandes/indicateursServices"));
var piezometrie_1 = __importDefault(require("./commandes/piezometrie"));
var qualiteNappes_1 = __importDefault(require("./commandes/qualiteNappes"));
var qualiteRivieres_1 = __importDefault(require("./commandes/qualiteRivieres"));
var temperature_1 = __importDefault(require("./commandes/temperature"));
var hydrometrie_1 = __importDefault(require("./commandes/hydrometrie"));
var hubeauApi = {
    etatPiscicole: etatPiscicole_1.default,
    indicateursServices: indicateursServices_1.default,
    piezometrie: piezometrie_1.default,
    qualiteNappes: qualiteNappes_1.default,
    qualiteRivieres: qualiteRivieres_1.default,
    temperature: temperature_1.default,
    hydrometrie: hydrometrie_1.default,
};
module.exports = hubeauApi;
