import etatPiscicole from './commandes/etatPiscicole';
import indicateursServices from './commandes/indicateursServices';
import piezometrie from './commandes/piezometrie';
import qualiteNappes from './commandes/qualiteNappes';
import qualiteRivieres from './commandes/qualiteRivieres';
import temperature from './commandes/temperature';

class HubeauApi {
  etatPiscicole;
  indicateursServices;
  piezometrie;
  qualiteNappes;
  qualiteRivieres;
  temperature;
  constructor() {
    this.etatPiscicole = etatPiscicole();
    this.indicateursServices = indicateursServices();
    this.piezometrie = piezometrie();
    this.qualiteNappes = qualiteNappes();
    this.qualiteRivieres = qualiteRivieres();
    this.temperature = temperature();
  }
}
module.exports = HubeauApi;
