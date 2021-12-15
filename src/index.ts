import etatPiscicole from './commandes/etatPiscicole';
import indicateursServices from './commandes/indicateursServices';
import piezometrie from './commandes/piezometrie';
import qualiteNappes from './commandes/qualiteNappes';

class HubeauApi {
  etatPiscicole;
  indicateursServices;
  piezometrie;
  qualiteNappes;
  constructor() {
    this.etatPiscicole = etatPiscicole();
    this.indicateursServices = indicateursServices();
    this.piezometrie = piezometrie();
    this.qualiteNappes = qualiteNappes();
  }
}
module.exports = HubeauApi;
