import { Format, Sort } from './communs';

export type ChroniqueParams = {
  code_station?: string[];
  libelle_station?: string[];
  code_commune?: string[];
  libelle_commune?: string[];
  code_departement?: string[];
  libelle_departement?: string[];
  code_region?: string[];
  libelle_region?: string[];
  code_troncon_hydro?: string[];
  code_cours_eau?: string[];
  libelle_cours_eau?: string[];
  code_masse_eau?: string[];
  libelle_masse_eau?: string[];
  code_sous_bassin?: string[];
  libelle_sous_bassin?: string[];
  code_bassin?: string[];
  libelle_bassin?: string[];
  bbox?: number[];
  size?: number;
  field?: string;
  page?: number;
  date_debut_prelevement?: string;
  date_fin_prelevement?: string;
  longitude?: number;
  latitude?: number;
  distance?: number;
  resultat_min?: number;
  resultat_max?: number;
  sort?: Sort;
  exact_count?: boolean;
  format?: Format;
};

export type StationParams = {
  code_station?: string[];
  libelle_station?: string[];
  code_commune?: string[];
  libelle_commune?: string[];
  code_departement?: string[];
  libelle_departement?: string[];
  code_region?: string[];
  libelle_region?: string[];
  code_troncon_hydro?: string[];
  code_cours_eau?: string[];
  libelle_cours_eau?: string[];
  code_masse_eau?: string[];
  libelle_masse_eau?: string[];
  code_sous_bassin?: string[];
  libelle_sous_bassin?: string[];
  code_bassin?: string[];
  libelle_bassin?: string[];
  bbox?: number[];
  size?: number;
  fields?: string;
  page?: number;
  date_debut_prelevement?: string;
  date_fin_prelevement?: string;
  longitude?: number;
  latitude?: number;
  distance?: number;
  sort?: Sort;
  exact_count?: boolean;
  format?: Format;
};
