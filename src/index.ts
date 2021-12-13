import etatPiscicole from './commands/etatPiscicole';
import indicateursServices from './commands/indicateursServices';

class HubeauApi {
  etatPiscicole;
  indicateursServices;
  constructor() {
    this.etatPiscicole = etatPiscicole();
    this.indicateursServices = indicateursServices();
  }
}
module.exports = HubeauApi;
