const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/locobroco');

let eventSchema = mongoose.Schema({
  eventId: {type: String, required: true},
  title: {type: String, required: true},
  date: String,
  img: String,
  price: {type: Number, required: false},
  address: String,
  state: String,
  city: String,
  country: String,
  startDate: String,
  seatmap: String,
  endDate: String,
  url: String,
  longitude: String,
  latitude: String,
  attending: Boolean,
  interested: Boolean,
});

let Event = mongoose.model('Event', eventSchema);

module.exports = {
  getEvents: function() {
    return Event.find();
  },

  postEvent: function(data) {
    return Event.findOneAndUpdate(data, data, {upsert: true, rawResult: true, strict: false})
  },

  deleteEvent: function(event) {
    return Event.findByIdAndDelete(event)
  }

}