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

Exemples hubeau-api-wrapper : https://github.com/christophe77/hubeau-api-wrapper/blob/master/dist/exemples/etatPiscicole.js<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-poisson<br/>

_Code espèce poisson_<br/>
_Lieux pêche_<br/>
_Poissons_<br/>

### Indicateurs services

Exemples hubeau-api-wrapper : https://github.com/christophe77/hubeau-api-wrapper/blob/master/dist/exemples/indicateursServices.js<br/>
Documentation officielle : https://hubeau.eaufrance.fr/page/api-indicateurs-services<br/>

_communes_<br/>
