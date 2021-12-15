import { Format, Sort } from './communs';
export declare type ObsElabParams = {
    bbox?: number[];
    code_entite?: string[];
    cursor?: string;
    date_debut_obs_elab?: string;
    date_fin_obs_elab?: string;
    distance?: number;
    fields?: string;
    grandeur_hydro_elab?: 'QmJ' | 'QmM';
    latitude?: number;
    longitude?: number;
    resultat_min?: number;
    resultat_max?: number;
    size?: number;
};
export declare type ObservationsTrParams = {
    bbox?: number[];
    code_entite?: string[];
    cursor?: string;
    date_debut_obs_elab?: string;
    date_fin_obs_elab?: string;
    distance?: number;
    fields?: string;
    grandeur_hydro_elab?: 'QmJ' | 'QmM';
    latitude?: number;
    longitude?: number;
    size?: number;
    sort?: Sort;
    timestep?: number;
};
export declare type ReferentielSitesParams = {
    bbox?: number[];
    code_commune_site?: string[];
    code_cours_eau?: string[];
    code_departement?: string[];
    code_region?: string[];
    code_site?: string[];
    code_troncon_hydro_site?: string[];
    code_zone_hydro_site?: string[];
    distance?: number;
    libelle_cours_eau?: string[];
    libelle_site?: string[];
    fields?: string;
    format?: Format;
    latitude?: number;
    longitude?: number;
    page?: number;
    size?: number;
};
export declare type ReferentielStationsParams = {
    bbox?: number[];
    code_commune_station?: string[];
    code_sandre_reseau_station?: string[];
    code_cours_eau?: string[];
    code_departement?: string[];
    code_region?: string[];
    code_site?: string[];
    code_station?: string[];
    distance?: number;
    date_fermeture_station?: string;
    date_ouverture_station?: string;
    en_service?: boolean;
    fields?: string;
    format?: Format;
    latitude?: number;
    libelle_cours_eau?: string[];
    libelle_site?: string[];
    libelle_station?: string[];
    longitude?: number;
    page?: number;
    size?: number;
};