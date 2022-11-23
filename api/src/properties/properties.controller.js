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
    'X-RapidAPI-Key': 'fb9d440a17mshdeb12f5ec33d353p1c958bjsn0ce8f2b9c97f',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};
    const response = await axios.request(options)
    return response.data.hits
  }


module.exports={getProperties};