const axios = require('axios');

function googleAPI(lat, long) {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}
`, {
    params: {
      key: `AIzaSyB548bQreGu_FBVjHUMA5Gxdy6yEhi1A1Y`
    }
  });
}

module.exports.googleAPI = googleAPI;