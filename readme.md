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

Documentation api : https://hubeau.eaufrance.fr/page/api-poisson<br/>
Exemples js : https://github.com/christophe77/hubeau-api-wrapper/blob/master/dist/exemples/etatPiscicole.js<br/>

_Code espèce poisson_
_Lieux pêche_
_Poissons_

### Indicateurs services

Documentation api : https://hubeau.eaufrance.fr/page/api-indicateurs-services<br/>
Exemples js : https://github.com/christophe77/hubeau-api-wrapper/blob/master/dist/exemples/indicateursServices.js<br/>

_communes_
