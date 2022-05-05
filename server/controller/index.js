const db = require('../database');
const axios = require('axios');
const config = require('../../config');

module.exports = {
  get: function (req,res) {
    db.getEvents()
      .then(result => res.send(result))
      .catch(err => res.sendStatus(500));
  },

  searchAPI: function (req, res) {
    const batman = {...req.query, apikey: config.apikey}
    return axios.get(`http://app.ticketmaster.com/discovery/v2/events.json`, {
      params: batman
    })
    .then(data => res.send(data.data))
    .catch(err => console.log(err))
  },

  post: function (req, res) {
    db.postEvent(req.body)
      .then(results => res.send(results))
      .catch(err => console.log(err));
  },

  delete: function(req, res) {
    db.deleteEvent(req.body)
      .then(results => res.send(results))
      .catch(err => console.log(err));
  }
}