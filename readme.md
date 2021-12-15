# HUBEAU API wrapper

HUBEAU API wrapper JS.<br/>
Infos sur l'API HUBEAU : https://hubeau.eaufrance.fr/page/apis<br/>
Travail en cours...<br/>

## Installation

    yarn add hubeau-api

ou <br />

    npm install --save hubeau-api

ensuite importation de la dépendance : <br />

    import HubeauApi from 'hubeau-api';
    const hubMedApi = new HubeauApi();

ou <br />

    const HubeauApi = require('hubeau-api');
    const hubMedApi = new HubeauApi();

## Commandes disponibles

### Etat piscicole

_Code espèce poisson_<br/>
_Lieux pêche_<br/>
_Poissons_<br/>

Exemples hubeau-api-wrapper : [./dist/exemples/etatPiscicole.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/dist/exemples/etatPiscicole.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-poisson<br/>

### Indicateurs services

_communes_<br/>
_indicateurs_<br/>
_services_<br/>

Exemples hubeau-api-wrapper : [./dist/exemples/indicateursServices.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/dist/exemples/indicateursServices.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-indicateurs-services<br/>

### Piezométrie - Niveaux nappes

_chroniques_<br/>
_chroniques temps réel_<br/>
_stations_<br/>

Exemples hubeau-api-wrapper : [./dist/exemples/piezometrie.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/dist/exemples/piezometrie.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-piezometrie<br/>

### Qualité nappes

_analyses_<br/>
_stations_<br/>

Exemples hubeau-api-wrapper : [./dist/exemples/qualiteNappes.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/dist/exemples/qualiteNappes.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-qualite-nappes<br/>

### Qualité cours d'eau

_analyse physicochimique_<br/>
_station physicochimique_<br/>
_operation physicochimique_<br/>
_conditions environnementales physicochimique_<br/>

Exemples hubeau-api-wrapper : [./dist/exemples/qualiteRivieres.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/dist/exemples/qualiteRivieres.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-qualite-cours-deau<br/>

### Température des cours d'eau en continu

_chronique_<br/>
_station_<br/>

Exemples hubeau-api-wrapper : [./dist/exemples/temperature.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/dist/exemples/temperature.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-temperature-continu<br/>
