const axios = require("axios");

async function getProperties() {
  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      locationExternalIDs: "5002,6020",
      purpose: "for-rent",
      hitsPerPage: "25",
      page: "0",
      lang: "en",
      sort: "city-level-score",
      rentFrequency: "monthly",
      categoryExternalID: "4",
    },
    headers: {
      "X-RapidAPI-Key": "01670b4a34mshd88cb6dfd40dfa5p1073adjsnc0dbe370dfa7",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  return response.data.hits;
}

module.exports = { getProperties };
