const HubeauApi = require('..');
const hubeauApi = new HubeauApi();

async function niveaux_nappes() {
  const params = {
    code_bss: ['07548X0009/F'],
    date_debut_mesure: '2000-05-30',
    date_fin_mesure: '2021-05-30',
    sort: 'asc',
    page: 1,
  };
  try {
    const results = await hubeauApi.piezometrie.niveauxNappes(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function niveaux_nappes_csv() {
  const params = {
    code_bss: ['07548X0009/F'],
    date_debut_mesure: '2000-05-30',
    date_fin_mesure: '2021-05-30',
    sort: 'asc',
    page: 1,
  };
  try {
    const results = await hubeauApi.piezometrie.niveauxNappesCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}