import { HubeauResponse } from '../types/communs';
export declare function getRequest(entryPoint: string, args: string | undefined): Promise<HubeauResponse>;
export declare function getRequestCsv(entryPoint: string, args: string | undefined): Promise<string>;
export declare function getRequestXml(entryPoint: string, args: string | undefined): Promise<string>;
