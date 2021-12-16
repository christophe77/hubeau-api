import { HubeauResponse } from '../types/communs';
import { ObsElabParams, ObservationsTrParams, ReferentielSitesParams, ReferentielStationsParams } from '../types/hydrometrie';
declare const hydrometrie: {
    obsElab: (params?: ObsElabParams | undefined) => Promise<HubeauResponse>;
    obsElabCsv: (params?: ObsElabParams | undefined) => Promise<HubeauResponse>;
    observationsTr: (params?: ObservationsTrParams | undefined) => Promise<HubeauResponse>;
    observationsTrCsv: (params?: ObservationsTrParams | undefined) => Promise<HubeauResponse>;
    observationsTrXml: (params?: ObservationsTrParams | undefined) => Promise<HubeauResponse>;
    referentielSites: (params?: ReferentielSitesParams | undefined) => Promise<HubeauResponse>;
    referentielSitesCsv: (params?: ReferentielSitesParams | undefined) => Promise<HubeauResponse>;
    referentielSitesXml: (params?: ReferentielSitesParams | undefined) => Promise<HubeauResponse>;
    referentielStations: (params?: ReferentielStationsParams | undefined) => Promise<HubeauResponse>;
    referentielStationsCsv: (params?: ReferentielStationsParams | undefined) => Promise<HubeauResponse>;
    referentielStationsXml: (params?: ReferentielStationsParams | undefined) => Promise<HubeauResponse>;
};
export default hydrometrie;
