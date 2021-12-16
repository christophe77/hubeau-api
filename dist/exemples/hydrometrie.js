const HubeauApi = require('..').default;
const hubeauApi = new HubeauApi();

async function obsElab() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrometrie.obsElab(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function obsElabCsv() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrometrie.obsElabCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function observationsTr() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrometrie.observationsTr(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function observationsTrCsv() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrometrie.observationsTrCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function observationsTrXml() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrometrie.observationsTrXml(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function referentielSites() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrometrie.referentielSites(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function referentielSitesCsv() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrometrie.referentielSitesCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function referentielSitesXml() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrometrie.referentielSitesXml(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function referentielStations() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrometrie.referentielStations(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function referentielStationsCsv() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrometrie.referentielStationsCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function referentielStationsXml() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrometrie.referentielStationsXml(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
