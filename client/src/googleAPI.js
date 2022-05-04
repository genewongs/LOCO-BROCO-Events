const axios = require('axios');
const config = require('../../config');

function googleAPI(lat, long) {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}
`, {
    params: {
      key: config.googleKey
    }
  });
}

module.exports.googleAPI = googleAPI;