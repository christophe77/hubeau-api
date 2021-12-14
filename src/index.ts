import etatPiscicole from './commandes/etatPiscicole';
import indicateursServices from './commandes/indicateursServices';

class HubeauApi {
  etatPiscicole;
  indicateursServices;
  constructor() {
    this.etatPiscicole = etatPiscicole();
    this.indicateursServices = indicateursServices();
  }
}
module.exports = HubeauApi;
