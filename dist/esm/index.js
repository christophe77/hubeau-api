import etatPiscicole from './commandes/etatPiscicole';
import indicateursServices from './commandes/indicateursServices';
import piezometrie from './commandes/piezometrie';
import qualiteNappes from './commandes/qualiteNappes';
import qualiteRivieres from './commandes/qualiteRivieres';
import temperature from './commandes/temperature';
import hydrometrie from './commandes/hydrometrie';
var hubeauApi = {
    etatPiscicole: etatPiscicole,
    indicateursServices: indicateursServices,
    piezometrie: piezometrie,
    qualiteNappes: qualiteNappes,
    qualiteRivieres: qualiteRivieres,
    temperature: temperature,
    hydrometrie: hydrometrie,
};
module.exports = hubeauApi;
