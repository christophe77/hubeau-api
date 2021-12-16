import { ObsElabParams, ObservationsTrParams, ReferentielSitesParams, ReferentielStationsParams } from '../types/hydrometrie';
declare const hydrometrie: {
    obsElab: (params?: ObsElabParams | undefined) => Promise<string>;
    obsElabCsv: (params?: ObsElabParams | undefined) => Promise<string>;
    observationsTr: (params?: ObservationsTrParams | undefined) => Promise<string>;
    observationsTrCsv: (params?: ObservationsTrParams | undefined) => Promise<string>;
    observationsTrXml: (params?: ObservationsTrParams | undefined) => Promise<string>;
    referentielSites: (params?: ReferentielSitesParams | undefined) => Promise<string>;
    referentielSitesCsv: (params?: ReferentielSitesParams | undefined) => Promise<string>;
    referentielSitesXml: (params?: ReferentielSitesParams | undefined) => Promise<string>;
    referentielStations: (params?: ReferentielStationsParams | undefined) => Promise<string>;
    referentielStationsCsv: (params?: ReferentielStationsParams | undefined) => Promise<string>;
    referentielStationsXml: (params?: ReferentielStationsParams | undefined) => Promise<string>;
};
export default hydrometrie;
