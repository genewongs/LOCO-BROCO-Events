const axios = require('axios');

function searchAPI(query){
  query = 'Slipknot';
  let city = '';
  return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json`, {
    params: {
      keyword: `${query}`,
      city: `${city}`,
      apikey: `uU4bGZoCxNX23kSvkZrbdAz63lVHbMhp`
    }
  })
}

module.exports.searchAPI = searchAPI;