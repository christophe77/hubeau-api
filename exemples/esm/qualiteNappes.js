import { qualiteNappes } from '../../dist/esm';

async function analyses() {
  const params = {
    nom_region: ['bretagne'],
    date_min_maj: '2021-05-30',
    size: 30,
  };
  try {
    const results = await qualiteNappes.analyses(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function analysesCsv() {
  const params = {
    nom_region: ['bretagne'],
    date_min_maj: '2021-05-30',
    size: 30,
  };
  try {
    const results = await qualiteNappes.analysesCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function stations() {
  const params = {
    nom_region: ['bretagne'],
    date_min_maj: '2021-05-30',
    size: 30,
  };
  try {
    const results = await qualiteNappes.stations(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function stationsCsv() {
  const params = {
    nom_region: ['bretagne'],
    date_min_maj: '2021-05-30',
    size: 30,
  };
  try {
    const results = await qualiteNappes.stationsCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
