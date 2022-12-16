import { HubeauResponse } from '../types/communs';
import { ObsElabParams, ObservationsTrParams, ReferentielSitesParams, ReferentielStationsParams } from '../types/hydrometrie';
declare const hydrometrie: {
    obsElab: (params?: ObsElabParams) => Promise<HubeauResponse>;
    obsElabCsv: (params?: ObsElabParams) => Promise<string>;
    observationsTr: (params?: ObservationsTrParams) => Promise<HubeauResponse>;
    observationsTrCsv: (params?: ObservationsTrParams) => Promise<string>;
    observationsTrXml: (params?: ObservationsTrParams) => Promise<string>;
    referentielSites: (params?: ReferentielSitesParams) => Promise<HubeauResponse>;
    referentielSitesCsv: (params?: ReferentielSitesParams) => Promise<string>;
    referentielSitesXml: (params?: ReferentielSitesParams) => Promise<string>;
    referentielStations: (params?: ReferentielStationsParams) => Promise<HubeauResponse>;
    referentielStationsCsv: (params?: ReferentielStationsParams) => Promise<string>;
    referentielStationsXml: (params?: ReferentielStationsParams) => Promise<string>;
};
export default hydrometrie;
