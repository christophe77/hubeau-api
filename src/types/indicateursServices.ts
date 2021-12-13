import { Format, TypeService } from './communs';

export type CommunesParams = {
  annee?: number;
  code_commune?: string[];
  code_departement?: string[];
  detail_service?: boolean;
  fields?: string;
  format?: Format;
  page?: number;
  size?: number;
  type_service?: TypeService;
};
