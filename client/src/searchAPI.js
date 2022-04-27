const axios = require('axios');

function searchAPI(query){
  query = 'Slipknot';
  id='vvG1HZ9eRdWfSI';
  let city = '';
  return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json`, {
    params: {
      id: `${id}`,
      keyword: `${query}`,
      city: `${city}`,
      apikey: `uU4bGZoCxNX23kSvkZrbdAz63lVHbMhp`
    }
  })
}

module.exports.searchAPI = searchAPI;