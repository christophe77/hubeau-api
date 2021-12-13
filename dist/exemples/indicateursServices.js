const HubeauApi = require('..');
const hubeauApi = new HubeauApi();

async function communes() {
  const params = {
    annee: 2019,
    page: 1,
    type_service: 'AEP',
  };
  try {
    const results = await hubeauApi.indicateursServices.communes(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function communesCsv() {
  const params = {
    annee: 2019,
    page: 1,
    type_service: 'AEP',
  };
  try {
    const results = await hubeauApi.indicateursServices.communesCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
