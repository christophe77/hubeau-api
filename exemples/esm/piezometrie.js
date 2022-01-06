import { piezometrie } from '../../dist/esm';

async function chroniques() {
  const params = {
    code_bss: ['07548X0009/F'],
    date_debut_mesure: '2000-05-30',
    date_fin_mesure: '2021-05-30',
    sort: 'asc',
    page: 1,
  };
  try {
    const results = await piezometrie.chroniques(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function chroniques_csv() {
  const params = {
    code_bss: ['07548X0009/F'],
    date_debut_mesure: '2000-05-30',
    date_fin_mesure: '2021-05-30',
    sort: 'asc',
    page: 1,
  };
  try {
    const results = await piezometrie.chroniques(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function chroniquesTr() {
  const params = {
    date_debut_mesure: '2000-05-30',
    date_fin_mesure: '2021-05-30',
    sort: 'asc',
    page: 1,
  };
  try {
    const results = await piezometrie.chroniquesTr(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function chroniquesTrCsv() {
  const params = {
    date_debut_mesure: '2000-05-30',
    date_fin_mesure: '2021-05-30',
    sort: 'asc',
    page: 1,
  };
  try {
    const results = await piezometrie.chroniquesTrCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function stations() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    date_recherche: '2020-12-25',
    nb_mesures_piezo_min: 2,
  };
  try {
    const results = await piezometrie.stations(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function stationsCsv() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    date_recherche: '2020-12-25',
    nb_mesures_piezo_min: 2,
  };
  try {
    const results = await piezometrie.stationsCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
