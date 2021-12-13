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

documentation api : https://hubeau.eaufrance.fr/page/api-poisson<br/>

_Code espèce poisson_

    async function code_espece_poisson() {
        const params={
            code: "ABL",
            fields: "",
            page: 1,
            size: 1,
        }
        try {
            const results = await hubeauApi.etatPiscicole.codeEspecePoisson(params);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

    async function code_espece_poisson_csv() {
        const params={
            code: "ABL",
            fields: "",
            page: 1,
            size: 1,
        }
        try {
            const results = await hubeauApi.etatPiscicole.codeEspecePoissonCsv(params);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

_Lieux pêche_

    async function lieux_peche() {
        const params = {
            code_espece_poisson: 'ABL',
            bbox: [1.6194, 47.7965, 2.191, 47.9988],
        };
        try {
            const results = await hubeauApi.etatPiscicole.lieuxPeche(params);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }
    async function lieux_peche_csv() {
        const params = {
            code_espece_poisson: 'ABL',
            bbox: [1.6194, 47.7965, 2.191, 47.9988],
        };
        try {
            const results = await hubeauApi.etatPiscicole.lieuxPecheCsv(params);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

_Poissons_

    async function poissons() {
        const params = {
            code_espece_poisson: ['ABL', 'ECR', 'ABI'],
            page: 1,
            fields: ['code_station', 'localisation'],
        };
        try {
            const results = await hubeauApi.etatPiscicole.poissons(params);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

    async function poissons_csv() {
        const params = {
            code_espece_poisson: ['ABL', 'ECR', 'ABI'],
            page: 1,
            fields: ['code_station', 'localisation'],
        };
        try {
            const results = await hubeauApi.etatPiscicole.poissonsCsv(params);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }
