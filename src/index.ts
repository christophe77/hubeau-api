import etatPiscicole from './commandes/etatPiscicole';
import indicateursServices from './commandes/indicateursServices';
import piezometrie from './commandes/piezometrie';
import qualiteNappes from './commandes/qualiteNappes';
import qualiteRivieres from './commandes/qualiteRivieres';
import temperature from './commandes/temperature';
import hydrometrie from './commandes/hydrometrie';

export default class HubeauApi {
  etatPiscicole;
  indicateursServices;
  piezometrie;
  qualiteNappes;
  qualiteRivieres;
  temperature;
  hydrometrie;
  constructor() {
    this.etatPiscicole = etatPiscicole();
    this.indicateursServices = indicateursServices();
    this.piezometrie = piezometrie();
    this.qualiteNappes = qualiteNappes();
    this.qualiteRivieres = qualiteRivieres();
    this.temperature = temperature();
    this.hydrometrie = hydrometrie();
  }
}
