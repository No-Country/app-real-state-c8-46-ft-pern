const axios = require("axios");

async function getProperties() {
  const options = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/properties/list',
    params: {
      locationExternalIDs: '5002,6020',
      purpose: 'for-rent',
      hitsPerPage: '25',
      page: '0',
      lang: 'en',
      sort: 'city-level-score',
      rentFrequency: 'monthly',
      categoryExternalID: '4'
    },
    headers: {
      'X-RapidAPI-Key': '8785ec8222msh1ad35cad0ad9176p10dd6djsn661d2317a226',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };
  const response = await axios.request(options);
  return response.data.hits;
}

module.exports = { getProperties };
