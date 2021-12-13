declare type Mois = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
declare type Format = 'json' | 'geojson';
export declare type CodeEspecePoissonParams = {
    code?: string;
    fields?: string;
    page?: number;
    size?: number;
};
export declare type LieuxPecheParams = {
    code_espece_poisson: string[];
    bbox?: number[];
    code_commune?: string;
    code_departement?: string;
    code_sous_secteur_hydrographique?: string;
    format?: Format;
    mois_debut?: Mois;
    mois_fin?: Mois;
    page?: number;
    size?: number;
    srid?: number;
};
export declare type PoissonsParams = {
    code_espece_poisson?: string[];
    annee?: number[];
    code_station?: string[];
    date_debut?: string;
    date_fin?: string;
    fields?: string;
    format?: Format;
    mois_debut?: Mois;
    mois_fin?: Mois;
    page?: number;
    size?: number;
    srid?: number;
};
export {};
