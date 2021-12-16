# HUBEAU API wrapper

HUBEAU API wrapper JS.<br/>

Module compatible avec les applications NodeJS et les applications web.<br />
Infos sur l'API HUBEAU : https://hubeau.eaufrance.fr/page/apis<br/>

Travail en cours...<br/>

## Installation

    yarn add hubeau-api

ou <br />

    npm install --save hubeau-api

ensuite importation de la dépendance : <br />

ESM :<br />

    import { hydrometrie, etatPiscicole , ... } from "hubeau-api";

CommonJs : <br />

    const hubeauApi = require('hubeau-api');

## Commandes disponibles

### Etat piscicole

_Code espèce poisson_<br/>
_Lieux pêche_<br/>
_Poissons_<br/>

Exemples hubeau-api-wrapper : [./exemples/etatPiscicole.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/etatPiscicole.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-poisson<br/>

### Indicateurs services

_communes_<br/>
_indicateurs_<br/>
_services_<br/>

Exemples hubeau-api-wrapper : [./exemples/indicateursServices.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/indicateursServices.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-indicateurs-services<br/>

### Piezométrie - Niveaux nappes

_chroniques_<br/>
_chroniques temps réel_<br/>
_stations_<br/>

Exemples hubeau-api-wrapper : [./exemples/piezometrie.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/piezometrie.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-piezometrie<br/>

### Qualité nappes

_analyses_<br/>
_stations_<br/>

Exemples hubeau-api-wrapper : [./exemples/qualiteNappes.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/qualiteNappes.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-qualite-nappes<br/>

### Qualité cours d'eau

_analyse physicochimique_<br/>
_station physicochimique_<br/>
_operation physicochimique_<br/>
_conditions environnementales physicochimique_<br/>

Exemples hubeau-api-wrapper : [./exemples/qualiteRivieres.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/qualiteRivieres.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-qualite-cours-deau<br/>

### Température des cours d'eau en continu

_chronique_<br/>
_station_<br/>

Exemples hubeau-api-wrapper : [./exemples/temperature.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/temperature.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-temperature-continu<br/>

### Hydrométrie

_observations_<br/>
_observations élaborées_<br/>
_référentiel sites_<br/>
_référentiel stations_<br/>

Exemples hubeau-api-wrapper : [./exemples/hydrometrie.js](https://github.com/christophe77/hubeau-api-wrapper/blob/master/exemples/hydrometrie.js)<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-hydrometrie<br/>
