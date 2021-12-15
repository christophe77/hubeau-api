import etatPiscicole from './commandes/etatPiscicole';
import indicateursServices from './commandes/indicateursServices';
import piezometrie from './commandes/piezometrie';

class HubeauApi {
  etatPiscicole;
  indicateursServices;
  piezometrie;
  constructor() {
    this.etatPiscicole = etatPiscicole();
    this.indicateursServices = indicateursServices();
    this.piezometrie = piezometrie()
  }
}
module.exports = HubeauApi;
