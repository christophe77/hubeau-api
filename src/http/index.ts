import superagent from 'superagent';
import { hostname } from '../constants';
import { HubeauResponse } from '../types/communs';

export async function getRequest(
  entryPoint: string,
  args: string | undefined,
): Promise<HubeauResponse> {
  try {
    const res = await superagent.get(`${hostname}${entryPoint}${args}`);
    return JSON.parse(res.text);
  } catch (err: any) {
    return JSON.parse(err);
  }
}
export async function getRequestCsv(
  entryPoint: string,
  args: string | undefined,
): Promise<string> {
  try {
    const res = await superagent.get(`${hostname}${entryPoint}${args}`);
    return res.text;
  } catch (err: any) {
    return err.toString();
  }
}

export async function getRequestXml(
  entryPoint: string,
  args: string | undefined,
): Promise<string> {
  try {
    const res = await superagent.get(`${hostname}${entryPoint}${args}`);
    return res.text;
  } catch (err: any) {
    return err.toString();
  }
}
