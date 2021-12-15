export default class HubeauApi {
    etatPiscicole: {
        codeEspecePoisson: (params?: import("./types/etatPiscicole").CodeEspecePoissonParams | undefined) => Promise<string>;
        codeEspecePoissonCsv: (params?: import("./types/etatPiscicole").CodeEspecePoissonParams | undefined) => Promise<string>;
        lieuxPeche: (params?: import("./types/etatPiscicole").LieuxPecheParams | undefined) => Promise<string>;
        lieuxPecheCsv: (params?: import("./types/etatPiscicole").LieuxPecheParams | undefined) => Promise<string>;
        poissons: (params?: import("./types/etatPiscicole").PoissonsParams | undefined) => Promise<string>;
        poissonsCsv: (params?: import("./types/etatPiscicole").PoissonsParams | undefined) => Promise<string>;
    };
    indicateursServices: {
        communes: (params?: import("./types/indicateursServices").CommunesParams | undefined) => Promise<string>;
        communesCsv: (params?: import("./types/indicateursServices").CommunesParams | undefined) => Promise<string>;
        indicateurs: (params?: import("./types/indicateursServices").IndicateursParams | undefined) => Promise<string>;
        indicateursCsv: (params?: import("./types/indicateursServices").IndicateursParams | undefined) => Promise<string>;
        services: (params?: import("./types/indicateursServices").ServicesParams | undefined) => Promise<string>;
        servicesCsv: (params?: import("./types/indicateursServices").ServicesParams | undefined) => Promise<string>;
    };
    piezometrie: {
        chroniques: (params?: import("./types/piezometrie").ChroniquesParams | undefined) => Promise<string>;
        chroniquesCsv: (params?: import("./types/piezometrie").ChroniquesParams | undefined) => Promise<string>;
        chroniquesTr: (params?: import("./types/piezometrie").ChroniquesTrParams | undefined) => Promise<string>;
        chroniquesTrCsv: (params?: import("./types/piezometrie").ChroniquesTrParams | undefined) => Promise<string>;
        stations: (params?: import("./types/piezometrie").StationsParams | undefined) => Promise<string>;
        stationsCsv: (params?: import("./types/piezometrie").StationsParams | undefined) => Promise<string>;
    };
    qualiteNappes: {
        analyses: (params?: import("./types/qualiteNappes").AnalysesParams | undefined) => Promise<string>;
        analysesCsv: (params?: import("./types/qualiteNappes").AnalysesParams | undefined) => Promise<string>;
        stations: (params?: import("./types/qualiteNappes").StationsParams | undefined) => Promise<string>;
        stationsCsv: (params?: import("./types/qualiteNappes").StationsParams | undefined) => Promise<string>;
    };
    qualiteRivieres: {
        analysePc: (params?: import("./types/qualiteRivieres").AnalysePcParams | undefined) => Promise<string>;
        analysePcCsv: (params?: import("./types/qualiteRivieres").AnalysePcParams | undefined) => Promise<string>;
        stationPc: (params?: import("./types/qualiteRivieres").StationPcParams | undefined) => Promise<string>;
        stationPcCsv: (params?: import("./types/qualiteRivieres").StationPcParams | undefined) => Promise<string>;
        operationPc: (params?: import("./types/qualiteRivieres").OperationPcParams | undefined) => Promise<string>;
        operationPcCsv: (params?: import("./types/qualiteRivieres").OperationPcParams | undefined) => Promise<string>;
        conditionEnvironnementalePc: (params?: import("./types/qualiteRivieres").ConditionEnvironnementaleParams | undefined) => Promise<string>;
        conditionEnvironnementalePcCsv: (params?: import("./types/qualiteRivieres").ConditionEnvironnementaleParams | undefined) => Promise<string>;
    };
    temperature: {
        chronique: (params?: import("./types/temperature").ChroniqueParams | undefined) => Promise<string>;
        chroniqueCsv: (params?: import("./types/temperature").ChroniqueParams | undefined) => Promise<string>;
        station: (params?: import("./types/temperature").StationParams | undefined) => Promise<string>;
        stationCsv: (params?: import("./types/temperature").StationParams | undefined) => Promise<string>;
    };
    hydrometrie: {
        obsElab: (params?: import("./types/hydrometrie").ObsElabParams | undefined) => Promise<string>;
        obsElabCsv: (params?: import("./types/hydrometrie").ObsElabParams | undefined) => Promise<string>;
        observationsTr: (params?: import("./types/hydrometrie").ObservationsTrParams | undefined) => Promise<string>;
        observationsTrCsv: (params?: import("./types/hydrometrie").ObservationsTrParams | undefined) => Promise<string>;
        observationsTrXml: (params?: import("./types/hydrometrie").ObservationsTrParams | undefined) => Promise<string>;
        referentielSites: (params?: import("./types/hydrometrie").ReferentielSitesParams | undefined) => Promise<string>;
        referentielSitesCsv: (params?: import("./types/hydrometrie").ReferentielSitesParams | undefined) => Promise<string>;
        referentielSitesXml: (params?: import("./types/hydrometrie").ReferentielSitesParams | undefined) => Promise<string>;
        referentielStations: (params?: import("./types/hydrometrie").ReferentielStationsParams | undefined) => Promise<string>;
        referentielStationsCsv: (params?: import("./types/hydrometrie").ReferentielStationsParams | undefined) => Promise<string>;
        referentielStationsXml: (params?: import("./types/hydrometrie").ReferentielStationsParams | undefined) => Promise<string>;
    };
    constructor();
}
