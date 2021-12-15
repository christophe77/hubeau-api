"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const etatPiscicole_1 = __importDefault(require("./commandes/etatPiscicole"));
const indicateursServices_1 = __importDefault(require("./commandes/indicateursServices"));
const piezometrie_1 = __importDefault(require("./commandes/piezometrie"));
const qualiteNappes_1 = __importDefault(require("./commandes/qualiteNappes"));
class HubeauApi {
    constructor() {
        this.etatPiscicole = (0, etatPiscicole_1.default)();
        this.indicateursServices = (0, indicateursServices_1.default)();
        this.piezometrie = (0, piezometrie_1.default)();
        this.qualiteNappes = (0, qualiteNappes_1.default)();
    }
}
module.exports = HubeauApi;
