import superagent from 'superagent';
import { hostname } from '../constants';

async function getRequest(
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

export default getRequest;
