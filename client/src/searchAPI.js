const axios = require('axios');

function searchAPI(query, id, city, latlong, date) {
  // query = 'Slipknot';
  // id='vvG1HZ9eRdWfSI';
  return axios.get(`http://app.ticketmaster.com/discovery/v2/events.json`, {
    params: {
      id: `${id}`,
      keyword: `${query}`,
      city: `${city}`,
      latlong: latlong,
      startDateTime: date,
      apikey: `uU4bGZoCxNX23kSvkZrbdAz63lVHbMhp`
    },
    // headers: {
    //   'Access-Control-Allow-Origin' : '*',
    //   'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    // }
  })
}

module.exports.searchAPI = searchAPI;