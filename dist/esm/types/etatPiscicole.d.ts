import { Format, Mois } from './communs';
export type CodeEspecePoissonParams = {
    code?: string;
    fields?: string[];
    page?: number;
    size?: number;
};
export type LieuxPecheParams = {
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
export type PoissonsParams = {
    code_espece_poisson?: string[];
    annee?: number[];
    code_station?: string[];
    date_debut?: string;
    date_fin?: string;
    fields?: string[];
    format?: Format;
    mois_debut?: Mois;
    mois_fin?: Mois;
    page?: number;
    size?: number;
    srid?: number;
};
