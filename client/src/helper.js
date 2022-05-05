const axios = require('axios');

module.exports = {
  attendEvent: function (event){
    axios.post('/events', {
      eventId: event.id,
      title: event.name,
      date: event.dates.start.localDate || '',
      eventTime: event.dates.start.localTime || '',
      img: event.images[3].url ||  event.images[1].url,
      price: event.priceRanges?.[0].min,
      address: event._embedded.venues?.[0].address.line1 || '',
      state: event._embedded.venues?.[0]?.state?.name || '',
      city: event._embedded.venues?.[0].city.name || '',
      country: event._embedded.venues?.[0].country.name || '',
      presaleStartDate: event.sales.public.startDateTime || '',
      presaleEndDate: event.sales.public.endDateTime || '',
      url: event.url || '',
      seatmap: event.seatmap?.staticUrl || '',
      longitude: event._embedded.venues?.[0].location.longitude || '',
      latitude: event._embedded.venues?.[0].location.latitude || '',
      attending: true
    })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  },

  attendSwitch: function (event){
    axios.post('/events', {
      eventId: event.eventId,
      title: event.title,
      date: event.date || '',
      eventTime: event.eventTime || '',
      img: event.img,
      price: event.price,
      address: event.address || '',
      state: event.state || '',
      city: event.city || '',
      country: event.country || '',
      presaleStartDate: event.presaleStartDate || '',
      presaleEndDate: event.presaleEndDate || '',
      url: event.url || '',
      seatmap: event.seatmap || '',
      longitude: event.longitude || '',
      latitude: event.latitude || '',
      attending: true,
      interested: false
    })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  },

  handleInterest: function (event) {
    axios.post('/events', {
      eventId: event.id,
      title: event.name,
      date: event.dates.start.localDate || '',
      eventTime: event.dates.start.localTime || '',
      img: event.images[3].url ||  event.images[1].url,
      price: event.priceRanges?.[0].min,
      address: event._embedded.venues?.[0].address.line1 || '',
      state: event._embedded.venues?.[0]?.state?.name || '',
      city: event._embedded.venues?.[0].city.name || '',
      country: event._embedded.venues?.[0].country.name || '',
      presaleStartDate: event.sales.public.startDateTime || '',
      presaleEndDate: event.sales.public.endDateTime || '',
      url: event.url || '',
      seatmap: event.seatmap?.staticUrl || '',
      longitude: event._embedded.venues?.[0].location.longitude || '',
      latitude: event._embedded.venues?.[0].location.latitude || '',
      interested: true
    })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

}